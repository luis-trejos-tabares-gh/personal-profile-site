import { profile } from '../../data/profile'

export default function Contact() {
  const { email, phone, github, linkedin, cvUrl } = profile.contact

  return (
    <section id="contact" className="px-4 py-14">
      <div className="page-wrap">
        <p className="island-kicker mb-2">Say hello</p>
        <h2 className="display-title mb-3 text-4xl font-bold text-(--sea-ink)">
          Contact
        </h2>
        <p className="mb-10 max-w-lg text-(--sea-ink-soft)">
          Whether you have a project in mind, a question, or just want to connect — feel free to reach out!.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <a href={`mailto:${email}`} className="island-shell group flex flex-col gap-3 rounded-2xl p-6 no-underline transition hover:-translate-y-1 hover:border-(--lagoon)">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[rgba(124,106,247,0.2)] to-[rgba(245,158,11,0.14)] text-(--lagoon-deep) transition group-hover:from-[rgba(124,106,247,0.3)]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M2 5.5l8 5 8-5M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <p className="island-kicker m-0">Email</p>
            <span className="break-all text-sm font-semibold text-(--sea-ink)">{email}</span>
          </a>

          {/* Phone */}
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="island-shell group flex flex-col gap-3 rounded-2xl p-6 no-underline transition hover:-translate-y-1 hover:border-(--lagoon)">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[rgba(124,106,247,0.2)] to-[rgba(245,158,11,0.14)] text-(--lagoon-deep) transition group-hover:from-[rgba(124,106,247,0.3)]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 3h4l1.5 4-2 1.5a11 11 0 005 5l1.5-2L17 13v4a1 1 0 01-1 1A15 15 0 012 4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <p className="island-kicker m-0">Phone</p>
            <span className="text-sm font-semibold text-(--sea-ink)">{phone}</span>
          </a>

          {/* GitHub */}
          <a href={github} target="_blank" rel="noopener noreferrer" className="island-shell group flex flex-col gap-3 rounded-2xl p-6 no-underline transition hover:-translate-y-1 hover:border-(--lagoon)">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[rgba(124,106,247,0.2)] to-[rgba(245,158,11,0.14)] text-(--lagoon-deep) transition group-hover:from-[rgba(124,106,247,0.3)]">
              <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </span>
            <p className="island-kicker m-0">GitHub</p>
            <span className="text-sm font-semibold text-(--sea-ink)">@luis-trejos-tabares-gh</span>
          </a>

          {/* Download CV */}
          <a href={cvUrl} download className="island-shell group flex flex-col gap-3 rounded-2xl p-6 no-underline transition hover:-translate-y-1 hover:border-(--lagoon)">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[rgba(124,106,247,0.2)] to-[rgba(245,158,11,0.14)] text-(--lagoon-deep) transition group-hover:from-[rgba(124,106,247,0.3)]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 3v10M10 13l-3.5-3.5M10 13l3.5-3.5M4 17h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <p className="island-kicker m-0">Résumé</p>
            <span className="text-sm font-semibold text-(--sea-ink)">Download CV</span>
          </a>
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-(--lagoon) to-(--lagoon-deep) px-8 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-[rgba(124,106,247,0.3)] transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Connect on LinkedIn
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
