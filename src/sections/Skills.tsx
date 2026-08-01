import { motion } from 'framer-motion'
import type { Skill } from '@/types'
import { skillGroups } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer, EASE } from '@/utils/motion'

interface SkillBarProps {
  skill: Skill
  index: number
}

function SkillBar({ skill, index }: SkillBarProps) {
  const Icon = skill.icon
  const barGradient = `linear-gradient(90deg, ${skill.color}, ${skill.color}bb)`

  return (
    <div>
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
          <Icon
            className="size-4 shrink-0"
            style={{ color: skill.color }}
            aria-hidden="true"
          />
          {skill.name}
        </span>
        <span className="tabular-nums text-xs text-slate-400 dark:text-slate-500">
          {skill.level}%
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: barGradient }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 + index * 0.05 }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A curated toolbox I use to design, build, and ship modern software."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.icon
            return (
              <motion.article
                key={group.id}
                variants={fadeUp}
                className="group glass flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10 sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-brand-500/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <GroupIcon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {group.skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
