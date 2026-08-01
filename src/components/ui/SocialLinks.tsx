import { socials } from '@/data/profile'
import { cn } from '@/utils/cn'

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {socials.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith('http') ? '_blank' : undefined}
            rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={social.label}
            title={social.label}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:text-brand-600 hover:shadow-lg hover:shadow-brand-500/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300',
              iconClassName,
            )}
          >
            <Icon className="size-4.5" aria-hidden="true" />
          </a>
        )
      })}
    </div>
  )
}
