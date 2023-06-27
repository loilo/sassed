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

  /**
   * Error locations are (apparently) not provided programmatically by the Sass compiler,
   * so we have to parse the error message code frame to get the offset.
   */
  getOffsetFromErrorMessage(
    errorMessage: string,
  ): [start: number, end: number] {
    // There can be secondary code frames (e.g. with function definitions, when a parameter was omitted)
    // Those have to be cut off to find the correct line numbers for the main code frame.

    // Split by external function declaration, e.g.:
    //   ╷
    // 2 │     color: math.div(
    //   │ ┌──────────^
    // 3 │ │     5,
    // 4 │ │     );
    //   │ └─────^ invocation
    //   ╵
    //   ┌──> sass:math
    // 1 │   @function div($number1, $number2) {
    //   │             ━━━━━━━━━━━━━━━━━━━━━━━ declaration
    //   ╵
    errorMessage = errorMessage.split(/^\s+┌/m)[0]

    // Split by in-snippet function declaration, e.g.:
    //   ╷
    // 2 │     color: test(
    //   │ ┌──────────^
    // 3 │ │     5,
    // 4 │ │     );
    //   │ └─────^ invocation
    //   ╵
    //   ╷
    // 20│   @function test($x, $y) {
    //   │             ━━━━━━━━━━━━ declaration
    errorMessage = errorMessage.split(/^\s+╵\s*╷/m)[0]

    // Find first and last line number in the code frame
    const lineNumberMatches = [...errorMessage.matchAll(/^(\d+) *│/gm)]
    const startLine = Number(lineNumberMatches[0][1])
    const endLine = Number(lineNumberMatches.at(-1)?.[1] ?? startLine)

    let startColumn: number, endColumn: number

    // Single line error - pattern:
    //   ╷
    // 2 │   order: 5 * null;
    //   │          ^^^^^^^^
    //   ╵
    if (startLine === endLine) {
      const columnMatch = errorMessage.match(/^\s+│ (\s*)(\^+)/m)
      if (!columnMatch) return [0, 0]

      startColumn = columnMatch[1].length
      endColumn = startColumn + columnMatch[2].length
    } else {
      const columnMatches = [...errorMessage.matchAll(/^\s+│ \s*(\^+)/gm)]

      if (columnMatches.length === 2) {
        // Multi-line error - cannot give reproducable pattern, not sure which error reproduced this.

        // Remove 3 characters for the code frame offset
        startColumn = columnMatches[0][1].length - 3
        endColumn = columnMatches[1][1].length - 3
      } else {
        // Multi-line error - alternative pattern (start of error bracket
        // can also be formatted like end and vice versa):
        //   ╷
        // 4 │ ┌   @include m {
        // 5 │ │     color: red;
        // 6 │ │   } color: blue;
        //   │ └───^
        //   ╵
        const columnMatches = [
          ...errorMessage.matchAll(/^(\s*\d+\s*│\s+[┌└] |\s+│ [┌└]─(─*\^+))/gm),
        ]

        if (columnMatches.length === 2) {
          startColumn =
            typeof columnMatches[0][2] === 'string'
              ? columnMatches[0][2].length - 1
              : 0
          endColumn =
            typeof columnMatches[1][2] === 'string'
              ? columnMatches[1][2].length
              : Infinity
        } else {
          startColumn = 0
          endColumn = 0
        }
      }
    }

    return [
      this.getOffsetForLine(startLine) + startColumn,
      Number.isFinite(endColumn)
        ? this.getOffsetForLine(endLine) + endColumn
        : this.getOffsetForLine(endLine + 1) - 1,
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
