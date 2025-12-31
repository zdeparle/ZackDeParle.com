"use client";
import Link from "next/link";
import Image from "next/image";
import linkedinLogo from "./linkedin-logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 flex w-full select-none justify-center transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-r from-primary to-indigo-500 py-4"
      } ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex items-center gap-2 transition-transform duration-300 hover:scale-110"
        >
          <Image
            src="/newzlogo.png"
            alt="Zack DeParle"
            width={45}
            height={45}
            style={{ objectFit: "contain" }}
            className="drop-shadow-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="nav-links flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="relative cursor-pointer transition-colors duration-200 hover:text-primary"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full" />
              </Link>
            ))}
            <div className="relative">
              <Link
                href="/projects"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
                className="relative cursor-pointer transition-colors duration-200 hover:text-primary"
              >
                Projects
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full" />
              </Link>
              <AnimatePresence>
                {isDropdownVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 min-w-[280px] rounded-lg border border-border bg-background/95 backdrop-blur-md py-2 shadow-xl"
                    onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => setIsDropdownVisible(false)}
                  >
                    {projectsDropdown.map((project) => (
                      <Link
                        key={project.name}
                        href={project.path}
                        className="block px-4 py-2.5 text-sm text-foreground transition-colors duration-200 hover:bg-muted hover:text-primary"
                      >
                        {project.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* Theme Toggle and LinkedIn Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://www.linkedin.com/in/zachary-deparle"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={linkedinLogo}
                alt="LinkedIn"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
                className="cursor-pointer opacity-90 transition-opacity duration-200 hover:opacity-100"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="relative z-50 flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            className="h-0.5 w-6 bg-current transition-all"
          />
          <motion.span
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="h-0.5 w-6 bg-current"
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            className="h-0.5 w-6 bg-current transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 top-full w-full overflow-hidden bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="container flex flex-col gap-4 py-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <div className="flex items-center gap-4 px-4">
                <ThemeToggle />
                <Link
                  href="https://www.linkedin.com/in/zachary-deparle"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={linkedinLogo}
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                  <span className="text-base font-medium">LinkedIn</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
