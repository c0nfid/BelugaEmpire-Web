/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beluga: {
          dark: '#0f172a',    // Темно-синий фон
          light: '#1e293b',   // Светлее для карточек
          accent: '#06b6d4',  // Бирюзовый (Cyan)
          gold: '#fbbf24',    // Золотой акцент
          success: '#10b981', // Изумрудный
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
