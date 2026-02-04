import { headers } from 'next/headers'
import MobilePage from '@/components/MobilePage'
import DesktopPage from '@/components/DesktopPage'

export default async function Home() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''
  const isMobile = /iPhone|Android|webOS|BlackBerry|Opera Mini/i.test(userAgent)

  return isMobile ? <MobilePage /> : <DesktopPage />
}
