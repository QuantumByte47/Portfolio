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
  url?: string;
  image: string;
  imageFit: "cover" | "contain";
  /*
    "built" means end-to-end ownership with a small team. "contributed" means
    one layer of someone else's product. The page renders these differently on
    purpose - a reader can check these companies, so the distinction has to be
    visible before they ask.
  */
  involvement: "built" | "contributed";
  role: string;
  summary: string;
  highlights: string[];
  keywords: string[];
  stack: string[];
};

export const keyMetrics: Metric[] = [
  {
    value: "7",
    label: "Products live",
    detail: "Shipped and in use by real customers today.",
  },
  {
    value: "25+",
    label: "RAG systems",
    detail: "Legal, healthcare, finance, and support knowledge bases.",
  },
  {
    value: "50M",
    label: "Embeddings",
    detail: "Under management, search holding under 50ms.",
  },
  {
    value: "50K",
    label: "Users reached",
    detail: "Through automation work at SimpleTalk AI.",
  },
  {
    value: "4+ yrs",
    label: "Shipping AI",
    detail: "Data engineering first, then LLM systems.",
  },
];

export const focusAreas = [
  "Retrieval / RAG",
  "Voice & Text Agents",
  "LLM Evaluation",
  "Backend Architecture",
  "Data Platforms",
  "Production MLOps",
];

/*
  Short first-person bio. Written to sound like a person talking, because the
  rest of the internet already has the polished version.
*/
export const aboutParagraphs = [
  "I started in data engineering, which is the reason I tend to look at retrieval and evaluation before I look at the model. Most of the AI systems I have been handed were not failing because the model was weak. They were failing because the wrong three chunks were being retrieved, or because nobody had written down what a correct answer looked like.",
  "These days I am a senior AI engineer at Wortholic, working on product development and enterprise architecture. That means the whole stack: the retrieval layer, agent orchestration, the API underneath, the frontend on top, and the monitoring that tells you when it has quietly stopped working.",
];

export type Principle = {
  title: string;
  detail: string;
};

export const principles: Principle[] = [
  {
    title: "Retrieval before model",
    detail:
      "A better model rarely fixes a bad context window. I profile what is being retrieved first, and most of the time the fix is there and it is cheaper.",
  },
  {
    title: "Evals or it did not happen",
    detail:
      "If there is no test set, nobody can tell whether a prompt change helped. I write the eval before the feature, even when it is thirty examples in a spreadsheet.",
  },
  {
    title: "Scope what the AI may touch",
    detail:
      "Read-only by default. An agent that can explain your portfolio is useful; one that can move money needs a much higher bar and usually a human in the loop.",
  },
  {
    title: "Ship it, then own the pager",
    detail:
      "I stay on a system after launch. Latency creep, retrieval drift, and cost spikes only show up under real traffic, and they always show up.",
  },
];

export const credibilityPoints = [
  "Automation workflows at SimpleTalk AI that 50,000+ users touched, which cut operational cost about 60%.",
  "Cut hallucinations 73% and RAG latency 65% on a finance system at INEXOR, mostly by fixing retrieval before touching the model.",
  "Around 50 million embeddings under management, with search staying under 50ms.",
  "20+ models into production at Voliom, and the on-call rotation that came with them.",
];

