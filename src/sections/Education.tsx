import { GraduationCap, School } from 'lucide-react'
import { education } from '@/data/education'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education"
          title="My academic journey"
          description="The foundation on which I've built my skills in technology and engineering."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            className="absolute bottom-4 left-[1.125rem] top-2 w-px bg-gradient-to-b from-brand-500 via-violet-500 to-fuchsia-500/30"
            aria-hidden="true"
          />

          {education.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.12}
              y={24}
              className="relative pb-10 pl-14 last:pb-0 sm:pl-16"
            >
              <span
                className="absolute left-[1.125rem] top-1.5 size-4 -translate-x-1/2 rounded-full border-4 border-brand-500 bg-white shadow-lg shadow-brand-500/40 dark:border-slate-950 dark:bg-brand-500"
                aria-hidden="true"
              />
              <article className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/25">
                      {index === 0 ? (
                        <GraduationCap className="size-5" aria-hidden="true" />
                      ) : (
                        <School className="size-5" aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                        {item.institution} · {item.location}
                      </p>
                    </div>
                  </div>
                  <Badge>{item.period}</Badge>
                </div>

                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {item.score}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
