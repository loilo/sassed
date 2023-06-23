export const useConversionWorkerStore = defineStore('conversion-worker', () => {
  const worker = new Worker(
    new URL('../util/conversion-worker/conversion-worker', import.meta.url),
    {
      type: 'module',
    },
  )

  return { get: () => worker }
})
