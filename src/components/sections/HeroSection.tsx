import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface Props {
  sectionRef: (el: HTMLElement | null) => void
}

export function HeroSection({ sectionRef }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={(el) => { (ref as React.MutableRefObject<HTMLElement | null>).current = el; sectionRef(el) }}
      id="hero"
      className="relative min-h-svh flex flex-col justify-center items-center overflow-hidden px-6 py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-surface pointer-events-none" />

      {/* Decorative circles */}
      <motion.div
        className="absolute top-1/4 -right-20 w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(92,184,78,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-16 w-48 h-48 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 mx-auto w-full max-w-md text-center flex flex-col items-center gap-6">
        <RevealOnScroll delay={0.1}>
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-green font-medium">
            Proyecto Escolar · 5° Año A
          </span>
        </RevealOnScroll>

        <motion.div style={{ y: textY }}>
          <RevealOnScroll delay={0.2}>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-paper leading-tight">
              Proyecto<br />
              <span className="text-green">Bio</span>vajilla
            </h1>
          </RevealOnScroll>
        </motion.div>

        <RevealOnScroll delay={0.35}>
          <p className="text-muted font-sans text-base leading-relaxed max-w-xs">
            Del aula a la mesa: vajilla que vuelve a la tierra.
          </p>
        </RevealOnScroll>

        <motion.div style={{ y: imgY }} className="w-full">
          <RevealOnScroll delay={0.45} direction="none">
            <div className="relative mx-auto w-72 sm:w-80">
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(ellipse at center, rgba(92,184,78,0.15) 0%, transparent 70%)' }} />
              <img
                src="/media/hero_productos.jpg"
                alt="DULCÉA y NATIVO — cucharita y potecito comestibles"
                className="w-full rounded-2xl object-cover shadow-2xl"
                loading="eager"
              />
            </div>
          </RevealOnScroll>
        </motion.div>

        <RevealOnScroll delay={0.55}>
          <div className="flex gap-4 flex-wrap justify-center">
            {['100% Comestible', 'Biodegradable', 'Sin plásticos'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-sans px-3 py-1 rounded-full border border-green/30 text-green"
              >
                {tag}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-muted text-xs font-sans tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  )
}
