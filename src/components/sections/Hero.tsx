import { profile } from '../../data/profile'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-4 py-16"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)',
          filter: 'blur(56px)',
          animation: 'pulse-blob 7s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-[10%] h-64 w-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(100,116,139,0.22) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'pulse-blob 9s ease-in-out 2s infinite',
        }}
      />

      <div className="page-wrap w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">

          {/* Left: avatar + name + tagline + CTAs */}
          <div>
            <div className="rise-in relative mb-6 inline-flex">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-(--lagoon) to-(--lagoon-deep) text-2xl font-bold text-white shadow-[0_0_0_6px_rgba(37,99,235,0.15)]">
                {profile.avatarInitials}
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-(--palm)">
                <span className="h-2 w-2 animate-ping rounded-full bg-white/80" />
              </span>
            </div>

            <p className="island-kicker rise-in mb-2" style={{ animationDelay: '60ms' }}>
              {profile.title}
            </p>
            <h1
              className="display-title rise-in mb-4 text-5xl font-bold leading-tight tracking-tight text-(--sea-ink) sm:text-6xl"
              style={{ animationDelay: '120ms' }}
            >
              {profile.name}
            </h1>
            <p
              className="rise-in mb-8 max-w-lg text-lg text-(--sea-ink-soft)"
              style={{ animationDelay: '180ms' }}
            >
              {profile.tagline}
            </p>

            <div className="rise-in flex flex-wrap gap-3" style={{ animationDelay: '260ms' }}>
              <a
                href="#contact"
                className="rounded-full bg-linear-to-r from-(--lagoon) to-(--lagoon-deep) px-7 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-[rgba(124,106,247,0.3)] transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="rounded-full border border-(--line) bg-(--surface) px-7 py-3 text-sm font-semibold text-(--sea-ink) no-underline backdrop-blur transition hover:-translate-y-0.5 hover:border-(--lagoon)"
              >
                View projects
              </a>
            </div>
          </div>

          {/* Right: background summary card */}
          <div
            className="rise-in island-shell w-full rounded-2xl p-7 lg:w-80 xl:w-96"
            style={{ animationDelay: '320ms' }}
          >
            <p className="island-kicker mb-3">Background</p>
            <p className="m-0 text-sm leading-relaxed text-(--sea-ink-soft)">
              {profile.summary}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-(--sea-ink-soft)">
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 11a4 4 0 100-8 4 4 0 000 8zM3 18a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                <span className="font-medium text-(--sea-ink)">{profile.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1110 5a1.5 1.5 0 010 3.5z" fill="currentColor"/>
                </svg>
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M2 5.5l8 5 8-5M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href={`mailto:${profile.contact.email}`} className="transition hover:text-(--lagoon)">
                  {profile.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="rise-in mt-14 flex justify-center" style={{ animationDelay: '500ms' }}>
          <a
            href="#experience"
            aria-label="Scroll to experience"
            className="flex flex-col items-center gap-1 text-(--sea-ink-soft) no-underline opacity-50 transition hover:opacity-100"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="animate-bounce">
              <path d="M10 4v12M10 16l-4-4M10 16l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
