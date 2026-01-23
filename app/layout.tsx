import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fall asleep to boring history',
  description: 'Finally quiet your racing mind at night. History Sleep uses boring history lectures to help you fall asleep naturally. Available on iOS.',
  keywords: 'sleep app, insomnia relief, history lectures, sleep aid, boring history lectures, fall asleep fast, meditation, sleep sounds',
  openGraph: {
    title: 'Fall asleep to boring history',
    description: 'Finally quiet your racing mind at night with boring history lectures.',
    images: ['/shareimage.png'],
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
      <body className="font-manrope">{children}</body>
    </html>
  )
}