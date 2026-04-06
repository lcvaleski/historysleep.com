'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

const MIXPANEL_TOKEN = '7d138cc35f44d9c74c5b3b6f1fd91221'

export default function MixpanelProvider() {
  useEffect(() => {
    mixpanel.init(MIXPANEL_TOKEN, {
      autocapture: true,
      record_sessions_percent: 100,
      track_pageview: true,
      persistence: 'localStorage',
    })
  }, [])

  return null
}
