import { Trophy, Award, Users, Rocket, Medal, Lightbulb } from 'lucide-react'
import type { Achievement } from '@/types'

export const achievements: Achievement[] = [
  {
    id: 'hackathon-winner',
    title: 'Winner — National Level Hackathon',
    organization: 'TechNova 2025',
    year: '2025',
    description:
      'Led a 4-member team to first place out of 120+ teams with an AI-powered accessibility tool.',
    icon: Trophy,
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'smart-india',
    title: 'Finalist — Smart India Hackathon',
    organization: 'SIH 2024',
    year: '2024',
    description:
      'Built a working prototype for a rural healthcare solution and reached the national finals.',
    icon: Rocket,
    color: 'from-indigo-400 to-violet-500',
  },
  {
    id: 'gfg-100',
    title: '500+ DSA Problems Solved',
    organization: 'LeetCode · GeeksforGeeks',
    year: '2023 – Present',
    description:
      'Consistent problem-solving in Data Structures & Algorithms; contest rating in the top 8%.',
    icon: Medal,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'core-team',
    title: 'Core Team — Developer Student Club',
    organization: 'DSC / GDSC',
    year: '2023 – 2025',
    description:
      'Organized workshops and study jams; mentored 200+ students in web development.',
    icon: Users,
    color: 'from-sky-400 to-blue-500',
  },
  {
    id: 'academic-excellence',
    title: 'Academic Excellence Award',
    organization: 'University',
    year: '2024',
    description:
      'Awarded to the top 5% of the cohort for outstanding academic performance in 2nd year.',
    icon: Award,
    color: 'from-fuchsia-400 to-pink-500',
  },
  {
    id: 'open-source',
    title: 'Open Source Contributor',
    organization: '100+ contributions',
    year: '2024 – Present',
    description:
      'Merged pull requests across popular repositories and maintained my own OSS libraries.',
    icon: Lightbulb,
    color: 'from-cyan-400 to-sky-500',
  },
]
