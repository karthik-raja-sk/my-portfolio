import type { EducationItem, Certification } from '@/types'

export const education: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Information Technology',
    institution: 'XYZ Institute of Technology',
    location: 'Kolkata, India',
    period: '2022 – 2026',
    score: 'CGPA: 8.9 / 10',
    description:
      'Core coursework in Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and Web Technologies. Active in hackathons and developer communities.',
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary (Science)',
    institution: 'ABC Senior Secondary School',
    location: 'Kolkata, India',
    period: '2020 – 2022',
    score: 'Percentage: 92%',
    description:
      'Specialized in Physics, Chemistry, and Mathematics with Computer Science as an elective. Discovered a passion for programming through competitive coding.',
  },
  {
    id: 'secondary',
    degree: 'Secondary School',
    institution: 'ABC Senior Secondary School',
    location: 'Kolkata, India',
    period: '2019 – 2020',
    score: 'Percentage: 94%',
    description:
      'Graduated with distinction and participated in school-level science exhibitions and math olympiads.',
  },
]

export const certifications: Certification[] = [
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera · Meta',
    year: '2024',
    credentialUrl: 'https://www.coursera.org',
    skills: ['React', 'Advanced CSS', 'JavaScript', 'Testing'],
  },
  {
    id: 'aws-fundamentals',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    year: '2024',
    credentialUrl: 'https://www.credly.com',
    skills: ['Cloud Computing', 'AWS Core Services', 'Security'],
  },
  {
    id: 'tensorflow',
    title: 'Introduction to TensorFlow',
    issuer: 'DeepLearning.AI',
    year: '2023',
    credentialUrl: 'https://www.coursera.org',
    skills: ['TensorFlow', 'Neural Networks', 'Python'],
  },
  {
    id: 'mongodb',
    title: 'MongoDB Developer Certification',
    issuer: 'MongoDB University',
    year: '2023',
    credentialUrl: 'https://learn.mongodb.com',
    skills: ['MongoDB', 'Aggregation', 'Node.js'],
  },
]
