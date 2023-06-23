import { compileString } from 'sass'
import { ConversionResult } from './conversion-utils'

class OffsetHelper {
  #code: string
  #lines: string[] | undefined

  get lines() {
    return this.#lines || (this.#lines = this.#code.split('\n'))
  }

  constructor(code: string) {
    this.#code = code
  }

  getOffsetForLine(lineNumber: number) {
    if (lineNumber <= 1) return 0

    return this.lines
      .slice(0, lineNumber - 1)
      .map(line => line.length + 1)
      .reduce((a, b) => a + b, 0)
  }

  getOffsetFromStack(stack: string): number {
    const match = stack
      .trim()
      .split('\n')
      .pop()!
      .match(/(\d+):(\d+)/)
    if (!match) return 0

    const lineNumber = Number(match[1])
    const columnNumber = Number(match[2])

    return this.getOffsetForLine(lineNumber) + (columnNumber - 1)
  }

  getOffsetFromErrorMessage(
    errorMessage: string,
  ): [start: number, end: number] {
    errorMessage = errorMessage.split('┌')[0]

    const lineNumberMatches = [...errorMessage.matchAll(/^(\d+) │/gm)]
    const startLine = Number(lineNumberMatches[0][1])
    const endLine = Number(lineNumberMatches.at(-1)?.[1] ?? startLine)

    let startColumn: number, endColumn: number, diff: number
    if (startLine === endLine) {
      const columnMatch = errorMessage.match(/^\s+│ (\s*)(\^+)/m)
      if (!columnMatch) return [0, 0]

      startColumn = columnMatch[1].length
      endColumn = startColumn + columnMatch[2].length
    } else {
      console.log('MSG', errorMessage)
      const columnMatches = [...errorMessage.matchAll(/^\s+│ \s*(\^+)/gm)]

      // Remove 3 characters for the code frame offset
      startColumn = columnMatches[0][1].length - 3
      endColumn = columnMatches[1][1].length - 3
    }

    return [
      this.getOffsetForLine(startLine) + startColumn,
      this.getOffsetForLine(endLine) + endColumn,
    ]
  }
}

export function convert(scssCode: string): ConversionResult {
  const offsetHelper = new OffsetHelper(scssCode)

  const notices: ConversionResult['notices'] = []

  try {
    const result = compileString(scssCode, {
      logger: {
        warn(message, options) {
          console.debug('SASS WARN:', message, options)

          let offset: [number, number] = [0, 0]
          if (options.span) {
            offset = [options.span.start.offset, options.span.end.offset]
          } else if (options.stack) {
            const offsetStartEnd = offsetHelper.getOffsetFromStack(
              options.stack,
            )
            offset = [offsetStartEnd, offsetStartEnd]
          }

          notices.push({
            type: 'warning',
            message,
            offset,
          })
        },
        debug(message, options) {
          console.debug('SASS DEBUG:', message, options)

          notices.push({
            type: 'debug',
            message,
            offset: [options.span.start.offset, options.span.end.offset],
          })
        },
      },
    }).css

    return {
      success: true,
      result,
      notices,
      error: undefined,
    }
  } catch (error) {
    console.debug('SASS ERROR: %o', error)

    const errorMessage = String((error as any)?.message ?? error)
    const errorMessageWithoutFrame = errorMessage.split(/^\s+╷/m)[0].trim()
    const offset = offsetHelper.getOffsetFromErrorMessage(errorMessage)

    return {
      success: true,
      result: undefined,
      notices,
      error: {
        message: errorMessageWithoutFrame,
        offset,
      },
    }
  }
}
