/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode using class strategy
  content: [
    // Include all relevant paths for Tailwind to scan
    "../../apps/*/app/**/*.{js,ts,jsx,tsx}",
    "../../apps/*/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/*/src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        // Custom colors for your app
        "chat-primary": "#4ECDC4",
        "chat-primary-hover": "#3bb5b8",
      },
    },
  },
  plugins: [],
};
