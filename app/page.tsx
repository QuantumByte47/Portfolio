import Link from "next/link";

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
  capabilityGroups,
  collaborationPoints,
  contactMethods,
  credibilityPoints,
  engagementModels,
  experienceTimeline,
  featuredProducts,
  frontendProviders,
  focusAreas,
  githubFallbackProjects,
  keyMetrics,
  toolbelt,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type GitHubApiRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

type GitHubProjectView = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  updatedLabel?: string;
};

function formatDateLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

async function getGitHubProjects(): Promise<GitHubProjectView[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/QuantumByte47/repos?sort=updated&per_page=12",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return githubFallbackProjects;
    }

    const repos = (await response.json()) as GitHubApiRepo[];
    const cleaned = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        description:
          repo.description?.trim() ||
          "Production-focused repository without a public description yet.",
        url: repo.html_url,
        tags: [
          repo.language ?? "Code",
          `Stars ${repo.stargazers_count}`,
          `Forks ${repo.forks_count}`,
        ],
        updatedLabel: formatDateLabel(repo.updated_at),
      }));

    return cleaned.length > 0 ? cleaned : githubFallbackProjects;
  } catch {
    return githubFallbackProjects;
  }
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-3">
      <Badge variant="secondary" className="w-fit bg-primary/12 text-primary">
        {eyebrow}
      </Badge>
      <h2 className="font-heading text-3xl leading-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-3xl text-pretty text-muted-foreground">{description}</p>
    </div>
  );
}

