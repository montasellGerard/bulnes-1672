import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// Palette taken from the shop itself: navy walls, gilded mirrors,
// cream porcelain chairs, dark walnut furniture, oxblood accents.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1220",
          900: "#111B2E",
          800: "#18253D",
          700: "#22324F",
        },
        cream: {
          DEFAULT: "#EFE6D2",
          muted: "#CFC4AC",
        },
        gold: {
          DEFAULT: "#C29A55",
          light: "#D9B877",
          dim: "#9C7A3E",
        },
        walnut: "#3A2418",
        oxblood: "#7C2D26",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        none: "0",
        sm: "2px",
        md: "2px",
        lg: "3px",
        xl: "3px",
        "2xl": "4px",
        full: "9999px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".grain": {
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: "0",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            opacity: "0.05",
            pointerEvents: "none",
            zIndex: "1",
          },
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};

export default config;
