import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "max-card": "267px",
        "m-button": "283px",
        "p-button": "253px",
      },
      height: {
        "max-card": "620px",
        button: "43px",
      },
      backgroundColor: {
        default: "var(--background)",
        board: "var(--boardbg)",
        point: "var(--point)",
        hover: "var(--hover)",
      },
      textColor: {
        title: "var(--title)",
        content: "var(--content)",
        button: "var(--button)",
        board: "var(--boardct)",
      },
    },
  },
  plugins: [],
};
export default config;
