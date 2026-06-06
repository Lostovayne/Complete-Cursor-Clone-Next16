<div align="center">
	<h1>Polaris</h1>
	<p><strong>AI-powered, real-time code editor built for professional workflows.</strong></p>
	<p>
		<img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white" />
		<img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" />
		<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
		<img alt="Convex" src="https://img.shields.io/badge/Convex-Realtime-5B2EE5?logo=convex&logoColor=white" />
		<img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white" />
		<img alt="Google AI" src="https://img.shields.io/badge/Google-Gemini-4285F4?logo=google&logoColor=white" />
	</p>
</div>

**Polaris** is an AI-powered real-time code editor designed for professional developer workflows. Built on Next.js 16 with Convex for real-time data, it provides a modern foundation for collaborative coding with AI assistance.

---

## ✨ Highlights

- **Real-time data** powered by Convex with live queries and mutations.
- **AI-assisted coding** using Google Gemini for code generation and suggestions.
- **Background job execution** via Inngest for async AI workflows.
- **Authentication** with Clerk for secure user sessions.
- **Modern UI** with Tailwind CSS, Radix primitives, and shadcn/ui components.
- **Monitoring** with Sentry for error tracking and performance insights.

---

## 🧭 Current Status

Polaris is in **early development**. The foundation is set up with:

- ✅ Authentication flow (Clerk)
- ✅ Real-time database (Convex)
- ✅ Background jobs (Inngest)
- ✅ Error monitoring (Sentry)
- ✅ Modern UI components (Radix + shadcn/ui)
- 🔲 CodeMirror editor integration
- 🔲 AI-powered code suggestions
- 🔲 Real-time collaboration features

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, Radix UI, shadcn/ui
- **Realtime**: Convex
- **AI**: Google Gemini (via Vercel AI SDK)
- **Auth**: Clerk
- **Background Jobs**: Inngest
- **Monitoring**: Sentry

---

## 🚀 Getting Started

### Prerequisites

- Node.js 24+
- pnpm 11+
- Convex account + deployed project
- Clerk account
- Google AI API key
- Inngest account

### Installation

```bash
git clone <your-repo-url>
cd cursor-clone
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```

Required variables:
- `CLERK_SECRET_KEY` - Clerk secret key
- `CLERK_JWT_ISSUER_DOMAIN` - Clerk JWT issuer
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CONVEX_DEPLOYMENT` - Convex deployment URL
- `NEXT_PUBLIC_CONVEX_URL` - Convex public URL
- `GOOGLE_GENERATIVE_AI_API_KEY` - Google AI API key
- `SENTRY_AUTH_TOKEN` - Sentry auth token

### Run the App

Start all services (Next.js, Convex, Inngest):

```bash
pnpm dev:all
```

Or run them separately:

```bash
# Terminal 1 - Next.js
pnpm dev

# Terminal 2 - Convex
pnpm convex:dev

# Terminal 3 - Inngest
pnpm inngest:dev
```

Open http://localhost:3000 to view the application.

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages and layouts
├── components/             # Shared UI components
│   └── ui/                 # shadcn/ui components
├── convex/                 # Convex functions, schema, and backend logic
├── features/               # Feature-specific modules
│   └── auth/               # Authentication components
├── hooks/                  # React hooks
├── inngest/                # Background job functions
├── lib/                    # Utility functions and helpers
└── public/                 # Static assets
```

---

## 🧑‍💻 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 🔒 Security

If you discover a security vulnerability, please report it responsibly. Do not open a public issue.

---

## 📬 Contact

For questions or collaboration, open an issue or reach out to the maintainer.
