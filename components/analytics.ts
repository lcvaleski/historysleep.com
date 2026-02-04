declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const handleAppStoreHeroClick = () => {
  trackEvent('click', {
    event_category: 'download',
    event_label: 'ios_app_store',
    button_location: 'hero'
  })
}

export const handleAppStoreCTAClick = () => {
  trackEvent('click', {
    event_category: 'download',
    event_label: 'ios_app_store',
    button_location: 'final_cta'
  })
}
