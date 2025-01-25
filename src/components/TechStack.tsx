import React from 'react'
import Largebadge from './ui/largebadge'
const TechStack = () => {
  return (
    <div id="techstack" className="flex items-center text-left flex-col mx-10 text-white">
    <div className='max-w-4xl w-full mt-16'>
      <p className='text-xl tracking-wide mb-6'>Tech Stack</p>
        <div className="flex flex-wrap gap-2 items-center">
        <Largebadge image='javascript' name="Javascript" />
        <Largebadge image='typescript' name="Typescript" />
        <Largebadge image='php' name="PHP" />
        <Largebadge image='react' name="React" />
        <Largebadge image='nextjs' name="Next.JS" />
        <Largebadge image='vite' name="Vite" />
        <Largebadge image='nodejs' name="Node.JS" />
        <Largebadge image='tailwindcss' name="Tailwind CSS" />
        <Largebadge image='pwa' name="PWA" />
        <Largebadge image='git' name="Git" />
        <Largebadge image='github' name="GitHub" />
        <Largebadge image='gitlab' name="GitLab" />
        <Largebadge image='wordpress' name="Wordpress" />
        <Largebadge image='elementor' name="Elementor" />
        <Largebadge image='woocommerce' name="Woocommerce" />
        <Largebadge image='photoshop' name="Photoshop" />
        <Largebadge image='illustrator' name="Illustrator" />
        <Largebadge image='indesign' name="InDesign" />
        <Largebadge image='figma' name="Figma" />
      </div>
    </div>
  </div>
  )
}

export default TechStack