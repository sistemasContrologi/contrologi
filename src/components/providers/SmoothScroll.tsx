'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimations({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return <>{children}</>
}
