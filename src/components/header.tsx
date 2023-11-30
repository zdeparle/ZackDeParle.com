'use client';
import Link from 'next/link';
import Image from 'next/image';
import linkedinLogo from './linkedin-logo.png';
import { useState } from 'react';
// Add this line at the end of your header.tsx file



export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const links = [
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/#contact' },
  ];

  const projectsDropdown = [
    { name: 'GearGuroo: Dynamic Bike Gear Recommendation', path: '/projects/gearguroo' },
    { name: 'Vise Stop: Machining Project', path: '/projects/vise' },
    // Add more projects as needed
  ];

  return (
    <nav className="flex w-full justify-center py-2 select-none pt-6 font-light md:px-28 md:pb-2">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref legacyBehavior>
          <a className="text-5xl drop-shadow-2xl cursor-pointer">
            <Image
              src="/newzlogo.png"
              alt="Zack DeParle"
              width={40}
              height={40}
              objectFit="contain"
            />
          </a>
        </Link>
        {/* Navigation Links */}
        <div className="nav-links flex flex-grow items-center justify-center gap-x-8 text-xs md:text-base">
          {links.map((link) => (
            <Link key={link.name} href={link.path} legacyBehavior>
              <a className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                {link.name}
              </a>
            </Link>
          ))}
          <div className="relative">
            <Link href="/projects" legacyBehavior>
              <a
                onMouseOver={() => setIsDropdownVisible(true)}
                onTouchStart={toggleDropdown}
                className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
              >
                Projects
              </a>
            </Link>
            {isDropdownVisible && (
              <div
                className="absolute bg-white shadow-md mt-2 py-2 rounded"
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                {projectsDropdown.map((project) => (
                  <Link key={project.name} href={project.path} legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      {project.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* LinkedIn Button */}
        <div className="flex items-center justify-end">
          <Link href="https://www.linkedin.com/in/zachary-deparle" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="ml-4">
              <Image
                src={linkedinLogo}
                alt="LinkedIn"
                width={40}
                height={40}
                objectFit="contain"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
