import Link from 'next/link';
import Image from 'next/image';

// Add your LinkedIn logo image path here
import linkedinLogo from './linkedin-logo.png'; 

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
            <Link key={link.name} href={link.path} legacyBehavior>
              <a className="cursor-pointer hover:text-blue-500">
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </a>
            </Link>
          ))}
          
          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/zachary-deparle" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center h-5 w-5"> {/* Use flexbox to center the image */}
            <Image
              src={linkedinLogo}
              alt="LinkedIn"
              width={40} // Explicitly set width
              height={40} // Explicitly set height
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
