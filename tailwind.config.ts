import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        mainBackground: "#F9FAFB",
        subBackground: "#F3F4F7",
        subBackgroundBorder: "#D9D9D9",
        accent: '#54A251',
        mainText: "#333333",
        subText: "#7A7A7A",
      },
      backgroundImage: {
        homeImage: 'url("/images/home-image.jpg")'
      }
    },
  },
  plugins: [],
};
export default config;
