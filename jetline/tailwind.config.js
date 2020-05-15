// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      'sans': ['Din', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      'xs': ['12px', '18px'],
      'sm': ['14px', '21px'],
      'base': ['16px', '24px'],
      'lg': ['18px', '23px'],
      'xl': ['23px', '29px'],
      '2xl': ['28px', '34px'],
      '3xl': ['33px', '39px'],
      '4xl': ['40px', '48px'],
      '5xl': ['48px', '56px'],
      '6xl': ['57px', '64px'],
      '7xl': ['69px', '78px'],
      '8xl': ['83px', '93px'],
      '9xl': ['99px', '111px'],
    },
    boxShadow: {
      sm: '0 2px 4px 0 rgba(0,0,0,0.10)',
      default: '0 2px 11px 0 rgba(0,0,0,0.10)',
      md: '0 2px 25px 0 rgba(0,0,0,0.21)',
      lg: '0 16px 18px 0 rgba(0,0,0,0.10)',
    },
    extend: {
      spacing: {
        15: '15px',
        50: '50px',
        xs: '20px',
        sm: '30px',
        md: '60px',
        lg: '80px',
        xl: '100px',
      },
      colors: {
        gray: {
          300: '#ECEDED',
          500: '#B9B9B9',
          600: '#888888',
          800: '#333333',
          900: '#141414'
        },
        red: {
          lighter: '#FF7968',
          default: '#EA2C13',
          dark: '#7B1508',
        },
        pink: {
          lighter: '#FFEBE6',
          default: '#FC4C5D',
          dark: '#C3515C',
        }
      }
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
