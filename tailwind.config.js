/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{toml,md,mdx}", // 兼容PRISM的content目录
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // 保持PRISM默认主色调
        secondary: "#64748b",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // 适配PRISM字体
      },
    },
  },
  plugins: [],
}

