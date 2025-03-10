import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

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
        "m-button": "283px",
        "p-button": "253px",
      },
      height: {
        button: "43px",
        header: "60px",
      },
      backgroundColor: {
        default: "var(--background)",
        board: "var(--boardbg)",
        point: "var(--point)",
        hover: "var(--hover)",
      },
      borderColor: {
        frame: "var(--frame)",
      },
      textColor: {
        title: "var(--title)",
        content: "var(--content)",
        button: "var(--button)",
        board: "var(--boardct)",
      },
      fontFamily: {
        "title": "var(--font-title-otf)",
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;