export default async function Home() {
  const githubProjects = await getGitHubProjects();

  return (
    <main className="relative isolate overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.24),transparent_62%)]" />
      <div className="pointer-events-none absolute right-0 top-[36rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <header className="sticky top-4 z-40 rounded-xl border border-border/80 bg-card/95 p-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/75">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-heading text-lg font-semibold text-foreground sm:text-xl">Talha Islam</p>
              <p className="text-sm text-muted-foreground">Lead AI & Full-Stack Engineer | LLM, RAG, SaaS</p>
            </div>

            <nav className="flex items-center gap-1">
              {[
                { href: "#products", label: "Products" },
                { href: "#github", label: "GitHub" },
                { href: "#experience", label: "Experience" },
                { href: "#capabilities", label: "Capabilities" },
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

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-primary/20 bg-gradient-to-br from-white via-orange-50/60 to-orange-100/30">
            <CardHeader className="space-y-4">
              <Badge className="w-fit">Open for AI product consulting and build partnerships</Badge>
              <CardTitle className="font-heading text-4xl leading-tight text-balance sm:text-5xl">
                I build robust AI products, not demos.
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Senior AI engineer focused on end-to-end delivery: architecture, APIs, model reliability, agent orchestration, and production deployment. Proven experience across 100+ projects and dozens of shipped products.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Badge key={area} variant="outline" className="border-primary/30 bg-white/70">
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

          <Card>
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
              <Card key={metric.label} className="border-border/90 bg-white/90">
                <CardHeader>
                  <CardDescription className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {metric.label}
                  </CardDescription>
                  <CardTitle className="font-heading text-4xl text-primary">{metric.value}</CardTitle>
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
            eyebrow="Flagship Work"
            title="Enterprise products across finance, voice, retrieval, and automation"
            description="A focused set of high-impact builds from a larger portfolio of projects and production systems."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="h-full border-border/90">
                <CardHeader className="space-y-3">
                  <Badge variant="secondary" className="w-fit bg-orange-100 text-orange-900">
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
                      <Badge key={item} variant="outline" className="border-primary/25">
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

        <section id="github" className="space-y-6 scroll-mt-28">
          <SectionHeading
            eyebrow="GitHub Projects"
            title="Recent repositories and open-source work"
            description="Live repositories from GitHub with automatic fallback to curated projects when API data is unavailable."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {githubProjects.map((project) => (
              <Card key={project.name} className="h-full border-primary/20 bg-gradient-to-b from-white to-orange-50/40">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-xl leading-snug">{project.name}</CardTitle>
                    <Badge variant="secondary" className="shrink-0 bg-orange-100 text-orange-900">
                      GitHub
                    </Badge>
                  </div>
                  <CardDescription className="min-h-[52px] text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={`${project.name}-${tag}`} variant="outline" className="border-primary/25 bg-white/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-border/80 pt-3">
                    <p className="text-xs text-muted-foreground">
                      {project.updatedLabel ? `Updated ${project.updatedLabel}` : "Featured project"}
                    </p>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      Open Repo
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="https://github.com/QuantumByte47"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              View Full GitHub Profile
            </Link>
          </div>
        </section>

        <Separator />

        <section id="experience" className="space-y-6 scroll-mt-28">
          <SectionHeading
            eyebrow="Career"
            title="Experience building and scaling AI products"
            description="Hands-on delivery from research and architecture through production rollout and operational optimization."
          />

          <div className="grid gap-4">
            {experienceTimeline.map((role) => (
              <Card key={`${role.company}-${role.role}`}>
                <CardHeader className="gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">
                      {role.role} <span className="text-primary">@ {role.company}</span>
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
                      <Badge key={item} variant="secondary" className="bg-orange-100/70 text-orange-900">
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

        <section id="capabilities" className="space-y-6 scroll-mt-28">
          <SectionHeading
            eyebrow="Capabilities"
            title="Three capability tracks, presented for faster scanning"
            description="Your profile is positioned as AI full-stack engineering: product architecture, backend depth, and advanced AI systems."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {capabilityGroups.map((group, groupIndex) => (
              <Card
                key={group.title}
                className="h-full border-primary/20 bg-gradient-to-b from-white via-orange-50/40 to-white"
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/12 text-primary">
                      Track {groupIndex + 1}
                    </Badge>
                    <span className="font-heading text-4xl leading-none text-primary/20">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-border/80 bg-white/85 px-3 py-2"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary">
                        {itemIndex + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/95">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div id="stack" className="grid gap-4 scroll-mt-28 xl:grid-cols-3">
            <Card className="border-primary/20 bg-gradient-to-b from-white to-orange-50/40">
              <CardHeader>
                <CardTitle>Frontend Component Ecosystem</CardTitle>
                <CardDescription>
                  Modern UI libraries and component providers I ship with.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {frontendProviders.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-border bg-white/90 px-3 py-2 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-b from-white to-orange-50/40">
              <CardHeader>
                <CardTitle>Backend Engineering Stack</CardTitle>
                <CardDescription>
                  Production backends for APIs, data pipelines, and SaaS platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {backendPlatforms.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-border bg-white/90 px-3 py-2 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-b from-white to-orange-50/40">
              <CardHeader>
                <CardTitle>Advanced AI Tooling</CardTitle>
                <CardDescription>
                  Advanced systems including MCP security, knowledge graphs, and enterprise retrieval.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {advancedAiTooling.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-border bg-white/90 px-3 py-2 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/25 bg-gradient-to-b from-orange-50/90 to-white">
            <CardHeader>
              <CardTitle>Stack I Work With</CardTitle>
              <CardDescription>
                Extended tools and frameworks used across delivery engagements.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {toolbelt.map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className={cn(
                      "border-primary/30 bg-white/80 text-foreground",
                      tool.includes("GPT") || tool.includes("Claude") ? "bg-primary/10" : ""
                    )}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>

              <div className="rounded-xl border border-primary/25 bg-white p-5">
                <p className="font-heading text-xl font-semibold">Need a robust AI product, fast?</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  I can help with architecture, implementation, and production hardening for LLM systems, automation platforms, and AI SaaS products.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="#products" className={buttonVariants({ size: "lg" })}>
                    Start a Conversation
                  </Link>
                  <Link
                    href="#experience"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                  >
                    Request Portfolio Walkthrough
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section id="services" className="space-y-6 scroll-mt-28">
          <SectionHeading
            eyebrow="Work With Me"
            title="Engagement options based on your project stage"
            description="Choose a delivery model that matches your timeline, team, and technical depth requirements."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <Card key={model.title} className="h-full border-border/90 bg-white">
                <CardHeader className="space-y-2">
                  <Badge variant="secondary" className="w-fit bg-orange-100 text-orange-900">
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
            description="Use any channel below for project discussions, consulting requests, or partnership opportunities."
          />

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="border-primary/25 bg-gradient-to-b from-white to-orange-50/30">
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
                    <span className="text-sm font-medium text-primary">Open</span>
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
                <div className="rounded-lg border border-primary/25 bg-primary/5 p-4">
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
                href="https://github.com/QuantumByte47"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                GitHub
              </a>
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
