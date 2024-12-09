/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '992px',
          xl: '1280px',
          '2xl': '1250px',
          '3xl': '1250px',
        },
        maxWidth: {
          DEFAULT: '100%',
          lg: '80%',
          xl: '1120px',
        },
      },
      colors: {
        primaryDark: '#192644', 
        primary: '#375074', 
        accent: '#CEAC21',  
        accentDark: '#B5951A',
        neutralDark: '#2E2E2E',  
        neutral: '#707070',
        lightGray: '#F2F2F2',
        gray:"#CCCCCC",
        white: '#FFFFFF',
      },
      fontFamily: {
        'Mundial': ['Mundial', 'Arial', 'sans-serif'],
        'SourceSans': ['SourceSans', 'sans-serif'],
      },
      screens: {
        'more-xl': '2000px',
      },
      listStyleImage: {
        checkmark: 'url("/src/assets/images/checkmark.svg")'
      }
      // fontSize: {
      //   'xs': '.75rem',  // 12px
      //   'sm': '.875rem', // 14px
      //   'base': '1rem',  // 16px
      //   'lg': '1.125rem', // 18px
      //   'xl': '1.25rem',  // 20px
      //   '2xl': '1.5rem',  // 24px
      //   '3xl': '1.875rem', // 30px
      //   '4xl': '2.25rem', // 36px
      //   '5xl': '3rem',    // 48px
      //   '6xl': '4rem',    // 64px
      // },
      // spacing: {
      //   '1': '4px',
      //   '2': '8px',
      //   '3': '12px',
      //   '4': '16px',
      //   '5': '20px',
      //   '6': '24px',
      //   '8': '32px',
      //   '10': '40px',
      //   '12': '48px',
      //   '16': '64px',
      //   '20': '80px',
      //   '24': '96px',
      //   '32': '128px',
      // },
    },
  },
  plugins: [],
}
