import { Link } from '@tanstack/react-router'
import { profile } from '../../data/profile'

const TECH_LIMIT = 6

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="inline-block">
      <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-14">
      <div className="page-wrap">
        <p className="island-kicker mb-2">Personal products</p>
        <h2 className="display-title mb-8 text-4xl font-bold text-(--sea-ink)">
          Portfolio
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {profile.portfolio.map((item) => (
            <article
              key={item.slug}
              className="island-shell feature-card flex flex-col rounded-2xl p-6"
            >
              <h3 className="mb-2 text-lg font-bold text-(--sea-ink)">
                {item.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-(--sea-ink-soft)">
                {item.description}
              </p>
              {item.achievements.length > 0 && (
                <ul className="mb-5 flex-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-(--sea-ink-soft)">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {item.tech.slice(0, TECH_LIMIT).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-(--chip-line) bg-(--chip-bg) px-2.5 py-0.5 text-[11px] font-semibold text-(--sea-ink-soft)"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3 text-sm font-semibold">
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: item.slug }}
                  className="inline-flex items-center gap-1.5 text-blue-600 no-underline transition hover:text-blue-500"
                >
                  View details
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <div className="flex items-center gap-3">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-(--sea-ink-soft) no-underline transition hover:text-(--sea-ink)">
                      GitHub <ExternalLinkIcon />
                    </a>
                  ) : null}
                  {item.live ? (
                    <a href={item.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-(--sea-ink-soft) no-underline transition hover:text-(--sea-ink)">
                      Live <ExternalLinkIcon />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
