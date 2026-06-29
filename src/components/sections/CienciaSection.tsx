import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { scienceFacts } from '../../data/content'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface Props {
  sectionRef: (el: HTMLElement | null) => void
}

export function CienciaSection({ sectionRef }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section
      ref={sectionRef as unknown as React.RefCallback<HTMLElement>}
      id="ciencia"
      className="min-h-svh flex flex-col justify-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-md">
        <RevealOnScroll>
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-gold font-medium">
            ¿Cómo funciona?
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-3xl font-bold text-paper mt-2 mb-2">
            La ciencia detrás de la receta
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <p className="text-muted font-sans text-sm leading-relaxed mb-8">
            Cada ingrediente cumple una función química específica para transformar harinas vegetales en un material sólido y comestible.
          </p>
        </RevealOnScroll>

        <div className="space-y-3">
          {scienceFacts.map((fact, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-surface rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-4 p-4 text-left"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{fact.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-paper font-sans text-sm font-medium">{fact.title}</p>
                    <p className="text-muted font-sans text-xs leading-snug mt-1">{fact.body}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted shrink-0 mt-1"
                  >
                    ↓
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 pl-14 font-sans text-xs leading-relaxed text-green">
                        {fact.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.35}>
          <div className="mt-8 p-4 rounded-2xl border border-gold/20 bg-gold/5">
            <p className="font-display text-sm italic text-paper/80 leading-relaxed">
              "Si se utilizan harinas ricas en almidón y proteínas junto con agua, glicerina y calor, será posible obtener un material moldeable, resistente y biodegradable."
            </p>
            <p className="text-gold font-sans text-xs mt-2">— Hipótesis del proyecto</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
