import { useRef, useEffect, useState, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeContentProps {
  children: ReactNode
  /** Delay before animation starts in ms @default 0 */
  delay?: number
  /** Distance to travel up in px @default 24 */
  distance?: number
  className?: string
}

export default function FadeContent({
  children,
  delay = 0,
  distance = 24,
  className,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8% 0px' })
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
  }, [])

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{
        duration: 0.45,
        delay: delay / 1000,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
