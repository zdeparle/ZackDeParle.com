"use client";
import Link from "next/link";
import Image from 'next/image'; // Importing Image component

export default function Header() {
  const links = ["about", "skills", "projects", "experiences", "contact"];

  return (
    <nav className="justify-center py-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="text-5xl drop-shadow-2xl">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/signature-image.png"
                alt="Zack DeParle"
                width={50}
                height={25}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <div className="nav-links flex gap-x-8 text-xs md:text-base">
          {links.map((link) => (
            <Link key={link} href={`/${link === "experiences" ? "experiences" : `#${link}`}`} legacyBehavior>
              <a className="cursor-pointer hover:underline" onClick={(e) => {
                if (link !== "projects" && link !== "experiences") {
                  e.preventDefault();
                  document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
                }
              }}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </Link>
          ))}
          {/* Resume Download Button */}
          <a
            href="/Zachary_DeParle_Resume_2023.pdf" // Update this path to the actual path of your resume
            download="Zachary_DeParle_Resume_2023.pdf"
            className="cursor-pointer hover:underline text-white bg-blue-600 px-4 py-2 rounded-md shadow-lg hover:bg-blue-700"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
