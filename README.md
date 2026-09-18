# Luis Trejos — personal profile

Personal site for [Luis Trejos](https://github.com/luis-trejos-tabares-gh): experience, skills, personal products, and selected work.

```bash
pnpm install
pnpm dev
```

All copy lives in [`src/data/profile.ts`](src/data/profile.ts).

## Portfolio vs Projects

- **Portfolio** (`profile.portfolio`) — personal products. Homepage cards plus a short page at `/portfolio/$slug`. First entry: **ATS Genie**, a one-session tool to analyze or assemble a resume so applicant tracking systems can parse it. Nothing is stored. Stack: Next.js, FastAPI, Groq.
- **Projects** (`profile.projects`) — selected employer/client work. Homepage cards only.

To add another personal product, append an object to `profile.portfolio` with `slug`, `name`, `description`, `achievements`, `whatItDoes`, `privacy`, `tech`, and optional `url` (GitHub) / `live` (deployed app).

To show a résumé download, drop a PDF at `public/resume.pdf` and set `contact.cvUrl` to `/resume.pdf`.
