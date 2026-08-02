import { Suspense, lazy } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Hero } from '@/sections/Hero'

const About = lazy(() =>
  import('@/sections/About').then((module) => ({ default: module.About })),
)
const Skills = lazy(() =>
  import('@/sections/Skills').then((module) => ({ default: module.Skills })),
)
const Projects = lazy(() =>
  import('@/sections/Projects').then((module) => ({ default: module.Projects })),
)
const Achievements = lazy(() =>
  import('@/sections/Achievements').then((module) => ({
    default: module.Achievements,
  })),
)
const Education = lazy(() =>
  import('@/sections/Education').then((module) => ({
    default: module.Education,
  })),
)
const Certifications = lazy(() =>
  import('@/sections/Certifications').then((module) => ({
    default: module.Certifications,
  })),
)
const Contact = lazy(() =>
  import('@/sections/Contact').then((module) => ({ default: module.Contact })),
)

function SectionFallback() {
  return <div className="py-24 sm:py-28" aria-hidden="true" />
}

export function RootLayout() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
