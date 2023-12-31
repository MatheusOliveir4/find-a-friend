/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-500': '#F15156',
        'red-700': '#E44449',
        'blue-500': '#0D3B66',
        'gray-100': '#FBE1E2',
        'gray-200': '#F5F8FA',
        'gray-300': '#D3E2E5',
        'gray-400': '#FDECED',
        'yellow-500': '#F4D35E',
        'green-500': '#3CDC8C'
      }
    }
  },
  plugins: [],
}
