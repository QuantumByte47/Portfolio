export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  impact: string[];
  stack: string[];
};

export type ProductItem = {
  name: string;
  category: string;
  summary: string;
  outcomes: string[];
  stack: string[];
};

export type LiveProductBuild = {
  name: string;
  category: string;
  url: string;
  image: string;
  imageFit: "cover" | "contain";
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const keyMetrics: Metric[] = [
  {
    value: "100+",
    label: "Projects Delivered",
    detail: "AI, data, and automation systems shipped for startups and enterprise teams.",
  },
  {
    value: "25+",
    label: "RAG Deployments",
    detail: "Production knowledge systems across legal, healthcare, finance, and support.",
  },
  {
    value: "35+",
    label: "Businesses Automated",
    detail: "n8n, Make, Zapier, CRM and communication workflows at business scale.",
  },
  {
    value: "50M+",
    label: "Embeddings Managed",
    detail: "Vector infrastructure with sub-50ms retrieval and high availability.",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
    detail: "Reliable SaaS and AI pipelines with monitoring and observability.",
  },
];

export const focusAreas = [
  "LLM Architecture",
  "Advanced RAG",
  "Voice AI",
  "Agentic Workflows",
  "AI SaaS Engineering",
  "Automation Infrastructure",
  "Data Platforms",
  "MLOps & Reliability",
];

export const credibilityPoints = [
  "Built enterprise automation for 50K+ users with up to 60% operational cost reduction.",
  "Reduced hallucinations by 73% and RAG response latency by 65% in production finance systems.",
  "Delivered multi-tenant SaaS products with real-time analytics and enterprise RBAC.",
  "Launched dozens of real-world AI products spanning voice, retrieval, analytics, and workflow automation.",
];

export const liveProductBuilds: LiveProductBuild[] = [
  {
    name: "NaturalFlow.ai",
    category: "AI Communication Platform",
    url: "https://www.naturalflow.ai/",
    image: "/images/live-products/naturalflow-hero.jpg",
    imageFit: "cover",
    role: "Product architecture, agent orchestration, and delivery with the engineering team",
    summary:
      "Live AI communication platform for inbound calls, outbound sales, SMS conversations, chatbots, routing, scheduling, analytics, and business integrations.",
    highlights: [
      "Designed the agent workflow layer across voice, chat, and messaging channels.",
      "Architected call routing, lead qualification, appointment scheduling, and support flows.",
      "Shaped production integrations with CRM, calendar, analytics, and communication systems.",
    ],
    stack: ["Voice AI", "LLM Agents", "STT/TTS", "Twilio", "CRM Integrations", "Analytics"],
  },
  {
    name: "WealthNX.ai",
    category: "Personal Financial AI Copilot",
    url: "https://www.wealthnx.ai/",
    image: "/images/live-products/wealthnx-hero.png",
    imageFit: "contain",
    role: "Financial AI architecture, multi-agent systems, and product delivery with the team",
    summary:
      "Multi-agent finance product that brings accounts, market context, stock research, crypto intelligence, accountant workflows, and custom visual dashboards into one AI-led experience.",
    highlights: [
      "Architected specialized agents for spending, market intelligence, crypto, and build-mode analytics.",
      "Built the foundation for read-only financial visibility, explanations, and dashboard generation.",
      "Connected real-time and historical data workflows for clearer financial understanding.",
    ],
    stack: ["Financial AI", "Multi-Agent Systems", "RAG", "Market Data", "Dashboards", "MLOps"],
  },
  {
    name: "Galileo.ai",
    category: "AI Evaluation & Observability",
    url: "https://galileo.ai/",
    image: "/images/live-products/galileo.png",
    imageFit: "cover",
    role: "Eval engineering, observability workflows, and AI reliability architecture with teams",
    summary:
      "AI observability and evaluation platform for offline evals, production guardrails, RAG quality, agent behavior analysis, safety checks, traces, and deployment confidence.",
    highlights: [
      "Contributed to evaluation flows that connect development datasets with production AI behavior.",
      "Worked on reliability patterns for traces, failure analysis, guardrails, and model feedback loops.",
      "Supported architecture for RAG and agent eval use cases across production environments.",
    ],
    stack: ["LLM Evaluation", "RAG Evals", "Guardrails", "Tracing", "Observability", "Data Pipelines"],
  },
  {
    name: "Robin AI",
    category: "Legal Intelligence Platform",
    url: "https://robinai.com/",
    image: "/images/live-products/robin.jpg",
    imageFit: "cover",
    role: "Legal AI architecture, contract intelligence systems, and team-based delivery",
    summary:
      "Enterprise legal AI platform for contract review, document search, legal chat, obligations tracking, workspaces, and secure collaboration for legal teams.",
    highlights: [
      "Helped shape contract intelligence workflows for review, analysis, search, and collaboration.",
      "Designed AI-assisted document experiences for legal teams working across large contract sets.",
      "Focused on secure, enterprise-ready patterns for sensitive legal data and team workflows.",
    ],
    stack: ["Legal AI", "Document Intelligence", "Search", "LLM Chat", "Workspaces", "Security"],
  },
  {
    name: "Genie AI",
    category: "AI Contracting Platform",
    url: "https://www.genieai.co/",
    image: "/images/live-products/genie.png",
    imageFit: "cover",
    role: "Legal agent architecture, document workflows, and product engineering with teams",
    summary:
      "AI contracting platform for drafting, reviewing, redlining, negotiating, organizing, and extracting insights from complex business agreements.",
    highlights: [
      "Worked on agentic legal workflows across drafting, review, playbooks, and negotiation support.",
      "Supported document intelligence patterns for multi-document deals and structured insights.",
      "Contributed to product architecture for business teams needing faster contract operations.",
    ],
    stack: ["Legal Agents", "Document AI", "Playbooks", "Contract Review", "Tracked Changes", "Integrations"],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    role: "Lead AI Engineer",
    company: "Wortholic",
    period: "Aug 2025 - Present",
    location: "Rawalpindi, Pakistan (On-site)",
    summary:
      "Leading AI product strategy and engineering delivery across voice AI, RAG, and cloud-native SaaS platforms.",
    impact: [
      "Built NaturalFlow.ai with custom LLM integration and agentic workflow orchestration.",
      "Architected high-concurrency call center platform infrastructure.",
      "Scaled multidisciplinary AI, data, and full-stack teams for enterprise client delivery.",
    ],
    stack: [
      "GPT-4",
      "Claude",
      "Voice AI",
      "RAG",
      "Python",
      "TensorFlow",
      "PyTorch",
      "Distributed Systems",
    ],
  },
  {
    role: "Senior AI Engineer",
    company: "SimpleTalk AI",
    period: "Apr 2025 - Aug 2025",
    location: "United States (Remote)",
    summary:
      "Designed enterprise-grade LLM orchestration and automation systems with production APIs and structured outputs.",
    impact: [
      "Deployed automation workflows serving 50K+ users.",
      "Cut operational cost by 60% through intelligent routing and orchestration.",
      "Built reliable FastAPI backends for tool-calling and enterprise integrations.",
    ],
    stack: [
      "FastAPI",
      "Function Calling",
      "Agent Systems",
      "Automation",
      "Python",
      "Backend Architecture",
    ],
  },
  {
    role: "Senior Data Scientist",
    company: "INEXOR",
    period: "Jan 2025 - Jul 2025",
    location: "Islamabad, Pakistan",
    summary:
      "Led AI research and financial LLM architecture with advanced retrieval, custom modeling, and production MLOps.",
    impact: [
      "Reduced latency by 65% in multimodal RAG systems.",
      "Lowered hallucination rates by 73% with validation frameworks.",
      "Processed 1M+ daily financial transactions through real-time pipelines.",
    ],
    stack: [
      "RAG",
      "Vector Databases",
      "MLOps",
      "Time Series",
      "TensorFlow",
      "NLP",
      "Evaluation Frameworks",
    ],
  },
  {
    role: "Senior AI Engineer / Data Engineer",
    company: "SuperAnnotate",
    period: "Jan 2024 - Jan 2025",
    location: "United States (Remote)",
    summary:
      "Directed LLM evaluation quality pipelines, annotation frameworks, and feedback systems for model improvement.",
    impact: [
      "Evaluated 50K+ responses with 98% consistency.",
      "Reduced annotation errors by 45% through process and training improvements.",
      "Standardized quality criteria adopted across client engagements.",
    ],
    stack: ["LLM Evaluation", "NLP QA", "Python", "Quality Frameworks", "AI Feedback Loops"],
  },
  {
    role: "Senior Software & Data Engineer",
    company: "Voliom",
    period: "Jan 2022 - Jan 2025",
    location: "Remote",
    summary:
      "Built scalable data and ML systems from ingestion to prediction and decision dashboards in global teams.",
    impact: [
      "Deployed 20+ ML models into production.",
      "Improved conversion by 45% with recommendation algorithms.",
      "Reduced training time by 80% through automated ML pipelines.",
    ],
    stack: ["Python", "Data Engineering", "Machine Learning", "Dashboards", "ETL", "Statistical Modeling"],
  },
];

export const featuredProducts: ProductItem[] = [
  {
    name: "Microsoft Call Center AI (Customized)",
    category: "Enterprise Voice AI",
    summary:
      "Extensively customized voice intelligence platform for enterprise support and sales operations.",
    outcomes: [
      "Handled high-volume simultaneous calls with 99.7% uptime.",
      "Reduced average handle time by 65%.",
      "Improved first-call resolution by 40%.",
    ],
    stack: ["Whisper", "Deepgram", "Twilio", "GPT-4", "RAG", "Analytics"],
  },
  {
    name: "LightRAG Productization",
    category: "Graph-Enhanced RAG",
    summary:
      "Enterprise graph+vector retrieval platform with multi-hop reasoning and context-aware ranking.",
    outcomes: [
      "Reached 94% answer accuracy in production use cases.",
      "Handled 5M+ knowledge nodes with sub-500ms responses.",
      "Reduced irrelevant retrievals by 87% compared to baseline RAG.",
    ],
    stack: ["Neo4j", "Pinecone", "Hybrid Retrieval", "Knowledge Graphs", "Ranking"],
  },
  {
    name: "Milvus Semantic Search Infrastructure",
    category: "Vector Data Platform",
    summary:
      "High-availability vector platform designed for large-scale retrieval, ingestion, and observability.",
    outcomes: [
      "Served 25+ AI applications with 50M+ embeddings.",
      "Achieved sub-50ms nearest-neighbor search latency.",
      "Reduced infrastructure cost by 45% with optimization strategies.",
    ],
    stack: ["Milvus", "IVF", "HNSW", "Distributed Systems", "Monitoring"],
  },
  {
    name: "Open-Lovable Enterprise Extension",
    category: "AI Code Generation",
    summary:
      "Custom AI engineering assistant for full-stack code generation, context-aware scaffolding, and delivery acceleration.",
    outcomes: [
      "Improved delivery velocity by 70% for development teams.",
      "Lowered generation cost by 55% through token strategy optimization.",
      "Added RAG-backed, multi-file, workflow-aware code generation.",
    ],
    stack: ["GPT-4", "Claude", "Prompt Engineering", "Next.js", "Automation"],
  },
  {
    name: "Enterprise AI Agent Platform",
    category: "Automation Workflows",
    summary:
      "Autonomous agent ecosystem with workflow orchestration across CRM, communication, and business operations.",
    outcomes: [
      "Delivered 100+ automation workflows across 35+ businesses.",
      "Reduced manual operations by 60% and increased productivity by 50%.",
      "Integrated voice, SMS, WhatsApp, email, and CRM systems in one pipeline.",
    ],
    stack: ["LangChain", "AutoGen", "CrewAI", "n8n", "Make", "Zapier", "Twilio"],
  },
];

export const toolbelt = [
  "Python",
  "FastAPI",
  "Node.js",
  "React",
  "Next.js",
  "LangChain",
  "LlamaIndex",
  "CrewAI",
  "AutoGen",
  "LangGraph",
  "Pinecone",
  "Qdrant",
  "Milvus",
  "Neo4j",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Twilio",
  "Whisper",
  "Deepgram",
  "ElevenLabs",
  "Stripe",
];

export const frontendProviders = [
  "shadcn/ui",
  "Chakra UI",
  "MUI (Material UI)",
  "Ant Design",
  "Mantine",
  "Radix UI",
  "HeroUI (NextUI)",
  "Headless UI",
];

export const backendPlatforms = [
  "FastAPI",
  "NestJS",
  "Express.js",
  "Django",
  "Flask",
  "Spring Boot",
  ".NET Core",
  "PostgreSQL + Redis",
];

export const advancedAiTooling = [
  "Model Context Protocol (MCP)",
  "MCP Security and Guardrails",
  "Knowledge Graph Architecture (Neo4j)",
  "Enterprise Knowledge Base Systems",
  "GraphRAG and Multi-Hop Retrieval",
  "Vector Databases (Pinecone, Qdrant, Milvus)",
  "LLM Evaluation and Observability (RAGAS, LangSmith)",
  "Agent Frameworks (LangGraph, CrewAI, AutoGen)",
];

export type EngagementModel = {
  title: string;
  timeline: string;
  summary: string;
  deliverables: string[];
};

export const engagementModels: EngagementModel[] = [
  {
    title: "AI MVP Sprint",
    timeline: "2-4 weeks",
    summary:
      "Fast execution for startups and teams that need a production-ready first version quickly.",
    deliverables: [
      "Architecture + technical scope",
      "Core AI workflow and backend APIs",
      "Deployment-ready MVP with handoff notes",
    ],
  },
  {
    title: "Architecture and Reliability Upgrade",
    timeline: "1-3 weeks",
    summary:
      "For existing AI products that need stronger quality, lower latency, and cleaner system design.",
    deliverables: [
      "System audit and bottleneck analysis",
      "RAG/LLM reliability and evaluation plan",
      "Implementation roadmap with prioritized fixes",
    ],
  },
  {
    title: "Ongoing Product Engineering",
    timeline: "Monthly collaboration",
    summary:
      "Long-term technical partnership for roadmap execution, feature delivery, and scaling.",
    deliverables: [
      "Feature implementation and iteration",
      "Monitoring, optimization, and maintenance",
      "Cross-functional support for product growth",
    ],
  },
];

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "talhaislam471@gmail.com",
    href: "mailto:talhaislam471@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/islamtalha",
    href: "https://www.linkedin.com/in/islamtalha/",
  },
  {
    label: "WhatsApp",
    value: "+92 317 5685471",
    href: "https://wa.me/923175685471",
  },
];

export const collaborationPoints = [
  "Timezone overlap available for US and Gulf clients.",
  "Fast response for architecture reviews and new product discovery.",
  "Can start with a short scoping call before full implementation.",
];
