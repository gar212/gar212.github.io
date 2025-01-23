import React, { useState, useEffect } from "react";
import { useLenis } from '@studio-freight/react-lenis';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const lenis = useLenis();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetElement = document.querySelector(targetId) as HTMLElement;

    if (targetElement && lenis) {
      lenis.scrollTo(targetElement);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); 
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text-center justify-center fixed z-10 left-1/2 transform -translate-x-1/2 py-4 px-1 rounded-full flex items-center backdrop-blur-lg border  border-white/20 transition-all duration-700 -top ease-in-out ${isVisible ? "top-10" : "-top-14"}`}>
<ul className="flex gap-1 md:gap-8 md:text-sm text-xs">
      <li className="min-w-20">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-[#e6e6e6] transition-all hover:text-yellow-400 py-4 drop-shadow-xl"
        >
          Home
        </a>
      </li>
      <li className="min-w-20">
        <a
          href="#experience"
          onClick={(e) => handleLinkClick(e, '#experience')}
          className="text-[#e6e6e6] transition-all hover:text-yellow-400 py-4 drop-shadow-xl"
        >
          Experience
        </a>
      </li>
      <li className="min-w-20">
        <a
          href="#techstack"
          onClick={(e) => handleLinkClick(e, '#techstack')}
          className="text-[#e6e6e6] transition-all hover:text-yellow-400 py-4 drop-shadow-xl"
        >
          Tech Stack
        </a>
      </li>
      <li className="min-w-20">
        <a
          href="#projects"
          onClick={(e) => handleLinkClick(e, '#projects')}
          className="text-[#e6e6e6] transition-all hover:text-yellow-400 py-4 drop-shadow-xl"
        >
          Projects
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Navbar