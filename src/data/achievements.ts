// TODO: Review the year/details values below and update them to match your records.
import { Trophy, Award, Medal } from 'lucide-react'
import type { Achievement } from '@/types'

export const achievements: Achievement[] = [
  {
    id: 'infosys-runner-up',
    title: 'Runner-Up — Infosys Tech@BangaloreDC',
    organization: 'Infosys Tech@BangaloreDC',
    year: '2025',
    description:
      'Secured the runner-up position in the technical competition hosted by Infosys at BangaloreDC.',
    icon: Trophy,
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'infosys-springboard',
    title: 'Infosys Springboard Virtual Internship',
    organization: 'Infosys Springboard',
    year: '2025',
    description:
      'Completed a virtual internship covering real-world software engineering workflows and industry best practices.',
    icon: Award,
    color: 'from-indigo-400 to-violet-500',
  },
  {
    id: 'leetcode-100',
    title: '100+ LeetCode Problems Solved',
    organization: 'LeetCode',
    year: 'Ongoing',
    description:
      'Consistently sharpening data structures & algorithms skills with a strong focus on problem solving.',
    icon: Medal,
    color: 'from-emerald-400 to-teal-500',
  },
]
