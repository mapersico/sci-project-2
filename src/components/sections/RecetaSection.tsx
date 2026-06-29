import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { recetaDulce, recetaSalada } from '../../data/content'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface Props {
  sectionRef: (el: HTMLElement | null) => void
}

export function RecetaSection({ sectionRef }: Props) {
  const [active, setActive] = useState<'dulce' | 'salada'>('dulce')
  const receta = active === 'dulce' ? recetaDulce : recetaSalada
  const accentColor = active === 'dulce' ? '#d4a843' : '#5cb84e'

  return (
    <section
      ref={sectionRef as unknown as React.RefCallback<HTMLElement>}
      id="receta"
      className="min-h-svh flex flex-col justify-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-md">
        <RevealOnScroll>
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-gold font-medium">
            Ingredientes
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-3xl font-bold text-paper mt-2 mb-6">
            La receta final
          </h2>
        </RevealOnScroll>

        {/* Toggle */}
        <RevealOnScroll delay={0.15}>
          <div className="flex gap-2 mb-6 bg-surface p-1 rounded-full">
            {(['dulce', 'salada'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setActive(v)}
                className="flex-1 py-2 rounded-full text-sm font-sans font-medium transition-all duration-300 capitalize"
                style={{
                  background: active === v ? accentColor : 'transparent',
                  color: active === v ? '#0d1a0b' : '#7a9e6e',
                }}
              >
                {v === 'dulce' ? '🍬 Versión Dulce' : '🧂 Versión Salada'}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div
              className="rounded-2xl p-5 mb-4"
              style={{ background: `${accentColor}15`, borderLeft: `3px solid ${accentColor}` }}
            >
              <p className="font-display text-xl font-bold" style={{ color: accentColor }}>
                {receta.marca}
              </p>
              <p className="text-paper font-sans text-sm mt-0.5">{receta.nombre}</p>
              <p className="text-muted font-sans text-xs italic mt-1">{receta.lema}</p>
            </div>

            {/* Ingredients list */}
            <div className="space-y-2">
              {receta.ingredientes.map((ing, i) => (
                <motion.div
                  key={ing.nombre}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center justify-between bg-surface rounded-xl px-4 py-3"
                >
                  <span className="text-paper font-sans text-sm">{ing.nombre}</span>
                  <span
                    className="font-sans text-xs font-bold px-2 py-1 rounded-lg"
                    style={{ background: `${accentColor}25`, color: accentColor }}
                  >
                    {ing.cantidad}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Procedure note */}
            <div className="mt-5 p-4 rounded-2xl bg-surface/50">
              <p className="text-muted font-sans text-xs leading-relaxed">
                <span className="text-paper font-medium">Modo de uso: </span>
                Mezclar · Calentar · Moldear · Secar. Apto para uso en contacto con alimentos fríos o templados.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
