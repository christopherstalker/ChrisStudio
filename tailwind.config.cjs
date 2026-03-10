/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f1e8",
        panel: "#fcfaf6",
        ink: "#121417",
        muted: "#5f6975",
        line: "#ddd8cd",
        accent: "#0f6b73",
        "accent-soft": "#d7ecee",
        warm: "#b47d4a",
        night: "#0d1726",
        success: "#166534",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        panel: "0 20px 60px rgba(18, 20, 23, 0.08)",
        floating: "0 22px 64px rgba(18, 20, 23, 0.14)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(18, 20, 23, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(18, 20, 23, 0.06) 1px, transparent 1px)",
        "ink-fade":
          "linear-gradient(135deg, rgba(13, 23, 38, 1), rgba(15, 107, 115, 0.92))",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
