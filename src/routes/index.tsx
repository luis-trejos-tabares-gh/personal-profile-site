import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/sections/Hero'
import Experience from '../components/sections/Experience'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
