import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type Direction = 'up' | 'left' | 'right' | 'none'

interface Props {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  className?: string
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 32 },
  left:  { x: -32, y: 0  },
  right: { x: 32,  y: 0  },
  none:  { x: 0,   y: 0  },
}

export function RevealOnScroll({ children, direction = 'up', delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()
  const { x, y } = offsets[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
