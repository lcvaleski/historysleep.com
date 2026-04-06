import type { Metadata } from 'next'
import Script from 'next/script'
import MixpanelProvider from '@/components/MixpanelProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bore - Fall asleep.',
  description: 'The sleep app that puts you to sleep with the world\'s most boring audio. BBC Radio, C-SPAN hearings, NASA recordings, university lectures. Available on iOS.',
  keywords: 'sleep app, insomnia relief, boring audio, sleep aid, fall asleep fast, bore, boring lectures, sleep sounds',
  openGraph: {
    title: 'Bore - Fall asleep.',
    description: 'The sleep app that puts you to sleep with the world\'s most boring audio.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = 'G-TYLMZMKT05'
  
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="7zoo/6M2cSWFxyLTmwn0ZA"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-manrope">
        <MixpanelProvider />
        {children}
      </body>
    </html>
  )
}