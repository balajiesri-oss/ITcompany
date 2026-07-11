# TechNova Solutions

Modern responsive IT company website built with React, Vite, Tailwind CSS, Node.js, Express, and PostgreSQL.

## Structure

- `frontend` - React + Vite website, chatbot, lead admin dashboard, dark/light mode.
- `backend` - Express API for contact forms, chatbot leads, newsletter signups, and PostgreSQL persistence.

## Quick Start

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.
Backend runs on `http://localhost:5000`.

## Backend Environment

Create `backend/.env`:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/technova
CORS_ORIGIN=http://localhost:5173
```

If `DATABASE_URL` is not set, the API falls back to in-memory storage for local demos.

## Deployment

- Deploy `frontend` to Vercel.
- Deploy `backend` to Render with a PostgreSQL database.
- Set `VITE_API_URL` in Vercel to your Render API URL.
