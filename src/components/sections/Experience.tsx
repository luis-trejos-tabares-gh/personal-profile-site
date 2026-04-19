import { profile } from '../../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-14">
      <div className="page-wrap">
        <p className="island-kicker mb-2">Career</p>
        <h2 className="display-title mb-8 text-4xl font-bold text-(--sea-ink)">
          Experience
        </h2>

        <div className="relative ml-2">
          <div className="absolute left-0 top-2 h-full w-px bg-linear-to-b from-(--lagoon) via-(--line) to-transparent" />
          <ol className="space-y-6 pl-8">
            {profile.experience.map((job, i) => (
              <li key={i} className="group relative">
                <span className="absolute -left-[2.15rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-(--lagoon) bg-(--foam) transition group-hover:bg-(--lagoon)" />
                <div className="island-shell rounded-2xl p-6 transition hover:-translate-y-0.5">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-0.5 text-xs font-semibold text-(--lagoon-deep)">
                      {job.period}
                    </span>
                  </div>
                  <h3 className="mb-0.5 text-lg font-bold text-(--sea-ink)">{job.role}</h3>
                  <p className="mb-3 text-sm font-semibold text-(--lagoon-deep)">{job.company}</p>
                  <p className="m-0 text-sm leading-relaxed text-(--sea-ink-soft)">{job.description}</p>
                  <p className="mt-4 mb-0 text-sm font-semibold text-(--lagoon-deep)">Key Achievements:</p>
                    {job.achievements.length > 0 && (
                      <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-(--sea-ink-soft)">
                        {job.achievements.map((achievement, j) => (
                          <li key={j}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
