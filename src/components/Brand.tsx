import { cn } from '@/utils/cn'

interface BrandProps {
  name: string
  className?: string
}

export function Brand({ name, className }: BrandProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <a
      href="#home"
      className={cn('group flex items-center gap-3', className)}
      aria-label={`${name} — Home`}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-violet-500 to-fuchsia-500 font-display text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:scale-105">
        {initials}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-base font-bold text-slate-900 dark:text-white">
          {name}
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-widest text-brand-500 dark:text-brand-400">
          IT Student
        </span>
      </span>
    </a>
  )
}
