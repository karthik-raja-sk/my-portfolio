import { cn } from '@/utils/cn'

interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  className?: string
}

/**
 * Profile image placeholder. Renders a real image when `src` is provided,
 * otherwise a branded initials monogram — swap in a photo by setting `src`.
 */
export function Avatar({ src, alt = 'Profile photo', initials = 'SA', className }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn('size-full object-cover', className)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'flex size-full items-center justify-center bg-gradient-to-br from-brand-500 via-violet-500 to-fuchsia-500',
        className,
      )}
    >
      <span className="font-display text-5xl font-bold tracking-tight text-white">
        {initials}
      </span>
    </div>
  )
}
