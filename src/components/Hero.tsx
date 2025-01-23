import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import DownloadFileIcon from '@/components/svg/DownloadFileIcon'
import GithubIcon from '@/components/svg/GithubIcon'
import LinkedinIcon from '@/components/svg/LinkedinIcon'
import Image from 'next/image'


const Hero = () => {
  const name = "Garet Lam";
  const title = "web developer";

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 750], ["25%", "100%"]);

  return (
    <motion.div
      id="home" className="px-10 h-[95vh] flex flex-col justify-center items-center text-center m-auto text-[#9ca3af] bg-[url('/images/mountains.jpg')] md:bg-[length:200vh] bg-center bg-[length:175vh] md:bg-center"
      style={{ backgroundPositionY: backgroundY }}
    >
      <h1 className="md:text-7xl text-6xl mb-0.5 font-semibold text-white tracking-tight drop-shadow-md">
        {name.split("").map((char, index) => (
          <span className="inline-block translate-y-full opacity-0 animate-slide-up-2"
            key={index}
            style={{
              animationDelay: `${2.5 + index * 0.035}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <h1 className="text-lg uppercase text-white drop-shadow-md">
        {title.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block translate-y-full opacity-0 animate-slide-down"
            style={{
              animationDelay: `${2.7 + index * 0.02}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <div className="flex justify-center items-center mt-3 animate-slide-down opacity-0 drop-shadow-sm"
        style={{ animationDelay: `${3.2}s` }}
      >
        <Image
          width={12}
          height={12}
          className="text-white"
          src="/images/location.svg"
          alt="Location Icon"
        />
        <p className="ml-2 mt-0.5 font-thin inline-block align-bottom text-white">
          Auckland, New Zealand
        </p>
      </div>

      <div className="flex justify-center items-center mt-4 animate-slide-down opacity-0 drop-shadow-md"
        style={{ animationDelay: `${3.7}s` }}
      >
        <a href="/Garet_Lam_CV.pdf" target="_blank">
          <button className="px-6 h-7 font-bold flex items-center justify-center space-x-2 border border-[#fafafa] bg-transparent text-[#fafafa] rounded-[7px] hover:bg-white hover:text-black transition-all group">
            <DownloadFileIcon className="mr-2 w-4 h-4 sm:w-4 sm:h-4 group-hover:fill-black fill-white transition-colors drop-shadow-2xl" />
            Resume
          </button>
        </a>
        <a href="https://www.linkedin.com/in/garet-lam/" target="_blank">
          <LinkedinIcon className="ml-3 w-7 h-7 sm:w-7 sm:h-7 transition-colors fill-gray-100 hover:fill-white drop-shadow-lg" />
        </a>
        <a href="https://github.com/gar212" target="_blank">
          <GithubIcon className="ml-3 w-7 h-7 sm:w-7 sm:h-7 transition-colors fill-gray-100 hover:fill-white drop-shadow-lg" />
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;