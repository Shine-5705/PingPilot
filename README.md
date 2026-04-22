# PingPilot

PingPilot helps you create outreach sessions for target companies and roles, fetch relevant contacts, view them in a session table, generate personalized drafts, and optionally send emails.

## Features

- Create a session with company, role, goal, goal description, and global note.
- Normalize roles with Crustdata autocomplete before searching.
- Fetch contacts from Crustdata and store session history in SQLite.
- Enrich only top-N results to control API credits.
- View contact table with clickable LinkedIn and email links.
- Generate personalized email drafts using Gemini based on your profile + resume.
- Optionally send emails via SMTP after manual review.

## Setup

1. Create and activate a virtual environment.
2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Configure `.env` using `.env.example` keys:

- `CRUSTDATA_API_KEY`
- `CRUSTDATA_API_VERSION` (default: `2025-11-01`)
- `CRUSTDATA_BASE_URL` (default: `https://api.crustdata.com`)
- `CRUSTDATA_PEOPLE_SEARCH_PATH` (default: `/people/search`)
- `CRUSTDATA_PEOPLE_AUTOCOMPLETE_PATH` (default: `/person/search/autocomplete`)
- `CRUSTDATA_PERSON_ENRICH_PATH` (default: `/person/enrich`)
- `GEMINI_API_KEY`
- `SARVAM_API_KEY` (loaded for future use)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_FROM_EMAIL` (optional, needed only to send emails)

## Run

```bash
streamlit run app.py
```

## Frontend (ColdPing SaaS UI)

A production-style React + Tailwind frontend is available in `coldping-web`.

Run it locally:

```bash
cd coldping-web
npm install
npm run dev
```

Build for production:

```bash
cd coldping-web
npm run build
```

Primary routes:

- `/` landing page
- `/login` auth page
- `/app/dashboard` dashboard metrics + activity
- `/app/campaigns` campaign wizard
- `/app/contacts` CRM contacts table with message drawer
- `/app/templates` editable templates
- `/app/settings` profile + API settings

## What You Need Beyond Crustdata + Grok Key

To run full end-to-end outreach flow, you should also provision:

- SQLite or PostgreSQL for sessions, contacts, statuses, generated drafts, audit logs.
- SMTP provider (or transactional email API) to actually send personalized emails.
- Resume parser/extractor (or your own parser) to structure user profile/resume context.
- Auth provider (Google OAuth + email login) for user accounts.
- Queue/background worker (Celery/RQ/Redis or equivalent) for long enrichment + generation jobs.
- Rate limiting + retries for Crustdata and LLM requests.
- Secret management and encryption for API keys and SMTP credentials.
- Basic consent/compliance guardrails (unsubscribe handling, sending limits, and logging).

Recommended environment keys in addition to existing ones:

- `DATABASE_URL`
- `REDIS_URL` (if async workers/queues are used)
- `GROK_API_KEY` (or your chosen LLM key)
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` (if Google login is enabled)

## Notes

- LinkedIn actions are manual by design (links only, no auto connection requests).
- The app stores data in `pingpilot.db`.
- Crustdata requests include the required `Authorization: Bearer ...` and `x-api-version` headers.