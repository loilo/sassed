export function useThemeToggle() {
  const colorMode = useColorMode()
  const cycle = useColorPreferenceCycleStore()

  function toggle() {
    cycle.next()
    colorMode.preference = cycle.state
  }

  const theme = computed(() => {
    if (colorMode.preference === 'system') {
      return colorMode.value === 'dark' ? 'dark' : 'light'
    } else {
      return colorMode.preference === 'dark' ? 'dark' : 'light'
    }
  })

  return reactive({
    auto: computed(() => colorMode.preference === 'system'),
    theme,
    toggle,
  })
}
