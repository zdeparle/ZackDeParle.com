// pages/index.tsx
import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      {/* Update this section for the projects link */}
      <section className="my-8 text-center">
        <Link
          href="/projects"
          className="largeEmojiButton"
          aria-label="View Projects"
        >
          🏗️ {"Projects"}
        </Link>
      </section>
      <Contact />
    </>
  );
}
