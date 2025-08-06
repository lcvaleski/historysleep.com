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
        // Main Color Palette
        'ms-white': '#FFFFFF',
        'ms-nocturne': '#0F0735',
        'ms-eclipse': '#180E4A',
        'ms-blueberry': '#2F2564',
        'ms-orchid': '#8B37E8',
        // Secondary Color Palette
        'ms-fuschia': '#CD52D4',
        'ms-periwinkle': '#728AF6',
        'ms-coral': '#DC6F70',
        'ms-lavendar': '#D9B6FF',
        'ms-buttercream': '#F8EACF',
      },
      backgroundImage: {
        'gradient-sleep': 'linear-gradient(135deg, #2F2564 0%, #180E4A 50%, #0F0735 100%)',
        'gradient-soft': 'linear-gradient(180deg, #F8EACF 0%, #D9B6FF 100%)',
      },
    },
  },
  plugins: [],
}