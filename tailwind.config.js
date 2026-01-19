module.exports = {
  content: ["./src/**/*.{html,njk,js}"],
  safelist: [
    // Ensure color utilities for our palettes are preserved by the JIT/purge
    { pattern: /(bg|text|border)-(taupe|dusty-olive|khaki-beige|bone|dusty-taupe|olive-wood|alice-blue|black-palette)-(50|100|200|300|400|500|600|700|800|900|950)/, variants: ['hover', 'focus', 'sm', 'md', 'lg'] },
    // single-name fallbacks (e.g., bg-taupe)
    { pattern: /(bg|text|border)-(taupe|reseda|khaki|coyote|aliceblue)/, variants: ['hover','focus'] }
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        lexendTera: ["Lexend Tera", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        // Keep existing named colors for compatibility
        reseda: "#776e45",
        coyote: "#776654",
        khaki: "#b3ac9c",
        aliceblue: "#f2f8fc",

        // Taupe palette (includes DEFAULT so bg-taupe works)
        taupe: {
          DEFAULT: '#4a4235',
          50: '#f4f3f0',
          100: '#eae7e1',
          200: '#d5cec3',
          300: '#c0b6a5',
          400: '#aa9d88',
          500: '#95856a',
          600: '#776a55',
          700: '#5a503f',
          800: '#3c352a',
          900: '#1e1b15',
          950: '#15130f'
        },

        'dusty-olive': {
          50: '#f6f4ef',
          100: '#eceadf',
          200: '#dad5be',
          300: '#c7c09e',
          400: '#b5aa7d',
          500: '#a2955d',
          600: '#82774a',
          700: '#615a38',
          800: '#413c25',
          900: '#201e13',
          950: '#17150d'
        },

        // 'black-palette' (named to avoid clobbering default 'black')
        'black-palette': {
          50: '#fff2e5',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff8000',
          600: '#cc6600',
          700: '#994c00',
          800: '#663300',
          900: '#331a00',
          950: '#241200'
        },

        'khaki-beige': {
          50: '#f4f3f1',
          100: '#e9e7e2',
          200: '#d3cfc5',
          300: '#bcb6a9',
          400: '#a69e8c',
          500: '#90866f',
          600: '#736b59',
          700: '#565043',
          800: '#3a362c',
          900: '#1d1b16',
          950: '#141310'
        },

        bone: {
          50: '#f5f3ef',
          100: '#ebe8e0',
          200: '#d8d1c0',
          300: '#c4baa1',
          400: '#b0a282',
          500: '#9d8b62',
          600: '#7d6f4f',
          700: '#5e543b',
          800: '#3f3827',
          900: '#1f1c14',
          950: '#16130e'
        },

        'dusty-taupe': {
          50: '#f5f3f0',
          100: '#eae6e1',
          200: '#d6cdc2',
          300: '#c1b4a4',
          400: '#ac9c86',
          500: '#988367',
          600: '#796953',
          700: '#5b4e3e',
          800: '#3d3429',
          900: '#1e1a15',
          950: '#15120e'
        },

        'olive-wood': {
          50: '#f4f2f0',
          100: '#eae6e1',
          200: '#d5ccc3',
          300: '#c0b3a5',
          400: '#aa9a88',
          500: '#95806a',
          600: '#776755',
          700: '#5a4d3f',
          800: '#3c332a',
          900: '#1e1a15',
          950: '#15120f'
        },

        'alice-blue': {
          50: '#eaf4fa',
          100: '#d5e9f6',
          200: '#acd2ec',
          300: '#82bce3',
          400: '#59a6d9',
          500: '#2f90d0',
          600: '#2673a6',
          700: '#1c567d',
          800: '#133953',
          900: '#091d2a',
          950: '#07141d'
        }
      },
    },
  },
  plugins: [],
};
