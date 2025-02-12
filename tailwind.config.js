/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('https://i.ibb.co.com/T8VDkxS/bg-banner.jpg')",
        bgsc: "url('https://i.ibb.co.com/h7RtW86/bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
