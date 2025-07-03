/** @type {import('tailwindcss').Config} */
export default {
  // Extend the base config from the tailwind-config package
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
    "../../packages/*/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        "chat-primary": "#4ECDC4",
        "chat-primary-hover": "#3bb5b8",
      },
    },
  },
  plugins: [],
};
