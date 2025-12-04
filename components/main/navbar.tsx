'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", link: "/#about" },
  { title: "Skills", link: "/#skills" },
  { title: "Projects", link: "/#projects" },
  { title: "Experience", link: "/#experience" },
];

const socialLinks = [
  { title: "LinkedIn", link: "https://www.linkedin.com/in/islamtalha", icon: "LI" },
  { title: "GitHub", link: "https://github.com/QuantumByte47", icon: "GH" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  if (!mounted) return null;

  return (
    <div className={`w-full h-[65px] fixed top-0 z-50 px-4 md:px-10 transition-all duration-300 ${scrolled ? "bg-[#0300142e] backdrop-blur-xl border-b border-[#2A0E61]/30 shadow-lg shadow-[#2A0E61]/20" : "bg-transparent"
      }`}>
      <div className="w-full h-full flex items-center justify-between m-auto max-w-[1400px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-bold text-xl text-white hover:text-gray-300 transition-all duration-500 cursor-pointer tracking-wider">
            Talha Islam
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 border border-[#2A0E61]/30 bg-[#0300142e] px-6 py-2 rounded-full backdrop-blur-md shadow-inner shadow-[#2A0E61]/10">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 font-bold transition-colors text-sm tracking-wide uppercase"
              >
                {social.title}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-200 focus:outline-none hover:text-purple-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-[#2A0E61] lg:hidden shadow-2xl z-40">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-gray-200 text-lg font-medium hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="h-[1px] bg-[#2A0E61]/50 my-2"></div>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 font-medium"
                >
                  {social.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};