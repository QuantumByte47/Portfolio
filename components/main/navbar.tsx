'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  EnvelopeIcon, 
  ChevronDownIcon,
  SparklesIcon,
  BoltIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Skills", link: "/#skills" },
  { title: "Projects", link: "/#projects" },
  { title: "GitHub", link: "/#github" },
  { title: "About", link: "/#about" }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[65px] fixed top-0 z-50 px-10 bg-white border-b border-gray-200">
        <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
          <Link href="/" className="flex items-center">
            <div className="flex font-bold text-gray-800">
              <span className="text-blue-800 text-xl">
                Portfolio
              </span>
            </div>
          </Link>
          <div className="hidden lg:flex w-auto h-full flex-row items-center justify-center flex-1">
            <div className="flex items-center justify-center gap-8 h-auto px-6 py-2 rounded-full text-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer font-medium py-2 px-3 rounded-lg"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[65px] fixed top-0 z-50 px-10 bg-white border-b border-gray-200">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex items-center"
        >
          <div className="flex font-bold text-gray-800">
            <span className="text-blue-800 text-xl">
              Portfolio
            </span>
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex w-auto h-full flex-row items-center justify-center flex-1">
          <div className="flex items-center justify-center gap-8 h-auto px-6 py-2 rounded-full text-black">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer font-medium py-2 px-3 rounded-lg"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>


        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-white lg:hidden border-t border-gray-200 overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="block py-3 px-4 text-lg font-medium text-gray-800 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};