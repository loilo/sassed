<script lang="ts" setup>
const shareStore = useShareStore()
const storableStateStore = useStorableStateStore()

const logoUrl = useAbsoluteUrl('logo.svg')

const themeToggle = useThemeToggle()

function share() {
  storableStateStore.encode().then(hash => {
    const url = new URL(window.location.href)
    url.hash = hash!
    shareStore.url = url.toString()
  })
  shareStore.show = true
}
</script>

<template>
  <div
    data-actions
    class="relative z-20 grid h-full w-full grid-cols-3 items-stretch justify-center gap-3 overflow-auto bg-slate-100 p-2 shadow-md dark:bg-slate-800 md:flex md:flex-col md:gap-1"
  >
    <img
      :src="logoUrl"
      alt="The sassed logo: a white 's' and a pink 'e' on a dark grey keyboard key"
      class="mx-auto hidden h-16 w-16 md:block"
    />
    <IconButton
      class="md:mt-auto"
      @click="share"
      highlight
      label="Share"
      icon="share"
      size="h-5 sm:h-6 w-auto"
      :disabled="storableStateStore.inputCode.length === 0"
    />
    <IconButton
      @click="themeToggle.toggle()"
      highlight
      :label="
        themeToggle.auto
          ? 'System'
          : themeToggle.theme === 'dark'
          ? 'Dark Mode'
          : 'Light Mode'
      "
      :icon="
        themeToggle.auto
          ? 'screen'
          : themeToggle.theme === 'dark'
          ? 'moon'
          : 'sun'
      "
    />
    <IconButton
      highlight
      link="/about"
      label="About"
      icon="info"
      size="h-5 sm:h-6 w-auto"
    />
  </div>
</template>

<style lang="scss" scoped>
[data-actions] {
  --sb-track-color: theme('colors.slate.200');
  --sb-thumb-color: theme('colors.slate.300');
  --sb-size: 6px;

  @at-root :root.dark & {
    --sb-track-color: theme('colors.slate.900');
    --sb-thumb-color: theme('colors.pink.800');
  }

  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 6px;
  }
}
</style>
