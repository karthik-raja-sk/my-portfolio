import { motion } from 'framer-motion'
import { achievements } from '@/data/achievements'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, staggerContainer } from '@/utils/motion'
import { cn } from '@/utils/cn'

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & recognition"
          description="Moments that shaped me — competitions won, communities led, and problems solved."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <motion.article
                key={achievement.id}
                variants={fadeUp}
                className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10 sm:p-7"
              >
                <div
                  className={cn(
                    'absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25',
                    achievement.color,
                  )}
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      'flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3',
                      achievement.color,
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <Badge className="border-brand-500/30 bg-brand-500/10 font-semibold text-brand-600 dark:border-brand-400/30 dark:bg-brand-400/10 dark:text-brand-300">
                    {achievement.year}
                  </Badge>
                </div>

                <h3 className="mt-5 font-display text-base font-bold text-slate-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  {achievement.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {achievement.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
