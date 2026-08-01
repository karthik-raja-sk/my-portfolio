import {
  ShoppingCart,
  MessageSquare,
  BrainCircuit,
  Newspaper,
  BarChart3,
  CloudSun,
} from 'lucide-react'
import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'shoply',
    title: 'Shoply — E-Commerce Platform',
    description:
      'A full-featured storefront with cart, checkout, payments, and admin dashboard.',
    longDescription:
      'Built a production-style e-commerce platform with product search, filtering, wishlist, Stripe checkout, order tracking, and a role-based admin panel. Optimized with code-splitting and image lazy-loading.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/samir-amin/shoply',
    live: 'https://shoply-demo.vercel.app',
    gradient: 'from-indigo-500 via-violet-500 to-fuchsia-500',
    icon: ShoppingCart,
    featured: true,
  },
  {
    id: 'devchat',
    title: 'DevChat — Realtime Messenger',
    description:
      'Realtime chat app with rooms, typing indicators, and read receipts.',
    longDescription:
      'Developed a realtime chat application with WebSockets, persistent history, emoji picker, and typing indicators. Includes file sharing and end-to-end read receipts.',
    technologies: ['React', 'Socket.IO', 'Node.js', 'Redis', 'MongoDB'],
    github: 'https://github.com/samir-amin/devchat',
    live: 'https://devchat-demo.vercel.app',
    gradient: 'from-sky-500 via-cyan-500 to-teal-500',
    icon: MessageSquare,
    featured: true,
  },
  {
    id: 'ai-mock-interviewer',
    title: 'AI Mock Interviewer',
    description:
      'Interview practice app with AI-generated questions and feedback.',
    longDescription:
      'Created an interview preparation tool that generates role-specific questions and provides AI-powered feedback on answers using LLM APIs. Tracks progress over time.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Prisma'],
    github: 'https://github.com/samir-amin/ai-mock-interviewer',
    live: 'https://ai-interview-demo.vercel.app',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: BrainCircuit,
    featured: true,
  },
  {
    id: 'campus-news',
    title: 'Campus News Hub',
    description:
      'News aggregator for campus events with categories and search.',
    longDescription:
      'Built a campus-focused news platform with an editorial dashboard, category tagging, full-text search, and RSS-like subscriptions. Server-rendered for SEO.',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'tRPC'],
    github: 'https://github.com/samir-amin/campus-news',
    live: 'https://campusnews-demo.vercel.app',
    gradient: 'from-rose-500 via-pink-500 to-orange-400',
    icon: Newspaper,
  },
  {
    id: 'stock-dashboard',
    title: 'Stock Analytics Dashboard',
    description:
      'Real-time market dashboard with charts, watchlists, and alerts.',
    longDescription:
      'A financial dashboard consuming market APIs with candlestick charts, technical indicators, watchlists, and custom price alerts pushed over WebSockets.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Express', 'WebSocket'],
    github: 'https://github.com/samir-amin/stock-dashboard',
    live: 'https://stocks-demo.vercel.app',
    gradient: 'from-amber-500 via-yellow-500 to-lime-500',
    icon: BarChart3,
  },
  {
    id: 'weather-app',
    title: 'WeatherWise',
    description:
      'Elegant weather app with 7-day forecasts and geolocation.',
    longDescription:
      'A polished weather application with geolocation, 7-day forecasts, animated conditions, and unit toggling. Features offline-friendly caching and PWA support.',
    technologies: ['React', 'Tailwind CSS', 'OpenWeather API', 'PWA'],
    github: 'https://github.com/samir-amin/weatherwise',
    live: 'https://weatherwise-demo.vercel.app',
    gradient: 'from-blue-500 via-indigo-500 to-violet-500',
    icon: CloudSun,
  },
]
