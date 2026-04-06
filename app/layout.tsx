import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  title: "Talha Islam | Lead AI Engineer Portfolio",
  description:
    "Portfolio of Talha Islam: enterprise AI engineering, LLM systems, RAG architecture, voice AI, and automation products.",
  keywords: [
    "lead ai engineer",
    "llm engineering",
    "rag architecture",
    "voice ai",
    "ai automation",
    "ai saas",
    "portfolio",
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background text-foreground antialiased",
          headingFont.variable,
          bodyFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
