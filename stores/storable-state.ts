export type State = {
  code: string
}

export const useStorableStateStore = defineStore('storableState', () => {
  const inputCode = ref('')

  const storableState = computed<State>(() => {
    return {
      code: inputCode.value,
    }
  })
  const throttledStorableState = refThrottled(storableState, 1000)

  // Manage reading from/writing to session storage
  const sessionDocument = useSessionStorage<State | null>('document', null, {
    serializer: {
      read: (v: any) => {
        try {
          return JSON.parse(v)
        } catch {
          return null
        }
      },
      write: (v: any) => JSON.stringify(v),
    },
  })

  // Write changes to session storage
  watch(throttledStorableState, value => {
    if (typeof window.requestIdleCallback === 'function') {
      requestIdleCallback(
        () => {
          sessionDocument.value = value
        },
        { timeout: 400 },
      )
    } else {
      sessionDocument.value = value
    }
  })

  const urlState = useUrlState()
  onMounted(() => {
    urlState.read().then(value => {
      if (value == null) {
        if (sessionDocument.value === null) return
        value = toRaw(sessionDocument.value)
      }

      if (typeof value.code === 'string') {
        inputCode.value = value.code
      }

      const url = new URL(window.location.href)
      url.hash = ''
      history.replaceState(history.state, '', url.href)
    })
  })

  return {
    inputCode,
    encode() {
      return urlState.encode(storableState.value)
    },
  }
})
