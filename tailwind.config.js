/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",    "./node_modules/@ckeditor/**/*.{js,jsx,ts,tsx}"  ],
  
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
      },
     
    },
  },
  plugins: [],
}
