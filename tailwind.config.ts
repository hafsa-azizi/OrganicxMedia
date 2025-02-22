import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        black: "#000000",
        white: "#FFFFFF",

        // Secondary Colors (Grayscale)
        "dark-gray": "#1C1C1E",
        "light-gray": "#F5F5F7",

        // Accent Colors
        "apple-blue": "#0071E3",
        red: "#FF3B30",
        green: "#34C759",
      },
      fontFamily: {
        sans: ["SF Pro", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        hero: "4rem", // 64px
        subheading: "2rem", // 32px
        section: "1.5rem", // 24px
        body: "1rem", // 16px
        caption: "0.875rem", // 14px
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      lineHeight: {
        tight: "1.2",
        normal: "1.4",
        relaxed: "1.6",
      },
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  require('tailwind-scrollbar-hide')],
} satisfies Config;


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
