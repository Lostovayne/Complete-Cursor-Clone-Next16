<div align="center">
  <h1>Polaris</h1>
  <p><strong>AI-powered, real-time code editor built for professional workflows.</strong></p>
  <p>
    <a href="https://nextjs.org"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white" /></a>
    <a href="https://react.dev"><img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" /></a>
    <a href="https://www.typescriptlang.org"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" /></a>
    <a href="https://www.convex.dev"><img alt="Convex" src="https://img.shields.io/badge/Convex-Realtime-5B2EE5?logo=convex&logoColor=white" /></a>
    <a href="https://tailwindcss.com"><img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white" /></a>
    <a href="https://ai.google.dev"><img alt="Google AI" src="https://img.shields.io/badge/Google-Gemini-4285F4?logo=google&logoColor=white" /></a>
  </p>
  <p>
    <a href="https://github.com/Lostovayne/Cursor-clone-editor"><img alt="GitHub" src="https://img.shields.io/badge/View_on-GitHub-181717?logo=github&logoColor=white" /></a>
  </p>
</div>

---

## Overview

**Polaris** is an AI-powered real-time code editor designed for professional developer workflows. Built on Next.js 16 with Convex for real-time data, it provides a modern foundation for collaborative coding with AI assistance. The project integrates Clerk for authentication, Inngest for background job orchestration, and Google Gemini for intelligent code generation and suggestions.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js 16 (App Router), React 19, TypeScript 6 | Application framework and UI |
| Styling | Tailwind CSS 4, Radix UI, shadcn/ui | Design system and accessible components |
| Realtime | Convex | Live queries, mutations, and data sync |
| AI | Google Gemini (via Vercel AI SDK) | Code generation and suggestions |
| Auth | Clerk | User authentication and sessions |
| Background Jobs | Inngest | Async AI workflows and scheduled tasks |
| Monitoring | Sentry | Error tracking and performance insights |
| Web Scraping | Firecrawl | URL content extraction for AI context |
| Validation | Zod | Runtime type validation and schema definition |

---

## Features

**Implemented**
- Authentication flow with Clerk (sign-in, sign-up, session management)
- Real-time database with Convex (live queries and mutations)
- Background job execution via Inngest (async AI workflows)
- Error monitoring and performance tracking with Sentry
- Modern UI component library (Radix UI + shadcn/ui)

**Planned**
- CodeMirror editor integration
- AI-powered code suggestions and generation
- Real-time collaboration features

---

## Getting Started

### Prerequisites

- Node.js 24 or later
- pnpm (or bun) as package manager
- Convex account and deployed project
- Clerk account
- Google AI API key
- Inngest account

### Installation

```bash
git clone https://github.com/Lostovayne/Cursor-clone-editor.git
cd Cursor-clone-editor
pnpm install
```

### Environment Variables

Copy the example file and fill in your credentials:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `CLERK_SECRET_KEY` | Clerk secret key for server-side authentication |
| `CLERK_JWT_ISSUER_DOMAIN` | Clerk JWT issuer domain |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for client-side auth |
| `CONVEX_DEPLOYMENT` | Convex deployment URL |
| `NEXT_PUBLIC_CONVEX_URL` | Convex public URL for client queries |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI API key for Gemini access |
| `SENTRY_AUTH_TOKEN` | Sentry auth token for source map uploads |

### Run the App

Start all services concurrently (Next.js + Convex + Inngest):

```bash
pnpm dev:all
```

Or run them individually in separate terminals:

```bash
# Terminal 1 - Next.js dev server
pnpm dev

# Terminal 2 - Convex backend
pnpm convex:dev

# Terminal 3 - Inngest dev server
pnpm inngest:dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

```
├── app/                    # Next.js App Router pages and layouts
│   └── api/                # API route handlers
├── components/             # Shared UI components
│   └── ui/                 # shadcn/ui components
├── convex/                 # Convex functions, schema, and backend logic
├── features/               # Feature-specific modules
│   └── auth/               # Authentication components
├── hooks/                  # Custom React hooks
├── inngest/                # Background job functions
├── lib/                    # Utility functions and helpers
└── public/                 # Static assets
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js development server |
| `pnpm dev:all` | Start all services concurrently |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint with zero warnings tolerance |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm check` | Run lint + typecheck |
| `pnpm convex:dev` | Start Convex development server |
| `pnpm inngest:dev` | Start Inngest development server |

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Security

If you discover a security vulnerability, please report it responsibly. Do not open a public issue. Instead, contact the maintainer directly through GitHub.
