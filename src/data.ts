export interface Prototype {
  id: string;
  title: string;
  description: string;
  category: string;
  hasUI: boolean;
  details?: string;
  imageUrl?: string;
  secondaryImage?: string;
  article: {
    introduction: string;
    challenge: string;
    architectureOverview: string;
    technicalImplementation: string;
    impactAndFuture: string;
  };
}

export const prototypes: Prototype[] = [
  {
    id: 'p1',
    title: 'SDR Email Pipeline',
    description: 'An autonomous agent that researches prospects and drafts personalized outbound campaigns instantly.',
    category: 'AI Agents',
    hasUI: true,
    imageUrl: '/sdr_pipeline.png',
    secondaryImage: '/sdr_pipeline_ui.png',
    details: 'The SDR Pipeline crawls LinkedIn and prospect sites, evaluating fitness before feeding contextual data to an LLM to generate hyper-personalized outreach emails.',
    article: {
      introduction: "Outbound sales is entering a new paradigm. The SDR Pipeline isn't just an automation script; it is a fully autonomous reasoning engine built to replicate the intuitive strategy of a senior Account Executive.",
      challenge: "Historically, high-converting B2B outbound required human intuition. The challenge was bridging the gap: how do you execute hyper-personalized, context-aware research across thousands of accounts simultaneously?",
      architectureOverview: "The core of the SDR Pipeline is a distributed, multi-agent architecture orchestrating specialized sub-agents: Research, Strategy, and Copywriting.",
      technicalImplementation: "Powered by Node.js and Python, utilizing the Model Context Protocol (MCP) to allow agents to securely invoke tools. The generative layer uses few-shot prompting paired with strict JSON schema outputs.",
      impactAndFuture: "Sales teams employing the SDR Pipeline have seen a 400% increase in outbound volume. Open rates have stabilized above 70%, and reply rates have doubled."
    }
  },
  {
    id: 'p2',
    title: 'Product Hunter',
    description: 'Find what to build next. Scrapes trends and synthesizes actionable product ideas.',
    category: 'Web Apps',
    hasUI: true,
    imageUrl: '/product_hunter.png',
    secondaryImage: '/product_hunter_ui.png',
    details: 'A clean, intuitive dashboard where product managers can browse automatically generated product reports.',
    article: {
      introduction: "Product Hunter is a cutting-edge ideas engine that systematically eliminates the ideation phase by algorithmically discovering unmet needs across the internet.",
      challenge: "Founders often suffer from builder's block. While platforms like Reddit and Hacker News contain massive signal, it decays rapidly and is highly fragmented.",
      architectureOverview: "Product Hunter operates as an omnipresent listening matrix, ingesting data from subreddits, trending topics, and indie hacker forums into an NLP pipeline.",
      technicalImplementation: "Cron-scheduled Python scrapers feed a vector database. When a cluster reaches critical mass, a GPT-4 agent generates an MVP Synthesis Report.",
      impactAndFuture: "Ideas sourced through Product Hunter achieve initial user traction 3x faster than traditional brainstorming."
    }
  },
  {
    id: 'p3',
    title: 'Market Analyzer',
    description: 'Interactive dashboard parsing live market data into gorgeous visualizations.',
    category: 'Data Vis',
    hasUI: true,
    imageUrl: '/market_analyzer.png',
    secondaryImage: '/market_analyzer_ui.png',
    details: 'A React-powered graphical interface connected to live market data feeds.',
    article: {
      introduction: "Market Analyzer democratizes high-fidelity financial data visualization with a stunning, highly modular web terminal.",
      challenge: "The primary challenge in financial UI engineering is handling massive volumes of real-time data without bogging down the browser.",
      architectureOverview: "A robust backend WebSocket server subscribes to market feeds and normalizes data into lightweight JSON packets for the frontend rendering engine.",
      technicalImplementation: "Written in TypeScript, the React application uses aggressive referential equality and Redux Toolkit slices optimized for high-frequency updates.",
      impactAndFuture: "The result is a trading dashboard that looks like it belongs on a sci-fi command deck but performs with unyielding technical precision."
    }
  },
  {
    id: 'p4',
    title: 'Bridge Bot',
    description: 'A Telegram-native autonomous multi-agent system that routes and executes complex tasks interactively.',
    category: 'AI Agents',
    hasUI: false,
    imageUrl: '/bridge_bot.png',
    secondaryImage: '/bridge_bot_architecture.png',
    details: 'Bridge Bot operates purely as a backend agentic system, monitoring updates from Telegram via webhooks.',
    article: {
      introduction: "Bridge Bot is a fundamental rethinking of how human operators interface with agentic systems, meeting them inside Telegram.",
      challenge: "Most AI agents run in the terminal. If a developer leaves their desk, they lose visibility and control over their automated tasks.",
      architectureOverview: "Bridge Bot utilizes a powerful intent-routing graph. The Router Agent interprets intent and delegates tasks to the appropriate MCP server.",
      technicalImplementation: "Built using Python Asyncio to handle high-concurrency message queues. Every function is exposed via Anthropic's tool-calling specification.",
      impactAndFuture: "Bridge Bot effectively puts a junior developer and senior DevOps engineer directly in the user's pocket."
    }
  },
  {
    id: 'p5',
    title: 'Bridge Cloud',
    description: 'A robust Model Context Protocol (MCP) server enabling scalable cross-agent task processing and telemetry.',
    category: 'Infrastructure',
    hasUI: true,
    imageUrl: '/bridge_cloud.png',
    secondaryImage: '/bridge_cloud_dashboard.png',
    details: 'Bridge Cloud spans across multiple nodes with live telemetry and task queuing dashboards.',
    article: {
      introduction: "Bridge Cloud is the foundational infrastructure allowing multiple agents to share context, distribute tasks, and operate as a cohesive, fault-tolerant swarm.",
      challenge: "When deploying a swarm of agents, race conditions, token exhaustion, and context fragmentation can crash workflows instantly.",
      architectureOverview: "Implements MCP with a distributed task queuing interface. A primary orchestration server tracks every task's status across sub-agents via WebSockets.",
      technicalImplementation: "The backend utilizes Redis for fast memory caching and SQLite for durable logging with exponential backoffs and dead-letter queues.",
      impactAndFuture: "What previously required babysitting a terminal script can now run across 50 dedicated agents simultaneously with 100% observability."
    }
  },
  {
    id: 'p6',
    title: 'Skill Chain',
    description: 'A deterministic execution engine for layering atomic agentic skills into repeatable, robust workflows.',
    category: 'Infrastructure',
    hasUI: true,
    imageUrl: '/skill_chain.png',
    secondaryImage: '/skill_chain_ui.png',
    details: 'Skill Chain features a visual node-editor web interface for drag-and-drop workflow orchestration.',
    article: {
      introduction: "Skill Chain is an elite visual orchestration platform built to solve the hallucination barrier, enabling guaranteed execution pathways.",
      challenge: "If you ask an AI to research, write a report, and email it, failure rates are high. Skill Chain addresses this with a visual node-editor.",
      architectureOverview: "Users connect execution nodes visually. The UI compiles the graph into a rigid JSON AST. The backend runner traverses this AST step-by-step.",
      technicalImplementation: "The frontend leverages canvas rendering for a smooth node-editor experience. The Python runner strictly isolates node state against prompt injection.",
      impactAndFuture: "Non-technical operators can now build massive, resilient automation workflows by connecting blocks, drastically decreasing time-to-deployment."
    }
  }
];

