import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { profile } from '../data/profile'

export const Route = createFileRoute('/portfolio/$slug')({
  loader: ({ params }) => {
    const item = profile.portfolio.find((p) => p.slug === params.slug)
    if (!item) throw notFound()
    return { item }
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData.item.name} — ${profile.name}`,
      },
      {
        name: 'description',
        content: loaderData.item.description,
      },
    ],
  }),
  component: PortfolioDetail,
})

function PortfolioDetail() {
  const { item } = Route.useLoaderData()

  return (
    <main className="px-4 py-12">
      <div className="page-wrap">
        <Link
          to="/"
          hash="portfolio"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-(--sea-ink-soft) no-underline transition hover:text-(--sea-ink)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to portfolio
        </Link>

        <div className="island-shell mb-8 rounded-2xl p-8">
          <p className="island-kicker mb-3">Portfolio</p>
          <h1 className="display-title mb-4 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
            {item.name}
          </h1>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-(--sea-ink-soft)">
            {item.description}
          </p>

          {(item.url || item.live) ? (
            <div className="flex flex-wrap gap-3">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-(--chip-line) bg-(--chip-bg) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:border-(--lagoon) hover:text-blue-600"
                >
                  GitHub
                </a>
              ) : null}
              {item.live ? (
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white no-underline transition hover:from-blue-500 hover:to-blue-600"
                >
                  Live site
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {item.whatItDoes.length > 0 ? (
              <div className="island-shell rounded-2xl p-6">
                <p className="island-kicker mb-4">What it does</p>
                <ul className="m-0 space-y-3 p-0 list-none">
                  {item.whatItDoes.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm leading-relaxed text-(--sea-ink-soft)">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-[10px] font-bold text-blue-600">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="island-shell rounded-2xl p-6">
              <p className="island-kicker mb-4">Privacy</p>
              <p className="m-0 text-sm leading-relaxed text-(--sea-ink-soft)">
                {item.privacy}
              </p>
            </div>
          </div>

          <div className="island-shell rounded-2xl p-6">
            <p className="island-kicker mb-4">Tech stack</p>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1 text-xs font-semibold text-(--sea-ink)"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
