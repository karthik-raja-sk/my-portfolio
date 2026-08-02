// TODO: Replace the `live` URLs below with the real demo link for each project (currently points to the GitHub profile).
import { FileSearch, Music, BookOpen, ShieldCheck, Lock } from 'lucide-react'
import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ai-resume-matcher',
    title: 'AI Resume Job Matcher',
    description:
      'AI-powered tool that matches resumes to job descriptions, scores the fit, and generates tailored suggestions so candidates can improve their resumes before applying.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Hugging Face', 'RAG'],
    github: 'https://github.com/karthik-raja-sk',
    live: 'https://github.com/karthik-raja-sk', // TODO
    gradient: 'from-indigo-500 via-violet-500 to-fuchsia-500',
    icon: FileSearch,
  },
  {
    id: 'mood-music-ai',
    title: 'Mood Music AI',
    description:
      'Full-stack playlist generator that classifies the user’s mood from a short text input and curates a personalized playlist using a scikit-learn model behind a FastAPI backend and React frontend.',
    technologies: ['Python', 'FastAPI', 'React', 'scikit-learn'],
    github: 'https://github.com/karthik-raja-sk',
    live: 'https://github.com/karthik-raja-sk', // TODO
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    icon: Music,
  },
  {
    id: 'adaptive-rag-qa',
    title: 'Adaptive RAG Q&A System',
    description:
      'Retrieval-augmented question answering system that adapts its retrieval strategy to query complexity — lightweight conversational retrieval for simple questions, multi-hop RAG for complex ones.',
    technologies: ['LangChain', 'Hugging Face', 'RAG', 'Python', 'FastAPI'],
    github: 'https://github.com/karthik-raja-sk',
    live: 'https://github.com/karthik-raja-sk', // TODO
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: BookOpen,
  },
  {
    id: 'cloudsentinel-x',
    title: 'CloudSentinel X',
    description:
      'Cloud security monitoring dashboard that ingests logs, detects anomalies, and surfaces real-time alerts through a clean FastAPI + React interface, deployed with Docker.',
    technologies: ['Python', 'FastAPI', 'Docker', 'React'],
    github: 'https://github.com/karthik-raja-sk',
    live: 'https://github.com/karthik-raja-sk', // TODO
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    icon: ShieldCheck,
  },
  {
    id: 'dpdp-pii-redaction',
    title: 'DPDP-Compliant PII Discovery & Redaction',
    description:
      'Privacy engineering tool that uses NER models to discover personally identifiable information across documents and automatically redact it to help organizations meet India’s DPDP compliance requirements.',
    technologies: ['Python', 'Hugging Face', 'NER', 'FastAPI', 'Docker'],
    github: 'https://github.com/karthik-raja-sk',
    live: 'https://github.com/karthik-raja-sk', // TODO
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    icon: Lock,
  },
]
