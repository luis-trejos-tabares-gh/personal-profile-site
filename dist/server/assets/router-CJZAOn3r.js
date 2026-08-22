import { Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const profile = {
  name: "Luis Trejos",
  title: "Senior Software Engineer | Technical Lead | Software Architect",
  tagline: "Manufacturing platforms, AI document pipelines, and the teams that ship them.",
  location: "Heredia, Costa Rica",
  avatarInitials: "LT",
  contact: {
    email: "luis.trejos.tabares@outlook.com",
    phone: "+506 8880 5209",
    github: "https://github.com/luis-trejos-tabares-gh",
    linkedin: "https://www.linkedin.com/in/luis-gabriel-trejos-tabares-69bb1593/"
  },
  summary: "Full-stack engineer with 15+ years crafting and maintaining robust, scalable applications. Passionate about developer experience, good practices, performance, automation, and shipping products that create value for teams and, most importantly, users. I thrive in both the technical and non-technical sides of software development. Let's connect!",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Cargill",
      period: "2021 – Present",
      description: "Design, implement, and support manufacturing applications — from web UIs to backend systems and plant-floor connectors. Collaborate with cross-functional teams in Agile/Scrum to improve production processes and operational efficiency.",
      achievements: [
        "Led a manufacturing data hub that cut operational errors by 60% and delivered more than $1M in savings across 6 facilities.",
        "Built a GenAI document processing engine that reduced manual processing time by 80% in the first 4 months, with 100K+ documents projected over 5 years.",
        "Currently leading a poultry management platform projected to save $600K a year by replacing a SaaS dependency.",
        "Led 12+ engineers across these products, mentoring and guiding technical decisions."
      ]
    },
    {
      role: "Senior AI Software Engineer",
      company: "DevBlock Technologies",
      period: "2025",
      engagement: "Contract · concurrent with Cargill",
      description: "Built AI-driven product prototypes under ambiguous requirements, shipping weekly progress with the CTO, product, engineering, and the client.",
      achievements: [
        "Prototyped a solution that ingested 3 unstructured data formats using OCR and LLM prompting.",
        "Ran 10+ demos with clients and stakeholders to lock next steps in the product."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Shrine Development",
      period: "2024",
      engagement: "Contract · concurrent with Cargill",
      description: "Helped a healthcare clinic-and-patient platform migrate on-demand AWS Lambda functions to a Docker-based environment, working in Agile/Scrum.",
      achievements: [
        "Refactored and migrated 5+ Lambda dependencies into the new Docker strategy during a two-month tenure.",
        "Integrated SonarCloud into the unit/integration testing pipeline and refactored 30+ tests around Lambda deprecation."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Fiserv",
      period: "2017 – 2021",
      description: "Served as Senior Software Engineer and Technical Lead on FinTech products — mission-critical ETL and client-facing applications — in Agile/Scrum.",
      achievements: [
        "Led 2 developers and 2 QAs to deliver an onboarding implementation covering 2K+ accounts.",
        "Migrated 5K+ customer accounts from a legacy Vehicle Remarketing system into the platform."
      ]
    },
    {
      role: "Software Engineer",
      company: "Fiserv",
      period: "2014 – 2017",
      description: "Modernized FinTech processes spanning legacy desktop apps and internal tools.",
      achievements: [
        "Migrated a fax processing service from VB6 to C# and .NET Framework 4.5 to keep critical operations running.",
        "Resolved 50+ production issues during the first year in the role."
      ]
    },
    {
      role: ".NET Development Specialist",
      company: "B&T Consulting",
      period: "2011 – 2014",
      description: "Worked as a specialized .NET developer on financial-industry projects, from Excel integrations to WCF services that interfaced with SAP.",
      achievements: [
        "Modernized a classic ASP idea-submission app to ASP.NET with new infrastructure, mail, database, and RBAC — scoped for 500+ visits a month.",
        "Refactored a calculation engine and cut performance issues by 90%."
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "C#", "Go"]
    },
    {
      category: "Front-End",
      items: [
        "React",
        "Next.js",
        "TanStack Router",
        "Vite",
        "Tailwind CSS",
        "Material UI",
        "Ant Design",
        "Bootstrap",
        "KendoUI"
      ]
    },
    {
      category: "Back-End",
      items: [
        "Node.js",
        "FastAPI",
        "Django REST Framework",
        "Flask",
        "Spring Boot",
        "NestJS",
        "ASP.NET",
        "GraphQL",
        "REST APIs",
        "Celery"
      ]
    },
    {
      category: "Data & AI",
      items: [
        "PostgreSQL",
        "MSSQL",
        "Snowflake",
        "Redis",
        "Hadoop",
        "OpenAI SDK",
        "OCR",
        "OSI PI",
        "AVEVA Connect"
      ]
    },
    {
      category: "Tooling & Infra",
      items: [
        "Docker",
        "Kubernetes",
        "AWS (EKS · S3 · Lambda)",
        "Azure Cloud",
        "Datadog",
        "SonarCloud",
        "GitHub Actions",
        "Azure DevOps",
        "Portainer",
        "Kong"
      ]
    }
  ],
  projects: [
    {
      slug: "poultry-management-system",
      name: "Poultry Management System",
      description: "Full-stack platform for the poultry production lifecycle, built to replace a SaaS product and scale globally.",
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "AWS EKS", "Kubernetes"],
      achievements: [
        "Projected $600K/year in operational savings by replacing the current SaaS solution.",
        "Designed to scale to 5+ countries in two years, including Europe and Asia.",
        "Took over as technical lead and designed the front-end, back-end, and data model — 30+ tables across 4 domains."
      ]
    },
    {
      slug: "manufacturing-data-hub",
      name: "Manufacturing Data Hub",
      description: "Central hub that aggregates manufacturing data from plant historians and warehouses so operators can act on one source of truth.",
      tech: [
        "Python",
        "Django REST Framework",
        "FastAPI",
        "Snowflake",
        "React",
        "AWS"
      ],
      achievements: [
        "Reduced operational errors by 60%, more than $1M in savings across 6 facilities.",
        "Delivers 20+ KPIs in near real time to plant operators and supervisors.",
        "Replaced a SaaS contextualization tool in under 2 months, avoiding downtime on 15+ pipelines."
      ]
    },
    {
      slug: "document-processing-engine",
      name: "GenAI Document Processing Engine",
      description: "OCR and LLM pipeline that turns PDFs, Excel, and Word files into structured data for technical writers.",
      tech: ["Python", "OpenAI SDK", "OCR", "AWS S3", "PostgreSQL", "Spring Boot"],
      achievements: [
        "Cut manual processing time by 80% within 4 months of launch.",
        "Built to handle 100K+ documents over 5 years.",
        "One pipeline for 3 unstructured document formats."
      ]
    },
    {
      slug: "seed-quality-computer-vision-inspector",
      name: "Seed Quality Computer Vision Inspector",
      description: "Computer-vision MVP that helps crushing-plant operators judge seed quality from images and write results back to the plant historian.",
      tech: ["React", "TypeScript", "Python", "Go", "PostgreSQL", "Kafka"],
      achievements: [
        "Reduced manual seed-quality checks by 30% with inference-model integration.",
        "MVP became the baseline for a product rolled out at global scale.",
        "Closed the loop by publishing quality results to OSI PI for traceability."
      ]
    },
    {
      slug: "ai-powered-order-processing",
      name: "AI-Powered Order Processing",
      description: "Prototype that reads orders from email, PDFs, images, and spreadsheets and posts them into Shopify without manual entry.",
      tech: [
        "Next.js",
        "React",
        "OpenAI SDK",
        "Shopify API",
        "Postmark",
        "TypeScript"
      ],
      achievements: [
        "Prototyped ingestion of 3 unstructured data formats with OCR and prompting.",
        "Wired Postmark email webhooks and the Shopify Store API for live product updates.",
        "Ran 10+ client and stakeholder demos to steer the next build."
      ]
    },
    {
      slug: "banking-servicing-platform",
      name: "Banking Servicing Platform",
      description: "Servicing platform for customer accounts and loans, used by some of the largest vehicle manufacturers in the US.",
      tech: ["ASP.NET", "C#", "MSSQL", "KendoUI", "Redis", "Azure Cloud"],
      achievements: [
        "Led 2 developers and 2 QAs to onboard 2K+ accounts.",
        "Migrated 5K+ customer accounts from a legacy Vehicle Remarketing system.",
        "Moved 50+ SQL views onto Azure SQL."
      ]
    }
  ]
};
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("footer", { className: "mt-16 border-t border-(--line) px-4 pb-12 pt-8 text-(--sea-ink-soft)", children: [
    /* @__PURE__ */ jsxs("div", { className: "page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left", children: [
      /* @__PURE__ */ jsxs("p", { className: "m-0 text-sm", children: [
        "© ",
        year,
        " ",
        profile.name,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "island-kicker m-0", children: profile.location })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: profile.contact.github,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "GitHub" }),
            /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", width: "24", height: "24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: profile.contact.linkedin,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "LinkedIn" }),
            /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", width: "24", height: "24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `mailto:${profile.contact.email}`,
          className: "rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Email" }),
            /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 5.5l8 5 8-5M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
          ]
        }
      )
    ] })
  ] });
}
function getInitialMode() {
  if (typeof window === "undefined") {
    return "auto";
  }
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "auto") {
    return stored;
  }
  return "auto";
}
function applyThemeMode(mode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(resolved);
  if (mode === "auto") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", mode);
  }
  document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
  const [mode, setMode] = useState("auto");
  useEffect(() => {
    const initialMode = getInitialMode();
    setMode(initialMode);
    applyThemeMode(initialMode);
  }, []);
  useEffect(() => {
    if (mode !== "auto") {
      return;
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyThemeMode("auto");
    media.addEventListener("change", onChange);
    return () => {
      media.removeEventListener("change", onChange);
    };
  }, [mode]);
  function toggleMode() {
    const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
    setMode(nextMode);
    applyThemeMode(nextMode);
    window.localStorage.setItem("theme", nextMode);
  }
  const label = mode === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode}. Click to switch mode.`;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: toggleMode,
      "aria-label": label,
      title: label,
      className: "rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--sea-ink)] shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5",
      children: mode === "auto" ? "Auto" : mode === "dark" ? "Dark" : "Light"
    }
  );
}
const navLinks = [
  { label: "Home", hash: "home" },
  { label: "Experience", hash: "experience" },
  { label: "Skills", hash: "skills" },
  { label: "Projects", hash: "projects" },
  { label: "Contact", hash: "contact" }
];
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg", children: /* @__PURE__ */ jsxs("nav", { className: "page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        hash: "home",
        className: "inline-flex items-center gap-2 rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:border-(--lagoon) sm:px-4 sm:py-2",
        children: [
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-linear-to-r from-(--lagoon) to-(--lagoon-deep)" }),
          profile.name
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1.5 sm:ml-0 sm:gap-2", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: profile.contact.github,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "GitHub" }),
            /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", width: "22", height: "22", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: profile.contact.linkedin,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "LinkedIn" }),
            /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", width: "22", height: "22", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(ThemeToggle, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0", children: navLinks.map(({ label, hash }) => /* @__PURE__ */ jsx(Link, { to: "/", hash, className: "nav-link", children: label }, hash)) })
  ] }) });
}
const appCss = "/assets/styles-P1k9FqAC.css";
const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: `${profile.name} — Software Engineer`
      },
      {
        name: "description",
        content: profile.summary
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }),
      /* @__PURE__ */ jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]", children: [
      /* @__PURE__ */ jsx(Header, {}),
      children,
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-DBnsmdNW.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  profile as p,
  router as r
};
