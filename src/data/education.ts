import type { EducationItem, Certification } from '@/types'

export const education: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Information Technology',
    institution: 'VSB Engineering College',
    location: 'Tamil Nadu',
    period: '2023 – 2027',
    score: 'CGPA: 8.145',
    description:
      'Coursework: OOP with Java, Data Structures, DBMS, and Computer Networks. Focused on Java full-stack development, AI-powered systems, and cloud-based cybersecurity.',
  },
  {
    id: 'hsc',
    degree: 'Class XII (HSC)',
    institution: 'Ponnu Matriculation Higher Secondary School',
    location: 'Tamil Nadu',
    period: '2022 – 2023',
    score: 'Score: 86%',
    description: 'Completed Higher Secondary education in the Science stream.',
  },
  {
    id: 'sslc',
    degree: 'Class X (SSLC)',
    institution: 'Ponnu Matriculation Higher Secondary School',
    location: 'Tamil Nadu',
    period: '2020 – 2021',
    score: 'Score: 86%',
    description: 'Completed Secondary School Leaving Certificate (SSLC).',
  },
]

// TODO: Add credential URLs if you have them; years are best-effort estimates.
export const certifications: Certification[] = [
  {
    id: 'nptel-java',
    title: 'Introduction to Java — NPTEL Silver Medal',
    issuer: 'NPTEL (IIT/NIT)',
    year: '2025',
    skills: ['Java', 'OOP'],
  },
  {
    id: 'infosys-java-dbms',
    title: 'Java Programming & DBMS',
    issuer: 'Infosys Certified',
    year: '2025',
    skills: ['Java', 'DBMS'],
  },
  {
    id: 'nasscom-genai',
    title: 'Generative AI Fluency',
    issuer: 'NASSCOM FutureSkills',
    year: '2025',
    skills: ['Generative AI', 'AI/ML'],
  },
]
