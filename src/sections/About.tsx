import { motion } from 'framer-motion'
import { GraduationCap, Mail, MapPin, Target, User, Briefcase } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer } from '@/utils/motion'

const quickFacts = [
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech Information Technology' },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: Mail, label: 'Email', value: profile.email },
  { icon: Briefcase, label: 'Availability', value: 'Internship / Full-time' },
]

const stats = [
  { label: 'Projects Built', value: profile.projectsBuilt },
  { label: 'LeetCode Problems', value: profile.leetCodeSolved },
  { label: 'Years Learning', value: profile.yearsOfLearning },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who loves turning ideas into reality"
          description="Get to know who I am, what drives me, and where I'm headed."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2"
          >
            <motion.div
              variants={fadeUp}
              className="glass flex h-full flex-col rounded-3xl p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Quick Info
              </h3>
              <ul className="mt-6 space-y-5">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon
                  return (
                    <li key={fact.label} className="flex items-start gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-400/10 dark:text-brand-400">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {fact.label}
                        </p>
                        <p className="mt-0.5 break-words text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {fact.value}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3"
          >
            <motion.div variants={fadeUp} className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/25">
                  <User className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Professional Summary
                </h3>
              </div>
              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                {profile.summary}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 via-violet-500/10 to-fuchsia-500/10 p-6 backdrop-blur sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/25">
                  <Target className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Career Objective
                </h3>
              </div>
              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                {profile.careerObjective}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-4 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-5"
                >
                  <p className="font-display text-2xl font-extrabold text-gradient sm:text-3xl">
                    {stat.value}+
                  </p>
                  <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-wide text-slate-500 sm:text-xs dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
