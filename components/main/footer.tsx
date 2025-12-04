"use client";

import { EnvelopeIcon, PhoneIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

// Custom social media icons as SVG components since we need specific styling
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030014] text-gray-200 shadow-lg p-[15px] z-[20] relative border-t border-[#2A0E61]/50">
      <div className="w-full flex flex-col items-center justify-center m-auto">

        {/* 3D Social Media Icons - Centered */}
        <div className="flex gap-8 mt-4 pb-8 justify-center items-center flex-wrap">
          <div className="social-icon-container">
            <a
              href="https://www.instagram.com/talhaislam__?igsh=MXQwbDZzYXhtcG4ydA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram-icon"
            >
              <InstagramIcon />
            </a>
          </div>

          <div className="social-icon-container">
            <a
              href="https://www.linkedin.com/in/islamtalha/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin-icon"
            >
              <LinkedInIcon />
            </a>
          </div>

          <div className="social-icon-container">
            <a
              href="https://github.com/QuantumByte47"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github-icon"
            >
              <GitHubIcon />
            </a>
          </div>

          <div className="social-icon-container">
            <a
              href="mailto:talhaislam471@gmail.com"
              className="social-icon gmail-icon"
            >
              <GmailIcon />
            </a>
          </div>

          <div className="social-icon-container">
            <a
              href="https://wa.me/923175685471"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp-icon"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {new Date().getFullYear()} Talha Islam. All rights reserved.
        </div>
      </div>

      {/* Custom CSS for 3D effects */}
      <style jsx>{`
        .social-icon-container {
          margin: 0;
          padding: 0;
        }
        
        .social-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #fff;
          color: #262626;
          transform: perspective(100px) rotate(-30deg) skew(25deg) translate(0, 0);
          transition: all 0.7s;
          box-shadow: -10px 10px 6px rgba(0, 0, 0, 0.5);
          border-radius: 6px;
        }
        
        .social-icon::before {
          content: "";
          position: absolute;
          top: 6px;
          left: -10px;
          height: 100%;
          width: 10px;
          background: #b1b1b1;
          transition: 0.5s;
          transform: rotate(0deg) skewY(-45deg);
          border-radius: 3px 0 0 3px;
        }
        
        .social-icon::after {
          content: "";
          position: absolute;
          top: 40px;
          left: -6px;
          height: 10px;
          width: 100%;
          background: #b1b1b1;
          transition: all 1s;
          transform: rotate(0deg) skewX(-45deg);
          border-radius: 0 0 3px 3px;
        }
        
        .social-icon:hover {
          transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(10px, -10px);
          box-shadow: -25px 25px 18px rgba(0, 0, 0, 0.5);
        }
        
        .social-icon:hover svg {
          color: #fff;
        }
        
        /* Instagram colors */
        .instagram-icon:hover {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }
        
        .instagram-icon:hover::before {
          background: linear-gradient(45deg, #d07f2e 0%, #c85e37 25%, #bc2442 50%, #ad2264 75%, #9e1785 100%);
        }
        
        .instagram-icon:hover::after {
          background: linear-gradient(45deg, #c47629 0%, #b55532 25%, #a9213f 50%, #9a1f60 75%, #8b1682 100%);
        }
        
        /* LinkedIn colors */
        .linkedin-icon:hover {
          background: #0077b5;
        }
        
        .linkedin-icon:hover::before {
          background: #036aa0;
        }
        
        .linkedin-icon:hover::after {
          background: #0d82bf;
        }
        
        /* GitHub colors */
        .github-icon:hover {
          background: #000000;
        }
        
        .github-icon:hover::before {
          background: #000000;
        }
        
        .github-icon:hover::after {
          background: rgb(16, 15, 15);
        }
        
        /* Gmail colors */
        .gmail-icon:hover {
          background: #ea4335;
        }
        
        .gmail-icon:hover::before {
          background: #d33729;
        }
        
        .gmail-icon:hover::after {
          background: #c23321;
        }

        /* WhatsApp colors */
        .whatsapp-icon:hover {
          background: #25D366;
        }
        
        .whatsapp-icon:hover::before {
          background: #128C7E;
        }
        
        .whatsapp-icon:hover::after {
          background: #075E54;
        }
        
        .social-icon svg {
          transition: 0.5s;
          z-index: 1;
        }
        
        .social-icon:hover svg {
          fill: #fff;
        }
      `}</style>
    </footer>
  );
};