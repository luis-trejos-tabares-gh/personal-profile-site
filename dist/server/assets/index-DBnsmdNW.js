import { jsxs, jsx } from "react/jsx-runtime";
import { p as profile } from "./router-CJZAOn3r.js";
import "@tanstack/react-router";
import "react";
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative flex min-h-[88vh] items-center overflow-hidden px-4 py-16",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute left-1/2 top-1/4 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full",
            style: {
              background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
              filter: "blur(56px)",
              animation: "pulse-blob 7s ease-in-out infinite"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute bottom-16 right-[10%] h-64 w-64 rounded-full",
            style: {
              background: "radial-gradient(circle, rgba(100,116,139,0.22) 0%, transparent 70%)",
              filter: "blur(40px)",
              animation: "pulse-blob 9s ease-in-out 2s infinite"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "page-wrap w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "rise-in relative mb-6 inline-flex", children: [
                /* @__PURE__ */ jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-(--lagoon) to-(--lagoon-deep) text-2xl font-bold text-white shadow-[0_0_0_6px_rgba(37,99,235,0.15)]", children: profile.avatarInitials }),
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-(--palm)", children: /* @__PURE__ */ jsx("span", { className: "h-2 w-2 animate-ping rounded-full bg-white/80" }) })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "island-kicker rise-in mb-2", style: { animationDelay: "60ms" }, children: profile.title }),
              /* @__PURE__ */ jsx(
                "h1",
                {
                  className: "display-title rise-in mb-4 text-5xl font-bold leading-tight tracking-tight text-(--sea-ink) sm:text-6xl",
                  style: { animationDelay: "120ms" },
                  children: profile.name
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "rise-in mb-8 max-w-lg text-lg text-(--sea-ink-soft)",
                  style: { animationDelay: "180ms" },
                  children: profile.tagline
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "rise-in flex flex-wrap gap-3", style: { animationDelay: "260ms" }, children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "rounded-full bg-linear-to-r from-(--lagoon) to-(--lagoon-deep) px-7 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-[rgba(124,106,247,0.3)] transition hover:-translate-y-0.5 hover:shadow-xl",
                    children: "Get in touch"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#projects",
                    className: "rounded-full border border-(--line) bg-(--surface) px-7 py-3 text-sm font-semibold text-(--sea-ink) no-underline backdrop-blur transition hover:-translate-y-0.5 hover:border-(--lagoon)",
                    children: "View projects"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "rise-in island-shell w-full rounded-2xl p-7 lg:w-80 xl:w-96",
                style: { animationDelay: "320ms" },
                children: [
                  /* @__PURE__ */ jsx("p", { className: "island-kicker mb-3", children: "Background" }),
                  /* @__PURE__ */ jsx("p", { className: "m-0 text-sm leading-relaxed text-(--sea-ink-soft)", children: profile.summary }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col gap-2 text-sm text-(--sea-ink-soft)", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M10 11a4 4 0 100-8 4 4 0 000 8zM3 18a7 7 0 0114 0", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) }),
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-(--sea-ink)", children: profile.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1110 5a1.5 1.5 0 010 3.5z", fill: "currentColor" }) }),
                      /* @__PURE__ */ jsx("span", { children: profile.location })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 5.5l8 5 8-5M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
                      /* @__PURE__ */ jsx("a", { href: `mailto:${profile.contact.email}`, className: "transition hover:text-(--lagoon)", children: profile.contact.email })
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rise-in mt-14 flex justify-center", style: { animationDelay: "500ms" }, children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#experience",
              "aria-label": "Scroll to experience",
              className: "flex flex-col items-center gap-1 text-(--sea-ink-soft) no-underline opacity-50 transition hover:opacity-100",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest", children: "Scroll" }),
                /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: "animate-bounce", children: /* @__PURE__ */ jsx("path", { d: "M10 4v12M10 16l-4-4M10 16l4-4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
function Experience() {
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "px-4 py-14", children: /* @__PURE__ */ jsxs("div", { className: "page-wrap", children: [
    /* @__PURE__ */ jsx("p", { className: "island-kicker mb-2", children: "Career" }),
    /* @__PURE__ */ jsx("h2", { className: "display-title mb-8 text-4xl font-bold text-(--sea-ink)", children: "Experience" }),
    /* @__PURE__ */ jsxs("div", { className: "relative ml-2", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-2 h-full w-px bg-linear-to-b from-(--lagoon) via-(--line) to-transparent" }),
      /* @__PURE__ */ jsx("ol", { className: "space-y-6 pl-8", children: profile.experience.map((job, i) => /* @__PURE__ */ jsxs("li", { className: "group relative", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -left-[2.15rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-(--lagoon) bg-(--foam) transition group-hover:bg-(--lagoon)" }),
        /* @__PURE__ */ jsxs("div", { className: "island-shell rounded-2xl p-6 transition hover:-translate-y-0.5", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-0.5 text-xs font-semibold text-(--lagoon-deep)", children: job.period }),
            "engagement" in job && job.engagement ? /* @__PURE__ */ jsx("span", { className: "rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-0.5 text-xs font-semibold text-(--sea-ink-soft)", children: job.engagement }) : null
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mb-0.5 text-lg font-bold text-(--sea-ink)", children: job.role }),
          /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-semibold text-(--lagoon-deep)", children: job.company }),
          /* @__PURE__ */ jsx("p", { className: "m-0 text-sm leading-relaxed text-(--sea-ink-soft)", children: job.description }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 mb-0 text-sm font-semibold text-(--lagoon-deep)", children: "Key Achievements:" }),
          job.achievements.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mt-2 list-disc pl-5 text-sm leading-relaxed text-(--sea-ink-soft)", children: job.achievements.map((achievement, j) => /* @__PURE__ */ jsx("li", { children: achievement }, j)) })
        ] })
      ] }, i)) })
    ] })
  ] }) });
}
function Skills() {
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "px-4 py-14", children: /* @__PURE__ */ jsxs("div", { className: "page-wrap", children: [
    /* @__PURE__ */ jsx("p", { className: "island-kicker mb-2", children: "What I work with" }),
    /* @__PURE__ */ jsx("h2", { className: "display-title mb-8 text-4xl font-bold text-(--sea-ink)", children: "Tech Skills" }),
    /* @__PURE__ */ jsx("div", { className: "mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: profile.skills.map(({ category, items }) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "island-shell group rounded-2xl p-6 transition hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsx("p", { className: "island-kicker mb-4", children: category }),
          /* @__PURE__ */ jsx("ul", { className: "m-0 flex list-none flex-wrap gap-2 p-0", children: items.map((skill) => /* @__PURE__ */ jsx(
            "li",
            {
              className: "rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1 text-xs font-semibold text-(--sea-ink) transition group-hover:border-[rgba(37,99,235,0.4)]",
              children: skill
            },
            skill
          )) })
        ]
      },
      category
    )) })
  ] }) });
}
const TECH_LIMIT = 6;
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "px-4 py-14", children: /* @__PURE__ */ jsxs("div", { className: "page-wrap", children: [
    /* @__PURE__ */ jsx("p", { className: "island-kicker mb-2", children: "What I've built" }),
    /* @__PURE__ */ jsx("h2", { className: "display-title mb-8 text-4xl font-bold text-(--sea-ink)", children: "Projects" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: profile.projects.map((project) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "island-shell feature-card flex flex-col rounded-2xl p-6",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-bold text-(--sea-ink)", children: project.name }),
          /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm leading-relaxed text-(--sea-ink-soft)", children: project.description }),
          project.achievements.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mb-5 flex-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-(--sea-ink-soft)", children: project.achievements.map((achievement) => /* @__PURE__ */ jsx("li", { children: achievement }, achievement)) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: project.tech.slice(0, TECH_LIMIT).map((t) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "rounded-full border border-(--chip-line) bg-(--chip-bg) px-2.5 py-0.5 text-[11px] font-semibold text-(--sea-ink-soft)",
              children: t
            },
            t
          )) })
        ]
      },
      project.slug
    )) })
  ] }) });
}
function githubHandle(url) {
  try {
    return `@${new URL(url).pathname.replaceAll("/", "")}`;
  } catch {
    return url;
  }
}
function Contact() {
  const { email, phone, github, linkedin } = profile.contact;
  const columns = "lg:grid-cols-3";
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "px-4 py-14", children: /* @__PURE__ */ jsxs("div", { className: "page-wrap", children: [
    /* @__PURE__ */ jsx("p", { className: "island-kicker mb-2", children: "Say hello" }),
    /* @__PURE__ */ jsx("h2", { className: "display-title mb-3 text-4xl font-bold text-(--sea-ink)", children: "Contact" }),
    /* @__PURE__ */ jsx("p", { className: "mb-10 max-w-lg text-(--sea-ink-soft)", children: "Whether you have a project in mind, a question, or just want to connect — feel free to reach out." }),
    /* @__PURE__ */ jsxs("div", { className: `grid gap-4 sm:grid-cols-2 ${columns}`, children: [
      /* @__PURE__ */ jsxs("a", { href: `mailto:${email}`, className: "island-shell group flex flex-col gap-3 rounded-2xl p-6 no-underline transition hover:-translate-y-1 hover:border-(--lagoon)", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[rgba(124,106,247,0.2)] to-[rgba(245,158,11,0.14)] text-(--lagoon-deep) transition group-hover:from-[rgba(124,106,247,0.3)]", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 5.5l8 5 8-5M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "island-kicker m-0", children: "Email" }),
        /* @__PURE__ */ jsx("span", { className: "break-all text-sm font-semibold text-(--sea-ink)", children: email })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: `tel:${phone.replace(/\s/g, "")}`, className: "island-shell group flex flex-col gap-3 rounded-2xl p-6 no-underline transition hover:-translate-y-1 hover:border-(--lagoon)", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[rgba(124,106,247,0.2)] to-[rgba(245,158,11,0.14)] text-(--lagoon-deep) transition group-hover:from-[rgba(124,106,247,0.3)]", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3 3h4l1.5 4-2 1.5a11 11 0 005 5l1.5-2L17 13v4a1 1 0 01-1 1A15 15 0 012 4a1 1 0 011-1z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "island-kicker m-0", children: "Phone" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-(--sea-ink)", children: phone })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: github, target: "_blank", rel: "noopener noreferrer", className: "island-shell group flex flex-col gap-3 rounded-2xl p-6 no-underline transition hover:-translate-y-1 hover:border-(--lagoon)", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[rgba(124,106,247,0.2)] to-[rgba(245,158,11,0.14)] text-(--lagoon-deep) transition group-hover:from-[rgba(124,106,247,0.3)]", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", fill: "currentColor", width: "20", height: "20", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "island-kicker m-0", children: "GitHub" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-(--sea-ink)", children: githubHandle(github) })
      ] }),
      null
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-2 rounded-full bg-linear-to-r from-(--lagoon) to-(--lagoon-deep) px-8 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-[rgba(124,106,247,0.3)] transition hover:-translate-y-0.5 hover:shadow-xl",
        children: [
          "Connect on LinkedIn",
          /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" }) })
        ]
      }
    ) })
  ] }) });
}
function App() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
export {
  App as component
};
