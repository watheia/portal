module.exports = {
  mode: "jit",
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px"
      },
      colors: {
        "regal-blue": {
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
        "ai-aqua": {
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
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        secondary: "var(--secondary)",
        "secondary-2": "var(--secondary-2)",
        hover: "var(--hover)",
        "hover-1": "var(--hover-1)",
        "hover-2": "var(--hover-2)",
        "accents-0": "var(--accents-0)",
        "accents-1": "var(--accents-1)",
        "accents-2": "var(--accents-2)",
        "accents-3": "var(--accents-3)",
        "accents-4": "var(--accents-4)",
        "accents-5": "var(--accents-5)",
        "accents-6": "var(--accents-6)",
        "accents-7": "var(--accents-7)",
        "accents-8": "var(--accents-8)",
        "accents-9": "var(--accents-9)",
        violet: "var(--violet)",
        "violet-light": "var(--violet-light)",
        pink: "var(--pink)",
        cyan: "var(--aqua)",
        blue: "var(--blue)",
        green: "var(--green)",
        red: "var(--red)"
      },
      textColor: {
        base: "var(--text-base)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)"
      },
      boxShadow: {
        "outline-2": "0 0 0 2px var(--accents-2)",
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
