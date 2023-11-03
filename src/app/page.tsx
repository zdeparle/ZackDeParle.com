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
      <Link href="/projects" legacyBehavior>
  <a className="btn">View Projects</a>
</Link>



      <Contact />
    </>
  );
}
