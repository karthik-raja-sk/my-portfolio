import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GithubIcon } from '@/components/icons/BrandIcons'
import { fadeUp } from '@/utils/motion'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group glass flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-500/10"
    >
      <div
        className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="bg-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <project.icon
          className="relative size-16 text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub`}
            className="flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur transition-transform duration-300 hover:scale-110 hover:text-brand-600"
          >
            <GithubIcon className="size-4.5" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur transition-transform duration-300 hover:scale-110 hover:text-brand-600"
            >
              <ArrowUpRight className="size-4.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <Button
            size="sm"
            variant="outline"
            icon={GithubIcon}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
          {project.live && (
            <Button
              size="sm"
              icon={ArrowUpRight}
              iconPosition="right"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
