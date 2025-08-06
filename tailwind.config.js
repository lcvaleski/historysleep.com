/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['28px', { lineHeight: '34px', letterSpacing: '0.01em' }],
        'h2': ['24px', { lineHeight: '32px', letterSpacing: '0.02em' }],
        'h3': ['20px', { lineHeight: '28px', letterSpacing: '0.03em' }],
        'body-lg': ['16px', { lineHeight: '25px', letterSpacing: '0.03em' }],
        'body': ['14px', { lineHeight: '22px', letterSpacing: '0.03em' }],
        'caption': ['13px', { lineHeight: '20px', letterSpacing: '0.03em' }],
        'caption-sm': ['11px', { lineHeight: '15px', letterSpacing: '0.07em' }],
      },
      colors: {
        // Primary Color Palette
        'ms-white': '#F8F1E3',
        'ms-deepbrown': '#2A1F14',
        'ms-chocolate': '#57494F',
        'ms-brown': '#7C6C63',
        'ms-orchid': '#A96A7D',
        // Secondary Color Palette
        'ms-fuschia': '#C47878',
        'ms-periwinkle': '#A0B2C8',
        'ms-coral': '#B3583E',
        'ms-lavendar': '#C6B0B8',
        'ms-buttercream': '#F1DDBD',
        // Legacy colors for gradients (will update these next)
        'ms-nocturne': '#2A1F14',
        'ms-eclipse': '#57494F',
        'ms-blueberry': '#7C6C63',
      },
      backgroundImage: {
        'gradient-sleep': 'linear-gradient(135deg, #7C6C63 0%, #57494F 50%, #2A1F14 100%)',
        'gradient-soft': 'linear-gradient(180deg, #F1DDBD 0%, #C6B0B8 100%)',
      },
    },
  },
  plugins: [],
}