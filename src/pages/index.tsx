// pages/index.tsx
import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import Link from "next/link";
import MotionDiv from "@/components/motion-div";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      {/* Projects CTA Section */}
      <section className="my-20 text-center">
        <MotionDiv delayOffset={0.2}>
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 px-8 py-6 text-2xl font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
            aria-label="View Projects"
          >
            <Sparkles className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              View My Projects
            </span>
            <ArrowRight className="h-6 w-6 text-primary transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </MotionDiv>
      </section>
      <Contact />
    </>
  );
}
