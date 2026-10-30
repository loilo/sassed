export const useConversionWorkerStore = defineStore('conversion-worker', () => {
  const worker = new Worker(
    new URL('../utils/conversion-worker/conversion-worker', import.meta.url),
    {
      type: 'module',
    },
  )

  return { get: () => worker }
})
