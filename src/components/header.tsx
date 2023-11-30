import Link from 'next/link';
import Image from 'next/image';
import linkedinLogo from './linkedin-logo.png'; // Ensure this path is correct

export default function Header() {
  const links = [
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="flex w-full justify-center py-2 select-none pt-6 font-light md:px-28 md:pb-2">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="text-5xl drop-shadow-2xl cursor-pointer">
            <Image
              src="/newzlogo.png"
              alt="Zack DeParle"
              width={40}
              height={40}
              objectFit="contain"
            />
          </div>
        </Link>
        {/* Navigation Links */}
        <div className="nav-links flex flex-grow items-center justify-center gap-x-8 text-xs md:text-base">
          {links.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        {/* LinkedIn Button */}
        <div className="flex items-center justify-end">
          <a href="https://www.linkedin.com/in/zachary-deparle" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Image
              src={linkedinLogo}
              alt="LinkedIn"
              width={40}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
