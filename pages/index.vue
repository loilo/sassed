<script lang="ts" setup>
import * as darkTheme from '@/assets/theme-dark'
import * as lightTheme from '@/assets/theme-light'
import { sass } from '@codemirror/lang-sass'
import { Diagnostic, lintGutter, linter } from '@codemirror/lint'
import { EditorState } from '@codemirror/state'

const themeToggle = useThemeToggle()
const storableStateStore = useStorableStateStore()
const runtimeConfig = useRuntimeConfig()

const inputFocused = ref(false)
const outputFocused = ref(false)
const throttledInputCode = refThrottled(
  toRef(storableStateStore, 'inputCode'),
  350,
)
const {
  result: outputCode,
  error: conversionError,
  notices: conversionNotices,
} = useConverter(throttledInputCode)

const throttledOutputCode = ref('')
watch(outputCode, outputCodeValue => {
  // Don't override throttled output code if output is not ready or there is an error
  if (typeof outputCodeValue === 'undefined' || conversionError.value != null)
    return

  throttledOutputCode.value = outputCodeValue
})

const sassLinter = linter(() => {
  const diagnostics: Diagnostic[] = []

  if (conversionError.value) {
    diagnostics.push({
      from: conversionError.value.offset[0],
      to: conversionError.value.offset[1],
      severity: 'error',
      message: conversionError.value.message,
      source: 'Sass Compiler Error',
    })
  }

  for (const notice of conversionNotices.value) {
    diagnostics.push({
      from: notice.offset[0],
      to: notice.offset[1],
      severity: notice.type === 'debug' ? 'info' : 'warning',
      message: notice.message,
      source: `Sass ${notice.type === 'debug' ? 'Debug Message' : 'Warning'}`,
    })
  }

  return diagnostics
})

const inputExtensions = [sassLinter, lintGutter()]
const outputExtensions = [EditorState.readOnly.of(true)]

const sassLanguage = sass()

const editorThemeName = computed(() =>
  themeToggle.theme === 'dark' ? darkTheme : lightTheme,
)
</script>

<template>
  <div
    class="flex h-[100dvh] flex-col items-stretch"
    :style="{
      '--sidebar-measure': '6.75rem',
      '--sidebar-width': 'var(--sidebar-measure)',
      '--divider-width': '0.125rem',
    }"
  >
    <ShareDialog />

    <Layout>
      <template #actions>
        <Actions />
      </template>

      <template #left>
        <div class="relative h-full w-full">
          <CornerTag :visible="!inputFocused"
            >SCSS
            <small class="ml-1">{{
              runtimeConfig.public.sassVersion
            }}</small></CornerTag
          >
          <Editor
            :language="sassLanguage"
            v-model="storableStateStore.inputCode"
            @focus="inputFocused = true"
            @blur="inputFocused = false"
            :theme="editorThemeName.theme"
            :highlight-style="editorThemeName.highlightStyle"
            line-numbers
            :extensions="inputExtensions"
          />
        </div>
      </template>

      <template #divider>
        <hr class="h-full w-full border-none bg-slate-100 dark:bg-slate-800" />
      </template>

      <template #right>
        <div
          class="relative h-full w-full"
          :class="{
            'opacity-40': conversionError != null,
          }"
        >
          <CornerTag :visible="!outputFocused">CSS</CornerTag>
          <Editor
            :language="sassLanguage"
            v-model="throttledOutputCode"
            @focus="outputFocused = true"
            @blur="outputFocused = false"
            :theme="editorThemeName.theme"
            :highlight-style="editorThemeName.highlightStyle"
            line-numbers
            :extensions="outputExtensions"
          />
        </div>
      </template>
    </Layout>
  </div>
</template>

<style lang="scss" scoped>
:deep(.cm-report-gutter-error) {
  display: inline-flex;
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
}

:deep(.cm-diagnosticText) {
  @apply font-mono;
}
</style>
