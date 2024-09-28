/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        backgroundColor: "#dd8036",
        brightColor: "#36ae9a",
      },
    },
  },  
  plugins: [],
}

