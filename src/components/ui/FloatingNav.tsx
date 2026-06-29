import { motion } from 'framer-motion'
import { useState } from 'react'

interface Props {
  sections: { id: string; label: string }[]
  activeSection: number
  scrollTo: (index: number) => void
}

export function FloatingNav({ sections, activeSection, scrollTo }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-center">
      {sections.map((section, i) => (
        <button
          key={section.id}
          onClick={() => scrollTo(i)}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative flex items-center justify-end group"
          aria-label={section.label}
        >
          {hoveredIndex === i && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="absolute right-6 text-xs font-sans text-paper bg-surface/90 px-2 py-1 rounded whitespace-nowrap pointer-events-none"
            >
              {section.label}
            </motion.span>
          )}
          <motion.span
            animate={{
              width:  activeSection === i ? 12 : 8,
              height: activeSection === i ? 12 : 8,
              backgroundColor: activeSection === i ? '#5cb84e' : '#7a9e6e',
              boxShadow: activeSection === i ? '0 0 0 3px rgba(92,184,78,0.3)' : 'none',
            }}
            transition={{ duration: 0.2 }}
            className="block rounded-full"
          />
        </button>
      ))}
    </nav>
  )
}
