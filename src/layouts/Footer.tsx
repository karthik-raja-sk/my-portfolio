import { ArrowUp, Heart } from 'lucide-react'
import { navItems, profile, socials } from '@/data/profile'
import { Brand } from '@/components/Brand'
import { scrollToId } from '@/utils/scroll'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200/70 py-12 dark:border-white/10">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Brand name={profile.name} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {profile.tagline}
            </p>
          </div>

          <nav className="md:justify-self-center" aria-label="Footer navigation">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5">
              {socials.slice(0, 3).map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {social.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-6 sm:flex-row dark:border-white/10">
          <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            © {year} {profile.name}. Crafted with
            <Heart className="size-3.5 fill-rose-500 text-rose-500" aria-hidden="true" />
            using React &amp; TypeScript.
          </p>
          <button
            type="button"
            onClick={() => scrollToId('home')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/50 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
