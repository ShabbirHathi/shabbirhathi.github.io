// Portfolio data - All content is driven from this file.
// No hardcoded text in components.
//
// Source of truth: the BurhaniTech/portfolio-data repo (core.yaml + projects/*.yaml).
// When that changes, update this file - not the components.

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  features: string[];
  /** Short, quantified proof points shown as chips on the card. */
  metrics?: string[];
  techStack: string[];
  role: string;
  type: string;
  links?: ProjectLink[];
  /** Path under /public, e.g. "/screenshots/unifeyn.webp" (16:9). */
  image?: string;
  /**
   * Curation signal, used only to break ties inside an ordering tier.
   * The grid leads with projects that have both a live link and a screenshot,
   * so this no longer guarantees a slot in the default view.
   */
  featured?: boolean;
}

/**
 * A client engagement, not an employment record.
 *
 * Deliberately year-level and one line each. Month-precise ranges under an
 * "Employment" heading invite employment-history scrutiny that a hiring client
 * has no use for; detail belongs in `projects`, which carries it better.
 */
export interface ClientEngagement {
  id: string;
  /** Client or employer, named as a visitor would recognise it. */
  name: string;
  /** Year granularity only, e.g. "2026", "2024 - now", "2022 - 2024". */
  years: string;
  /** One sentence: what was delivered, and the outcome where there is one. */
  summary: string;
  /** Accent chip. Currently only used to surface repeat business. */
  tag?: string;
  /** Project `id` to deep-link into the Projects grid. */
  projectId?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: "Bot" | "Server" | "LifeBuoy" | "Database";
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: "Calendar" | "Rocket" | "Users" | "Download";
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    location: string;
    timezone: string;
    pronouns: string;
    summaryShort: string;
    summaryLong: string;
    links: {
      email: string;
      github: string;
      linkedin: string;
      website: string;
      calendly: string;
      resume: string;
    };
    availability: "open_to_work" | "busy";
    openTo: string[];
    lastUpdated: string;
    yearsOfExperience: string;
    industriesWorkedIn: string[];
    stats: Stat[];
    services: Service[];
  };
  skills: {
    core: string[];
    supporting: string[];
    tools: string[];
    methodologies: string[];
  };
  clients: ClientEngagement[];
  projects: Project[];
  testimonials: Testimonial[];
  contacts: {
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    website: string;
    calendly: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Shabbir Hathi",
    title: "AI Engineer & Backend Developer",
    location: "Surat, India",
    timezone: "Asia/Kolkata (IST)",
    pronouns: "he/him",
    summaryShort:
      "I build production AI systems that actually ship: RAG backends, multi-agent LLM pipelines, and complete SaaS platforms. And I rescue the ones that don't.",
    summaryLong: `I'm an AI and backend engineer with 4 years of shipping production systems for startups, agencies, and their clients. Most of my work is LLM-heavy: retrieval-augmented backends with citations and multi-provider routing, LangGraph agents that verify their own claims, and a 16-agent pipeline that turns a text prompt into a playable browser game. I own the whole stack when needed, from the data model and API to billing, deployment, and the stability audit afterwards.

Clients bring me in for two reasons: to build something new that has to work in production, or to take over something that already exists and is breaking. Recent work includes a GTM decision-intelligence platform, a from-scratch rebuild of a live AI study app with zero data loss, a sustainability-scoring platform delivered in a two-week on-site sprint with a German client, and a self-hosted employee analytics platform whose native desktop agents run on 60+ machines for roughly nine hours a day. One of those clients first hired me in 2024 and came back two years later to rebuild a second product.`,
    links: {
      email: "shabbirhathi4@gmail.com",
      github: "https://github.com/ShabbirHathi",
      linkedin: "https://www.linkedin.com/in/hathi-shabbir-a75509161/",
      website: "https://shabbirhathi.github.io/",
      calendly: "https://calendly.com/shabbirhathi4/30min",
      resume: "/Shabbir-Hathi-Resume.pdf",
    },
    availability: "open_to_work",
    openTo: [
      "Freelance & contract AI projects",
      "Production rescue engagements",
      "Full-time AI / Backend roles",
      "Remote, IST hours with US/EU overlap",
    ],
    lastUpdated: "2026-09-07",
    yearsOfExperience: "4",
    industriesWorkedIn: [
      "AI/ML",
      "SaaS",
      "EdTech",
      "Sustainability & FoodTech",
      "GTM / Consulting",
      "Sports Analytics",
      "E-commerce",
    ],
    stats: [
      { value: "4", label: "Years shipping production AI", icon: "Calendar" },
      { value: "16", label: "Projects delivered end to end", icon: "Rocket" },
      { value: "60+", label: "Desktop agents, ~9h/day each", icon: "Users" },
      { value: "10K+", label: "Play Store downloads (AI I built)", icon: "Download" },
    ],
    services: [
      {
        title: "AI Agents & RAG Systems",
        description:
          "LangGraph and LangChain agents, retrieval with citations, hybrid search, multi-provider LLM routing, and per-call cost metering so you know exactly what every feature costs to run.",
        icon: "Bot",
      },
      {
        title: "SaaS Backends, End to End",
        description:
          "FastAPI, Django, or NestJS APIs with auth, Stripe or RevenueCat billing, background jobs, real-time streaming, and AWS deployment. Delivered with an OpenAPI spec your frontend team can build against.",
        icon: "Server",
      },
      {
        title: "Production Rescue & Rebuilds",
        description:
          "Take over an unstable or vibe-coded app, root-cause what's breaking, and stabilise or rebuild it with zero data loss. Measured before and after, not guesswork.",
        icon: "LifeBuoy",
      },
      {
        title: "Data Pipelines & Computer Vision",
        description:
          "Scraping and scheduled ingestion pipelines, ML and CV models shipped behind APIs, and generative image systems fine-tuned for your domain.",
        icon: "Database",
      },
    ],
  },

  skills: {
    core: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Django",
      "Flask",
      "NestJS",
      "React",
      "Next.js",
      "RAG",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Anthropic Claude",
      "Stable Diffusion",
      "Web Scraping",
    ],
    supporting: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Qdrant",
      "ChromaDB",
      "pgvector",
      "Supabase",
      "SQLAlchemy",
      "Prisma",
      "Celery",
      "Socket.IO",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "YOLO",
      "scikit-learn",
      "Selenium",
      "BeautifulSoup",
      "PyQt6",
      "Docker",
      "Nginx",
      "AWS",
    ],
    tools: [
      "Stripe",
      "RevenueCat",
      "SCORM / LTI",
      "Perplexity API",
      "Groq",
      "Gamma AI",
      "ElevenLabs",
      "SerpAPI",
      "Magic Link Auth",
      "OAuth",
      "PostHog",
      "GitHub Actions",
      "Playwright",
    ],
    methodologies: [
      "TDD",
      "CI/CD",
      "Observability",
      "LLM cost & token metering",
      "Spec-first delivery (PRD → build)",
    ],
  },

  // Ordered by recency of activity. Years only - see ClientEngagement.
  clients: [
    {
      id: "unifeyn",
      name: "Unifeyn",
      years: "2026",
      tag: "Repeat client",
      summary:
        "Rebuilt a live AI study platform from scratch across 20+ migrations, with zero data loss for existing users.",
      projectId: "unifeyn",
    },
    {
      id: "wizly",
      name: "Wizly AI",
      years: "2025 - 2026",
      summary:
        "Owned the AI and agent layer on a GTM decision-intelligence platform, cutting per-turn agent latency by around 60%.",
      projectId: "wizly",
    },
    {
      id: "iroid-solutions",
      name: "iRoid Solutions",
      years: "2024 - now",
      summary:
        "AI and backend delivery for agency clients including Strive Studio and a German food-supply-chain group, plus the analytics platform running on 60+ machines.",
      projectId: "ai-learning-game-builder",
    },
    {
      id: "supportjoy",
      name: "SupportJoy",
      years: "2024",
      tag: "Repeat client",
      summary:
        "Built an AI chatbot SaaS with RAG, an embeddable widget and Stripe billing. The same client returned in 2026 for Unifeyn.",
      projectId: "supportjoy",
    },
    {
      id: "priveguard",
      name: "PriveGuard",
      years: "2024",
      summary:
        "Built an anti-piracy SaaS for digital creators, with automated detection, domain whitelisting and subscription billing.",
      projectId: "priveguard",
    },
    {
      id: "differenz-system",
      name: "Differenz System",
      years: "2022 - 2024",
      summary:
        "Computer vision, generative AI and backend work, including a dog breed identifier that reached 10K+ downloads at 95%+ accuracy.",
      projectId: "dog-breed-identifier",
    },
  ],

  projects: [
    {
      id: "ai-learning-game-builder",
      title: "Learning Games Studio",
      category: "Multi-Agent LLM Systems",
      period: "Jul 2026 - Present",
      description:
        "Describe a learning game in plain language and get a complete, playable browser game back, with no developer in the loop. Built solo for an iRoid client to replace two earlier prototypes with a production, multi-tenant system.",
      features: [
        "16 specialised agents in a Postgres-checkpointed pipeline: PRD → architecture → code → QA → visual QA → auto-debug",
        "Self-healing QA chain: syntax gate, LLM repair, completeness audit, Playwright + vision-model checks",
        "Runtime-editable model registry with per-call token and cost metering",
        "SCORM 1.2 and LTI 1.3 delivery, credit-based Stripe billing, public game gallery",
      ],
      metrics: ["16 AI agents", "$0.10 - $1.28 per build", "~15,000 LOC, sole author"],
      techStack: [
        "TypeScript",
        "NestJS",
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "Anthropic Claude",
        "OpenAI",
        "Playwright",
        "Three.js",
        "Stripe",
        "Docker",
      ],
      role: "Architect & Sole Developer",
      type: "Production multi-tenant service",
      links: [{ label: "Live site", href: "https://learning-games.studio/" }],
      image: "/screenshots/game-builder.webp",
      featured: true,
    },
    {
      id: "unifeyn",
      title: "Unifeyn",
      category: "AI Products & SaaS",
      period: "Jun 2026 - Aug 2026",
      description:
        "The client's live AI study app was breaking in production and the UI wasn't landing. I rebuilt it from scratch as a production-grade system with a real knowledge-base data model, collaboration, credit-metered billing, and a redesigned UI, while keeping every existing user.",
      features: [
        "PostgreSQL + pgvector workspace → knowledge base → spaces model with RLS collaboration",
        "Credit-based billing metered on real per-model API cost across 6 plan tiers",
        "Invites, share links, referral and affiliate programs",
        "Node.js migration tool: export, re-chunk, re-embed, idempotent SQL",
      ],
      metrics: ["Zero data loss across 20+ migrations", "Fixed a billing bug hitting 100% of weekly subscribers", "6-tier credit system"],
      techStack: [
        "React",
        "TypeScript",
        "TanStack Start",
        "Supabase",
        "PostgreSQL",
        "pgvector",
        "Deno Edge Functions",
        "OpenAI",
        "Whisper",
        "ElevenLabs",
        "RevenueCat",
        "Stripe",
      ],
      role: "Lead Engineer & Product Strategist",
      type: "Live consumer SaaS",
      links: [{ label: "Live site", href: "https://unifeyn.app/" }],
      image: "/screenshots/unifeyn.webp",
      featured: true,
    },
    {
      id: "wizly",
      title: "Wizly AI",
      category: "AI Agents",
      period: "Dec 2025 - Mar 2026",
      description:
        "A SaaS platform that turns a business question into a consulting-grade insight report by sourcing paid expert opinions, interviewing them with an AI agent, and packaging the result. I owned the entire AI and agent layer as contract AI Engineer.",
      features: [
        "LangGraph expert-interview agent with claim verification via date-aware web search",
        "8-dimension response-quality scoring and 4 exit conditions",
        "Hybrid RRF (dense + sparse) retrieval with LLM relevance filtering",
        "Gamma-AI-backed PDF/PPT report generation in MBB consulting format",
      ],
      metrics: ["Per-turn latency ~25s → ~9s", "~47% fewer prompt tokens", "10+ features shipped"],
      techStack: [
        "Python",
        "FastAPI",
        "LangChain",
        "LangGraph",
        "Anthropic Claude",
        "OpenAI",
        "Perplexity API",
        "Qdrant",
        "PostgreSQL",
        "AWS S3/SQS",
        "Celery",
        "Gamma AI",
      ],
      role: "AI Engineer (Contract)",
      type: "B2B SaaS platform",
      image: "/screenshots/wizly.webp",
      featured: true,
    },
    {
      id: "keecz",
      title: "KEECZ",
      category: "AI Products & SaaS",
      period: "Jun 2026",
      description:
        "B2B platform for German institutional kitchens that turns a 4-week meal plan (PDF or Excel) into a deterministic sustainability score against the supplier's product catalog, with an AI chatbot for recommendations. Built during a two-week sprint with the client embedded on site.",
      features: [
        "Deterministic 260-point scoring engine across Climate, Eco, and DGE nutrition dimensions",
        "Dual-provider LLM PDF extraction (Claude primary, OpenAI fallback) across 3 document layouts",
        "SSE-streamed AI chatbot and two-tier AI summaries",
        "Admin-tunable prompts, catalog upload, and configuration with no deploy needed",
      ],
      metrics: ["39 REST endpoints in 2 weeks", "1,014-article catalog modelled", "Replaced an unreproducible LLM-only scorer"],
      techStack: [
        "Python",
        "Django",
        "Django REST Framework",
        "MySQL",
        "Anthropic Claude",
        "OpenAI",
        "Celery",
        "Redis",
        "pdfplumber",
        "Next.js",
      ],
      role: "Project Manager & Backend/AI Engineer",
      type: "B2B SaaS for a European client",
      // Hosted on a bare IP over plain HTTP, so labelled "demo" rather than
      // "Live site". Swap in a proper domain if the client provisions one.
      links: [{ label: "Live demo", href: "http://138.199.211.98:3000/" }],
      image: "/screenshots/keecz.webp",
      featured: true,
    },
    {
      id: "iroid-tracker",
      title: "iRoid Tracker",
      category: "Platforms & Infrastructure",
      period: "Mar 2026 - Present",
      description:
        "A self-hosted time-tracking and productivity analytics platform I designed, built, and operate for a 60-person company. Native Windows and macOS agents run on each developer's machine for roughly nine hours a day, streaming activity to a FastAPI backend and React admin dashboard.",
      features: [
        "Native desktop agents with offline resilience: local event log, disk-backed retry queue, idempotent ingestion",
        "22 computed analytics cards, payroll module, and Excel exports",
        "34-item stability audit with measured before/after results",
        "Release pipeline: GitHub Actions builds .exe and .dmg, S3-hosted installers, force-update gating",
      ],
      metrics: ["60+ agents, ~9h/day each", "Server load halved (2.09 → 0.48)", "69 REST endpoints, ~40K LOC"],
      techStack: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "MySQL",
        "Celery",
        "Redis",
        "React",
        "TypeScript",
        "PyQt6",
        "AWS EC2/S3",
        "Nginx",
        "GitHub Actions",
      ],
      role: "Solo Architect & Full-Stack Engineer",
      type: "Production internal platform",
      featured: true,
    },
    {
      id: "ai-knowledge-assistant",
      title: "AI Knowledge Assistant",
      category: "RAG & LLM Backends",
      period: "Oct 2024 - Oct 2025",
      description:
        "Production RAG backend for an enterprise learning assistant: ingest PDFs, PPTX, Excel, URLs and Notion, answer with source citations, and stream responses in real time, with the LLM provider switchable at runtime.",
      features: [
        "Modular ingestion for PDF, PPTX, Excel, URLs, and Notion",
        "Qdrant + LangChain retrieval with citation highlighting",
        "Multi-provider routing across OpenAI, Mistral, Cohere, and AWS Bedrock with failover",
        "Socket.IO streaming with backpressure; Celery/Redis background jobs",
      ],
      metrics: ["35% lower chat latency", "22% lower token cost", "4 LLM providers, runtime switching"],
      techStack: [
        "Python",
        "Flask",
        "Flask-SocketIO",
        "Celery",
        "Redis",
        "MySQL",
        "SQLAlchemy",
        "LangChain",
        "Qdrant",
        "OpenAI",
        "AWS Bedrock",
        "Docker",
        "Nginx",
      ],
      role: "Backend Engineer",
      type: "Production enterprise backend",
      links: [
        {
          label: "Android app",
          href: "https://play.google.com/store/apps/details?id=com.app.bes_ai_assistant",
        },
        {
          label: "Admin login",
          href: "https://ai-assistant.bes-learning.com/admin/login",
        },
      ],
      image: "/screenshots/knowledge-assistant.webp",
      featured: true,
    },
    {
      id: "wenue-eva",
      title: "Wenue AI Event Planning Agent (Eva)",
      category: "AI Agents",
      period: "Jan 2025 - Oct 2025",
      description:
        "A LangChain-powered assistant that plans events end to end: venue and service discovery, budgeting, timelines, seating, marketing, and weather, delivered over a real-time chat interface for Wenue's web and mobile apps.",
      features: [
        "LangChain functions agent with conversational memory",
        "10 planning tools: checklist, venues, services, budget, timeline, seating, and more",
        "Flask-SocketIO real-time chat with room-based routing",
        "Paginated REST history and venue/service sync endpoints",
      ],
      metrics: ["10 agent tools", "5 REST + 5 Socket.IO endpoints"],
      techStack: ["Python", "Flask", "Flask-SocketIO", "LangChain", "OpenAI", "SQLAlchemy", "ChromaDB", "Streamlit"],
      role: "Lead AI & Backend Engineer",
      type: "Production AI agent",
    },
    {
      id: "vector-db-api",
      title: "Self-Hosted Vector Database API",
      category: "Platforms & Infrastructure",
      period: "Jun 2024 - Oct 2025",
      description:
        "A Docker-ready Flask service for embedding storage and contextual retrieval that any product can call: per-user and per-model collections, LLM-compressed retrieval for higher relevance, and a secured Qdrant stack behind Nginx.",
      features: [
        "Add, retrieve, delete, and wipe vectors per user and embedding model",
        "Contextual compression retriever (LLMChainExtractor)",
        "Multi-provider embeddings: OpenAI, Cohere, Mistral",
        "Docker Compose deployment with persistent volumes",
      ],
      metrics: ["<200 ms p95 retrieval", ">1M chunks per deployment"],
      techStack: ["Python", "Flask", "LangChain", "ChromaDB", "Qdrant", "OpenAI", "Cohere", "Mistral", "Docker", "Nginx", "AWS"],
      role: "Backend & AI Engineer",
      type: "Reusable AI infrastructure",
    },
    {
      id: "impact-analysis",
      title: "Impact Analysis: LMS → Business KPIs",
      category: "Machine Learning & Data",
      period: "Aug 2025 - Oct 2025",
      description:
        "An ML service that connects learning-platform KPIs to business outcomes: merges datasets, aligns them with configurable time delays, cleans and encodes, then evaluates six regression families and reports the best model with explainability.",
      features: [
        "Dynamic time/entity column detection with feasible aggregations",
        "Configurable day/week/month/year time-shift alignment",
        "IQR outlier handling, encoding, normalisation, 5-fold CV leaderboard",
        "Swagger-documented APIs returning chart-ready JSON",
      ],
      metrics: ["6 regression families, auto best-model", "3 documented endpoints"],
      techStack: ["Python", "Flask", "Pandas", "NumPy", "scikit-learn", "Swagger/OpenAPI"],
      role: "ML Engineer & Backend Developer",
      type: "Analytics service",
    },
    {
      id: "supportjoy",
      title: "SupportJoy",
      category: "AI Products & SaaS",
      period: "Jun 2023 - Oct 2024",
      description:
        "A self-serve SaaS that lets any business train a support chatbot on its own content and drop it onto its website. Built end to end: dashboard, ingestion, RAG, billing, and the embeddable widget.",
      features: [
        "RAG over PDF, TXT, DOC, PPT uploads and scraped URLs",
        "Embeddable JavaScript widget with appearance customisation",
        "Magic-link authentication and Stripe subscriptions",
        "Per-account token consumption tracking and chat history",
      ],
      metrics: ["Full SaaS shipped solo", "4 file formats + URL ingestion"],
      techStack: ["Django", "Python", "JavaScript", "Bootstrap", "Stripe", "RAG", "Embeddings", "Web Scraping"],
      role: "Full-Stack Developer",
      type: "Commercial SaaS",
      image: "/screenshots/supportjoy.webp",
    },
    {
      id: "priveguard",
      title: "PriveGuard",
      category: "AI Products & SaaS",
      period: "Aug 2023 - Dec 2024",
      description:
        "A subscription platform that helps digital creators find and manage pirated copies of their products. User-facing dashboard plus an internal admin tool that runs automated detection.",
      features: [
        "SerpAPI-driven automated piracy detection",
        "Domain whitelisting to exclude legitimate sources",
        "Stripe subscription billing and user dashboard",
        "Streamlit + Flask internal admin with monthly reporting",
      ],
      metrics: ["Dual-app architecture (users + admin)", "Automated monthly detection reports"],
      techStack: ["Django", "Python", "Bootstrap", "Jinja2", "Stripe", "SerpAPI", "Streamlit", "Flask"],
      role: "Full-Stack Developer",
      type: "Commercial SaaS",
      links: [{ label: "Live site", href: "https://priveguard.com/" }],
      image: "/screenshots/priveguard.webp",
    },
    {
      id: "dog-breed-identifier",
      title: "AI Dog Breed Identifier",
      category: "Computer Vision",
      period: "Jan 2023 - Jan 2024",
      description:
        "The AI and backend behind a consumer mobile app that identifies dog breeds from photos and video. YOLO finds the dog, custom-trained classifiers name the breed, and a Django REST API serves it all.",
      features: [
        "YOLO detection followed by breed classification",
        "170+ breeds trained on 500+ images each",
        "Django admin for monitoring predictions and model performance",
        "False-positive/negative tracking for continuous improvement",
      ],
      metrics: ["95%+ accuracy", "10K+ downloads", "4.6★ from 243 reviews"],
      techStack: ["Python", "Django REST Framework", "YOLO", "TensorFlow", "OpenCV"],
      role: "AI & Backend Developer",
      type: "Consumer mobile app backend",
    },
    {
      id: "textile-pattern-genai",
      title: "Textile Pattern GenAI",
      category: "Generative AI",
      period: "Jan 2023 - Jun 2024",
      description:
        "A generative platform for textile designers: fine-tuned Stable Diffusion produces floral, seamless, and abstract patterns, exports them as colour-separable PSD layers, and previews them on garments such as sarees.",
      features: [
        "Stable Diffusion fine-tuned on textile datasets",
        "PSD export with layered colour regions and post-hoc recolouring APIs",
        "Garment try-on preview pipeline",
        "Negative prompts, guidance scale, seed, and magic-prompt controls",
      ],
      metrics: ["Layered PSD output", "Async GPU job queue"],
      techStack: ["Django", "React", "Python", "PyTorch", "Stable Diffusion", "diffusers", "CUDA", "Celery", "Redis"],
      role: "GenAI & Backend Engineer",
      type: "Generative AI product",
    },
    {
      id: "recommendation-system",
      title: "Product Recommendation API",
      category: "Machine Learning & Data",
      period: "Sep 2023 - Mar 2024",
      description:
        "A Django REST recommendation engine for an e-commerce catalog, combining user- and item-based cosine similarity with Apriori association rules, refreshed automatically on a schedule.",
      features: [
        "User-based and item-based cosine similarity",
        "Apriori association-rule mining for product bundles",
        "Pandas cleaning and preprocessing pipeline",
        "Cron-driven refresh and JSON APIs for the frontend",
      ],
      metrics: ["3 recommendation strategies", "Scheduled auto-refresh"],
      techStack: ["Django", "Python", "MySQL", "Pandas", "NumPy", "scikit-learn"],
      role: "Backend Developer / Data Engineer",
      type: "Recommendation engine",
    },
    {
      id: "espn-scraping",
      title: "ESPN Basketball Data Pipeline",
      category: "Machine Learning & Data",
      period: "Jan 2024 - Jun 2024",
      description:
        "An automated collection system for NBA and NCAA statistics feeding a sports analytics app: direct API calls where available, scraping where not, structured MySQL storage, scheduled runs, and CSV backups.",
      features: [
        "API-first with BeautifulSoup/Selenium fallback",
        "MySQL schema with scraping-status and integrity tracking",
        "Cron-scheduled continuous updates",
        "CSV export for backup and analysis",
      ],
      metrics: ["2 leagues, daily updates"],
      techStack: ["Python", "BeautifulSoup", "Selenium", "MySQL", "Cron"],
      role: "Backend Developer / Data Engineer",
      type: "Production data pipeline",
    },
    {
      id: "informative-websites",
      title: "Product Showcase Websites",
      category: "Web Development",
      period: "2023 - 2024",
      description:
        "Informative product-catalogue websites for industrial suppliers, built on one reusable React + Django architecture: responsive galleries, standardised pages, and contact forms with email notifications.",
      features: [
        "Reusable React component library",
        "Django REST API for product data",
        "Responsive mobile and desktop layouts",
        "Contact forms with email notifications",
      ],
      metrics: ["3+ sites on one architecture"],
      techStack: ["React", "Django", "SQLite", "Bootstrap", "JavaScript"],
      role: "Full-Stack Developer",
      type: "Marketing websites",
      links: [
        { label: "Reliable Traders", href: "https://reliabletraders.co.in/" },
        { label: "Trinox Abrasives", href: "https://trinoxabrasives.com/" },
      ],
      image: "/screenshots/showcase-websites.webp",
    },
  ],

  // Add real client quotes here and the Testimonials section appears automatically.
  // Leave empty and it stays hidden - never fill this with invented quotes.
  // Suggested asks: Unifeyn, Wizly AI, or the KEECZ client.
  testimonials: [],

  contacts: {
    email: "shabbirhathi4@gmail.com",
    phone: "+91 91577 25351",
    whatsapp:
      "https://wa.me/919157725351?text=Hello%20Shabbir!%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you.",
    github: "https://github.com/ShabbirHathi",
    linkedin: "https://www.linkedin.com/in/hathi-shabbir-a75509161/",
    website: "https://shabbirhathi.github.io/",
    calendly: "https://calendly.com/shabbirhathi4/30min",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Shabbir Hathi. All rights reserved.`,
    tagline: "Production AI systems, shipped end to end.",
  },
};
