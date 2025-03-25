/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coastal': {
          sand: '#F5E6D3',
          water: '#2A9D8F',
          sky: '#264653',
        },
      },
    },
  },
  plugins: [],
};