/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2EEE5',        // warm ivory background
        'paper-deep': '#E5DFD2', // placeholder / image wells
        ink: '#000000',
        charcoal: '#22221F',
        mute: '#7C7A73',
        rule: '#CFC9BB',
        // ONE accent. Swap this hex for a colour sampled from the SY logo.
        accent: '#6E2B33',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        meta: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.16em' }],
        'display-xl': ['clamp(3.25rem, 9.5vw, 10rem)', { lineHeight: '0.92', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.75rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.2vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        numeral: ['clamp(7rem, 24vw, 22rem)', { lineHeight: '0.78', letterSpacing: '-0.04em' }],
      },
      transitionTimingFunction: { calm: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
    },
  },
  plugins: [],
}
