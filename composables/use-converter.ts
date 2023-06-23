// Handle conversion in a worker

import type {
  WorkerMessage,
  ConversionWorkerResponse,
  ConversionResult,
} from '~/util/conversion-worker/conversion-utils'

import type { ToRefs } from 'vue'

export function useConverter(input: Ref<string>): ToRefs<ConversionResult> {
  if (import.meta.env.SSR) {
    return {
      success: computed(() => true),
      result: computed(() => ''),
      notices: computed(() => []),
      error: computed(() => undefined),
    }
  }

  const worker = useConversionWorkerStore().get()

  function convert(data: string) {
    return new Promise<ConversionResult>(resolve => {
      const id = crypto.randomUUID()

      const stop = useEventListener(
        worker,
        'message',
        (event: MessageEvent<ConversionWorkerResponse>) => {
          if (event.data?.id !== id) return

          stop()
          resolve(event.data.payload)
        },
      )

      worker.postMessage({
        type: 'convert',
        id,
        payload: data,
      } satisfies WorkerMessage)
    })
  }

  const result = asyncComputed(() => convert(input.value), {
    success: true,
    result: '',
    notices: [],
    error: undefined,
  })

  return {
    success: computed(() => result.value.success),
    result: computed(() => result.value.result),
    notices: computed(() => result.value.notices),
    error: computed(() => result.value.error),
  }
}
