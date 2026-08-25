"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

import type { Review } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" className={cn("h-3 w-3", className)}>
      <path d="M6 0.6l1.6 3.4 3.7.5-2.7 2.6.7 3.7L6 9.1l-3.3 1.7.7-3.7L0.7 4.5l3.7-.5z" />
    </svg>
  );
}

/* Renders halves by clipping a second star to 50% width over a dimmed one. */
function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <span
      className="pf-review-star flex items-center gap-1"
      aria-label={`${rating} out of 5`}
    >
      {Array.from({ length: full }, (_, i) => (
        <Star key={i} />
      ))}
      {hasHalf ? (
        <span className="relative inline-flex h-3 w-3">
          <Star className="absolute inset-0 opacity-25" />
          <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
            <Star />
          </span>
        </span>
      ) : null}
      <span className="pf-label ml-1.5 text-[10px] tracking-[0.14em] text-[#7d7d7d]">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}

function Chevron({ back = false }: { back?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d={back ? "M12 4L6 10L12 16" : "M8 4L14 10L8 16"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/*
  Auto-scrolling review rail with manual controls.

  Drives scrollLeft on a real scroll container rather than animating a
  transform, so the arrows, a trackpad swipe, and the idle drift all move the
  same property and can never disagree. Items are rendered twice and the
  position wraps at the halfway mark, which makes the loop seamless.
*/
export function ReviewRail({
  items,
  reverse = false,
}: {
  items: Review[];
  reverse?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  /*
    Position is held here rather than read back from scrollLeft each frame.
    Browsers round scrollLeft on read, so accumulating sub-pixel steps through
    it loses the fraction and the wrap test starts firing on every frame.
  */
  const posRef = useRef(0);
  const wroteRef = useRef(0);
  const holdUntilRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* One full copy of the list; the second copy is what we wrap into. */
    const cycle = () => el.scrollWidth / 2;
    /* Modulo, so a wrap can never ping-pong between the two ends. */
    const wrap = (v: number, c: number) => (c > 0 ? ((v % c) + c) % c : v);

    posRef.current = reverse ? cycle() : 0;
    el.scrollLeft = posRef.current;
    wroteRef.current = el.scrollLeft;

    if (reduced) return;

    let raf = 0;
    let last = performance.now();
    const SPEED = 26; // px per second

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Someone else moved the rail (arrow, trackpad, drag) - adopt it.
      if (Math.abs(el.scrollLeft - wroteRef.current) > 1.5) {
        posRef.current = el.scrollLeft;
      }

      const holding = now < holdUntilRef.current;

      if (!pausedRef.current && !holding) {
        posRef.current = wrap(
          posRef.current + (reverse ? -SPEED : SPEED) * dt,
          cycle()
        );
        el.scrollLeft = posRef.current;
        wroteRef.current = el.scrollLeft;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reverse]);

  const nudge = useCallback((dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".pf-review");
    const step = card ? card.offsetWidth + 20 : 400;
    // Let the smooth scroll finish before the drift takes the wheel back.
    holdUntilRef.current = performance.now() + 650;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <div
      className="pf-rail-wrap"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={scrollRef} className="pf-rail-scroll-x">
        <div className="flex w-max gap-5 px-6 lg:px-10">
          {[...items, ...items].map((review, i) => (
            <figure key={`${review.name}-${i}`} className="pf-review">
              {/* company identity leads the card, not the person */}
              <div className="flex items-center gap-3.5">
                <span className="pf-review-logo">
                  <Image
                    src={review.logo}
                    alt={`${review.company} logo`}
                    width={300}
                    height={120}
                    sizes="148px"
                  />
                </span>
                <div className="min-w-0">
                  <p className="pf-label truncate text-[11px]">{review.company}</p>
                  <a
                    href={`https://${review.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-review-site mt-1 inline-flex items-center gap-1 text-[11.5px]"
                  >
                    {review.website}
                    <svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5">
                      <path
                        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <span aria-hidden="true" className="pf-review-mark">
                  &ldquo;
                </span>
                <Stars rating={review.rating} />
              </div>

              <blockquote className="pf-review-quote mt-3 flex-1 text-[14.5px] leading-relaxed">
                {review.quote}
              </blockquote>

              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="pf-label text-[11px]">{review.name}</p>
                <p className="mt-1.5 text-[12.5px] text-[#9a9a9a]">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll reviews left"
        className="pf-rail-btn left-3 lg:left-5"
        onClick={() => nudge(-1)}
      >
        <Chevron back />
      </button>
      <button
        type="button"
        aria-label="Scroll reviews right"
        className="pf-rail-btn right-3 lg:right-5"
        onClick={() => nudge(1)}
      >
        <Chevron />
      </button>
    </div>
  );
}
