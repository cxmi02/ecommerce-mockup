import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-gray': '#dfe4d4',
        'custom-light-gray': '#f3f4ef',
        'custom-light-gray2': '#f8f4f4',
        'custom-product-brown': '#977945',
        'custom-product-brown-light': '#c8ad7f',
        'custom-product-pink': '#d966d9',
        'custom-product-mint-green': '#caffd6',
        'custom-product-blue-gray': '#a8bcd4',
        'custom-product-blue-light': '#add8e6',
      },
      spacing: {
        '120': '28rem',
        '13' : '4rem',
      },
    },
  },
  plugins: [],
};
export default config;
