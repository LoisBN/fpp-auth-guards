# Auth Guards — Protected Routes

Build a reusable auth guard component to protect routes and redirect unauthenticated users.

## What You'll Learn
- Auth guard pattern for route protection
- Conditional rendering based on auth state
- supabase.auth.onAuthStateChange for listening to auth events
- Session persistence across page reloads
- Route redirects with useNavigate
- Creating reusable AuthGuard wrapper component

## Tech Stack
- **React Router v7** (framework mode) — pages and routing
- **Supabase** — database and auth
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript

## Getting Started

```bash
# 1. Clone this repo
git clone https://github.com/LoisBN/fpp-auth-guards.git
cd fpp-auth-guards

# 2. Install dependencies
npm install

# 3. Copy the environment file
cp .env.example .env
# Add your Supabase URL and anon key to .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Project Structure

```
fpp-auth-guards/
├── app/
│   ├── components/
│   │   ├── AuthGuard.tsx     # Guard wrapper component
│   │   └── Navbar.tsx        # Conditional navigation
│   ├── routes/
│   │   ├── home.tsx          # Public page
│   │   ├── login.tsx         # Sign in page
│   │   ├── dashboard.tsx     # Protected page
│   │   ├── settings.tsx      # Protected page
│   │   └── routes.ts         # Route definitions
│   └── lib/
│       └── supabase.ts       # Supabase client setup
├── .env.example
├── package.json
└── README.md
```

## Exercise Tasks

1. **Explore the AuthGuard component** — Understand how it wraps protected pages
2. **Add real auth check** — Implement getUser() inside AuthGuard to verify authentication
3. **Redirect unauthenticated users** — Redirect to /login if user is not authenticated
4. **Show different nav** — Display different navigation items for logged in vs logged out users
5. **Persist with onAuthStateChange** — Use auth state listener to maintain session across page reloads

## Hints

- AuthGuard wraps protected pages: `<AuthGuard><YourPage /></AuthGuard>`
- Use useEffect to check auth status on component mount
- `supabase.auth.onAuthStateChange((event, session) => {...})` listens for login/logout events
- Navigate with: `const navigate = useNavigate()` then `navigate('/login')`
- Check user: `const { data: { user } } = await supabase.auth.getUser()`
- Store auth state in context or state for navbar to access
- Unsubscribe from listener: `const { data: { subscription } } = supabase.auth.onAuthStateChange(...); return () => subscription?.unsubscribe();`

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
