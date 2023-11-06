import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects"; // Import the Projects section
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects /> {/* Add the Projects section */}
      <Link href="/projects">
        <a className="btn">View Projects</a>
      </Link>
      <Contact />
    </>
  );
}
