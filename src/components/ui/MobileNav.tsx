import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

interface Props {
  sections: { id: string; label: string }[]
  activeSection: number
  scrollTo: (index: number) => void
}

export function MobileNav({ sections, activeSection, scrollTo }: Props) {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 30 })

  const goPrev = () => scrollTo(Math.max(0, activeSection - 1))
  const goNext = () => scrollTo(Math.min(sections.length - 1, activeSection + 1))

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x < -36 || info.velocity.x < -300) goNext()
    else if (info.offset.x > 36 || info.velocity.x > 300) goPrev()
  }

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 pointer-events-none">
      <div className="relative flex items-center gap-1 bg-surface/95 backdrop-blur-md rounded-full shadow-2xl border border-white/5 pointer-events-auto overflow-hidden">
        {/* progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10">
          <motion.div
            className="h-full bg-green"
            style={{ scaleX: progress, transformOrigin: 'left' }}
          />
        </div>

        <motion.button
          onClick={goPrev}
          disabled={activeSection === 0}
          whileTap={{ scale: 0.88 }}
          className="w-12 h-12 flex items-center justify-center text-paper text-xl shrink-0 disabled:text-muted/25 disabled:pointer-events-none"
          aria-label="Sección anterior"
        >
          ‹
        </motion.button>

        <motion.div
          className="flex-1 text-center py-2 select-none"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSection}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="text-paper font-sans text-xs font-medium truncate px-2"
            >
              {sections[activeSection].label}
            </motion.p>
          </AnimatePresence>
          <p className="text-muted font-sans text-[10px] mt-0.5">
            {activeSection + 1} / {sections.length}
          </p>
        </motion.div>

        <motion.button
          onClick={goNext}
          disabled={activeSection === sections.length - 1}
          whileTap={{ scale: 0.88 }}
          className="w-12 h-12 flex items-center justify-center text-paper text-xl shrink-0 disabled:text-muted/25 disabled:pointer-events-none"
          aria-label="Sección siguiente"
        >
          ›
        </motion.button>
      </div>
    </div>
  )
}
