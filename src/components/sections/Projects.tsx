import { profile } from '../../data/profile'

const TECH_LIMIT = 6

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-14">
      <div className="page-wrap">
        <p className="island-kicker mb-2">What I've built</p>
        <h2 className="display-title mb-8 text-4xl font-bold text-(--sea-ink)">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {profile.projects.map((project) => (
            <article
              key={project.slug}
              className="island-shell feature-card flex flex-col rounded-2xl p-6"
            >
              <h3 className="mb-2 text-lg font-bold text-(--sea-ink)">
                {project.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-(--sea-ink-soft)">
                {project.description}
              </p>
              {project.achievements.length > 0 && (
                <ul className="mb-5 flex-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-(--sea-ink-soft)">
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, TECH_LIMIT).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-(--chip-line) bg-(--chip-bg) px-2.5 py-0.5 text-[11px] font-semibold text-(--sea-ink-soft)"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
