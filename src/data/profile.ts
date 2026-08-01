import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/icons/BrandIcons'
import type { SocialLink } from '@/types'

export const profile = {
  name: 'Karthik Raja',
  firstName: 'Karthik',
  role: 'B.Tech Information Technology Student',
  typewriterRoles: [
    'Java Developer',
    'Full Stack Developer',
    'AI & RAG Enthusiast',
    'Problem Solver',
  ],
  tagline: 'Java Developer | Full Stack Developer | AI & RAG Enthusiast',
  summary:
    'Passionate IT student interested in Software Development, Java, Full Stack Development, Artificial Intelligence, Retrieval-Augmented Generation (RAG), and problem solving.',
  careerObjective:
    'Looking for Software Development Engineer opportunities where I can build robust, scalable software and grow into a well-rounded engineer.',
  location: 'India',
  email: 'karthik.raja@example.com',
  resumeUrl: '/resume/Karthik_Raja_Resume.pdf',
  githubUrl: 'https://github.com/karthik-raja',
  availability: 'Open to SDE roles & internships',
  yearsOfLearning: 3,
  projectsBuilt: 5,
  leetCodeSolved: 100,
}

// TODO: Replace the placeholder URLs below with your real social links.
export const socials: SocialLink[] = [
  // TODO: Update this GitHub URL.
  { name: 'GitHub', url: 'https://github.com/karthik-raja', icon: GithubIcon, label: 'Visit my GitHub profile' },
  // TODO: Update this LinkedIn URL.
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/karthik-raja', icon: LinkedinIcon, label: 'Connect on LinkedIn' },
  // TODO: Update this LeetCode URL.
  { name: 'LeetCode', url: 'https://leetcode.com/u/karthik-raja', icon: LeetCodeIcon, label: 'View my LeetCode profile' },
  // TODO: Update this email address.
  { name: 'Email', url: 'mailto:karthik.raja@example.com', icon: Mail, label: 'Send me an email' },
]

export const navItems: { label: string; href: string }[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
