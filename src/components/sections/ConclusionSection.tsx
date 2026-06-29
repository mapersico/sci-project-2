import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { impactNumbers, resultados } from '../../data/content'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface Props {
  sectionRef: (el: HTMLElement | null) => void
}

const badges = [
  { icon: '🌱', label: '100% Comestible' },
  { icon: '♻️', label: 'Biodegradable' },
  { icon: '🚫', label: 'Sin plásticos' },
  { icon: '🌿', label: 'Sin conservantes' },
]

export function ConclusionSection({ sectionRef }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef as unknown as React.RefCallback<HTMLElement>}
      id="conclusion"
      className="min-h-svh flex flex-col justify-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-md">
        <RevealOnScroll>
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-green font-medium">
            Conclusión
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-3xl font-bold text-paper mt-2 mb-6">
            Impacto y resultados
          </h2>
        </RevealOnScroll>

        {/* Impact numbers */}
        <div ref={ref} className="grid grid-cols-3 gap-3 mb-8">
          {impactNumbers.map((n, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl p-4 text-center flex flex-col gap-1"
              style={{ borderTop: `2px solid ${n.color}` }}
            >
              <span
                className="font-display text-3xl font-bold"
                style={{
                  color: n.color,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                {n.value}
              </span>
              <p className="text-paper font-sans text-xs font-medium leading-tight">{n.label}</p>
              <p className="text-muted font-sans text-xs leading-tight">{n.sub}</p>
            </div>
          ))}
        </div>

        {/* Results list */}
        <RevealOnScroll delay={0.1}>
          <div className="bg-surface rounded-2xl p-4 mb-6">
            <p className="text-green font-sans text-xs font-medium mb-3 tracking-widest uppercase">
              Lo que comprobamos
            </p>
            <ul className="space-y-2">
              {resultados.map((r, i) => (
                <li key={i} className="text-muted font-sans text-xs leading-snug flex gap-2">
                  <span className="text-green mt-0.5 shrink-0">→</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {/* Conclusion quote */}
        <RevealOnScroll delay={0.2}>
          <div className="rounded-2xl p-5 mb-6" style={{ background: 'linear-gradient(135deg, rgba(92,184,78,0.1), rgba(212,168,67,0.05))' }}>
            <p className="font-display text-base italic text-paper/90 leading-relaxed">
              "El proyecto permitió demostrar que es posible fabricar una biovajilla biodegradable utilizando ingredientes accesibles y de origen vegetal."
            </p>
            <p className="text-muted font-sans text-xs mt-3">— Proyecto Biovajilla · 5° Año A</p>
          </div>
        </RevealOnScroll>

        {/* Attribute badges */}
        <RevealOnScroll delay={0.25}>
          <div className="grid grid-cols-4 gap-2">
            {badges.map((b) => (
              <div key={b.label} className="bg-surface rounded-2xl p-3 flex flex-col items-center gap-1.5">
                <span className="text-xl">{b.icon}</span>
                <p className="text-muted font-sans text-xs text-center leading-tight">{b.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35}>
          <p className="text-center text-muted font-sans text-xs mt-8 leading-relaxed">
            Bibliografía: Código Alimentario Argentino (CAA) · INTA · Material de clase
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
