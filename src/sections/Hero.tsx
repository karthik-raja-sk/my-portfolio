import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Code2, Download, MapPin, Sparkles } from 'lucide-react'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'
import { Typewriter } from '@/components/ui/Typewriter'
import { Avatar } from '@/components/ui/Avatar'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { fadeUp, staggerContainer, EASE } from '@/utils/motion'
import { scrollToId } from '@/utils/scroll'
import avatarSrc from '@/assets/avatar.svg'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -left-24 -top-24 size-[420px] animate-blob rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/15" />
        <div className="absolute -right-32 top-1/3 size-[420px] animate-blob rounded-full bg-fuchsia-500/20 blur-3xl [animation-delay:-4s] dark:bg-fuchsia-500/15" />
        <div className="absolute bottom-0 left-1/4 size-[360px] animate-blob rounded-full bg-violet-500/15 blur-3xl [animation-delay:-7s] dark:bg-violet-500/10" />
      </div>

      <div className="container-shell flex min-h-screen flex-col items-center justify-center gap-16 pb-20 pt-32 lg:flex-row lg:gap-24 lg:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:border-emerald-400/30 dark:text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.firstName}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-display text-lg font-semibold text-slate-700 sm:text-xl dark:text-slate-200"
          >
            <Typewriter words={profile.typewriterRoles} />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button
              size="lg"
              icon={Sparkles}
              onClick={() => scrollToId('contact')}
            >
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              icon={Download}
              iconPosition="right"
              href={profile.resumeUrl}
              download
            >
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="ghost"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => scrollToId('projects')}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-3 lg:items-start"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-400">
              Find me on
            </p>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          className="relative"
        >
          <div className="relative mx-auto size-72 sm:size-80 lg:size-96">
            <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-tr from-brand-500/30 via-violet-500/30 to-fuchsia-500/30 blur-2xl" />
            <div className="relative flex size-full items-center justify-center rounded-[2.25rem] border border-slate-200/70 bg-white/60 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="size-full overflow-hidden rounded-[1.8rem]">
                <Avatar
                  src={avatarSrc}
                  alt={`${profile.name} — profile photo`}
                  initials="KR"
                />
              </div>
            </div>

            <div className="glass-strong absolute -right-3 top-8 flex animate-float items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl sm:-right-6">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-500/15 text-brand-500 dark:text-brand-400">
                <Code2 className="size-5" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  Java &amp; Full Stack
                </p>
                <p className="text-[0.7rem] text-slate-500 dark:text-slate-400">
                  Spring Boot · FastAPI
                </p>
              </div>
            </div>

            <div className="glass-strong absolute -left-3 bottom-24 flex animate-float items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl [animation-delay:-2s] sm:-left-8">
              <span className="flex size-9 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-500 dark:text-fuchsia-400">
                <BrainCircuit className="size-5" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  AI &amp; RAG
                </p>
                <p className="text-[0.7rem] text-slate-500 dark:text-slate-400">
                  LangChain · Hugging Face
                </p>
              </div>
            </div>

            <div className="glass-strong absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-600 shadow-lg dark:text-slate-300">
              <MapPin className="size-3.5 text-brand-500" aria-hidden="true" />
              {profile.location}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
