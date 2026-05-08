import { useRef, useEffect, useState } from 'react'
import { motion, useInView, type Variant } from 'framer-motion'

interface BlurTextProps {
  text: string
  /** Delay between each word/char in ms @default 80 */
  delay?: number
  /** Stagger each word or character @default 'words' */
  animateBy?: 'words' | 'chars'
  /** Framer variant for the hidden state */
  hidden?: Variant
  /** Framer variant for the visible state */
  visible?: Variant
  className?: string
  /** Wrapper element tag @default 'h1' */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  /** Whether to trigger animation on scroll-into-view @default true */
  onScroll?: boolean
}

const defaultHidden: Variant = {
  opacity: 0,
  filter: 'blur(10px)',
  y: 12,
}

const defaultVisible: Variant = {
  opacity: 1,
  filter: 'blur(0px)',
  y: 0,
}

export default function BlurText({
  text,
  delay = 80,
  animateBy = 'words',
  hidden = defaultHidden,
  visible = defaultVisible,
  className,
  as: Tag = 'h1',
  onScroll = true,
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10% 0px' })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setShouldAnimate(false)
    } else {
      setShouldAnimate(true)
    }
  }, [])

  const tokens = animateBy === 'words' ? text.split(' ') : text.split('')
  const animate = shouldAnimate && (onScroll ? isInView : true)

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} aria-label={text}>
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={shouldAnimate ? hidden : visible}
          animate={animate ? visible : shouldAnimate ? hidden : visible}
          transition={{
            duration: 0.4,
            delay: (i * delay) / 1000,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
        >
          {token}
          {animateBy === 'words' && i < tokens.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Tag>
  )
}
