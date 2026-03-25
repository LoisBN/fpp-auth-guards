# Guard the Gates — Protected Routes

Build a protectedLoader that checks auth before pages render, and update the navbar based on login state.

## Quick Start

**1. Fork this repo** — Click the **Fork** button at the top right of this page.

**2. Clone your fork:**
```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/fpp-auth-guards.git
cd fpp-auth-guards
npm install
cp .env.example .env
# Add your Supabase URL and anon key to .env
npm run dev
```

## Exercise Instructions

This repo is part of the **From Prompt to Production** course.

👉 **[Find the full exercise instructions on the course platform](https://aicode-academy.com)**

## Project Structure

```
app/
├── components/
│   ├── AuthGuard.tsx       # Guard wrapper component
│   └── Navbar.tsx          # Conditional navigation
├── routes/
│   ├── home.tsx            # Public page
│   ├── login.tsx           # Sign in page
│   ├── dashboard.tsx       # Protected page
│   ├── settings.tsx        # Protected page
│   └── routes.ts           # Route definitions
└── lib/
    └── supabase.ts         # Supabase client setup
```

## Tech Stack

- React Router v7 (framework mode)
- Supabase (auth + database)
- Tailwind CSS v4
- TypeScript

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
