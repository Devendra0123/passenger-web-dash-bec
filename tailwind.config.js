/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        width_sm: "98%",
        width_md: "98%",
        width_lg: "90%",
        width_xl: "95%",
      },
      colors: {
        primary: "#E63631",
        light_gray: "#E2E2E2",
        smoke: "#F2F2F2",
        titleColor: "rgb(51 65 85)",
      },
      fontSize: {
        titleSize: "20px",
        fontSize_sm: "13px",
        fontSize_md: "15px",
        fontSize_lg: "17px",
      },
      fontWeight: {
        titleFontWeight: "600",
      },
    },
  },
  plugins: [],
};
