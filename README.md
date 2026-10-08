<div align="center">

# Md. Hasibul Hossain — Portfolio

**A resume-driven, video-first personal portfolio built with Next.js, React and TypeScript.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://portfolio-v1m1.vercel.app)

[**Live Demo ↗**](https://portfolio-v1m1.vercel.app) · [**Résumé ↓**](./public/resume.pdf) · [GitHub ↗](https://github.com/Hasib30293)

</div>

---

## Full Project View

<div align="center">

<<<<<<< HEAD
![Portfolio full project view](<portfolio-v1m1.vercel.app_ (1).png>)
=======
![Portfolio full project view](<<img width="1334" height="16384" alt="portfolio-v1m1 vercel app_ (1)" src="https://github.com/user-attachments/assets/f58c29b0-33eb-42f3-bf8a-73f9aacfd582" />)
>>>>>>> 905722a1b5e7511f1bd05a243b4a90ad9effb9ca

</div>

---

## About

A polished single-page portfolio sourced directly from `resume.pdf`, featuring a self-introducing hero video (`public/hero/intro.mp4`) with smart sound handling, scroll-aware navigation, and a clean editorial design.

## ✨ Highlights

- 🎥 **Video-first hero** — intro video with autoplay, unmute-on-scroll-up, and one-tap sound toggle
- 🧭 **Scroll-aware navigation** — active section highlighting via `IntersectionObserver`
- 📱 **Fully responsive** — desktop grid plus a mobile menu overlay
- ♿ **Accessible** — semantic markup, focusable controls, reduced-motion friendly
- ⚡ **Fast by default** — Next.js App Router, static content, lazy-loaded images
- 📄 **Résumé download** — one click from the hero and about sections

## 🗂 Sections

| # | Section | What's inside |
|---|---------|---------------|
| 01 | Hero | Intro video, tagline, CTAs |
| 02 | About | Summary, developer ID card, quick facts |
| 03 | Skills | 21-item toolkit grid (frontend, languages, backend, tools) |
| 04 | Selected Work | CookBook, Earn-N-Learn, WorksLink — with demo videos |
| 05 | Experience | Education timeline + internship availability |
| 06 | Research | Ongoing research papers and club activities |
| 07 | Contact | Email, phone, GitHub, LinkedIn |

> Certifications and achievement sections were omitted because the résumé does not provide certification records or platform achievement totals.

## 🛠 Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, TypeScript 5.6 |
| Styling | Hand-crafted CSS (`globals.css`) |
| Content | `src/lib/data.ts` — single source of truth, sourced from `resume.pdf` |
| Deployment | Vercel |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Metadata, fonts, shell
│   │   ├── page.tsx        # All sections (single page)
│   │   └── globals.css     # Full design system
│   └── lib/
│       └── data.ts         # PROFILE, SKILLS, PROJECTS, EDUCATION, RESEARCH
├── public/
│   ├── hero/intro.mp4      # Self-introduction video
│   ├── portrait.png        # ID-card portrait
│   ├── resume.pdf          # Downloadable résumé
│   └── workslink.png       # WorksLink screenshot
└── package.json
```

## ✏️ Editing Content

All copy lives in [`src/lib/data.ts`](./src/lib/data.ts) — update `PROFILE`, `SKILLS`, `PROJECTS`, `EDUCATION`, or `RESEARCH` and the UI follows. To replace the hero video, swap `public/hero/intro.mp4`.

## 📬 Contact

<div align="center">

**Md. Hasibul Hossain** · Front-End Developer · Dhaka, Bangladesh

[Email](mailto:hasibhossain30293@gmail.com) · [GitHub](https://github.com/Hasib30293) · [LinkedIn](https://linkedin.com/in/hasibul-hossain293)

*Looking for a front-end internship — open to code reviews and backend collaboration.*

</div>
