/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing : {
        header: '50px',
        footer: '56px'
      },
      boxShadow: {
        dropdown: '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)'
      },
      animation: {
        'pulse-effect': 'pulse 400ms',
      },
      keyframes: {
        pulse: {
          '0%': {
            transform: 'scaleX(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scaleX(1.1)',
            opacity: '.2',
          },
        },
      },
    }
  },
  plugins: [],
}