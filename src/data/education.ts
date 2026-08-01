import type { EducationItem, Certification } from '@/types'

// TODO: Replace the placeholder institution, period, and score with your actual details.
export const education: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Information Technology',
    institution: 'Your University',
    location: 'India',
    period: '2022 – 2026',
    score: 'CGPA: --',
    description:
      'Focused on Software Engineering, Java, Full Stack Development, Artificial Intelligence, and problem solving. Active in hackathons and technical communities.',
  },
]

// TODO: Replace with your real certifications, issuers, and credential links.
export const certifications: Certification[] = [
  {
    id: 'java-spring',
    title: 'Java & Spring Boot Development',
    issuer: 'Add issuer here',
    year: '2025',
    credentialUrl: 'https://www.example.com',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    id: 'rag-langchain',
    title: 'RAG with LangChain',
    issuer: 'Add issuer here',
    year: '2025',
    credentialUrl: 'https://www.example.com',
    skills: ['LangChain', 'RAG', 'LLMs'],
  },
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Development',
    issuer: 'Add issuer here',
    year: '2024',
    credentialUrl: 'https://www.example.com',
    skills: ['React', 'Tailwind CSS', 'FastAPI'],
  },
  {
    id: 'docker',
    title: 'Docker & Containerization',
    issuer: 'Add issuer here',
    year: '2024',
    credentialUrl: 'https://www.example.com',
    skills: ['Docker', 'DevOps Basics'],
  },
]
