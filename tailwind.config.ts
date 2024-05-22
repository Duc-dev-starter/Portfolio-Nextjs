import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        colors: {
          customPink: 'rgb(241, 108, 160)',
          customBlue: 'rgb(117, 161, 240)',
          customWhite: 'hsl(0, 0%, 98%)'
        },
    },
  },
  plugins: [],
};
export default config;
