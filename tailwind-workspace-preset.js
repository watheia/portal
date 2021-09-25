module.exports = {
  mode: "jit",
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px"
      },
      colors: {
        regal: {
          50: "#f2f6f8",
          100: "#e6edf1",
          200: "#c0d1dc",
          300: "#9ab6c7",
          400: "#4e7f9d",
          500: "#024873",
          600: "#024168",
          700: "#023656",
          800: "#012b45",
          900: "#012338"
        },
        aqua: {
          50: "#f2fcfc",
          100: "#e6f9f9",
          200: "#c0efef",
          300: "#9be5e5",
          400: "#4fd2d2",
          500: "#04BFBF",
          600: "#04acac",
          700: "#038f8f",
          800: "#027373",
          900: "#025e5e"
        },
        shark: {
          50: "#fefeff",
          100: "#fafbfb",
          200: "#dbdcdd",
          300: "#a7a5a6",
          400: "#656263",
          500: "#231f20",
          600: "#201c1d",
          700: "#1a1718",
          800: "#151313",
          900: "#110f10"
        },
        mulberry: {
          50: "#f7f3f5",
          100: "#eee7eb",
          200: "#d6c2cd",
          300: "#bd9dae",
          400: "#8b5472",
          500: "#590b35",
          600: "#500a30",
          700: "#430828",
          800: "#350720",
          900: "#2c051a"
        },
        "ring-1": "#04BFBF",
        "ring-2": "#fefeff",
        disabled: "#a7a5a6",
        primary: "#110f10",
        "primary-2": "#1a1718",
        secondary: "#fefeff",
        "secondary-2": "#dbdcdd",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#024873",
        cyan: "#9be5e5"
      },
      textColor: {
        base: "#110f10",
        primary: "#1a1718",
        secondary: "#fefeff",
        brand: "#04BFBF"
      },
      spacing: {
        28: "7rem"
      },
      letterSpacing: {
        tighter: "-.04em"
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem"
      },
      boxShadow: {
        "outline-2": "0 0 0 2px #1a1718",
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px"
      },
      lineHeight: {
        "extra-loose": "2.2"
      },
      letterSpacing: {
        widest: "0.3em"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio")
  ]
}
