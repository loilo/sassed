// Handle the actual conversion
import { convert } from './conversion-tools'
import type { ConversionWorkerResponse } from './conversion-utils'
import { validateMessage } from './conversion-utils'

addEventListener('message', event => {
  const data = event.data
  validateMessage(data)

  // We need to simulate the availability of the global "process" for sass to work

  const previousProcess = self.process
  // @ts-expect-error
  self.process = undefined
  const result = convert(data.payload)
  self.process = previousProcess

  postMessage({
    type: 'converted',
    payload: result,
    id: data.id,
  } satisfies ConversionWorkerResponse)
})
