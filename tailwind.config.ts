import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        accent: 'hsl(var(--accent))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      }
    }
  },
  plugins: []
}

export default config
