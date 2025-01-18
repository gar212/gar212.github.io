"use client"

import React, { useState, useEffect } from "react";

const IntroLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  const name = "garet lam";
  const portfolioText = "Portfolio 2025";

  useEffect(() => {
    const introDuration = 2600 ;
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, introDuration);
    return () => {
      clearTimeout(timeout);
    }
  }, []);

  if (!isVisible) return null; // Remove component from DOM

  const createAnimatedText = (text:string, initialDelay = 0) => {
    return text.split("").map((letter:string, index:number) => (
      <span
        key={index}
        className="inline-block opacity-0 animate-fadeTextIn"
        style={{ animationDelay: `${initialDelay + index * 0.02}s` }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return (
    <div className="h-screen z-20 w-screen fixed text-white bg-[#1d1d1d] animate-slideUp">
    {/* <div className="h-screen z-10 w-screen fixed bg-white animate-slideUp text-black"> */}
        <div className="absolute bottom-20 left-20">
          <p className="text-[3rem] leading-10 tracking-tight mb-3.5">
            {createAnimatedText(name, 0)}
          </p>
          <p className="text-xs uppercase">
            {createAnimatedText(portfolioText, name.length * 0.02)}
          </p>
      </div>
    </div>
  );
};

export default IntroLoader;
