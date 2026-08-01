import { useTypewriter } from '@/hooks/useTypewriter'
import { cn } from '@/utils/cn'

interface TypewriterProps {
  words: string[]
  className?: string
}

export function Typewriter({ words, className }: TypewriterProps) {
  const { text, isDeleting } = useTypewriter(words)

  return (
    <span className={cn('font-semibold', className)} aria-live="polite">
      {text}
      <span
        className={cn(
          'ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] animate-cursor-blink rounded-full bg-brand-500',
          isDeleting && 'bg-brand-400/70',
        )}
        aria-hidden="true"
      />
    </span>
  )
}
