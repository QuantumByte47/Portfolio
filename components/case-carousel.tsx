"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { LiveProductBuild } from "@/lib/portfolio-data";

function Arrow({ back = false }: { back?: boolean }) {
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
  Horizontally snapping case rail. Index is derived from scroll position rather
  than tracked separately, so dragging the rail and using the arrows can never
  disagree about which card is active.
*/
export function CaseCarousel({ items }: { items: LiveProductBuild[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const syncIndex = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    if (!card) return;
    const stride = card.offsetWidth + 24;
    setIndex(Math.min(items.length - 1, Math.max(0, Math.round(rail.scrollLeft / stride))));
  }, [items.length]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    rail.addEventListener("scroll", syncIndex, { passive: true });
    return () => rail.removeEventListener("scroll", syncIndex);
  }, [syncIndex]);

  const goTo = (next: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    if (!card) return;
    const clamped = Math.min(items.length - 1, Math.max(0, next));
    rail.scrollTo({ left: clamped * (card.offsetWidth + 24), behavior: "smooth" });
  };

  return (
    <div>
      {/* counter, dots, arrows */}
      <div className="mb-7 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${item.name}`}
              className="pf-dot"
              data-active={i === index}
            />
          ))}
          <span className="pf-label ml-3 pf-muted">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="pf-arrow"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous case"
          >
            <Arrow back />
          </button>
          <button
            type="button"
            className="pf-arrow"
            onClick={() => goTo(index + 1)}
            disabled={index === items.length - 1}
            aria-label="Next case"
          >
            <Arrow />
          </button>
        </div>
      </div>

      <div ref={railRef} className="pf-rail-scroll pb-2">
        {items.map((product, i) => (
          <article key={product.name} className="pf-case">
            <div className="pf-case-media">
              <Image
                src={product.image}
                alt=""
                width={1400}
                height={900}
                sizes="(min-width: 1024px) 900px, 85vw"
                priority={i === 0}
              />
            </div>
            <div className="pf-case-scrim" />

            <div className="relative flex min-h-[26rem] flex-col justify-end p-8 sm:min-h-[30rem] sm:p-12">
              <div className="flex items-center gap-3">
                <span className="pf-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-7 bg-[#3a3a3a]" />
                <span className="pf-label pf-muted">{product.category}</span>
              </div>

              <h3 className="pf-display mt-5 text-[clamp(2.2rem,5.4vw,3.8rem)]">
                {product.name}
              </h3>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#c3c3c3]">
                {product.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {product.keywords.slice(0, 4).map((keyword) => (
                  <span key={keyword} className="pf-tag">
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3"
                  >
                    <span className="pf-label text-[var(--yellow)]">View Product</span>
                    <span className="pf-arrow h-9 w-9 group-hover:border-[var(--yellow)] group-hover:text-[var(--yellow)]">
                      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                        <path
                          d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <span className="pf-label pf-muted">Private client product</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
