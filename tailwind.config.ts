import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'sidebar-background': '#141414',
        'sidebar-item-active-background': '#2c2c2c',
        'sidebar-item-active-color': '#01a29c',
        'primary-50': '#c0e5e1',
        'primary-100': '#9bd6d1',
        'primary-200': '#74c6bf',
        'primary-300': '#4db6ad',
        'primary-400': '#2fa09a',
        'primary-500': '#01a29c', // principal
        'primary-600': '#008d88',
        'primary-700': '#007772',
        'primary-800': '#00615c',
        'primary-900': '#004741',
        'secondary-100': '#fde7d9',
        'secondary-200': '#f3a87c',
        'secondary-300': '#eb6f25',
        'secondary-400': '#cd5713',
        'secondary-500': '#95400e',
        "light-100": "#ffffff",
        "light-200": "#f4f5f6",
        "light-300": "#e7e9ec",
        "light-400": "#d4d8dd",
        "light-500": "#b1b8c1",
        "plate-100": "#677487",
        "plate-200": "#4e5d73",
        "plate-300": "#3e4b61",
        "plate-400": "#1f263e",
        "plate-500": "#151929",
      }
    },
  },
  plugins: [],
};
export default config;
