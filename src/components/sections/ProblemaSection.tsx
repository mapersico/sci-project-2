import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { bioVentajas, plasticProblems, problemStats } from '../../data/content'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface Props {
  sectionRef: (el: HTMLElement | null) => void
}

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  return (
    <span
      className="font-display text-4xl font-bold"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {value}
    </span>
  )
}

export function ProblemaSection({ sectionRef }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef as unknown as React.RefCallback<HTMLElement>}
      id="problema"
      className="min-h-svh flex flex-col justify-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-md">
        <RevealOnScroll>
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-green font-medium">
            ¿Por qué?
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-3xl font-bold text-paper mt-2 mb-4">
            El problema del plástico descartable
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <p className="text-muted font-sans text-sm leading-relaxed mb-8">
            La contaminación causada por los plásticos de un solo uso representa uno de los principales problemas ambientales de la actualidad.
          </p>
        </RevealOnScroll>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-3 gap-3 mb-10">
          {problemStats.map((stat, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl p-4 text-center flex flex-col gap-1"
              style={{ borderTop: `2px solid ${stat.color}` }}
            >
              <AnimatedNumber value={stat.value} inView={inView} />
              <p className="text-paper font-sans text-xs font-medium leading-tight">{stat.label}</p>
              <p className="text-muted font-sans text-xs leading-tight">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Versus */}
        <div className="grid grid-cols-2 gap-4">
          <RevealOnScroll direction="left" delay={0.1}>
            <div className="bg-surface rounded-2xl p-4">
              <p className="text-xs font-sans tracking-widest uppercase text-red-400 mb-3 font-medium">
                🗑 Plástico
              </p>
              <ul className="space-y-2">
                {plasticProblems.map((p, i) => (
                  <li key={i} className="text-muted font-sans text-xs leading-snug flex gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <div className="bg-surface rounded-2xl p-4" style={{ borderLeft: '2px solid #5cb84e' }}>
              <p className="text-xs font-sans tracking-widest uppercase text-green mb-3 font-medium">
                🌱 Biovajilla
              </p>
              <ul className="space-y-2">
                {bioVentajas.map((v, i) => (
                  <li key={i} className="text-paper font-sans text-xs leading-snug flex gap-2">
                    <span className="text-green mt-0.5 shrink-0">✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
