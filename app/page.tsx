import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  advancedAiTooling,
  backendPlatforms,
  collaborationPoints,
  contactMethods,
  credibilityPoints,
  engagementModels,
  experienceTimeline,
  featuredProducts,
  frontendProviders,
  focusAreas,
  keyMetrics,
  liveProductBuilds,
  toolbelt,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function SectionHeading({
  eyebrow,
  title,
  description,
  highlight,
}: {
  eyebrow: string;
  title: string;
  description: string;
  highlight?: string;
}) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <div className="space-y-3">
      <Badge variant="secondary" className="highlight-pill w-fit border">
        {eyebrow}
      </Badge>
      <h2 className="font-heading text-4xl leading-tight text-balance text-foreground sm:text-5xl">
        {highlight && titleParts.length > 1 ? (
          <>
            {titleParts[0]}
            <span className="highlight-text">{highlight}</span>
            {titleParts.slice(1).join(highlight)}
          </>
        ) : (
          title
        )}
      </h2>
      <p className="max-w-3xl text-pretty text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-x-hidden bg-white pb-16">
      <div aria-hidden="true" className="scroll-focus-bottom" />

      <div className="fixed inset-x-0 top-0 z-50 px-0">
        <header className="mx-auto max-w-7xl rounded-b-xl border-x border-b border-white/70 bg-white/88 p-3 shadow-[0_18px_55px_-38px_rgba(15,23,42,0.65)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/78 sm:px-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-heading text-lg font-semibold text-foreground sm:text-xl">Talha Islam</p>
              <p className="text-sm text-muted-foreground">Lead AI & Full-Stack Engineer | LLM, RAG, SaaS</p>
            </div>

            <nav className="flex items-center gap-1">
              {[
                { href: "#products", label: "Products" },
                { href: "#experience", label: "Experience" },
                { href: "#stack", label: "Stack" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "text-xs sm:text-sm",
                  })}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-8 pt-32 sm:px-6 md:pt-28 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/90 bg-white/95 shadow-[0_24px_80px_-55px_rgba(15,23,42,0.55)]">
            <CardHeader className="space-y-4">
              <CardTitle className="font-heading text-4xl leading-tight text-balance sm:text-5xl">
                I build robust <span className="highlight-text">AI products</span>, not demos.
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Senior AI engineer focused on end-to-end delivery: architecture, APIs, model reliability, agent orchestration, and production deployment. Proven experience across 100+ projects and dozens of shipped products.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Badge key={area} variant="outline" className="border-border bg-slate-50 text-foreground">
                    {area}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className={buttonVariants({ size: "lg", className: "shadow-sm" })}
                >
                  Discuss Your Product
                </Link>
                <Link
                  href="#experience"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  View Experience
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95">
            <CardHeader>
              <CardTitle>Execution Highlights</CardTitle>
              <CardDescription>
                Results repeatedly delivered in production environments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {credibilityPoints.map((point) => (
                  <li key={point} className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyMetrics.map((metric) => (
              <Card key={metric.label} className="border-border/90 bg-white/95">
                <CardHeader>
                  <CardDescription className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {metric.label}
                  </CardDescription>
                  <CardTitle className="font-heading text-4xl highlight-text">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{metric.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section id="products" className="space-y-6 scroll-mt-28">
          <SectionHeading
            eyebrow="Live Products"
            title="Public products I architected and built with teams"
            highlight="built with teams"
            description="Real shipped products across voice AI, financial intelligence, AI reliability, and legal automation."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {liveProductBuilds.map((product, index) => (
              <Card
                key={product.name}
                className={cn(
                  "group relative h-full overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_24px_70px_-58px_rgba(15,23,42,0.78)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_34px_90px_-58px_rgba(15,23,42,0.88)]",
                  index < 3 ? "xl:col-span-2" : "xl:col-span-3"
                )}
              >
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--highlight)/0.55)] to-transparent" />
                <div className="relative m-3 h-40 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <Image
                    src={product.image}
                    alt={`${product.name} homepage visual`}
                    width={1200}
                    height={720}
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className={cn(
                      "h-full w-full transition-transform duration-500 group-hover:scale-[1.04]",
                      product.imageFit === "contain"
                        ? "object-contain p-5"
                        : "object-cover"
                    )}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  <Badge variant="secondary" className="highlight-pill absolute left-3 top-3 border bg-white/80 backdrop-blur">
                    Live
                  </Badge>
                </div>
                <CardHeader className="space-y-3 px-5 pb-4 pt-1">
                  <div className="space-y-1">
                    <CardDescription className="text-xs uppercase tracking-[0.14em]">
                      {product.category}
                    </CardDescription>
                    <CardTitle className="text-2xl leading-tight">{product.name}</CardTitle>
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {product.summary}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 px-5 pb-5 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {product.stack.slice(0, 3).map((item) => (
                      <Badge key={`${product.name}-${item}`} variant="outline" className="border-slate-200 bg-slate-50 text-slate-700">
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-3">
                    <p className="line-clamp-2 text-sm font-medium leading-relaxed text-foreground">
                      {product.role}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <details className="group/details">
                      <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground">
                        View Notes
                      </summary>
                      <div className="absolute inset-x-5 bottom-16 z-10 rounded-lg border border-slate-200 bg-white/95 p-3 shadow-[0_22px_50px_-35px_rgba(15,23,42,0.9)] backdrop-blur">
                        <ul className="space-y-2">
                          {product.highlights.slice(0, 2).map((highlight) => (
                            <li key={highlight} className="text-sm leading-relaxed text-muted-foreground">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                    <Link
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "outline", size: "sm", className: "h-8 px-3 text-xs" })}
                    >
                      Open
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-4">
            <h3 className="font-heading text-2xl leading-tight text-foreground">
              Additional <span className="highlight-text">flagship systems</span>
            </h3>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Supporting platform work from the broader portfolio, including voice infrastructure,
              retrieval systems, vector data platforms, and automation layers.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="h-full border-border/90 bg-white/95">
                <CardHeader className="space-y-3">
                  <Badge variant="secondary" className="w-fit border border-border bg-slate-100 text-slate-700">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {product.outcomes.map((outcome) => (
                      <li key={outcome} className="rounded-md border border-border bg-muted/20 px-3 py-2 text-sm">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {product.stack.map((item) => (
                      <Badge key={item} variant="outline" className="border-border bg-slate-50">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section id="experience" className="space-y-6 scroll-mt-28">
          <SectionHeading
            eyebrow="Career"
            title="Experience building and scaling AI products"
            highlight="AI products"
            description="Hands-on delivery from research and architecture through production rollout and operational optimization."
          />

          <div className="grid gap-4">
            {experienceTimeline.map((role) => (
              <Card key={`${role.company}-${role.role}`}>
                <CardHeader className="gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">
                      {role.role} <span className="highlight-text">@ {role.company}</span>
                    </CardTitle>
                    <CardDescription>{role.summary}</CardDescription>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground sm:text-right">
                    <p>{role.period}</p>
                    <p>{role.location}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    {role.impact.map((item) => (
                      <p key={item} className="rounded-md border border-border bg-muted/20 px-3 py-2 text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.stack.map((item) => (
                      <Badge key={item} variant="secondary" className="border border-border bg-slate-100 text-slate-700">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section id="stack" className="space-y-7 scroll-mt-28">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Technology stack for serious AI products"
            highlight="Technology stack"
            description="A focused view of the frameworks, platforms, and AI systems I use to ship production-grade products."
          />

          <div className="space-y-4">
            {[
              {
                label: "Model Layer",
                items: [
                  "GPT-4",
                  "Claude",
                  "LangGraph",
                  "CrewAI",
                  "AutoGen",
                  "GraphRAG",
                  "RAGAS",
                  "LangSmith",
                  "LlamaIndex",
                  "LangChain",
                  "OpenAI",
                  "Anthropic",
                  "Vector Search",
                  "Prompt Ops",
                  ...advancedAiTooling.slice(0, 4),
                ],
              },
              {
                label: "Backend",
                reverse: true,
                items: [
                  "FastAPI",
                  "Node.js",
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "MongoDB",
                  "Qdrant",
                  "Microservices",
                  "REST APIs",
                  "Webhooks",
                  "Queues",
                  ...backendPlatforms,
                ],
              },
              {
                label: "Frontend",
                items: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Radix UI",
                  "Framer Motion",
                  "shadcn/ui",
                  "Design Systems",
                  "Dashboards",
                  "Responsive UI",
                  "Server Components",
                  "API Clients",
                  ...frontendProviders,
                ],
              },
              {
                label: "Data + Voice",
                reverse: true,
                items: [
                  "Pinecone",
                  "Qdrant",
                  "Milvus",
                  "Neo4j",
                  "Twilio",
                  "Whisper",
                  "Deepgram",
                  "ElevenLabs",
                  "ETL",
                  "Analytics",
                  "Observability",
                  "Embeddings",
                  "Semantic Search",
                  "Voice Agents",
                  ...toolbelt.slice(0, 8),
                ],
              },
            ].map((row) => (
              <div
                key={row.label}
                className={cn("stack-marquee", row.reverse ? "stack-marquee-reverse" : "")}
              >
                <div className="mb-3 flex items-center gap-3 px-2">
                  <span className="h-px flex-1 bg-border" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {row.label}
                  </p>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <div className="stack-marquee-track">
                  {[...row.items, ...row.items].map((item, itemIndex) => (
                    <span key={`${row.label}-${item}-${itemIndex}`} className="stack-word">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        <section id="services" className="space-y-6 scroll-mt-28">
          <SectionHeading
            eyebrow="Work With Me"
            title="Engagement options based on your project stage"
            highlight="Engagement options"
            description="Choose a delivery model that matches your timeline, team, and technical depth requirements."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <Card key={model.title} className="h-full border-border/90 bg-white/95">
                <CardHeader className="space-y-2">
                  <Badge variant="secondary" className="w-fit border border-border bg-slate-100 text-slate-700">
                    {model.timeline}
                  </Badge>
                  <CardTitle className="text-2xl">{model.title}</CardTitle>
                  <CardDescription>{model.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {model.deliverables.map((item) => (
                      <p
                        key={`${model.title}-${item}`}
                        className="rounded-md border border-border bg-muted/20 px-3 py-2 text-sm"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section id="contact" className="space-y-6 scroll-mt-28">
          <SectionHeading
            eyebrow="Contact"
            title="Direct contact information"
            highlight="Direct contact"
            description="Use any channel below for project discussions, consulting requests, or partnership opportunities."
          />

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="border-border/90 bg-white/95">
              <CardHeader>
                <CardTitle>Reach Out</CardTitle>
                <CardDescription>
                  Fastest response is usually via email or LinkedIn.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 transition-colors hover:bg-accent"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        {method.label}
                      </p>
                      <p className="font-medium text-foreground">{method.value}</p>
                    </div>
                    <span className="text-sm font-medium highlight-text">Open</span>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/90 bg-white">
              <CardHeader>
                <CardTitle>Availability and Workflow</CardTitle>
                <CardDescription>
                  What you can expect when starting a project with me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {collaborationPoints.map((point) => (
                  <p
                    key={point}
                    className="rounded-md border border-border bg-muted/20 px-3 py-2 text-sm"
                  >
                    {point}
                  </p>
                ))}
                <div className="highlight-panel rounded-lg border p-4">
                  <p className="font-heading text-lg font-semibold text-foreground">
                    Quick Start
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Send your product idea, current stack, and goals. I will reply with a practical implementation direction.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="mailto:talhaislam471@gmail.com"
                      className={buttonVariants({ size: "sm" })}
                    >
                      Email Now
                    </a>
                    <a
                      href="https://www.linkedin.com/in/islamtalha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      Message on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="rounded-xl border border-border bg-card px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Talha Islam
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.linkedin.com/in/islamtalha/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                LinkedIn
              </a>
              <a
                href="mailto:talhaislam471@gmail.com"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
