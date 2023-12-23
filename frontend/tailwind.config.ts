import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        textColor: '#1E1E2F',
        body: 'rgb(107, 114, 128)',
        dark_blue: '#173D7A',
        light_blue: '#78C4FE',
        custom_yellow: '#F18F01',
        custom_blue: 'rgb(17, 93, 152)',
        custom_green: 'rgb(20, 123, 133)',
        dark_grey: 'rgb(97, 97, 97)',
        light_grey: 'rgb(210, 207, 210)',
        light_brown: 'rgb(223, 209, 196)',
        dark_brown: 'rgb(110, 100, 92)',
        brightRed: 'hsl(12, 88%, 59%)',
        social_app: '#44546A',
        social_app_boundary: '#ADB8C7',
  
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
