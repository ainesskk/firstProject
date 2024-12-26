/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#27272A",
        white: "#FCFBFA",
        greyLight: "#E5E7EB",
        greyDark: "#696969",
        lavender: "#7E3AF2",
        red: "#E02424",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-img': "url('./src/images/gradient.png')",
      },
      borderRadius: {
        '4xl': '30%',
      },
      rotate: {
        '270': '270deg'
      }
    },
  },
  plugins: [],
};
