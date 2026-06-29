import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { processSteps } from '../../data/content'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface Props {
  sectionRef: (el: HTMLElement | null) => void
}

export function ProcesoSection({ sectionRef }: Props) {
  const [openStep, setOpenStep] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={sectionRef as unknown as React.RefCallback<HTMLElement>}
      id="proceso"
      className="min-h-svh flex flex-col justify-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-md">
        <RevealOnScroll>
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-green font-medium">
            Paso a paso
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-3xl font-bold text-paper mt-2 mb-2">
            El proceso
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <p className="text-muted font-sans text-sm leading-relaxed mb-6">
            10 pasos para transformar harinas vegetales en vajilla comestible. Tocá cada paso para ver más.
          </p>
        </RevealOnScroll>

        {/* Scroll horizontal on mobile */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide snap-x pb-4 -mx-6 px-6"
        >
          {processSteps.map((step, i) => (
            <RevealOnScroll key={step.id} delay={i * 0.04} direction="none">
              <motion.button
                className="snap-start shrink-0 w-64 bg-surface rounded-2xl overflow-hidden text-left cursor-pointer"
                onClick={() => setOpenStep(openStep === step.id ? null : step.id)}
                whileTap={{ scale: 0.98 }}
              >
                {step.image && (
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  </div>
                )}

                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-sans font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: '#5cb84e', color: '#0d1a0b' }}
                    >
                      {step.id}
                    </span>
                    <p className="text-paper font-sans text-sm font-medium leading-snug">{step.title}</p>
                  </div>

                  <AnimatePresence initial={false}>
                    {openStep === step.id && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-muted font-sans text-xs leading-snug overflow-hidden"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </RevealOnScroll>
          ))}
        </div>

        {/* Video */}
        <RevealOnScroll delay={0.2} className="mt-6">
          <div className="rounded-2xl overflow-hidden bg-surface">
            <video
              controls
              preload="none"
              poster="/media/proceso_horno.jpg"
              className="w-full"
            >
              <source src="/media/video_proceso.mp4" type="video/mp4" />
            </video>
            <p className="text-muted font-sans text-xs text-center py-2">
              Video del proceso completo
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
