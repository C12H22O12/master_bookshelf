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
        "4/5dvw": "40dvw",
        "m-button": "283px",
        "p-button": "253px",
      },
      height: {
        "4/5dvh": "80dvh",
        "button": "43px",
      },
      colors: {
        background: "var(--background)",
        title: "var(--title)",
        content: "var(--content)",
        button: "var(--button-content)",
        point: "var(--point)",
        boardbg: "var(--boardbg)",
        boardct: "var(--boardct)",
      },
    },
  },
  plugins: [],
};
export default config;
