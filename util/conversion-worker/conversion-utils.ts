export type WorkerMessage = {
  type: 'convert'
  id: string
  payload: string
}

export type ConversionResult = {
  success: boolean
  result: string | undefined
  notices: Array<{
    type: 'debug' | 'warning'
    message: string
    offset: [start: number, end: number]
  }>
  error:
    | {
        message: string
        offset: [start: number, end: number]
      }
    | undefined
}

export type ConversionWorkerResponse = {
  type: 'converted'
  payload: ConversionResult
  id: string
}

export function ensureRecord(
  message: unknown,
): asserts message is Record<string, unknown> {
  if (typeof message !== 'object' || message === null) {
    throw new Error('Invalid message')
  }
}

export function validateMessage(
  message: unknown,
): asserts message is WorkerMessage {
  ensureRecord(message)

  if (typeof message.id !== 'string') {
    throw new Error('Invalid message id')
  }

  if (message.type !== 'convert') {
    throw new Error('Invalid message type')
  }

  if (typeof message.payload !== 'string') {
    throw new Error('Invalid message payload')
  }
}
