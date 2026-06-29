import { useCallback, useRef, useState } from 'react'

export function useScrollSection(count: number) {
  const [activeSection, setActiveSection] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>(Array(count).fill(null))
  const observers = useRef<IntersectionObserver[]>([])

  const setRef = useCallback((index: number) => (el: HTMLElement | null) => {
    if (observers.current[index]) {
      observers.current[index].disconnect()
    }
    refs.current[index] = el
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection(index)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    observers.current[index] = observer
  }, [])

  const scrollTo = useCallback((index: number) => {
    refs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return { activeSection, setRef, scrollTo }
}
