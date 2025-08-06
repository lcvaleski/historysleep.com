import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meandering Sleep - AI Bedtime Stories That Bore You to Sleep',
  description: 'Finally quiet your racing mind at night. Meandering Sleep uses AI-generated boring stories and dull lectures to help you fall asleep naturally. Available on iOS and Android.',
  keywords: 'sleep app, insomnia relief, bedtime stories, sleep aid, boring stories, fall asleep fast, meditation, sleep sounds',
  openGraph: {
    title: 'Meandering Sleep - AI Bedtime Stories That Bore You to Sleep',
    description: 'Finally quiet your racing mind at night with AI-generated boring stories.',
    images: ['/full_logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-manrope">{children}</body>
    </html>
  )
}