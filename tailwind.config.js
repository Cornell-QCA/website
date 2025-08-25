/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', 'sans-serif'],
      },
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
        qca_blue: {
          100: '#E6F2FF',
          200: '#CCE6FF',
          300: '#99CCFF',
          400: '#66B3FF',
          500: '#3399FF', // Base blue
          600: '#0080FF',
          700: '#0066CC',
          800: '#004C99',
          900: '#003366',
        },
        qca_green: {
          100: '#E6F7ED',
          200: '#CCEFDB',
          300: '#99DFB7',
          400: '#66CF93',
          500: '#33BF6F', // Base green
          600: '#00AF4B',
          700: '#008F3C',
          800: '#006F2D',
          900: '#004F1E',
        },
        qca_purple: {
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7', // Base purple
          600: '#9333EA',
          700: '#7C3AED',
          800: '#6B21A8',
          900: '#581C87',
        },
        qca_orange: {
          100: '#FFF7ED',
          200: '#FFEDD5',
          300: '#FED7AA',
          400: '#FDBA74',
          500: '#FB923C', // Base orange
          600: '#F97316',
          700: '#EA580C',
          800: '#C2410C',
          900: '#9A3412',
        },
      },
      spacing: {
        '128': '48rem',
      }
    },
  },
  plugins: [],
}