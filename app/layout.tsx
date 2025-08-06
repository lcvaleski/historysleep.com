import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'History Sleep - AI Bedtime Stories That Bore You to Sleep',
  description: 'Finally quiet your racing mind at night. History Sleep uses AI-generated boring history lectures and dull lectures to help you fall asleep naturally. Available on iOS and Android.',
  keywords: 'sleep app, insomnia relief, history lectures, sleep aid, boring history lectures, fall asleep fast, meditation, sleep sounds',
  openGraph: {
    title: 'History Sleep - AI Bedtime Stories That Bore You to Sleep',
    description: 'Finally quiet your racing mind at night with AI-generated boring history lectures.',
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