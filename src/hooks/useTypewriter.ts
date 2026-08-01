import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

/**
 * Cycles through a list of words with a type/delete effect.
 */
export function useTypewriter(
  words: string[],
  {
    typingSpeed = 70,
    deletingSpeed = 40,
    pauseDuration = 1700,
  }: UseTypewriterOptions = {},
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout: number

    if (!isDeleting && text === currentWord) {
      timeout = window.setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((index) => (index + 1) % words.length)
    } else {
      timeout = window.setTimeout(
        () =>
          setText(
            currentWord.slice(0, text.length + (isDeleting ? -1 : 1)),
          ),
        isDeleting ? deletingSpeed : typingSpeed,
      )
    }

    return () => window.clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return { text, isDeleting }
}
