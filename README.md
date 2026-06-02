# radius-landing

Simple landing scaffold with Tailwind and Supabase submission form.

Setup

```powershell
cd e:\radius\radius-landing
npm install
npm run dev
```

Deployment

- Connect repository to Vercel, build command: `npm run build`, publish: `dist`.

Supabase

- Copy `.env.example` to `.env` and fill `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- Create a table named `submissions` with fields you need (e.g., id, name, email, message, created_at).
