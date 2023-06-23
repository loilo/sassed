<script lang="ts" setup>
withDefaults(
  defineProps<{
    theme?: 'text' | 'fancy'
  }>(),
  {
    theme: 'text',
  },
)
</script>

<template>
  <ActionTrigger
    :class="{
      'inline-flex justify-center rounded bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow [text-shadow:0_0.125em_0.25em_rgba(0,0,0,0.15)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink disabled:bg-slate-100 disabled:bg-none disabled:text-slate-300 disabled:[text-shadow:none] not-disabled:hover:bg-pink-400 not-disabled:active:translate-y-px not-disabled:active:scale-[0.98] not-disabled:active:bg-pink-600 not-disabled:active:text-pink-100 dark:bg-pink-400 dark:text-pink-50 dark:focus-visible:outline-pink-400 dark:disabled:bg-slate-400 dark:disabled:text-slate-300 dark:not-disabled:hover:bg-pink-300 dark:not-disabled:hover:text-white dark:not-disabled:active:bg-pink-500 dark:not-disabled:active:text-pink-100 md:px-5 md:py-2.5':
        theme === 'fancy',
      'inline-flex text-sm text-pink-900 underline decoration-pink-400 underline-offset-2 disabled:text-slate-300 disabled:decoration-slate-100 not-disabled:hover:text-pink-700 not-disabled:active:text-pink-800 dark:text-pink-200 dark:decoration-pink-400 dark:disabled:text-slate-500 dark:disabled:decoration-slate-600 dark:not-disabled:hover:text-pink-100 dark:not-disabled:active:text-pink-400':
        theme === 'text',
    }"
    v-bind="$attrs"
    ><slot
  /></ActionTrigger>
</template>
