import { Trophy, Award, Medal } from 'lucide-react'
import type { Achievement } from '@/types'

export const achievements: Achievement[] = [
  {
    id: 'infosys-runner-up',
    title: 'Runner-Up — Infosys Tech@BangaloreDC',
    organization: 'Infosys Tech@BangaloreDC',
    year: '2025',
    description:
      'Runner-up among teams from multiple institutions in a technical competition hosted at Infosys’s Bangalore Development Center, demonstrating strong problem-solving under time pressure.',
    icon: Trophy,
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'infosys-springboard',
    title: 'Infosys Springboard Virtual Internship',
    organization: 'Infosys Springboard',
    year: '2025',
    description:
      'Completed a virtual internship with Infosys Springboard 6.0, building an AI-driven music composition system that analyzes user input patterns and generates original compositions using machine learning techniques.',
    icon: Award,
    color: 'from-indigo-400 to-violet-500',
  },
  {
    id: 'leetcode-100',
    title: '100+ LeetCode Problems Solved',
    organization: 'LeetCode',
    year: 'Ongoing',
    description:
      'Solved 100+ algorithm and data structure problems on LeetCode in Java, consistently sharpening problem-solving skills and algorithmic thinking.',
    icon: Medal,
    color: 'from-emerald-400 to-teal-500',
  },
]
