import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { Achievements } from '@/sections/Achievements'
import { Education } from '@/sections/Education'
import { Certifications } from '@/sections/Certifications'
import { Contact } from '@/sections/Contact'

export function RootLayout() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
