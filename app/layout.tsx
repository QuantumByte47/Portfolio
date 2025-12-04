import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = {
  title: "Talha Islam - Data Scientist & AI Developer",
  description: "Portfolio of Talha Islam, a skilled Data Scientist and AI Developer with 4+ years of experience in machine learning and data analysis.",
  keywords: ["data scientist", "AI developer", "machine learning", "python", "portfolio"]
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] text-white overflow-y-scroll overflow-x-hidden relative",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {/* Wrap children in a relative div with higher z-index to ensure they are above the stars */}
        <div className="relative z-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
