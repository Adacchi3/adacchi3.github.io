'use client'

import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const gtmId = process.env.GTM_ID
    if (!gtmId) return

    const initGTM = () => {
      TagManager.initialize({ gtmId })
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(initGTM)
    } else {
      setTimeout(initGTM, 3000)
    }
  }, [])

  return <>{children}</>
}
