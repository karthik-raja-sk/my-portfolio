<div align="center">

# 👨‍💻 Karthik Raja S — Developer Portfolio

A modern, high-performance single-page portfolio built with **React 19**, **Vite 8**, **TypeScript**, and **Tailwind CSS v4**. Features glassmorphism UI, smooth Framer Motion animations, dark/light mode, SEO metadata, and a fully responsive layout.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

---

## 🖼️ Preview

![KR monogram avatar](C:\Users\samin\OneDrive\Desktop\My_portfolio\src\assets\Screenshot 2026-08-02 200233.png)



A personal portfolio for **Karthik Raja S** — a B.Tech Information Technology student from Tamil Nadu, India, passionate about Java full-stack development, AI-powered systems, and cloud-based cybersecurity. This site presents his profile, skills, projects, achievements, education, and certifications in a clean, animated, recruiter-friendly layout.

---

## ✨ Features

| Feature | Details |
| --- | --- |
| 📱 **Responsive Design** | Mobile-first layout with Tailwind CSS breakpoints; adapts from small phones to widescreen |
| 🌙 **Dark / Light Mode** | Class-based theme via `localStorage` (`portfolio-theme`) with a pre-paint script to avoid flash-of-wrong-theme |
| 🎬 **Smooth Animations** | Framer Motion — staggered reveals, scroll-triggered entrances, typewriter effect, animated skill bars |
| 💎 **Glassmorphism UI** | Reusable `glass` / `glass-strong` components with backdrop blur and subtle borders |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, and canonical URL |
| ♿ **Accessibility** | Skip-to-content link, focus-visible rings, ARIA labels/current states, Escape-to-close menu, `prefers-reduced-motion` support |
| 📄 **Resume Download** | Download button in navbar/hero backed by a real PDF in `public/resume/` |
| 🧩 **Projects** | 5 featured projects with code + live-demo links and skill badges |
| 📬 **Contact Form** | Client-side validated form with animated success state (ready to wire to a backend) |
| ⚡ **Mobile Friendly** | Hamburger menu, touch-friendly targets, no horizontal overflow on any screen size |

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide%20React-1.x-6C9CF5?style=flat-square&logo=lucide&logoColor=white)

