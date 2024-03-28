/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "hsl(var(--color-title)/<alpha-value>)",
        text: "hsl(var(--color-text)/<alpha-value>)",
        textlight: "hsl(var(--color-text-light)/<alpha-value>)",
        bkgred: "hsl(var(--color-bkg-red)/<alpha-value>)",
        bkg: "hsl(var(--color-bkg)/<alpha-value>)",
      },
      fontSize: {
        "h1-d": "36px", // 2.25rem
        "h2-d": "24px", // 1.5rem
        "h3-d": "20px", // 1.25rem
        "h4-d": "16px", // 1rem
        "small-d": "14px", // 0.875rem
        "smaller-d": "13px", // 0.813rem
        "h1-m": "24px", // 1.5rem
        "h2-m": "20px", // 1.25rem
        "h3-m": "16px", // 1rem
        "h4-m": "15px", // 0.938rem
        "small-m": "13px", // 0.813rem
        "smaller-m": "12px", // 0.75rem
      },
    },
  },
  plugins: [],
};

// light-theme :
// 282525 - title
// 5d5656 - text
// 918888 - text-color-light
// dc3845 - bkg-red
// ffffff - bkg

// dark-theme:
// d42b39 - first-color-alt
// db4d59 - first-color-dark
// f3f2f2 - title-color-dark
// c2bdbd - text-color-dark
// 918888 - text-color-light
// 2f2223 - container-color-dark
// dc3845 - bkg-red
// 251819 - bkg
