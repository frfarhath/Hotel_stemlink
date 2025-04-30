/** @type {import('tailwindcss').Config} */  
module.exports = {  
    content: [  
      "./index.html",  
      "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust to your project structure  
    ],  
    theme: {  
      extend: {  
        // You can customize your theme here  
        colors: {  
          primary: '#1DA1F2',  // Example color  
        },  
      },  
    },  
    plugins: [  
      require('@tailwindcss/forms'),   // Add any plugins you need  
      require('@tailwindcss/typography'),  
      require('@tailwindcss/aspect-ratio'),  
    ],  
  }  