import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/Button'
import { staggerContainer } from '@/utils/motion'
import { profile } from '@/data/profile'

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work I'm proud of"
          description="A selection of applications I've designed and built — from full-stack platforms to AI-powered tools."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            icon={ArrowUpRight}
            iconPosition="right"
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
