/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qca_red_dark: {
          100: '#FAD0D0',
          200: '#F4A1A1',
          300: '#EF7272',
          400: '#E94444',
          500: '#DC0807', // Base dark red
          600: '#B70606',
          700: '#920505',
          800: '#6E0404',
          900: '#490303',
        },
        qca_red_med: {
          100: '#FFDBD6',
          200: '#FFB7AD',
          300: '#FF9385',
          400: '#FF6F5C',
          500: '#FF644E', // Base medium red
          600: '#E65B47',
          700: '#CC5240',
          800: '#B34939',
          900: '#993F32',
        },
        qca_red_light: {
          100: '#FFE5E2',
          200: '#FFCBC6',
          300: '#FFB2A9',
          400: '#FF988D',
          500: '#FE968D', // Base light red
          600: '#E68580',
          700: '#CC746E',
          800: '#B3635D',
          900: '#994F4B',
        },
      },
    },
  },
  plugins: [],
}