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
        primary: "#1456E0",
        primaryHover: "#0E47C2",
        primaryLight: "#E8F0FE",
        secondary: "#0FBFAE",
        secondaryLight: "#E0F8F5",
        background: "#F7FAFD",
        backgroundSoft: "#EEF4FB",
        card: "#FFFFFF",
        cardSoft: "#F8FBFF",
        darkSection: "#0A1A2E",
        border: "#DCE6F2",
        borderHover: "#1456E0",
        textPrimary: "#0F1A2E",
        textSecondary: "#5B6B82",
        textMuted: "#8A99AE",
        textOnDark: "#F7FAFD",
        textOnDarkMuted: "#A8B6CC",
        foreground: "#0F1A2E",
        brand: {
          cyan: "#0FBFAE",
          blue: "#1456E0",
          blueLight: "#E8F0FE",
          blueMid: "#1456E0",
          purple: "#0FBFAE",
          deepPurple: "#0E47C2",
          ink: "#0F1A2E",
          body: "#5B6B82",
          muted: "#8A99AE",
          border: "#DCE6F2",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-sc)",
          "PingFang SC",
          "Microsoft YaHei",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        "pulse-ring": "pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-ring-inner": "pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) 0.5s infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #1456E0 0%, #0FBFAE 100%)",
        "hero-bg":
          "radial-gradient(circle at 80% 20%, rgba(15,191,174,0.12), transparent 35%), radial-gradient(circle at 15% 15%, rgba(20,86,224,0.10), transparent 30%), linear-gradient(180deg, #F7FAFD 0%, #FFFFFF 100%)",
        "experience-bg":
          "radial-gradient(circle at 50% 0%, rgba(15,191,174,0.25), transparent 40%), linear-gradient(135deg, #0A1A2E 0%, #0F2440 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #1456E0 0%, #0FBFAE 100%)",
      },
      boxShadow: {
        soft: "0 4px 16px rgba(20,86,224,0.06)",
        medium: "0 16px 40px rgba(20,86,224,0.10)",
        glow: "0 0 32px rgba(15,191,174,0.30)",
        brand: "0 16px 40px rgba(20,86,224,0.10)",
        "btn-blue": "0 16px 40px rgba(20,86,224,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
