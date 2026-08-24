import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import {
  aboutParagraphs,
  collaborationPoints,
  contactMethods,
  credibilityPoints,
  engagementModels,
  experienceTimeline,
  featuredProducts,
  focusAreas,
  keyMetrics,
  liveProductBuilds,
  principles,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

import { CaseCarousel } from "@/components/case-carousel";
import { ScrollProgress } from "@/components/scroll-progress";

const EMAIL = "talhaislam471@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/islamtalha/";
const RESUME = "/Talha_Islam_AI_Resume.pdf";

const NAV = [
  { href: "#home", label: "/home" },
  { href: "#work", label: "/work" },
  { href: "#experience", label: "/experience" },
  { href: "#about", label: "/about" },
  { href: "#contact", label: "/contact" },
];

/* Skills that ride the yellow band under the hero. */
const BAND = [
  "Retrieval / RAG",
  "Voice Agents",
  "LLM Evaluation",
  "Agent Orchestration",
  "Vector Databases",
  "Model Context Protocol",
  "Production MLOps",
  "Data Platforms",
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={cn("h-3.5 w-3.5", className)}>
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
      <path
        d="M8 2.5V10.5M8 10.5L4.75 7.25M8 10.5L11.25 7.25M3 13h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-2.5 w-2.5">
      <path
        d="M2.5 6.2L4.8 8.5L9.5 3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Section heading: /eyebrow above a two-tone title, second half outlined. */
function Head({
  eyebrow,
  lead,
  outlined,
}: {
  eyebrow: string;
  lead: string;
  outlined: string;
}) {
  return (
    <div>
      <p className="pf-eyebrow">/{eyebrow}</p>
      <h2 className="pf-display mt-4 text-[clamp(2.3rem,6.2vw,4.4rem)]">
        {lead} <span className="pf-outline">{outlined}</span>
      </h2>
    </div>
  );
}

export default function Home() {
  const built = liveProductBuilds.filter((p) => p.involvement === "built");
  const contributed = liveProductBuilds.filter((p) => p.involvement === "contributed");

  return (
    <>
      <ScrollProgress />

      {/* ---------------- nav ---------------- */}
      <header className="pf-nav">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Link href="#home" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center border border-[var(--yellow)] text-[13px] font-black text-[var(--yellow)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              TI
            </span>
            <span className="pf-label text-[13px] tracking-[0.3em]">Talha</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="pf-navlink"
                data-active={i === 0}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href={`mailto:${EMAIL}`} className="pf-pill">
            Let&rsquo;s talk <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </header>

      {/* ---------------- hero ---------------- */}
      <section id="home" className="relative min-h-[100svh] overflow-hidden pt-[72px]">
        <div aria-hidden="true" className="pf-rail" />

        {/*
          Starts below the 72px nav rather than at the section top, so the
          fixed bar never sits across the top of the head.
        */}
        <div className="pf-portrait absolute bottom-0 right-0 top-[72px] hidden w-[58%] lg:block">
          <Image
            src="/img1.png"
            alt="Talha Islam"
            width={1400}
            height={1400}
            priority
            sizes="58vw"
          />
        </div>

        {/* rotated edge marks */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-10 xl:flex">
          <span className="pf-vertical">Rawalpindi &middot; Pakistan</span>
          <span className="h-16 w-px bg-[#2e2e2e]" />
          <span className="pf-vertical">Scroll</span>
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-[1400px] flex-col justify-center px-6 pb-24 pt-16 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
              <span className="pf-label pf-muted">Available for work</span>
            </div>
          </Reveal>

          {/*
            Talha carries the hero; Islam sits under it, smaller and outlined -
            the same two-tone device the section headings use.
          */}
          <Reveal delay={0.06}>
            <h1 className="pf-display mt-10 text-[clamp(3.6rem,12.5vw,10rem)]">Talha</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="pf-display pf-outline mt-2 text-[clamp(1.9rem,5.4vw,4.2rem)]">
              Islam
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex items-center gap-5">
              <span className="hidden h-px w-12 bg-[var(--yellow)] sm:block" />
              <p className="pf-label text-[12px] tracking-[0.22em]">
                Sr. AI Full Stack Engineer <span className="pf-muted">&middot;</span> RAG
                &amp; Agents <span className="pf-muted">&middot;</span>{" "}
                <span className="text-[var(--yellow)]">Builder</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[#b0b0b0]">
              Four years turning AI research into products people actually use. Retrieval
              systems, voice and text agents, evaluation pipelines, and the backends that
              hold them together.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="pf-btn pf-btn-solid">
                Start a project <ArrowUpRight />
              </a>
              <a href={RESUME} download className="pf-btn pf-btn-ghost">
                Download CV <DownloadIcon />
              </a>
              <a href="#work" className="pf-btn pf-btn-ghost">
                /View work
              </a>
            </div>
          </Reveal>

          {/*
            The desktop portrait bleeds off the right edge, which there is no
            room for on a phone. Rather than drop the face entirely, it comes
            back here as a contained block below the buttons.
          */}
          <Reveal delay={0.34} className="lg:hidden">
            <div className="pf-portrait pf-portrait-block relative mt-12 aspect-[4/3] w-full border border-[var(--line)]">
              <Image
                src="/img1.png"
                alt="Talha Islam"
                width={900}
                height={900}
                sizes="100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- yellow band ---------------- */}
      <div className="pf-band">
        <div className="pf-band-track">
          {[...BAND, ...BAND].map((item, i) => (
            <span key={`${item}-${i}`} className="pf-band-item">
              {item}
              {/* Braced string: a bare // as a JSX text child parses as a comment. */}
              <span className="px-6 opacity-45">{"//"}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- numbers ---------------- */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <Head eyebrow="numbers" lead="By the" outlined="Numbers" />
        </Reveal>

        <div className="mt-16 grid border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {keyMetrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06}>
              <div className="pf-cell h-full p-8 lg:p-10">
                <p
                  className="text-[clamp(2.8rem,5vw,3.8rem)] font-black leading-none text-[var(--yellow)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {metric.value}
                </p>
                <p className="pf-label mt-5">{metric.label}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-[#8d8d8d]">
                  {metric.detail}
                </p>
              </div>
            </Reveal>
          ))}

          {/*
            Five metrics in a three-column grid leaves a hole. Filling it with
            the call to action turns the gap into the one thing the section
            should lead to.
          */}
          <Reveal delay={keyMetrics.length * 0.06}>
            <a
              href={`mailto:${EMAIL}`}
              className="pf-cell group flex h-full flex-col justify-between gap-8 p-8 transition-colors hover:bg-[var(--panel)] lg:p-10"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                <span className="pf-label pf-muted">Available for work</span>
              </div>
              <div>
                <p className="pf-display pf-display-sm text-[1.5rem] transition-colors group-hover:text-[var(--yellow)]">
                  Start a project
                </p>
                <span className="pf-label mt-4 inline-flex items-center gap-2 text-[var(--yellow)]">
                  Get in touch <ArrowUpRight />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------------- selected cases ---------------- */}
      <section id="work" className="scroll-mt-24 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Head eyebrow="work" lead="Selected" outlined="Cases" />
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#8d8d8d]">
              Four products I built end to end with a small team. Each one is live and has
              real users on it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 pl-6 lg:pl-10">
          <div className="mx-auto max-w-[1400px] pr-6 lg:pr-10">
            <CaseCarousel items={built} />
          </div>
        </div>

        {/* contributed — smaller, and labelled */}
        <div className="mx-auto mt-28 max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="pf-eyebrow">/contributed</p>
            <h3 className="pf-display mt-4 text-[clamp(1.6rem,3.4vw,2.4rem)]">
              One layer, <span className="pf-outline">not the product</span>
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#8d8d8d]">
              Other companies&rsquo; platforms. Listing only what I actually touched,
              because you can go and check.
            </p>
          </Reveal>

          <div className="mt-12 grid border-l border-t border-[var(--line)] md:grid-cols-3">
            {contributed.map((product, i) => (
              <Reveal key={product.name} delay={i * 0.06}>
                <div className="pf-cell group flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--panel)]">
                    <Image
                      src={product.image}
                      alt={`${product.name} interface`}
                      width={800}
                      height={500}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="h-full w-full object-cover opacity-45 grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-80 group-hover:grayscale-0"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-transparent"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <p className="pf-label pf-muted">{product.category}</p>
                    <h4 className="pf-display mt-3 text-[1.75rem] transition-colors group-hover:text-[var(--yellow)]">
                      {product.name}
                    </h4>
                    <p className="mt-4 flex-1 text-[14px] leading-relaxed text-[#8d8d8d]">
                      {product.role}
                    </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.keywords.slice(0, 3).map((keyword) => (
                      <span key={keyword} className="pf-tag">
                        {keyword}
                      </span>
                    ))}
                  </div>

                    {product.url ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-label mt-7 inline-flex items-center gap-2 text-[var(--yellow)]"
                      >
                        Visit <ArrowUpRight />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* infrastructure list */}
        <div className="mx-auto mt-28 max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="pf-eyebrow">/infrastructure</p>
            <h3 className="pf-display mt-4 text-[clamp(1.6rem,3.4vw,2.4rem)]">
              Systems <span className="pf-outline">underneath</span>
            </h3>
          </Reveal>

          <div className="mt-12">
            {featuredProducts.map((product, i) => (
              <Reveal key={product.name} delay={i * 0.04}>
                <div className="pf-row grid gap-6 px-1 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:px-4">
                  <div>
                    <p className="pf-label pf-muted">{product.category}</p>
                    <h4 className="pf-display mt-3 text-[1.6rem]">{product.name}</h4>
                    <p className="mt-4 text-[14px] leading-relaxed text-[#8d8d8d]">
                      {product.summary}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {product.outcomes.map((outcome) => (
                      <p key={outcome} className="flex gap-3 text-[14px] leading-relaxed text-[#a8a8a8]">
                        <span aria-hidden="true" className="mt-[0.6rem] h-px w-3.5 shrink-0 bg-[var(--yellow)]" />
                        {outcome}
                      </p>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {product.stack.map((item) => (
                        <span key={item} className="pf-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-[var(--line)]" />
          </div>
        </div>
      </section>

      {/* ---------------- experience ---------------- */}
      <section
        id="experience"
        className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--panel)] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Head eyebrow="experience" lead="Work" outlined="History" />
          </Reveal>

          {/*
            No Reveal wrapper on these: its transform would become the
            containing block for the sticky child and break the stack.
          */}
          <div className="mt-16 pb-8">
            {experienceTimeline.map((role, i) => (
              <div
                key={`${role.company}-${role.role}`}
                className="pf-stack-item mb-6"
                style={{ top: `${96 + i * 18}px`, zIndex: i + 1 }}
              >
                <div className="pf-stack-card relative grid gap-6 p-7 md:p-9 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
                  <span className="pf-eyebrow pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="pf-display text-[1.7rem]">
                      {role.role}
                      <span className="text-[#6f6f6f]"> / </span>
                      <span className="text-[var(--yellow)]">{role.company}</span>
                    </h3>

                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#a8a8a8]">
                      {role.summary}
                    </p>

                    <div className="mt-6 space-y-3">
                      {role.impact.map((item) => (
                        <p key={item} className="flex gap-3 text-[14px] leading-relaxed text-[#8d8d8d]">
                          <span aria-hidden="true" className="mt-[0.6rem] h-px w-3.5 shrink-0 bg-[#3a3a3a]" />
                          {item}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {role.stack.map((item) => (
                        <span key={item} className="pf-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:text-right">
                    <p className="pf-label">{role.period}</p>
                    <p className="pf-label pf-muted mt-2 tracking-[0.18em]">{role.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- about ---------------- */}
      <section id="about" className="scroll-mt-24 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Head eyebrow="about" lead="How I" outlined="Work" />
          </Reveal>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <Reveal>
              <div className="space-y-6">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[16px] leading-relaxed text-[#b0b0b0]">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4">
                  <p className="pf-label text-[var(--yellow)]">Numbers I can account for</p>
                  <div className="mt-5 space-y-3">
                    {credibilityPoints.map((point) => (
                      <p key={point} className="flex gap-3 text-[14px] leading-relaxed text-[#8d8d8d]">
                        <span aria-hidden="true" className="mt-[0.6rem] h-px w-3.5 shrink-0 bg-[var(--yellow)]" />
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {focusAreas.map((area) => (
                    <span key={area} className="pf-tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid border-l border-t border-[var(--line)] sm:grid-cols-2">
              {principles.map((principle, i) => (
                <Reveal key={principle.title} delay={i * 0.06}>
                  <div
                    className={cn(
                      "pf-cell pf-tilt h-full p-7",
                      /* The first principle goes solid so the grid has a focal point. */
                      i === 0 && "pf-card-accent"
                    )}
                  >
                    <div className="pf-tilt-inner">
                      <span className="pf-eyebrow">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="pf-display pf-display-sm mt-4 text-[1.15rem]">
                        {principle.title}
                      </h3>
                      <p className="mt-4 text-[13.5px] leading-relaxed text-[#8d8d8d]">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* engagement models */}
          <div className="mt-24">
            <Reveal>
              <p className="pf-eyebrow">/engagements</p>
              <h3 className="pf-display mt-4 text-[clamp(1.6rem,3.4vw,2.4rem)]">
                Three ways this <span className="pf-outline">starts</span>
              </h3>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {engagementModels.map((model, i) => (
                <Reveal key={model.title} delay={i * 0.08}>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(model.title)}`}
                    className="pf-engage group h-full flex-col p-8 lg:p-9"
                  >
                    <span aria-hidden="true" className="pf-engage-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative flex items-center gap-2.5">
                      <span aria-hidden="true" className="pf-engage-dot" />
                      <span className="pf-label pf-engage-time">{model.timeline}</span>
                    </div>

                    <h4 className="pf-display pf-display-sm relative mt-7 text-[1.5rem]">
                      {model.title}
                    </h4>

                    <p className="pf-engage-body relative mt-4 flex-1 text-[14px] leading-relaxed">
                      {model.summary}
                    </p>

                    <ul className="pf-engage-rule relative mt-8 space-y-3.5 border-t pt-7">
                      {model.deliverables.map((item) => (
                        <li
                          key={item}
                          className="pf-engage-item flex gap-3.5 text-[13.5px] leading-relaxed"
                        >
                          <span aria-hidden="true" className="pf-engage-tick">
                            <Check />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <span className="pf-engage-cta pf-label relative mt-8 inline-flex items-center gap-2">
                      Start here
                      <ArrowUpRight />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/*
              A third option for anyone who does not recognise themselves in the
              three above.
            */}
            <Reveal delay={0.1}>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-6 border border-[var(--line)] bg-[var(--panel)] p-7 lg:px-9">
                <p className="max-w-2xl text-[15px] leading-relaxed text-[#a8a8a8]">
                  Not sure which one fits? Describe what you are building and I will tell
                  you which of the three it is &mdash; or that you do not need me yet.
                </p>
                <a href={`mailto:${EMAIL}`} className="pf-btn pf-btn-solid shrink-0">
                  Ask me <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- contact ---------------- */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-[var(--line)] bg-[var(--panel)] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Head eyebrow="contact" lead="Let&rsquo;s" outlined="Talk" />
            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-[#b0b0b0]">
              Send the product, the current stack, and what is not working. You will get a
              real technical answer back, not a calendar link.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/*
              min-w-0 matters here: a grid item defaults to min-width:auto, so
              the nowrap email address was widening the whole column past the
              viewport on phones instead of truncating.
            */}
            <div className="min-w-0">
              {contactMethods.map((method, i) => (
                <Reveal key={method.label} delay={i * 0.06}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="pf-row group flex items-center justify-between gap-6 px-1 py-7 md:px-3"
                  >
                    <div className="min-w-0">
                      <p className="pf-label pf-muted">{method.label}</p>
                      <p className="pf-display mt-3 truncate text-[clamp(1.2rem,2.6vw,1.8rem)] transition-colors group-hover:text-[var(--yellow)]">
                        {method.value}
                      </p>
                    </div>
                    <span className="pf-arrow shrink-0 group-hover:border-[var(--yellow)] group-hover:text-[var(--yellow)]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </Reveal>
              ))}
              <div className="border-t border-[var(--line)]" />
            </div>

            <Reveal delay={0.1}>
              <div className="border border-[var(--line)] p-8">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                  <span className="pf-label">Currently available</span>
                </div>

                <div className="mt-7 space-y-4">
                  {collaborationPoints.map((point) => (
                    <p key={point} className="flex gap-3 text-[14px] leading-relaxed text-[#8d8d8d]">
                      <span aria-hidden="true" className="mt-[0.6rem] h-px w-3.5 shrink-0 bg-[#3a3a3a]" />
                      {point}
                    </p>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-3 border-t border-[var(--line)] pt-7">
                  <a href={`mailto:${EMAIL}`} className="pf-btn pf-btn-solid">
                    Email <ArrowUpRight />
                  </a>
                  <a href={RESUME} download className="pf-btn pf-btn-ghost">
                    Résumé <DownloadIcon />
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-btn pf-btn-ghost"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="border-t border-[var(--line)] py-9">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 lg:px-10">
          <p className="pf-label pf-muted">
            &copy; {new Date().getFullYear()} Talha Islam
          </p>
          <p className="pf-label pf-muted">Rawalpindi &middot; Pakistan</p>
        </div>
      </footer>
    </>
  );
}
