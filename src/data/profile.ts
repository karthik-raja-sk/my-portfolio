import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons/BrandIcons'
import type { SocialLink } from '@/types'

export const profile = {
  name: 'Samir Amin',
  firstName: 'Samir',
  role: 'B.Tech Information Technology',
  typewriterRoles: [
    'Full-Stack Developer',
    'React & TypeScript Enthusiast',
    'AI/ML Learner',
    'Problem Solver',
    'UI/UX-Focused Engineer',
  ],
  tagline:
    'Building fast, accessible, and delightful web experiences with modern JavaScript.',
  summary:
    'A passionate B.Tech Information Technology student with hands-on experience building production-grade web applications. I love turning complex problems into clean, performant, and user-friendly software — from pixel-perfect UIs to robust backend systems.',
  careerObjective:
    'To secure a challenging role where I can apply my full-stack development skills, contribute to impactful products, and keep growing as an engineer in a collaborative, innovative team.',
  location: 'Kolkata, India',
  email: 'samir.amin@example.com',
  phone: '+91 98765 43210',
  resumeUrl: '/resume/Samir_Amin_Resume.pdf',
  githubUrl: 'https://github.com/samir-amin',
  availability: 'Open to internships & full-time roles',
  yearsOfLearning: 3,
  projectsBuilt: 15,
  happyContributions: 20,
}

export const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/samir-amin', icon: GithubIcon, label: 'Visit my GitHub profile' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samir-amin', icon: LinkedinIcon, label: 'Connect on LinkedIn' },
  { name: 'Email', url: `mailto:${profile.email}`, icon: Mail, label: 'Send me an email' },
  { name: 'X (Twitter)', url: 'https://x.com/samir_amin', icon: XIcon, label: 'Follow me on X' },
  { name: 'Phone', url: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone, label: 'Call me' },
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
