import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navItems, profile } from '@/data/profile'
import { Brand } from '@/components/Brand'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/utils/cn'

const sectionIds = navItems.map((item) => item.href.slice(1))

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-3 transition-all duration-300 sm:py-4">
      <div className="container-shell">
        <nav
          className={cn(
            'flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5',
            scrolled || isOpen
              ? 'glass-strong shadow-lg shadow-slate-900/5 dark:shadow-black/20'
              : 'bg-transparent',
          )}
          aria-label="Primary navigation"
        >
          <Brand name={profile.name} />

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300',
                    isActive
                      ? 'text-brand-600 dark:text-brand-300'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-500/10 dark:bg-brand-400/10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Button
              size="sm"
              variant="outline"
              icon={Download}
              href={profile.resumeUrl}
              download
              className="hidden sm:inline-flex"
            >
              Resume
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 backdrop-blur transition-colors hover:text-brand-600 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {isOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 shadow-xl">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-brand-500/10 text-brand-600 dark:bg-brand-400/10 dark:text-brand-300'
                          : 'text-slate-600 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/5',
                      )}
                    >
                      {item.label}
                    </motion.a>
                  )
                })}
                <div className="mt-2 sm:hidden">
                  <Button
                    size="md"
                    variant="outline"
                    icon={Download}
                    href={profile.resumeUrl}
                    download
                    fullWidth
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