export const liveProductBuilds: LiveProductBuild[] = [
  {
    name: "NaturalFlow.ai",
    category: "AI Communication Platform",
    url: "https://www.naturalflow.ai/",
    image: "/images/live-products/naturalflow-cover.png",
    imageFit: "cover",
    involvement: "built",
    role: "Built the agent layer and call infrastructure with the Wortholic engineering team.",
    summary:
      "Answers inbound calls, makes outbound ones, and runs SMS and website chat for businesses. Agents qualify leads, book appointments, route calls, and handle support without a person on the line.",
    highlights: [
      "Built the agent layer so one configuration drives voice, SMS, and chat instead of three separate systems.",
      "Wrote the routing and qualification logic, including the handoff to a human when an agent gets stuck.",
      "Connected the CRM, calendar, and telephony integrations the agents actually act through.",
    ],
    keywords: [
      "Voice Agents",
      "Realtime STT/TTS",
      "Call Routing",
      "SMS & Chatbots",
      "Twilio",
      "CRM Integrations",
    ],
    stack: ["Voice AI", "LLM Agents", "STT/TTS", "Twilio", "CRM Integrations", "Analytics"],
  },
  {
    name: "WealthNX.ai",
    category: "Personal Finance AI",
    url: "https://www.wealthnx.ai/",
    image: "/images/live-products/wealthnx-cover.png",
    imageFit: "cover",
    involvement: "built",
    role: "Architected the assistant layer and the data pipelines behind it, with the product team.",
    summary:
      "Connects bank, brokerage, and crypto accounts through Plaid, then answers questions about them. Separate assistants cover spending, stocks, and crypto, and Build Mode turns a question into a saved chart.",
    highlights: [
      "Split one general assistant into separate spending, stock, and crypto assistants, which cut wrong answers on account-specific questions.",
      "Built the tool-calling layer so answers come from live account and market data instead of the model's memory.",
      "Kept the whole thing read-only. It can explain and analyze a portfolio, but it cannot move money.",
    ],
    keywords: [
      "Financial Agents",
      "Plaid Integration",
      "Tool Calling",
      "Market & Crypto Data",
      "Anomaly Detection",
      "Read-Only Access",
    ],
    stack: ["Financial AI", "Multi-Agent Systems", "RAG", "Market Data", "Dashboards", "MLOps"],
  },
  {
    name: "Compliant.io",
    category: "Security Compliance Platform",
    image: "/images/live-products/compliant-io.png",
    imageFit: "cover",
    involvement: "built",
    role: "Built the retrieval and control-mapping layer with the product team.",
    summary:
      "Tracks how close a company is to passing SOC 2, HIPAA, PCI DSS, NIST CSF, CCPA, and SOX audits. Collects evidence, maps it to controls, and shows what is still missing before the auditor asks.",
    highlights: [
      "Mapped framework requirements to internal controls, so one piece of evidence can satisfy several frameworks at once.",
      "Grounded every answer in the customer's own policies and evidence, with a citation back to the source document.",
      "Built the readiness scoring that turns control status into one percentage and a ranked list of what to fix.",
    ],
    keywords: [
      "Control Mapping",
      "Evidence Automation",
      "Policy Retrieval",
      "Readiness Scoring",
      "Vendor Risk",
      "Audit Trails",
    ],
    stack: ["RAG", "LLM Orchestration", "Vector Search", "Policy Automation", "Audit Analytics", "RBAC"],
  },
  {
    name: "LandLedger",
    category: "Land & Property CRM",
    image: "/images/live-products/landledger.png",
    imageFit: "cover",
    involvement: "built",
    role: "Built the data platform and the deal analytics with the product team.",
    summary:
      "A CRM for people who buy and sell land. Tracks parcels, owners, offers, and deals next to the market data that decides whether a parcel is worth bidding on.",
    highlights: [
      "Built the parcel ingestion pipeline that keeps acreage, ownership, and pricing current across counties.",
      "Modeled price per acre by land type, so a new listing can be checked against recent closes nearby.",
      "Built the pipeline view that follows a deal from first contact through due diligence, contract, and close.",
    ],
    keywords: [
      "Parcel Data",
      "Geospatial Mapping",
      "Deal Pipeline",
      "Price-per-Acre Models",
      "Lead Scoring",
      "Portfolio Analytics",
    ],
    stack: ["Next.js", "PostgreSQL", "Geospatial Data", "LLM Insights", "Pipeline Analytics", "Integrations"],
  },
  {
    name: "Galileo.ai",
    category: "LLM Evaluation & Observability",
    url: "https://galileo.ai/",
    image: "/images/live-products/galileo.png",
    imageFit: "cover",
    involvement: "contributed",
    role: "Worked on evaluation and reliability workflows alongside the platform team.",
    summary:
      "Testing and monitoring for teams running LLMs in production. Runs evals against datasets before release, then keeps checking the same things on live traffic and blocks responses that fail.",
    highlights: [
      "Set up eval suites for RAG and agent systems that score retrieval quality separately from the final answer.",
      "Worked on the path from a failing production trace back to a dataset case, so the same failure gets caught next time.",
      "Tuned guardrail thresholds, where blocking too much turned out to cost as much as blocking too little.",
    ],
    keywords: [
      "LLM-as-Judge",
      "RAG Evals",
      "Agent Traces",
      "Runtime Guardrails",
      "Failure Clustering",
      "Custom Metrics",
    ],
    stack: ["LLM Evaluation", "RAG Evals", "Guardrails", "Tracing", "Observability", "Data Pipelines"],
  },
  {
    name: "Robin AI",
    category: "Contract Review for Legal Teams",
    url: "https://robinai.com/",
    image: "/images/live-products/robin.jpg",
    imageFit: "cover",
    involvement: "contributed",
    role: "Worked on contract retrieval and extraction with the engineering team.",
    summary:
      "Legal teams upload contracts and ask questions about them in a shared thread. Search picks out contract types, signatures, and key terms, and obligations become tracked checklists with deadlines.",
    highlights: [
      "Worked on retrieval across large contract sets, where the answer usually sits in a clause in a different document.",
      "Built extraction for dates, parties, and obligations that feeds the deadline and renewal alerts.",
      "Scoped document access per workspace, since a contract one team can read is often one another team cannot.",
    ],
    keywords: [
      "Contract Q&A",
      "Clause Extraction",
      "Semantic Search",
      "Obligation Tracking",
      "Claude",
      "Scoped Workspaces",
    ],
    stack: ["Legal AI", "Document Intelligence", "Search", "LLM Chat", "Workspaces", "Security"],
  },
  {
    name: "Genie AI",
    category: "Contract Drafting & Negotiation",
    url: "https://www.genieai.co/",
    image: "/images/live-products/genie.png",
    imageFit: "cover",
    involvement: "contributed",
    role: "Worked on the document workflows and the review pipeline with the product team.",
    summary:
      "Drafts, reviews, and redlines business contracts, and answers questions across a set of related documents. Reviews run against a company's own playbook rather than generic legal advice.",
    highlights: [
      "Worked on cross-document context, so a definition in a master agreement carries into the schedules that reference it.",
      "Built playbook-based review that checks a draft against a company's own positions instead of a generic standard.",
      "Added validation gates on generated clauses, because a confident wrong clause is worse than no suggestion.",
    ],
    keywords: [
      "Semantic Graph",
      "Playbook Review",
      "Tracked Changes",
      "Document Q&A",
      "Hallucination Gating",
      "Word Add-in",
    ],
    stack: ["Legal Agents", "Document AI", "Playbooks", "Contract Review", "Tracked Changes", "Integrations"],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    role: "Sr. AI Engineer",
    company: "Wortholic",
    period: "Aug 2025 - Present",
    location: "Rawalpindi, Pakistan (On-site)",
    summary:
      "AI product development and enterprise architecture across voice AI, RAG, and cloud-native SaaS platforms.",
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
    role: "Junior Software & Data Engineer",
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
    name: "Call Center Voice Platform",
    category: "Enterprise Voice",
    summary:
      "Heavily modified build of Microsoft's call center stack for a support and sales floor, with our own routing and retrieval on top.",
    outcomes: [
      "Held 99.7% uptime through high simultaneous call volume.",
      "Cut average handle time 65%, mostly by giving agents the answer before they searched for it.",
      "Raised first-call resolution 40%.",
    ],
    stack: ["Whisper", "Deepgram", "Twilio", "GPT-4", "RAG", "Analytics"],
  },
  {
    name: "LightRAG Productization",
    category: "Graph + Vector Retrieval",
    summary:
      "Took LightRAG from a research repo to something a team could run, pairing a knowledge graph with vector search so questions spanning several documents resolve in one hop.",
    outcomes: [
      "94% answer accuracy on the production question set.",
      "5M+ knowledge nodes, answers under 500ms.",
      "87% fewer irrelevant retrievals than the flat-vector baseline it replaced.",
    ],
    stack: ["Neo4j", "Pinecone", "Hybrid Retrieval", "Knowledge Graphs", "Ranking"],
  },
  {
    name: "Milvus Search Infrastructure",
    category: "Vector Data Platform",
    summary:
      "The shared vector layer 25 applications query instead of each team standing up their own index and drifting apart.",
    outcomes: [
      "50M+ embeddings serving 25+ applications.",
      "Nearest-neighbor search under 50ms.",
      "45% lower infrastructure cost after index and sharding work.",
    ],
    stack: ["Milvus", "IVF", "HNSW", "Distributed Systems", "Monitoring"],
  },
  {
    name: "Open-Lovable Extension",
    category: "AI Code Generation",
    summary:
      "An internal coding assistant that scaffolds across multiple files with the team's own conventions in context, rather than generating a plausible file in isolation.",
    outcomes: [
      "70% faster delivery on scaffolding-heavy work.",
      "55% lower generation cost after reworking what actually goes in the prompt.",
      "Multi-file generation grounded in the existing repo.",
    ],
    stack: ["GPT-4", "Claude", "Prompt Engineering", "Next.js", "Automation"],
  },
  {
    name: "Business Automation Platform",
    category: "Workflow Orchestration",
    summary:
      "Agents that run the repetitive middle of a business - intake, follow-up, routing, updates - across the tools a company already pays for.",
    outcomes: [
      "100+ workflows running across 35+ businesses.",
      "60% less manual operations work for the teams using it.",
      "Voice, SMS, WhatsApp, email, and CRM on one pipeline instead of five integrations.",
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
    title: "Build the first version",
    timeline: "2-4 weeks",
    summary:
      "You have the idea and the users, but no AI system yet. I build the first one that can go in front of them.",
    deliverables: [
      "Architecture and a scope we both agree is achievable",
      "The core AI workflow and the API it runs on",
      "Deployed, with notes your team can pick up from",
    ],
  },
  {
    title: "Fix what is already shipped",
    timeline: "1-3 weeks",
    summary:
      "Something is live and it is too slow, too expensive, or wrong often enough that people have stopped trusting it.",
    deliverables: [
      "An audit that names the actual bottleneck, not a list of best practices",
      "An eval set, so the next change can be measured",
      "A fix list in priority order, with effort against impact",
    ],
  },
  {
    title: "Stay on as the AI engineer",
    timeline: "Monthly",
    summary:
      "Ongoing work with your team. Roadmap, features, and the unglamorous maintenance that keeps quality from sliding.",
    deliverables: [
      "Feature delivery alongside your engineers",
      "Monitoring, cost tuning, and regression checks",
      "Someone to ask before you commit to an approach",
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
  "Based in Pakistan (PKT). I keep overlap with US and Gulf hours.",
  "Architecture questions get a real answer, not a discovery call.",
  "Happy to start with one scoped piece of work before anything longer.",
];
