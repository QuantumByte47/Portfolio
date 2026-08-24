import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import "./globals.css";

/*
  Archivo carries the display weight this layout needs at 900 - the giant name
  and every letterspaced label. Inter handles reading text.
*/
const displayFont = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Talha Islam — Sr. AI Full Stack Engineer",
  description:
    "Sr. AI Full Stack Engineer. Retrieval systems, voice and text agents, evaluation pipelines, and the backends around them. Seven products live and in use.",
  keywords: [
    "senior ai engineer",
    "ai full stack engineer",
    "llm engineering",
    "rag architecture",
    "voice ai",
    "ai evaluation",
  ],
  openGraph: {
    title: "Talha Islam — Sr. AI Full Stack Engineer",
    description:
      "Retrieval systems, voice and text agents, evaluation pipelines, and the backends around them.",
    type: "profile",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/*
          Marks the document as JS-capable before first paint. Reveal animations
          hide behind this class, so a failed or disabled JS run shows the page
          in full rather than a column of empty sections.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className={cn(displayFont.variable, bodyFont.variable)}>
        {children}
      </body>
    </html>
  );
}
