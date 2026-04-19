// ─── Personal Profile Data ───────────────────────────────────────────────────
// Edit this file to update all the content on your site.

export const profile = {
  name: 'Luis Trejos',
  title: 'Senior Software Engineer | Technical Lead | Software Architect',
  tagline: 'Dedicated professional with a passion for technology and innovation.',
  location: 'Heredia, Costa Rica',
  avatarInitials: 'LT',

  contact: {
    email: 'luis.trejos.tabares@outlook.com',
    phone: '+506 8880 5209',
    github: 'https://github.com/luis-trejos-tabares-gh',
    linkedin: 'https://www.linkedin.com/in/luis-gabriel-trejos-tabares-69bb1593/',
    cvUrl: '/resume.pdf', // drop your PDF in /public and update this path
  },

  summary:
    'Full-stack engineer with 15+ years crafting and maintaining robust and scalable applications. Passionate about developer experience, good practices, performance, automation and shipping meaningful products that create value for product teams and most importantly, users. I thrive in technical and non-technical aspects of software development and can help you and your product succeed. Let\'s connect!',

  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Cargill',
      period: '2021 – Present',
      description:
      'Responsible for designing, implementing and supporting manufacturing applications, ranging from web applications to complex backend systems and connectors. Collaborate closely with cross-functional teams in an Agile/Scrum environment to deliver solutions that optimize production processes and enhance operational efficiency. Working with technologies such as ReactJS, Vite, MUI, Antd, Bootstrap, TypeScript, NodeJS, .Net Core, REST APIs, Springboot, GO, Python (FastAPI, Django, Flask), AWS (EKS, S3, Lambda), DataDog, Docker, Portainer, Kong, Kubernetes, PowerPlatform, AVEVA Connect, OSI PI, Postgres, Snowflake and Hadoop.',
      achievements: [
        'Built an MVP solution using computer vision and inference model integration to help crushing plant operators identify the quality of seed reducing manual labor by 30%.',
        'Led the implementation of a manufacturing data hub that helped reduce operational errors by 60% which translated in over $1M in savings across 6 different facilities.',
        'Working currently on a poultry management app that will bring an estimated reduction of 600K a year in operational savings by replacing the current SaaS solution dependency.',
        'Created a very successful document processing engine using GenAI that has reduced manual processing time by 80% in the first 4 months and is expected to process over 100K documents in the next 5 years.',
        'Led 12+ engineers across the work done on these products, mentoring, coaching and providing technical guidance to help them grow and succeed.',
        'Conducted multiple technical assessments and interviews to help build high-performing teams and ensure the right technical fit for various roles.',
      ],
    },
    {
      role: 'Senior AI Software Engineer',
      company: 'DevBlock Technologies',
      period: '2025',
      description:
        'Responsible for creating AI-driven products by rapidly prototyping solutions, navigating ambiguous requirements, and leveraging cutting-edge technologies. Worked in an Agile/Scrum environment alongside the CTO, product managers, engineers and the client to deliver progress on a weekly basis. Worked with technologies such as NextJS, ReactJS, TypeScript, REST APIs, NodeJS, Vercel, v0, Clerk, Postmark, NeonDB, FaunaDB, Prisma, Drizzle, Cursor, Codex, OpenAI SDK (Embeddings, OCR, Prompting), Shopify API, Pipedream.',
      achievements: [
        'Created an initial prototype solution that took 3 different sets of unstructured data formats and using techniques like OCR and prompting as a first step for a working solution',
        'Conducted over 10+ demos with clients and stakeholders to review progress and define critical next steps in product development.',
        'Created webhook integrations with Postmark for order processing through email and the Shopify Store API for processing real-time product updates.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Shrine Development',
      period: '2024',
      description:
        'Worked briefly for a project in the healthcare industry that focused on managing clinics and patient data. The work consisted of helping the team migrate on demand functions from AWS Lambda to a Docker based environment, following Agile/Scrum practices. Working with tech like ReactJS, NestJS, REST APIs, Docker, AWS Lambda, Sonarcloud and GraphQL.',
      achievements: [
        'Helped refactor and migrate 5+ lambda dependencies into the new Docker strategy in my two month tenure.',
        'Integrated Sonarcloud into their unit/integration testing pipeline. That included refactoring 30+ tests based on the Lambda deprecation process.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Fiserv',
      period: '2017-2021',
      description:
        'Worked as Senior Software Engineer and Technical Lead for FinnTech projects supporting multiple mission-critical applications ranging from ETL processes to complex client-facing applications, operating under Agile/Scrum. Worked with tech like ASP.Net, AutoFac, C#, JavaScript, KendoUI, REST APIs, MSSQL, Azure Cloud and Redis.',
      achievements: [
       'Led a team of 2 developers and 2 QAs to deliver a large implementation of 2K+ accounts for a customer onboarding initiative.',
       'Led and implemented over 30+ new features and improvements based on customer feedback and business needs into our platform.', 
       'Led and implemented the migration of over 5K customer accounts from a legacy Vehicle Remarketting system into our platform.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Fiserv',
      period: '2014-2017',
      description:
        'Worked as Software Engineer for FinnTech projects, ranging from legacy desktop applications to help modernize new processes for internal use. Worked with tech like ASP.Net, C#, JavaScript, KendoUI, REST APIs, MSSQL and WPF.',
      achievements: [
       'Independently worked on a migration to convert a fax processing service from VB6 to C# and .Net Framework 4.5 to continue supporting critical operational processes.',
       'Worked and resolved more than 50+ production issues during my first year on the role.',
       'Deployed four modernization projects into production from 2016 to 2017.'
      ],
    },
    {
      role: '.Net Development Specialist',
      company: 'B&T Consulting',
      period: '2011-2014',
      description:
        'Worked as an specialized .Net Developer, supporting projects in the financial industry, ranging from Excel custom integrations to complex WCF services interfacing with the SAP ecosystem. Worked with tech like ASP.Net, C#, JavaScript, SharePoint, InfoPath, MSSQL, REST APIs, WCF, SAP, Biztalk and TFS.',
      achievements: [
       'Independently worked on a modernization project to transform a classic ASP Idea Submission project into a modern ASP.Net application with new infrastructure, mail server, database and RBAC system. Implemented a system scoped for over 500+ visits a month',
       'Worked on refactoring a very complex architecture that sent data from an InfoPath form directly to SAP. Fix recurrent issues that were stopping the business to submit over 100+ submissions per month.',
       'Helped refactor a critical and complex calculation engine to reduce performance issues by 90%.'
      ],
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C#', 'GO'],
    },
    {
      category: 'Front-End',
      items: ['React', 'Next.js', 'TanStack Router', 'Vite', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap', 'KendoUI'],
    },
    {
      category: 'Back-End',
      items: ['Node.js', 'FastAPI', 'Django REST Framework', 'Flask', 'Spring Boot', 'NestJS', 'ASP.Net', 'GraphQL', 'REST APIs', 'Celery'],
    },
    {
      category: 'Data & AI',
      items: ['PostgreSQL', 'MSSQL', 'Snowflake', 'Redis', 'Hadoop', 'OpenAI SDK', 'OCR', 'OSI PI', 'AVEVA Connect'],
    },
    {
      category: 'Tooling & Infra',
      items: ['Docker', 'Kubernetes', 'AWS (EKS · S3 · Lambda)', 'Azure Cloud', 'DataDog', 'Sonarcloud', 'GitHub Actions', 'Azure DevOps', 'Portainer', 'Kong'],
    }
  ],

  projects: [
    {
      slug: 'poultry-management-system',
      name: 'Poultry Management System',
      description:
        'End-to-end platform to manage the lifecycle of poultry production intended to be scaled globally — projected to deliver $600K/year in operational savings to remove current SaaS solution in place.',
      longDescription:
        'Leading the design and development of a full-stack poultry management platform to replace a fragmented set of legacy tools across multiple production facilities. The system creates a transactional layer that will be consumed and used by mobile and web applications and support data analytics and complex reporting rules based on user roles and permissions.',
      tech: ['Python', 'FastAPI', 'Redis/Valkey', 'ReactJS', 'Vite', 'TanStack Router', 'Material UI', 'Ant Design', 'PostgreSQL', 'Celery', 'Alembic', 'SQLAlchemy', 'Pydantic', 'Pytest', 'Sonarqube', 'SQL Flyways', 'AWS EKS', 'Docker', 'Kubernetes'],
      achievements: [
        'Projected to deliver $600K/year in operational savings by replacing existing legacy solutions.',
        'Projected to scale to 5+ countries in the next two years, including implementations in Europe and Asia.',
        'Take over as technical lead amidst project development and design and architect the front-end, back-end, and data model. Producing over 30+ tables structured across 4 different domains in the system.',
      ],
      diagrams: [
        {
          title: 'High-Level Architecture',
          description: 'The system is designed with a modular architecture to support a multi-platform solution (web and mobile solutions), the front-end solutions are mostly built using ReactJS and React Native. Using Zustand and Tanstack router for persistance and state management on the web app and CouchDB for offline support on the mobile side. The backend consists of a multi-layer REST API architecture built on FastAPI, with a Redis/Valkey caching layer. The data model is structured around a PostgreSQL database with Alembic for migrations on ORM driven code supported primarily by SQLAlchemy and SQL Flyways for SQL version control. The project is supported by an AWS architecture with Dockerized deployments orchestrated by Kubernetes on EKS and Vela for CI/CD using GitHub as the main code repository.',
          imageUrl: '/public/diagrams/Poultry App Architecture.png',
        },
      ],
      url: '',
      live: '',
    },
    {
      slug: 'manufacturing-data-hub',
      name: 'Manufacturing Data Hub Solution',
      description:
        'A comprehensive solution for aggregating and visualizing manufacturing data from various sources that is helping save over 1M USD in operational errors because of its centralized data architecture.',
      longDescription:
        'Designed and led the end-to-end implementation of a centralized manufacturing data hub that unified data from OSI PI historians, AVEVA Connect, Snowflake, and relational databases. The platform exposed REST APIs consumed by React dashboards and PowerApps, enabling real-time visibility into production KPIs across 6 facilities. Celery workers handled async ETL pipelines while Kubernetes orchestrated container workloads on AWS EKS.',
      tech: ['Python', 'Django Rest Framework', 'FastAPI', 'Snowflake', 'PostgreSQL', 'Celery', 'AWS S3', 'AWS Lambda', 'K8s', 'Docker', 'PowerApps', 'ReactJS', 'JavaScript', 'C#', 'OSI PI Web API', 'OSI PI AFSDK', 'AVEVA Connect', 'DataDog'],
      achievements: [
        'Reduced operational errors by 60%, translating to over $1M in savings across 6 facilities.',
        'Created a single queryable analytics consumption layer from multiple source systems for seamless data access.',
        'Delivers over 20 KPIs in near-real time to plant operators and supervisors for fast decision making.',
        'Created a monitoring layer for real-time observability and alerting.',
        'Built a custom data-contextualization engine in less than 2 months to replace a SaaS solution and avoid the downtime of 15+ data transformation pipelines.',
      ],
      diagrams: [
        {
          title: 'High-Level Architecture',
          description: 'Data flows from plant historians (OSI PI, AVEVA) through ETL workers into a unified Snowflake warehouse, exposed via FastAPI and consumed by React / PowerApps frontends.',
          // Replace imageUrl with a real path under /public when ready
          imageUrl: '',
        },
      ],
      url: '',
      live: '',
    },
    {
      slug: 'document-processing-engine',
      name: 'GenAI Document Processing Engine',
      description:
        'An AI-powered engine that automates unstructured document processing using OCR and LLM prompting that is saving more than 80% of time in manual review and processing from technical writers.',
      longDescription:
        'Built a scalable document processing pipeline that ingests text from PDFs, Excels and Word documents OpenAI-based prompting chains to classify, extract, and route structured data to downstream systems. The engine reduced manual processing time by 80% within the first 4 months and is projected to handle 100K+ documents over the next 5 years.',
      tech: ['Python', 'OpenAI SDK', 'OCR', 'AWS S3', 'PostgreSQL', 'Java Spring Boot', 'ReactJS'],
      achievements: [
        'Reduced manual document processing time by 80% within 4 months of launch.',
        'Projected to process over 100K documents over the next 5 years.',
        'Handled 3 different unstructured data formats in a single unified pipeline.'
      ],
      diagrams: [
        {
          title: 'Pipeline Overview',
          description: 'Documents are uploaded to S3, triggering a Lambda that fans out to OCR and LLM extraction workers. Results are stored in Postgres and pushed to downstream systems.',
          imageUrl: '',
        },
      ],
      url: '',
      live: '',
    },
        {
      slug: 'seed-quality-computer-vision-inspector',
      name: 'Seed Quality Computer Vision Inspector',
      description:
        'A comprehensive platform for managing the seed quality inspection process, from image capture to quality assessment and reporting.',
      longDescription:
        'Work as an engineer maintaining and supporting a large enterprise web-application to handle the seed quality inspection lifecycle for agricultural companies.',
      tech: ['ReactJS', 'TypeScript', 'NodeJS', 'GO', 'Python', 'Flask', 'Postgres', 'Hadoop', 'Kafka'],
      achievements: [
        'Worked and resolved over 50+ production support tickets.',
        'Became a key contributor to the team and was entrusted with critical bug from Business Analysts and Client Support Representatives.',
      ],
      diagrams: [],
      url: '',
      live: '',
    },
    {
      slug: 'ai-powered-order-processing',
      name: 'AI-Powered Order Processing System',
      description:
        'Prototyped an AI-driven engine that automates order processing by ingesting unstructured data from emails, PDFs, images and spreadsheets, applying OCR and LLM techniques to extract structured information, and integrating with Shopify and email systems for seamless order management that was planning to reduce manual processing time by 80% by creating a fully autonomous agentic system.',
      longDescription:
        'Prototyped an order management system that leverages AI to streamline the processing of incoming orders from various channels to help reduce the need for human intervention when the order is received regardless of the format. I participated in the first four months of the project to create the initial prototype solution that took 3 different sets of unstructured data formats and using techniques like OCR and prompting as a first step for a working solution. I also created webhook integrations with Postmark for order processing through email and the Shopify Store API for processing real-time product updates.',
      tech: ['ReactJS', 'NextJS', 'NodeJS', 'Vercel', 'Neon', 'Cursor', 'Codex', 'Shopify API', 'GraphQL', 'OpenAI SDK', 'Tesseract', 'Postmark', 'Clerk', 'TanStack Router', 'Drizzle', 'Prisma', 'FaunaDB', 'v0'],
      achievements: [
        'Reduced manual labor for seed quality checks by 30%.',
        'The MVP architecture served as a baseline to create a well established product on a global scale.',
        'The solution was designed to publish quality results back to the industrial data historian system (OSI PI), resulting in a full closed-loop system that enables data-driven decision making and traceability.',
      ],
      diagrams: [],
      url: '',
      live: '',
    },
    {
      slug: 'banking-servicing-platform',
      name: 'Banking Servicing Platform',
      description:
        'A comprehensive servicing platform to manage customer accounts and their loans. A large distributed system serving the 10 largest vehicle manufacturers in the US.',
      longDescription:
        'Work as a technical lead for a subset of teams maintaining and supporting a large enterprise web-application to handle the customer financial lifecycle within specific car manufacturers and dealers in the US, ranging from loan origination, servicing, and collections.',
      tech: ['ASP.Net', 'C#', 'MSSQL', 'JavaScript', 'KendoUI', 'Redis', 'Azure Cloud', 'Azure DevOps'],
      achievements: [
        'Led a team of 2 developers and 2 QAs to deliver a large implementation of 2K+ accounts for a customer onboarding initiative.',
        'Helped migrate over 5K customer accounts from a legacy Vehicle Remarketting system into our platform.',
        'Help migrate over 50+ SQL views into our Azure SQL database platform.',
      ],
      diagrams: [],
      url: '',
      live: '',
    },
    {
      slug: 'loan-origination-system',
      name: 'Loan Origination System',
      description:
        'A comprehensive platform for managing the loan origination process, from application to approval and funding.',
      longDescription:
        'Work as an engineer maintaining and supporting a large enterprise web-application to handle the customer financial lifecycle for small-mid size banks in the US.',
      tech: ['ASP.Net', 'C#', 'MSSQL', 'JavaScript', 'Perforce', 'TFS'],
      achievements: [
        'Worked and resolved over 50+ production support tickets.',
        'Became a key contributor to the team and was entrusted with critical bug from Business Analysts and Client Support Representatives.',
      ],
      diagrams: [],
      url: '',
      live: '',
    },
  ],
}
