// ─── Personal Profile Data ───────────────────────────────────────────────────
// Edit this file to update all the content on your site.

export const profile = {
  name: 'Luis Trejos',
  title: 'Senior Software Engineer | Technical Lead | Software Architect',
  tagline:
    'Manufacturing platforms, AI document pipelines, and the teams that ship them.',
  location: 'Heredia, Costa Rica',
  avatarInitials: 'LT',

  contact: {
    email: 'luis.trejos.tabares@outlook.com',
    phone: '+506 8880 5209',
    github: 'https://github.com/luis-trejos-tabares-gh',
    linkedin: 'https://www.linkedin.com/in/luis-gabriel-trejos-tabares-69bb1593/',
    cvUrl: '',
  },

  summary:
    "Full-stack engineer with 15+ years crafting and maintaining robust, scalable applications. Passionate about developer experience, good practices, performance, automation, and shipping products that create value for teams and, most importantly, users. I thrive in both the technical and non-technical sides of software development. Let's connect!",

  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Cargill',
      period: '2021 – Present',
      description:
        'Design, implement, and support manufacturing applications — from web UIs to backend systems and plant-floor connectors. Collaborate with cross-functional teams in Agile/Scrum to improve production processes and operational efficiency.',
      achievements: [
        'Led a manufacturing data hub that cut operational errors by 60% and delivered more than $1M in savings across 6 facilities.',
        'Built a GenAI document processing engine that reduced manual processing time by 80% in the first 4 months, with 100K+ documents projected over 5 years.',
        'Currently leading a poultry management platform projected to save $600K a year by replacing a SaaS dependency.',
        'Led 12+ engineers across these products, mentoring and guiding technical decisions.',
      ],
    },
    {
      role: 'Senior AI Software Engineer',
      company: 'DevBlock Technologies',
      period: '2025',
      engagement: 'Contract · concurrent with Cargill',
      description:
        'Built AI-driven product prototypes under ambiguous requirements, shipping weekly progress with the CTO, product, engineering, and the client.',
      achievements: [
        'Prototyped a solution that ingested 3 unstructured data formats using OCR and LLM prompting.',
        'Ran 10+ demos with clients and stakeholders to lock next steps in the product.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Shrine Development',
      period: '2024',
      engagement: 'Contract · concurrent with Cargill',
      description:
        'Helped a healthcare clinic-and-patient platform migrate on-demand AWS Lambda functions to a Docker-based environment, working in Agile/Scrum.',
      achievements: [
        'Refactored and migrated 5+ Lambda dependencies into the new Docker strategy during a two-month tenure.',
        'Integrated SonarCloud into the unit/integration testing pipeline and refactored 30+ tests around Lambda deprecation.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Fiserv',
      period: '2017 – 2021',
      description:
        'Served as Senior Software Engineer and Technical Lead on FinTech products — mission-critical ETL and client-facing applications — in Agile/Scrum.',
      achievements: [
        'Led 2 developers and 2 QAs to deliver an onboarding implementation covering 2K+ accounts.',
        'Migrated 5K+ customer accounts from a legacy Vehicle Remarketing system into the platform.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Fiserv',
      period: '2014 – 2017',
      description:
        'Modernized FinTech processes spanning legacy desktop apps and internal tools.',
      achievements: [
        'Migrated a fax processing service from VB6 to C# and .NET Framework 4.5 to keep critical operations running.',
        'Resolved 50+ production issues during the first year in the role.',
      ],
    },
    {
      role: '.NET Development Specialist',
      company: 'B&T Consulting',
      period: '2011 – 2014',
      description:
        'Worked as a specialized .NET developer on financial-industry projects, from Excel integrations to WCF services that interfaced with SAP.',
      achievements: [
        'Modernized a classic ASP idea-submission app to ASP.NET with new infrastructure, mail, database, and RBAC — scoped for 500+ visits a month.',
        'Refactored a calculation engine and cut performance issues by 90%.',
      ],
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C#', 'Go'],
    },
    {
      category: 'Front-End',
      items: [
        'React',
        'Next.js',
        'TanStack Router',
        'Vite',
        'Tailwind CSS',
        'Material UI',
        'Ant Design',
        'Bootstrap',
        'KendoUI',
      ],
    },
    {
      category: 'Mobile',
      items: [
        'React Native',
        'Android Studio',
        'Redux',
        'Realm',
        'Bitrise',
      ],
    },
    {
      category: 'Back-End',
      items: [
        'Node.js',
        'FastAPI',
        'Django REST Framework',
        'Flask',
        'Spring Boot',
        'NestJS',
        'ASP.NET',
        'GraphQL',
        'REST APIs',
        'Celery',
      ],
    },
    {
      category: 'Data & AI',
      items: [
        'PostgreSQL',
        'MSSQL',
        'Snowflake',
        'Redis',
        'Hadoop',
        'OpenAI SDK',
        'OCR',
        'OSI PI',
        'AVEVA Connect',
      ],
    },
    {
      category: 'Tooling & Infra',
      items: [
        'Docker',
        'Kubernetes',
        'AWS (EKS · S3 · Lambda)',
        'Azure Cloud',
        'Datadog',
        'SonarCloud',
        'GitHub Actions',
        'Azure DevOps',
        'Portainer',
        'Kong',
      ],
    },
  ],

  portfolio: [
    {
      slug: 'ats-genie',
      name: 'ATS Genie',
      description:
        'A one-session tool to analyze or assemble a resume so applicant tracking systems can parse it. Nothing is stored. There are no accounts.',
      achievements: [
        'Analyze a PDF/DOCX or assemble sections in plain text, then download DOCX or PDF.',
        'Rewrites via GPT-OSS 120B on Groq, with 3 AI checks per IP per hour.',
        'Request-scoped processing only — no database and no resume logs.',
      ],
      whatItDoes: [
        'Landing — what the tool is, how it works, and the privacy terms up front.',
        'Analyze — upload a PDF or DOCX, get guided issues, download DOCX or PDF.',
        'Assemble — write each section in plain text, get an ATS-structured recommendation, download.',
      ],
      privacy:
        'No database, no resume logs, and no localStorage of CV bodies. Files are processed in the request and discarded. Closing the tab ends the session.',
      tech: ['Next.js', 'FastAPI', 'Groq', 'Tailwind CSS', 'Vercel', 'Render'],
      url: 'https://github.com/luis-trejos-tabares-gh/ats-genie',
      live: 'https://ats-genie.vercel.app',
    },
  ],

  projects: [
    {
      slug: 'poultry-management-system',
      name: 'Poultry Management System',
      description:
        'Full-stack platform for the poultry production lifecycle, built to replace a SaaS product and scale globally.',
      tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'AWS EKS', 'Kubernetes'],
      achievements: [
        'Projected $600K/year in operational savings by replacing the current SaaS solution.',
        'Designed to scale to 5+ countries in two years, including Europe and Asia.',
        'Took over as technical lead and designed the front-end, back-end, and data model — 30+ tables across 4 domains.',
      ],
    },
    {
      slug: 'manufacturing-data-hub',
      name: 'Manufacturing Data Hub',
      description:
        'Central hub that aggregates manufacturing data from plant historians and warehouses so operators can act on one source of truth.',
      tech: [
        'Python',
        'Django REST Framework',
        'FastAPI',
        'Snowflake',
        'React',
        'AWS',
      ],
      achievements: [
        'Reduced operational errors by 60%, more than $1M in savings across 6 facilities.',
        'Delivers 20+ KPIs in near real time to plant operators and supervisors.',
        'Replaced a SaaS contextualization tool in under 2 months, avoiding downtime on 15+ pipelines.',
      ],
    },
    {
      slug: 'document-processing-engine',
      name: 'GenAI Document Processing Engine',
      description:
        'OCR and LLM pipeline that turns PDFs, Excel, and Word files into structured data for technical writers.',
      tech: ['Python', 'OpenAI SDK', 'OCR', 'AWS S3', 'PostgreSQL', 'Spring Boot'],
      achievements: [
        'Cut manual processing time by 80% within 4 months of launch.',
        'Built to handle 100K+ documents over 5 years.',
        'One pipeline for 3 unstructured document formats.',
      ],
    },
    {
      slug: 'seed-quality-computer-vision-inspector',
      name: 'Seed Quality Computer Vision Inspector',
      description:
        'Computer-vision MVP that helps crushing-plant operators judge seed quality from images and write results back to the plant historian.',
      tech: ['React', 'TypeScript', 'Python', 'Go', 'PostgreSQL', 'Kafka'],
      achievements: [
        'Reduced manual seed-quality checks by 30% with inference-model integration.',
        'MVP became the baseline for a product rolled out at global scale.',
        'Closed the loop by publishing quality results to OSI PI for traceability.',
      ],
    },
    {
      slug: 'ai-powered-order-processing',
      name: 'AI-Powered Order Processing',
      description:
        'Prototype that reads orders from email, PDFs, images, and spreadsheets and posts them into Shopify without manual entry.',
      tech: [
        'Next.js',
        'React',
        'OpenAI SDK',
        'Shopify API',
        'Postmark',
        'TypeScript',
      ],
      achievements: [
        'Prototyped ingestion of 3 unstructured data formats with OCR and prompting.',
        'Wired Postmark email webhooks and the Shopify Store API for live product updates.',
        'Ran 10+ client and stakeholder demos to steer the next build.',
      ],
    },
    {
      slug: 'banking-servicing-platform',
      name: 'Banking Servicing Platform',
      description:
        'Servicing platform for customer accounts and loans, used by some of the largest vehicle manufacturers in the US.',
      tech: ['ASP.NET', 'C#', 'MSSQL', 'KendoUI', 'Redis', 'Azure Cloud'],
      achievements: [
        'Led 2 developers and 2 QAs to onboard 2K+ accounts.',
        'Migrated 5K+ customer accounts from a legacy Vehicle Remarketing system.',
        'Moved 50+ SQL views onto Azure SQL.',
      ],
    },
  ],
}
