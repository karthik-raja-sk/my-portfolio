import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view (as '#section-id').
 *
 * Re-observes when sections mount lazily via a MutationObserver so the hook
 * also works with `React.lazy` sections that render after initial paint.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ? `#${sectionIds[0]}` : '',
  )

  useEffect(() => {
    const observed = new Set<Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    const observeAll = () => {
      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && !observed.has(element)) {
          observed.add(element)
          observer.observe(element)
        }
      }
    }

    observeAll()

    const mutationObserver = new MutationObserver(observeAll)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [sectionIds])

  return activeSection
}
