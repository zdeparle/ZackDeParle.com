"use client";
import Link from "next/link";
import Image from "next/image";
import linkedinLogo from "./linkedin-logo.png";
import { useState } from "react";
// Add this line at the end of your header.tsx file

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const links = [
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/#contact" },
  ];

  const projectsDropdown = [
    {
      name: "GearGuroo: Dynamic Bike Gear Recommendation",
      path: "/projects/gearguroo",
    },
    { name: "Vise Stop: Machining Project", path: "/projects/vise" },
    // Add more projects as needed
  ];

  return (
    <nav className="flex w-full select-none justify-center bg-gradient-to-r from-primary to-indigo-500 py-4 font-light text-primary-foreground shadow">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        {/* Logo */}
        <Link href="/" className="cursor-pointer text-5xl drop-shadow-2xl">
          <Image
            src="/newzlogo.png"
            alt="Zack DeParle"
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </Link>
        {/* Navigation Links */}
        <div className="nav-links flex flex-grow items-center justify-center gap-x-8 text-xs md:text-base">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="cursor-pointer transition-colors duration-200 text-primary-foreground hover:text-white/80"
            >
              {link.name}
            </Link>
          ))}
          <div className="relative">
            <Link
              href="/projects"
              onMouseOver={() => setIsDropdownVisible(true)}
              onTouchStart={toggleDropdown}
              className="cursor-pointer transition-colors duration-200 text-primary-foreground hover:text-white/80"
            >
              Projects
            </Link>
            {isDropdownVisible && (
              <div
                className="absolute mt-2 rounded bg-background py-2 shadow-lg"
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                {projectsDropdown.map((project) => (
                  <Link
                    key={project.name}
                    href={project.path}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* LinkedIn Button */}
        <div className="flex items-center justify-end">
          <Link
            href="https://www.linkedin.com/in/zachary-deparle"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Image
              src={linkedinLogo}
              alt="LinkedIn"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
              className="cursor-pointer hover:opacity-80"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
