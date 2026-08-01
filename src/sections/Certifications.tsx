import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { certifications } from '@/data/education'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, staggerContainer } from '@/utils/motion'

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back my skills"
          description="Industry-recognized certifications earned through dedicated learning."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.id}
              variants={fadeUp}
              className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 transition-transform duration-300 group-hover:scale-105">
                  <BadgeCheck className="size-6" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                  {cert.year}
                </span>
              </div>

              <h3 className="mt-5 font-display text-base font-bold leading-snug text-slate-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                {cert.issuer}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <Badge key={skill} className="px-2 py-0.5 text-[0.65rem]">
                    {skill}
                  </Badge>
                ))}
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  View credential
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
