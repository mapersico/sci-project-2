import './index.css'
import { sections } from './data/content'
import { useScrollSection } from './hooks/useScrollSection'
import { FloatingNav } from './components/ui/FloatingNav'
import { HeroSection } from './components/sections/HeroSection'
import { ProblemaSection } from './components/sections/ProblemaSection'
import { CienciaSection } from './components/sections/CienciaSection'
import { ProcesoSection } from './components/sections/ProcesoSection'
import { RecetaSection } from './components/sections/RecetaSection'
import { ProductosSection } from './components/sections/ProductosSection'
import { ConclusionSection } from './components/sections/ConclusionSection'

export default function App() {
  const { activeSection, setRef, scrollTo } = useScrollSection(sections.length)

  return (
    <main className="bg-bg text-paper font-sans">
      <FloatingNav sections={sections} activeSection={activeSection} scrollTo={scrollTo} />
      <HeroSection      sectionRef={setRef(0)} />
      <ProblemaSection  sectionRef={setRef(1)} />
      <CienciaSection   sectionRef={setRef(2)} />
      <ProcesoSection   sectionRef={setRef(3)} />
      <RecetaSection    sectionRef={setRef(4)} />
      <ProductosSection sectionRef={setRef(5)} />
      <ConclusionSection sectionRef={setRef(6)} />
    </main>
  )
}
