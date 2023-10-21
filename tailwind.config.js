/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        design: {
          primary: "#EB6D20",
          third: "#EB8426",
          text: "#3E3E3E",
          subtext: "#9A9A9A",
          paragraph: "#292929",
          success: "#6DB95A",
          error: "#DD5E5E",
          warning: "#D89614",
          url: "#177DDC",
          "thick-black": "#040404",
          "middle-black": "#0B0B0B",
          "soft-black": "#1B1B1B",
          light: "#D6D6D6",
          medium: "#5F5F5F",
          regular: "#303030",
          border: "#E9E9E9",
          background: "#FDFDFD",
          "soft-background": "#FFF9F3",
          "gray-background": "#F5F6F8"
        }
      }
    }
  },
  plugins: []
}