export const stats = [
  { value: '3x', label: 'Faster time to ship' },
  { value: '400%', label: 'Outbound volume lift' },
  { value: '70%+', label: 'Email open rates' },
  { value: '100%', label: 'Production-grade focus' },
];

export const services = [
  {
    title: 'AI Consulting',
    kicker: 'Strategy & Advisory',
    icon: 'consulting' as const,
    description: 'Translate AI potential into a concrete roadmap your team can execute. We identify the highest-leverage opportunities, assess your existing stack, and define what to build first.',
    offerings: [
      'AI readiness and opportunity mapping',
      'Tooling selection and architecture review',
      'Build vs. buy decision frameworks',
      'Quarterly roadmap planning sessions',
    ],
    ctaLabel: 'Start a consulting engagement',
    ctaHref: 'mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Consulting',
  },
  {
    title: 'Automation Systems',
    kicker: 'Build & Deploy',
    icon: 'automation' as const,
    description: 'Custom AI agents and internal tools built end-to-end. From multi-agent pipelines to workflow automation, we ship production systems that integrate with how your team already operates.',
    offerings: [
      'Multi-agent pipeline development',
      'Internal tool and dashboard builds',
      'LLM integration and fine-tuning',
      'Ongoing maintenance and iteration',
    ],
    ctaLabel: 'Scope an automation project',
    ctaHref: 'mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Automation',
  },
  {
    title: 'AI Education & Training',
    kicker: 'Upskill & Adopt',
    icon: 'education' as const,
    description: 'Hands-on training for executives and operators who need to understand and use AI systems confidently. Not theoretical—practical sessions tied to your actual tools and workflows.',
    offerings: [
      'Executive AI literacy workshops',
      'Operator training for deployed systems',
      'Prompt engineering for business teams',
      'Custom curriculum for your stack',
    ],
    ctaLabel: 'Book a training session',
    ctaHref: 'mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Training',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We map your current workflows, identify the most painful bottlenecks, and establish what a meaningful win looks like within your timeline.',
  },
  {
    number: '02',
    title: 'Solution Design',
    description: 'We define the architecture, tooling, and scope. You get a clear plan before any work begins — no surprises mid-engagement.',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'We ship working increments fast and iterate based on real feedback. Every build decision prioritizes adoption over complexity.',
  },
  {
    number: '04',
    title: 'Handoff & Support',
    description: 'Your team leaves with documentation, training, and a system they can own. Ongoing support available for teams that need it.',
  },
];

export const differentiators = [
  {
    title: 'Engineering depth, not slide decks',
    description: 'Every engagement produces running code, not a strategy document. Bridge AI builds alongside you until something ships.',
  },
  {
    title: 'Operator-first thinking',
    description: 'Systems are designed around how your team actually works — not how an ideal team would work. Adoption is built into the architecture.',
  },
  {
    title: 'No black-box dependencies',
    description: 'We prioritize tooling you can maintain, extend, and understand. You own the output and the knowledge to run it.',
  },
];

export const caseStudies = [
  {
    type: 'AI Agents',
    title: 'SDR Pipeline — Outbound at Scale',
    summary: 'Replaced a 4-person manual research process with an autonomous agent that researches, qualifies, and drafts personalized outbound sequences.',
    outcome: '400% increase in outbound volume · 70%+ open rates',
  },
  {
    type: 'Internal Automation',
    title: 'Operations Workflow Automation',
    summary: 'Built a multi-step internal automation layer that eliminated repetitive data entry across three internal tools for a 12-person ops team.',
    outcome: '11 hours per week saved · Zero manual handoffs',
  },
  {
    type: 'AI Education',
    title: 'Executive AI Literacy Program',
    summary: 'Designed and delivered a four-session training program for a leadership team preparing to evaluate AI vendors and internal build decisions.',
    outcome: 'Confident buy/build decisions · Clear internal AI policy',
  },
];
