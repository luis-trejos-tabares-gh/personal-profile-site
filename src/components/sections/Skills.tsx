import { profile } from '../../data/profile'

const PRACTICES_CATEGORY = 'Practices & Methods'

export default function Skills() {
  const techSkills = profile.skills.filter((s) => s.category !== PRACTICES_CATEGORY)
  const practices = profile.skills.find((s) => s.category === PRACTICES_CATEGORY)

  return (
    <section id="skills" className="px-4 py-14">
      <div className="page-wrap">
        <p className="island-kicker mb-2">What I work with</p>
        <h2 className="display-title mb-8 text-4xl font-bold text-(--sea-ink)">
          Tech Skills
        </h2>

        {/* Tech skill cards — 3-column grid for 2 balanced rows */}
        <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techSkills.map(({ category, items }) => (
            <div
              key={category}
              className="island-shell group rounded-2xl p-6 transition hover:-translate-y-1"
            >
              <p className="island-kicker mb-4">{category}</p>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1 text-xs font-semibold text-(--sea-ink) transition group-hover:border-[rgba(37,99,235,0.4)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
