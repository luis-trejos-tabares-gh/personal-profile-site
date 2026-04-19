import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { profile } from '../data/profile'

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = profile.projects.find((p) => p.slug === params.slug)
    if (!project) throw notFound()
    return { project }
  },
  component: ProjectDetail,
})

function ProjectDetail() {
  const { project } = Route.useLoaderData()

  return (
    <main className="px-4 py-12">
      <div className="page-wrap">
        {/* Back */}
        <Link
          to="/"
          hash="projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-(--sea-ink-soft) no-underline transition hover:text-(--sea-ink)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to projects
        </Link>

        {/* Header */}
        <div className="island-shell mb-8 rounded-2xl p-8">
          <p className="island-kicker mb-3">Project</p>
          <h1 className="display-title mb-4 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
            {project.name}
          </h1>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-(--sea-ink-soft)">
            {project.longDescription}
          </p>

          {/* Links */}
          {(project.url || project.live) && (
            <div className="flex flex-wrap gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-(--chip-line) bg-(--chip-bg) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:border-(--lagoon) hover:text-blue-600"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white no-underline shadow shadow-[rgba(37,99,235,0.3)] transition hover:from-blue-500 hover:to-blue-600"
                >
                  Live site ↗
                </a>
              )}
            </div>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left column: achievements + tech */}
          <div className="space-y-8 lg:col-span-1">

            {/* Key achievements */}
            {project.achievements.length > 0 && (
              <div className="island-shell rounded-2xl p-6">
                <p className="island-kicker mb-4">Key achievements</p>
                <ul className="m-0 space-y-3 p-0 list-none">
                  {project.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-(--sea-ink-soft)">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-[10px] font-bold text-blue-600">
                        {i + 1}
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div className="island-shell rounded-2xl p-6">
              <p className="island-kicker mb-4">Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
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

          {/* Right column: arch diagrams */}
          <div className="space-y-6 lg:col-span-2">
            <p className="island-kicker">Architecture</p>

            {project.diagrams.length > 0 ? (
              project.diagrams.map((diagram, i) => (
                <div key={i} className="island-shell rounded-2xl p-6">
                  <h3 className="mb-2 text-base font-bold text-(--sea-ink)">{diagram.title}</h3>
                  <p className="mb-4 text-sm text-(--sea-ink-soft)">{diagram.description}</p>
                  {diagram.imageUrl ? (
                    <img
                      src={diagram.imageUrl}
                      alt={diagram.title}
                      className="w-full rounded-xl border border-(--line) object-contain"
                    />
                  ) : (
                    /* Placeholder when no image is provided yet */
                    <div className="flex h-56 items-center justify-center rounded-xl border-2 border-dashed border-(--line) bg-(--surface)">
                      <div className="text-center">
                        <svg className="mx-auto mb-3 text-(--sea-ink-soft) opacity-40" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M17.5 14v7M14 17.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <p className="text-sm font-medium text-(--sea-ink-soft) opacity-60">
                          Diagram coming soon
                        </p>
                        <p className="mt-1 text-xs text-(--sea-ink-soft) opacity-40">
                          Drop an image in <code className="text-[11px]">/public</code> and set <code className="text-[11px]">imageUrl</code> in <code className="text-[11px]">profile.ts</code>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="island-shell flex h-56 items-center justify-center rounded-2xl">
                <p className="text-sm text-(--sea-ink-soft) opacity-50">No diagrams added yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
