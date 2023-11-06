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
      <section className="text-center my-8">
        <Link href="/projects" legacyBehavior>
          <a className="btn">View Projects</a>
        </Link>
      </section>
      <Contact />
    </>
  );
}