"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/*
  Scroll reveal that fails open.

  The hidden state lives in CSS behind `html.js`, which is only set by an
  inline script in the document head. If JavaScript never runs, nothing is
  ever hidden and the page reads normally. A timeout also force-reveals
  anything the observer has not reached, so content can never get stuck at
  opacity 0 - on a portfolio, an invisible section is worse than no animation.
*/
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    const safety = window.setTimeout(show, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
