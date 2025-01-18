import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); 
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text-center justify-center fixed z-10 left-1/2 transform -translate-x-1/2 py-4 px-1 rounded-full flex items-center backdrop-blur-lg border  border-white/20 transition-all duration-700 -top ease-in-out ${isVisible ? "top-10" : "-top-14"}`}>
    <ul className="flex gap-1 md:gap-8 md:text-sm text-xs">
      <li className="min-w-20"><a href="#home" className='text-[#e6e6e6] transition-all hover:text-yellow-400 py-4 drop-shadow-xl'>Home</a></li>
      <li className="min-w-20"><a href="#experience" className='text-[#e6e6e6] transition-all hover:text-yellow-400 py-4 drop-shadow-xl'>Experience</a></li>
      <li className="min-w-20"><a href="#techstack" className='text-[#e6e6e6] transition-all hover:text-yellow-400 py-4 drop-shadow-xl'>Tech Stack</a></li>
      <li className="min-w-20"><a href="#projects" className='text-[#e6e6e6] transition-all hover:text-yellow-400 py-4 drop-shadow-xl'>Projects</a></li>
    </ul>
  </div>
  )
}

export default Navbar