| Area | Tool |
| --- | --- |
| **UI Library** | [React](https://react.dev/) 19 with Strict Mode |
| **Build Tool** | [Vite](https://vite.dev/) 8 + `@vitejs/plugin-react` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) 6 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) 4 (CSS-first config via `@tailwindcss/vite`) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) 12 |
| **Icons** | [Lucide React](https://lucide.dev/) 1.x + custom brand icons |
| **Linting** | [oxlint](https://oxc.rs/docs/guide/usage/linter.html) |

---

## 📁 Folder Structure

```
my-portfolio/
├── public/                          # Static assets served at root
│   ├── favicon.svg                  # Site favicon
│   └── resume/                      # Resume PDF(s)
│       └── Karthik_Raja_S_Resume_v3-1.pdf
├── src/
│   ├── assets/
│   │   └── avatar.svg               # Profile image (SVG monogram)
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.tsx       # GitHub / LinkedIn / LeetCode SVGs
│   │   ├── ui/
│   │   │   ├── Avatar.tsx           # Image/initials avatar
│   │   │   ├── Badge.tsx            # Pill badge
│   │   │   ├── Button.tsx           # Polymorphic button/anchor
│   │   │   ├── Reveal.tsx           # Scroll-in wrapper
│   │   │   ├── SectionHeading.tsx   # Eyebrow + title + description
│   │   │   ├── SocialLinks.tsx      # Social icon row
│   │   │   └── Typewriter.tsx       # Rotating-role typewriter
│   │   ├── Brand.tsx                # Logo + name lockup
│   │   ├── ProjectCard.tsx          # Project card with hover actions
│   │   └── ThemeToggle.tsx          # Light/dark switcher
│   ├── data/                        # ✏️ All editable content lives here
│   │   ├── profile.ts               # Name, tagline, contact, socials, stats
│   │   ├── projects.ts              # Project list + repo links
│   │   ├── achievements.ts          # Awards & recognition
│   │   ├── skills.ts                # Skill groups & levels
│   │   └── education.ts             # Education + certifications
│   ├── hooks/
│   │   ├── useActiveSection.ts      # Scroll-spy for nav highlighting
│   │   ├── useTheme.ts              # Dark/light theme state
│   │   └── useTypewriter.ts         # Typewriter animation loop
│   ├── layouts/
│   │   ├── RootLayout.tsx           # App shell + lazy-loaded sections
│   │   ├── Navbar.tsx               # Fixed glass navigation
│   │   └── Footer.tsx               # Links, connect, back-to-top
│   ├── sections/                    # One component per page section
│   │   ├── Hero.tsx                 # Intro, typewriter, avatar, CTAs
│   │   ├── About.tsx                # Summary, quick facts, stats
│   │   ├── Skills.tsx               # Animated skill bars
│   │   ├── Projects.tsx             # Project grid
│   │   ├── Achievements.tsx         # Milestones & recognition
│   │   ├── Education.tsx            # Academic timeline
│   │   ├── Certifications.tsx       # Credential cards
│   │   └── Contact.tsx              # Contact info + form
│   ├── styles/
│   │   └── globals.css              # Tailwind v4 theme + base styles
│   ├── types/
│   │   └── index.ts                 # Shared TypeScript interfaces
│   ├── utils/
│   │   ├── cn.ts                    # Class name helper
│   │   ├── motion.ts                # Shared Framer Motion variants
│   │   └── scroll.ts                # Smooth scroll helper
│   ├── App.tsx                      # Root component
│   └── main.tsx                     # Entry point
├── index.html                       # SEO meta, fonts, theme pre-paint script
├── package.json
├── vite.config.ts                   # Vite + Tailwind + `@` alias config
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── .oxlintrc.json                   # Lint rules
```

---

## 🚀 Installation

Clone the repository and start developing:

```bash
# Clone the repo
git clone https://github.com/karthik-raja-sk/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

---

## 📦 Build

Create an optimized production build and preview it locally:

```bash
# Type-check + build for production
npm run build

# Preview the production build (http://localhost:4173)
npm run preview

# Lint the codebase
npm run lint
```

---

## 🧭 Project Sections

| # | Section | Highlights |
| --- | --- | --- |
| 1 | **Hero** | Animated intro, typewriter roles, avatar card, CTAs, social links |
| 2 | **About** | Professional summary, quick facts, career objective, stats |
| 3 | **Skills** | 6 groups with animated proficiency bars |
| 4 | **Projects** | 5 featured projects with code/live links |
| 5 | **Achievements** | Awards, internships, and problem-solving milestones |
| 6 | **Education** | Degree, HSC, and SSLC timeline with scores |
| 7 | **Certifications** | NPTEL, Infosys, and NASSCOM credentials |
| 8 | **Contact** | Contact cards, email/phone, social links, contact form |

---

## 🎨 Customization

All content is data-driven — you can update the entire site without touching UI components.

| File | What to change |
| --- | --- |
| `src/data/profile.ts` | Name, title, tagline, summary, objective, location, phone, email, resume URL, social links, stats |
| `src/data/projects.ts` | Project list — titles, descriptions, tech tags, GitHub links, gradients, icons |
| `src/data/achievements.ts` | Award/recognition cards (title, org, year, description) |
| `src/data/education.ts` | Academic history **and** certification entries |
| `src/data/skills.ts` | Skill groups, names, levels, and colors |
| `src/sections/Contact.tsx` | Contact section layout; contact details (email/phone) live in `profile.ts` |
| `public/resume/` | Drop in your resume PDF; update `resumeUrl` in `profile.ts` if you rename it |
| `src/assets/avatar.svg` | Replace with your profile photo (keeps the `Avatar` component's `src` prop) |

> 💡 There is no separate `contact.ts` — contact info is edited in `src/data/profile.ts`, and the section markup lives in `src/sections/Contact.tsx`.

---

## ⚡ Performance

- 📱 **Responsive** — fluid grids and breakpoints across all devices
- 🧠 **Code Splitting** — every below-the-fold section is loaded via `React.lazy` + `Suspense` (each compiles to its own chunk)
- ⏳ **Lazy Loading** — heavy sections (Contact, Projects, etc.) load only when needed
- 🔍 **SEO** — meta/OG/Twitter tags and JSON-LD structured data for rich search results
- ♿ **Accessibility** — keyboard-friendly, ARIA-annotated, reduced-motion aware
- 🔒 **TypeScript** — type-safe data models and components (`tsc -b` runs as part of the build)

---

## 🌐 Deployment

### ▲ Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repository.
3. Vercel auto-detects Vite — no configuration needed.
4. Click **Deploy**. Your site is live at `https://<project>.vercel.app`.

### 🟠 Netlify

1. Push this repo to GitHub.
2. Go to [netlify.com](https://www.netlify.com) → **Add new site** → **Import an existing project**.
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**. Your site is live at `https://<site>.netlify.app`.

> After deploying, update `index.html` — replace the `your-portfolio-url.dev/` placeholders (canonical, `og:url`, JSON-LD `url`) with your real domain.

---

## 🗺️ Future Improvements

- 📬 **Contact form backend** — connect the form to a serverless endpoint (e.g. Formspree, Resend) for real submissions
- 🗒️ **Blog / Projects detail pages** — add React Router for full page routes and deep linking
- 🌍 **Internationalization (i18n)** — English/Tamil language switcher
- 🧪 **Testing** — unit tests (Vitest + Testing Library) and end-to-end coverage
- 🔄 **Content automation** — pull projects from GitHub API instead of static data
- 🚀 **CI/CD** — automated lint, type-check, and build on every PR
- 📊 **Analytics** — privacy-friendly page view tracking

---

## 👤 Author

**Karthik Raja S** — B.Tech Information Technology student, Java & Full Stack Developer, AI & RAG enthusiast.

| | |
| --- | --- |
| **GitHub** | [github.com/karthik-raja-sk](https://github.com/karthik-raja-sk) |
| **LinkedIn** | [linkedin.com/in/karthik-raja-s-209a672a5](https://www.linkedin.com/in/karthik-raja-s-209a672a5/) |
| **LeetCode** | [leetcode.com/u/PdfLd9zpUA](https://leetcode.com/u/PdfLd9zpUA/) |
| **Email** | [saminathankarthikraja@gmail.com](mailto:saminathankarthikraja@gmail.com) |

---

<p align="center">
  Built with ❤️ using <a href="https://react.dev/">React</a>, <a href="https://vite.dev/">Vite</a>, <a href="https://www.typescriptlang.org/">TypeScript</a>, and <a href="https://tailwindcss.com/">Tailwind CSS</a>.<br>
  © 2026 Karthik Raja S · All rights reserved.
</p>
