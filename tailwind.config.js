/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },
    fontSize: {
      text1: [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "400"
        }
      ],
      text2: [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "500"
        }
      ],
      text3: [
        "1rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "400"
        }
      ],
      text4: [
        "1rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "500"
        }
      ],
      text5: [
        "0.875rem",
        {
          lineHeight: "1.125rem",
          fontWeight: "500"
        }
      ],
      text6: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "400"
        }
      ],
      title1: [
        "0.875rem",
        {
          lineHeight: "1.125rem",
          fontWeight: "500"
        }
      ],
      title2: [
        "1rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "500"
        }
      ],
      title3: [
        "1.125rem",
        {
          lineHeight: "1.625rem",
          fontWeight: "500"
        }
      ],
      title4: [
        "1.25rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "600"
        }
      ],
      title5: [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "600"
        }
      ],
      title6: [
        "1.75rem",
        {
          lineHeight: "2rem",
          fontWeight: "600"
        }
      ]
    },
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
        },
        cards: {
          1: "#D3FBD9",
          2: "#FFE4BD",
          3: "#D9ABFD",
          4: "#FDF0AB",
          5: "#FBF7D3"
        },
        palette: {
          green: "#7CB93E",
          skyBlue: "#33ABC6",
          lightGreen: "#1CCD8D",
          blue: "#3F65EA",
          pink: "#F64A69",
          purple: "#A635EC",
          orange: "#F9A85D"
        }
      }
    }
  },
  plugins: []
}
