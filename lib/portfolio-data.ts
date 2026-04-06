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
    value: "10K+",
    label: "Concurrent Calls",
    detail: "High-concurrency voice AI call center architecture and routing.",
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
      "Architected call center platform handling 10K+ concurrent calls.",
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
    name: "WealthNX.ai",
    category: "Financial Intelligence Platform",
    summary:
      "Bloomberg-style AI platform for hyper-personalized market intelligence and portfolio decision support.",
    outcomes: [
      "Processed 10M+ financial documents with advanced RAG.",
      "Delivered sub-second query responses with 91% prediction accuracy.",
      "Orchestrated multi-agent workflows for risk, sentiment, and signal generation.",
    ],
    stack: ["GPT-4", "Claude", "RAG", "Pinecone", "Qdrant", "FastAPI", "Next.js"],
  },
  {
    name: "Microsoft Call Center AI (Customized)",
    category: "Enterprise Voice AI",
    summary:
      "Extensively customized voice intelligence platform for enterprise support and sales operations.",
    outcomes: [
      "Handled 10K+ simultaneous calls with 99.7% uptime.",
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

export const capabilityGroups = [
  {
    title: "AI Systems",
    items: [
      "Large language model architecture and optimization",
      "Advanced and hybrid RAG design",
      "GraphRAG and multi-hop reasoning",
      "LLM evaluation, observability, and QA",
      "Custom fine-tuning (LoRA, QLoRA)",
    ],
  },
  {
    title: "Product Engineering",
    items: [
      "Multi-tenant SaaS architecture",
      "API and microservice design",
      "Cloud deployment and platform reliability",
      "Real-time analytics and dashboard systems",
      "Secure integrations with enterprise systems",
    ],
  },
  {
    title: "AI Full-Stack Development",
    items: [
      "Responsive frontend architecture with modern component systems",
      "API-first backend engineering for SaaS and enterprise workflows",
      "End-to-end AI feature integration in web products",
      "Security, observability, and production hardening",
      "Scalable deployment strategy across cloud environments",
    ],
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

export type GitHubProjectFallback = {
  name: string;
  description: string;
  url: string;
  tags: string[];
};

export const githubFallbackProjects: GitHubProjectFallback[] = [
  {
    name: "Wortholic AI Assistant",
    description:
      "Enterprise AI assistant platform with multi-model support and production deployment workflows.",
    url: "https://github.com/QuantumByte47/wortholic-ai",
    tags: ["TypeScript", "Next.js", "LLMs"],
  },
  {
    name: "Qwen3 Finance AI System",
    description:
      "GPU-accelerated financial AI system focused on reasoning-heavy market workflows.",
    url: "https://github.com/QuantumByte47/Qwen3-Finance-AI-website-",
    tags: ["Python", "PyTorch", "FastAPI"],
  },
  {
    name: "WT AI Editor SaaS",
    description:
      "AI SaaS platform for content generation, media workflows, and productivity tooling.",
    url: "https://github.com/QuantumByte47/WT-AI-Editor-SAAS",
    tags: ["React", "Express", "PostgreSQL"],
  },
  {
    name: "Multimodal AI Voice Agents",
    description:
      "Multimodal voice AI experiments for real-time conversational systems.",
    url: "https://github.com/QuantumByte47/Multimodal-AI-Voice-Agents",
    tags: ["Voice AI", "Transformers", "Python"],
  },
  {
    name: "MCP Server RAG LLMs",
    description:
      "Model Context Protocol and RAG orchestration toolkit for enterprise assistants.",
    url: "https://github.com/QuantumByte47/MCP-Server-RAG-LLMs",
    tags: ["RAG", "MCP", "LLM Ops"],
  },
  {
    name: "Portfolio Source",
    description:
      "Current portfolio source and frontend system evolution with modern UI architecture.",
    url: "https://github.com/QuantumByte47",
    tags: ["Next.js", "UI", "Frontend"],
  },
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
    label: "GitHub",
    value: "github.com/QuantumByte47",
    href: "https://github.com/QuantumByte47",
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
