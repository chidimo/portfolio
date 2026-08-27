/** @type {import('tailwindcss').Config} */
module.exports = {
  // Theming is done with CSS custom properties in app/index.css; this only
  // matters if a `dark:` utility is ever added. `.theme-dark` is the viewer's
  // explicit choice (set by the inline script + ThemeToggle).
  darkMode: ["class", ".theme-dark"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-ink": "rgb(var(--accent-ink) / <alpha-value>)",
      },
      fontFamily: {
        serif: [
          "Georgia",
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          "Palatino",
          '"Book Antiqua"',
          '"Times New Roman"',
          "serif",
        ],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: { content: "64rem", prose: "42rem" },
    },
  },
  plugins: [],
};
