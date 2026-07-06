# PixelFix — AI Video Repair Tool

**How to Fix Pixelated Video** — Free AI-powered online tool built with Next.js (SSR).

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Rendering:** Server-Side Rendering (SSR) + Static Generation
- **SEO:** Full metadata API, sitemap.xml, robots.txt, JSON-LD structured data
- **Styling:** Pure CSS (no external framework)
- **Hosting:** Any Node.js platform (Vercel, CloudStudio, etc.)

## Pages

| Route | Description | Type |
|-------|-------------|------|
| `/` | Landing page — product intro, how it works, features, FAQ | Static |
| `/fix` | Video repair tool — upload, preview, AI repair simulation, download | Client |
| `/help` | Help center — docs, troubleshooting, privacy, FAQ | Static |

## Getting Started

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## SEO Features

- **Metadata API** — page-specific titles, descriptions, OpenGraph tags
- **sitemap.ts** — auto-generated XML sitemap
- **robots.ts** — search engine crawling rules
- **JSON-LD** — SoftwareApplication + HowTo structured data
- **Semantic HTML** — `<h1>` to `<h3>` hierarchy, `<section>`, `<article>`, `<nav>`, `<aside>`
- **Canonical URLs** — per-page canonical tags via metadata

## Project Structure

```
pixelfix/
├── app/
│   ├── layout.tsx        # Root layout + global metadata
│   ├── page.tsx          # Homepage (SSR)
│   ├── globals.css       # Global styles
│   ├── sitemap.ts        # Dynamic sitemap
│   ├── robots.ts         # Robots configuration
│   ├── fix/
│   │   └── page.tsx      # /fix — Video repair tool (client)
│   └── help/
│       └── page.tsx      # /help — Help center (static)
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── BeforeAfterDemo.tsx  # Canvas comparison widget
│   └── FaqAccordion.tsx  # FAQ accordion widget
├── public/
│   └── favicon.svg
├── next.config.js
├── tsconfig.json
└── package.json
```

## Key

`fix pixelated video`, `how to fix pixelated video`, `repair pixelated video`, `video enhancement AI`
