/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1080px'},
        // => @media (max-width: 1080px) { ... }
  
        'md': {'max': '900px'},
        // => @media (max-width: 900px) { ... }
  
        'sm': {'max': '425px'},
        // => @media (max-width: 425px) { ... }
      }

    },
  },
  plugins: [],
}

