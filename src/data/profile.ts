import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/icons/BrandIcons'
import type { SocialLink } from '@/types'

export const profile = {
  name: 'Karthik Raja S',
  firstName: 'Karthik',
  title: 'B.Tech Information Technology Student',
  typewriterRoles: [
    'Java Developer',
    'Full Stack Developer',
    'AI & RAG Enthusiast',
    'Problem Solver',
  ],
  tagline: 'Java Developer | Full Stack Developer | AI & RAG Enthusiast',
  summary:
    'Motivated Information Technology undergraduate (CGPA: 8.145) with hands-on experience in Java full-stack development, AI-powered systems, and cloud-based cybersecurity platforms. Proficient in building scalable backend services, RESTful APIs, and database-integrated web solutions. Certified in Java, DBMS, and Generative AI.',
  careerObjective:
    'Seeking a fresher role as a Java Developer, Backend Engineer, or Full Stack Developer, where I can build robust, scalable software and grow into a well-rounded engineer.',
  location: 'Tiruppur, Tamil Nadu',
  phone: '+91 93457 21872',
  email: 'saminathankarthikraja@gmail.com',
  resumeUrl: '/resume/Karthik_Raja_S_Resume_v3-1.pdf',
  githubUrl: 'https://github.com/karthik-raja-sk',
  availability: 'Open to SDE roles & internships',
  yearsOfLearning: 3,
  projectsBuilt: 5,
  leetCodeSolved: 100,
}

export const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/karthik-raja-sk', icon: GithubIcon, label: 'Visit my GitHub profile' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/karthik-raja-s-209a672a5/', icon: LinkedinIcon, label: 'Connect on LinkedIn' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/PdfLd9zpUA/', icon: LeetCodeIcon, label: 'View my LeetCode profile' },
  { name: 'Email', url: 'mailto:saminathankarthikraja@gmail.com', icon: Mail, label: 'Send me an email' },
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
