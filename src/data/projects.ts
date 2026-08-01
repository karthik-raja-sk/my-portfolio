// TODO: Replace the `github` and `live` URLs below with the real repository and demo links for each project.
import { FileSearch, Music, BookOpen, ShieldCheck, Lock } from 'lucide-react'
import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ai-resume-matcher',
    title: 'AI Resume Job Matcher',
    description:
      'AI-powered tool that matches resumes to job descriptions and suggests improvements.',
    longDescription:
      'Uses retrieval-augmented generation to parse resumes, extract skills, and score fit against job descriptions. Produces weighted match scores with actionable feedback to improve resume–job alignment.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Hugging Face', 'RAG'],
    github: 'https://github.com/karthik-raja', // TODO
    live: 'https://github.com/karthik-raja', // TODO
    gradient: 'from-indigo-500 via-violet-500 to-fuchsia-500',
    icon: FileSearch,
    featured: true,
  },
  {
    id: 'mood-music-ai',
    title: 'Mood Music AI',
    description: 'Playlist app that curates music based on your detected mood.',
    longDescription:
      'Combines a mood-detection model with a music recommendation engine to generate personalized playlists in real time, adapting to user preferences.',
    technologies: ['Python', 'FastAPI', 'React', 'scikit-learn'],
    github: 'https://github.com/karthik-raja', // TODO
    live: 'https://github.com/karthik-raja', // TODO
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    icon: Music,
    featured: true,
  },
  {
    id: 'adaptive-rag-qa',
    title: 'Adaptive RAG Question Answering System',
    description:
      'A retrieval-augmented QA system that adapts its retrieval strategy to query complexity.',
    longDescription:
      'Implements adaptive retrieval routing — vector search, web search, and follow-ups — using LangChain and Hugging Face embeddings to return accurate, grounded answers.',
    technologies: ['LangChain', 'Hugging Face', 'RAG', 'Python', 'FastAPI'],
    github: 'https://github.com/karthik-raja', // TODO
    live: 'https://github.com/karthik-raja', // TODO
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: BookOpen,
    featured: true,
  },
  {
    id: 'cloudsentinel-x',
    title: 'CloudSentinel X',
    description:
      'Cloud security monitoring dashboard with anomaly detection and alerts.',
    longDescription:
      'Aggregates cloud logs, applies anomaly-detection rules, and surfaces actionable alerts through an intuitive monitoring dashboard.',
    technologies: ['Python', 'FastAPI', 'Docker', 'React'],
    github: 'https://github.com/karthik-raja', // TODO
    live: 'https://github.com/karthik-raja', // TODO
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    icon: ShieldCheck,
  },
  {
    id: 'dpdp-pii-redaction',
    title: 'DPDP-Compliant PII Discovery & Redaction',
    description:
      'Privacy tool that discovers and redacts personally identifiable information for DPDP compliance.',
    longDescription:
      'Uses Hugging Face NER models to detect PII such as names, phone numbers, and emails, then applies auditable redaction aligned with India\u2019s DPDP Act.',
    technologies: ['Python', 'Hugging Face', 'NER', 'FastAPI', 'Docker'],
    github: 'https://github.com/karthik-raja', // TODO
    live: 'https://github.com/karthik-raja', // TODO
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    icon: Lock,
  },
]
