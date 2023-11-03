"use client";
import Link from "next/link";
import Image from 'next/image'; // Importing Image component
import { cn } from "@/lib/utils";

export default function Header() {
  const links = ["about", "skills", "projects", "contact"];
  return (
    <>
      <nav className="justify-center py-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div className="text-5xl drop-shadow-2xl">
          <Link href="/">
  <Image
    src="signature-image.png"
    alt="Zack DeParle"
    width={100}
    height={50}
    objectFit="contain"
  />
</Link>

          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  if (link === "projects") {
                    window.location.href = "/projects";
                  } else {
                    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
