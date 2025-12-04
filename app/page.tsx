import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import { Projects } from "@/components/main/projects";
import { GitHubSection } from "@/components/main/github-section";
import { AboutSection } from "@/components/main/about-section";
import { Experience } from "@/components/main/experience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <AboutSection />
      </div>
    </main>
  );
}
