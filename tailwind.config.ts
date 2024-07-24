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
        navy: "#0a192f",
        lightNavy: "#112240",
        lightestNavy: "#233554",
        slate: "#8892b0",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        offWhite: "#e6f1ff",
        green: "#64ffda",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
    plugins: [],
  },
};
export default config;
