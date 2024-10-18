import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import typographyPlugin from '@tailwindcss/typography'

export default {
  content: ['./{pages,components}/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, Avenir, 'Avenir Next LT Pro', Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
        mono: "'Fragment Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
      },
      fontSize: {
        icon: '0.8rem',
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'inner-xs': 'inset 0 1px 1px 0 rgb(0 0 0 / 0.1)',
      },
      colors: {
        pink: {
          DEFAULT: '#f767bb',
          '50': '#fdf2f9',
          '100': '#fde6f4',
          '200': '#fcceeb',
          '300': '#fba6d9',
          '400': '#f767bb',
          '500': '#f044a3',
          '600': '#e02281',
          '700': '#c21466',
          '800': '#a11355',
          '900': '#861549',
          '950': '#520529',
        },
        slate: {
          '50': '#fafbfc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1F2A3B',
          '900': '#19212F',
          '950': '#141821',
        },
        blue: {
          DEFAULT: '#2fb1f0',
          '50': '#f1f9fe',
          '100': '#e1f1fd',
          '200': '#bce4fb',
          '300': '#82cff7',
          '400': '#2fb1f0',
          '500': '#169ee1',
          '600': '#097ec0',
          '700': '#09649b',
          '800': '#0b5681',
          '900': '#0f476b',
          '950': '#0a2e47',
        },
        teal: {
          DEFAULT: '#06a0b5',
          '50': '#ecffff',
          '100': '#cefeff',
          '200': '#a4fbfd',
          '300': '#65f4fb',
          '400': '#20e4f0',
          '500': '#04c8d6',
          '600': '#06a0b5',
          '700': '#0c7f92',
          '800': '#146676',
          '900': '#155464',
          '950': '#073845',
        },
        gold: {
          DEFAULT: '#efc703',
          '50': '#fefee8',
          '100': '#ffffc2',
          '200': '#fffb88',
          '300': '#fff143',
          '400': '#ffe110',
          '500': '#efc703',
          '600': '#cf9c00',
          '700': '#a46f04',
          '800': '#87560c',
          '900': '#734710',
          '950': '#432505',
        },

        orange: {
          DEFAULT: '#f98707',
          '50': '#fff9eb',
          '100': '#ffeec6',
          '200': '#ffdb88',
          '300': '#ffcc66',
          '400': '#ffab20',
          '500': '#f98707',
          '600': '#dd6102',
          '700': '#b74106',
          '800': '#94320c',
          '900': '#7a2a0d',
          '950': '#461302',
        },

        red: {
          DEFAULT: '#ff3333',
          '50': '#fff1f1',
          '100': '#ffdfdf',
          '200': '#ffc5c5',
          '300': '#ff9d9d',
          '400': '#ff6464',
          '500': '#ff3333',
          '600': '#ed1515',
          '700': '#c80d0d',
          '800': '#a50f0f',
          '900': '#881414',
          '950': '#4b0404',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in':
          'fade-in 500ms ease-in-out var(--animation-delay, 0ms) forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('disabled', '&:is(:disabled, [data-disabled])')
      addVariant('group-disabled', '.group:is(:disabled, [data-disabled]) &')
      addVariant(
        'not-disabled',
        '&:where(:not(:disabled):not([data-disabled]))',
      )
      addVariant(
        'group-not-disabled',
        '.group:where(:not(:disabled):not([data-disabled]))&',
      )
    }),
    typographyPlugin,
  ],
} satisfies Config
