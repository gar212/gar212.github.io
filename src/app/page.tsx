"use client"
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import IntroLoader from "@/components/IntroLoader";
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Starfield from '@/components/Background';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IntroLoader />
      <div className="overflow-auto relative scrollbar-hidden z-10">
        <Navbar />
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Footer/>
      </div>
      <Starfield />
    </>
  );
}
