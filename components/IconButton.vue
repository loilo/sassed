<script lang="ts" setup>
withDefaults(
  defineProps<{
    icon?: string
    label: string
    highlight?: boolean
    disabled?: boolean
    size?: string
  }>(),
  {
    highlight: false,
    disabled: false,
  },
)
</script>

<template>
  <ActionTrigger
    class="group flex flex-col items-stretch rounded-sm px-1 py-1 text-center text-xs/none focus:outline-none focus-visible:outline-2 focus-visible:outline-pink not-disabled:hover:bg-pink-100 dark:focus-visible:outline-pink-400 dark:not-disabled:hover:bg-slate-700 sm:px-2 sm:py-2 sm:text-icon/[1.15] md:py-3"
    :class="
      disabled
        ? 'text-slate-400 dark:text-slate-700'
        : highlight
        ? 'text-slate-600 dark:text-slate-300'
        : 'text-slate-600 dark:text-slate-500'
    "
    :disabled="disabled"
  >
    <div
      class="flex flex-col items-center gap-2 group-not-disabled:group-active:scale-[0.96]"
    >
      <Icon
        v-if="icon"
        :name="icon"
        :class="[
          typeof size === 'string' ? size : 'h-5 w-auto sm:h-6',
          disabled
            ? 'bg-slate-300 dark:bg-slate-700'
            : highlight
            ? 'bg-pink-400 dark:bg-pink-400'
            : 'bg-slate-400 dark:bg-slate-500',
        ]"
      />
      {{ label }}
    </div>
  </ActionTrigger>
</template>
