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
      { name: 'JavaScript (ES6+)', level: 90, icon: Code2, color: '#f7df1e' },
      { name: 'TypeScript', level: 85, icon: Code2, color: '#3178c6' },
      { name: 'Python', level: 80, icon: Code2, color: '#3776ab' },
      { name: 'Java', level: 75, icon: Code2, color: '#f89820' },
      { name: 'C / C++', level: 70, icon: Code2, color: '#00599c' },
      { name: 'SQL', level: 85, icon: Database, color: '#e38d13' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Crafting responsive, accessible interfaces.',
    icon: Palette,
    skills: [
      { name: 'React', level: 90, icon: Palette, color: '#61dafb' },
      { name: 'Next.js', level: 80, icon: Palette, color: '#000000' },
      { name: 'Tailwind CSS', level: 92, icon: Palette, color: '#38bdf8' },
      { name: 'Framer Motion', level: 78, icon: Palette, color: '#e4a1f9' },
      { name: 'HTML / CSS', level: 95, icon: Palette, color: '#e34f26' },
      { name: 'Redux / Zustand', level: 82, icon: Palette, color: '#764abc' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Building scalable APIs and services.',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 85, icon: Server, color: '#3c873a' },
      { name: 'Express.js', level: 82, icon: Server, color: '#787878' },
      { name: 'RESTful APIs', level: 88, icon: Server, color: '#fb7185' },
      { name: 'GraphQL', level: 70, icon: Server, color: '#e10098' },
      { name: 'JWT / Auth', level: 80, icon: Server, color: '#f59e0b' },
      { name: 'Firebase', level: 78, icon: Server, color: '#ffca28' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Designing and querying data at scale.',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 82, icon: Database, color: '#4db33d' },
      { name: 'PostgreSQL', level: 80, icon: Database, color: '#336791' },
      { name: 'MySQL', level: 84, icon: Database, color: '#4479a1' },
      { name: 'Redis', level: 68, icon: Database, color: '#dc382d' },
      { name: 'Prisma ORM', level: 78, icon: Database, color: '#2d3748' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    description: 'Exploring intelligent systems and data science.',
    icon: BrainCircuit,
    skills: [
      { name: 'Python (ML)', level: 78, icon: BrainCircuit, color: '#3776ab' },
      { name: 'TensorFlow / Keras', level: 70, icon: BrainCircuit, color: '#ff6f00' },
      { name: 'scikit-learn', level: 75, icon: BrainCircuit, color: '#f7931e' },
      { name: 'Pandas / NumPy', level: 80, icon: BrainCircuit, color: '#150458' },
      { name: 'LLM Integration', level: 72, icon: BrainCircuit, color: '#10a37f' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'My everyday developer toolkit.',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', level: 90, icon: Wrench, color: '#f05033' },
      { name: 'Docker', level: 70, icon: Wrench, color: '#2496ed' },
      { name: 'VS Code', level: 95, icon: Wrench, color: '#007acc' },
      { name: 'Figma', level: 76, icon: Wrench, color: '#a259ff' },
      { name: 'Postman', level: 85, icon: Wrench, color: '#ff6c37' },
      { name: 'Vercel / Netlify', level: 88, icon: Wrench, color: '#000000' },
    ],
  },
]
