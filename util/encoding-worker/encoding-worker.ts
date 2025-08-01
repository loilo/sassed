// Handle the actual LZ encoding/decoding
import { encode, decode } from './encoding-tools'
import type {
  DecodingWorkerResponse,
  EncodingWorkerResponse,
} from './encoding-utils'
import { validateMessage } from './encoding-utils'

addEventListener('message', event => {
  const data = event.data
  validateMessage(data)

  switch (data.type) {
    case 'encode':
      postMessage({
        type: 'encoded',
        payload: encode(data.payload),
        id: data.id,
      } satisfies EncodingWorkerResponse)
      break

    case 'decode':
      postMessage({
        type: 'decoded',
        payload: decode(data.payload),
        id: data.id,
      } satisfies DecodingWorkerResponse)
      break
  }
})
