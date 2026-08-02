import type { ComponentType, SVGProps } from 'react'
import type { LucideIcon } from 'lucide-react'

export type IconType = ComponentType<SVGProps<SVGSVGElement>>

export interface SocialLink {
  name: string
  url: string
  icon: IconType
  label: string
}

export interface Skill {
  name: string
  level: number
  icon: LucideIcon
  color: string
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  icon: LucideIcon
  skills: Skill[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  github: string
  live?: string
  gradient: string
  icon: LucideIcon
}

export interface Achievement {
  id: string
  title: string
  organization: string
  year: string
  description: string
  icon: LucideIcon
  color: string
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  score: string
  description: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  credentialUrl?: string
  skills: string[]
}
