import {
  Code2,
  Palette,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from 'lucide-react'
import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core programming languages I write daily.',
    icon: Code2,
    skills: [
      { name: 'Java', level: 88, icon: Code2, color: '#f89820' },
      { name: 'Python', level: 82, icon: Code2, color: '#3776ab' },
      { name: 'JavaScript', level: 80, icon: Code2, color: '#f7df1e' },
      { name: 'SQL', level: 78, icon: Database, color: '#e38d13' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Crafting responsive, accessible interfaces.',
    icon: Palette,
    skills: [
      { name: 'HTML', level: 90, icon: Palette, color: '#e34f26' },
      { name: 'CSS', level: 85, icon: Palette, color: '#1572b6' },
      { name: 'React', level: 80, icon: Palette, color: '#61dafb' },
      { name: 'Tailwind CSS', level: 84, icon: Palette, color: '#38bdf8' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Building robust APIs and services.',
    icon: Server,
    skills: [
      { name: 'Spring Boot', level: 78, icon: Server, color: '#6db33f' },
      { name: 'FastAPI', level: 82, icon: Server, color: '#009688' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Storing and querying data at scale.',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 82, icon: Database, color: '#4479a1' },
      { name: 'PostgreSQL', level: 78, icon: Database, color: '#336791' },
    ],
  },
  {
    id: 'ai-rag',
    title: 'AI & RAG',
    description: 'Building retrieval-augmented AI systems.',
    icon: BrainCircuit,
    skills: [
      { name: 'RAG', level: 82, icon: BrainCircuit, color: '#8b5cf6' },
      { name: 'GraphRAG', level: 72, icon: BrainCircuit, color: '#7c3aed' },
      { name: 'LangChain', level: 80, icon: BrainCircuit, color: '#10a37f' },
      { name: 'Hugging Face', level: 75, icon: BrainCircuit, color: '#ffca28' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'My everyday developer toolkit.',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 85, icon: Wrench, color: '#f05033' },
      { name: 'GitHub', level: 85, icon: Wrench, color: '#181717' },
      { name: 'VS Code', level: 92, icon: Wrench, color: '#007acc' },
      { name: 'Postman', level: 82, icon: Wrench, color: '#ff6c37' },
      { name: 'Docker', level: 70, icon: Wrench, color: '#2496ed' },
    ],
  },
]
