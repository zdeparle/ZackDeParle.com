import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  const links = ["about", "skills", "projects", "contact"];

  return (
    <nav className="justify-center py-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        {/* Logo and Home Link */}
        <Link href="/" passHref>
          <span className="text-5xl drop-shadow-2xl cursor-pointer">
            <Image
              src="/signature-image.png"
              alt="Zack DeParle"
              width={50}
              height={25}
              objectFit="contain"
            />
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links flex gap-x-8 text-xs md:text-base">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer hover:text-gray-600"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/zachary-deparle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg"
          >
            LinkedIn
          </a>

          {/* Resume Button */}
          <a
            href="/Zachary_DeParle_Resume_2023.pdf" // Update this path to the actual path of your resume
            download
            className="inline-block px-4 py-2 ml-4 text-white bg-green-600 hover:bg-green-700 rounded-md shadow-lg"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
