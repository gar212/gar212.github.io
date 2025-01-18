import React from 'react'
import GithubIcon from '@/components/svg/GithubIcon'
import LinkedinIcon from '@/components/svg/LinkedinIcon'

const Footer = () => {
  return (
    <div className="flex items-center text-left flex-col mx-10 text-white mb-20">
      <div className='max-w-4xl w-full flex flex-row justify-between items-center border-t border-t-neutral-600 pt-3'>
        <p className='text-neutral-500 text-md tracking-tight'>Garet Lam © 2025</p>
        <div className='flex flex-row'>
          <a href="https://www.linkedin.com/in/garet-lam/" target='_blank'>
          <LinkedinIcon className='ml-2 w-7 h-7 transition-colors fill-neutral-600 hover:fill-white'/>
          </a>
          <a href="https://github.com/gar212" target='_blank'>
            <GithubIcon className='ml-2 w-7 h-7 transition-colors fill-neutral-600 hover:fill-white'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer