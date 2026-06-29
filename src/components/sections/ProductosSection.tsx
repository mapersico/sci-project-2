import { useState } from 'react'
import { productos } from '../../data/content'
import { Lightbox } from '../ui/Lightbox'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface Props {
  sectionRef: (el: HTMLElement | null) => void
}

export function ProductosSection({ sectionRef }: Props) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section
      ref={sectionRef as unknown as React.RefCallback<HTMLElement>}
      id="productos"
      className="min-h-svh flex flex-col justify-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-md">
        <RevealOnScroll>
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-green font-medium">
            Línea de productos
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-3xl font-bold text-paper mt-2 mb-2">
            Los productos
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <p className="text-muted font-sans text-sm leading-relaxed mb-6">
            5 marcas diseñadas y fabricadas por los estudiantes. Tocá para ampliar.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-3">
          {productos.map((prod, i) => (
            <RevealOnScroll key={prod.nombre} delay={i * 0.07}>
              <button
                className="w-full bg-surface rounded-2xl overflow-hidden text-left cursor-pointer group"
                onClick={() => setLightbox({ src: prod.image, alt: prod.alt })}
                style={{ borderTop: `2px solid ${prod.color}` }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>
                <div className="p-3">
                  <p className="font-display text-sm font-bold" style={{ color: prod.color }}>
                    {prod.nombre}
                  </p>
                  <p className="text-paper font-sans text-xs leading-snug mt-0.5">{prod.tipo}</p>
                  <p className="text-muted font-sans text-xs mt-1 leading-snug italic">{prod.lema}</p>
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <p className="text-center text-muted font-sans text-xs mt-6">
            Elaborados con base en el Código Alimentario Argentino (CAA) · Industria Argentina
          </p>
        </RevealOnScroll>
      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ''}
        onClose={() => setLightbox(null)}
      />
    </section>
  )
}
