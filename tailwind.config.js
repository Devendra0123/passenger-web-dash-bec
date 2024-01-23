/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        width_sm: '98%',
        width_md: "98%",
        width_lg: "90%",
        width_xl: "95%"
      },
      colors:{
        primary: "#EC6536"
      }
    },
  },
  plugins: [],
}