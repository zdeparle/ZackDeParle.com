import Link from 'next/link';
import Image from 'next/image';

// Add your LinkedIn logo image path here
import linkedinLogo from './linkedin-logo.png'; 

export default function Header() {
  const links = ["about", "skills", "projects", "experience", "contact"];

  return (
    <nav className="flex w-full justify-center py-2 select-none pt-6 font-light md:px-28 md:pb-2">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-5xl drop-shadow-2xl">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/RectangleZLogo.png"
                alt="Zack DeParle"
                width={100}
                height={45}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="nav-links flex gap-x-8 text-xs md:text-base">
          {links.map((link) => (
            <Link key={link} href={`/#${link}`} legacyBehavior>
              <a className="cursor-pointer hover:text-blue-500">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </Link>
          ))}
          {/* Resume Download Button */}
          <a
            href="/Zachary_DeParle_Resume_2023.pdf"
            download="Zachary_DeParle_Resume_2023.pdf"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-lg"
          >
            Resume
          </a>
          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/zachary-deparle" target="_blank" rel="noopener noreferrer"
             className="block relative h-10 w-10"> {/* Adjust the height and width as needed */}
            <Image
              src={linkedinLogo}
              alt="LinkedIn"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
