import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import WebsiteIcon from './svg/WebsiteIcon'

const Projects = () => {
  return (
    <div id="projects" className="flex items-center text-left flex-col mx-10 text-white mb-20">
      <div className='max-w-4xl w-full mt-16'>
        <p className='text-xl tracking-wide mb-6'>Projects</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10'>
        <Card className='dark bg-transparent border-[#e5e7eb] py-6 bottom-0 hover:bottom-1 transition-all relative'>
          <CardContent>
            <img className='rounded-xl' src='/images/project/ipay.jpg' alt="" />
            <h1 className='font-bold my-4'>i-Pay</h1>
            <p className='text-sm text-gray-300 mb-3'>NZ to PH Digital Payment System. <strong>WIP</strong></p>
            <Badge>NextJS</Badge>
            <Badge>Figma</Badge>
     
          </CardContent>
        </Card>
        <Card className='dark bg-transparent border-[#e5e7eb] py-6 bottom-0 hover:bottom-1 transition-all relative'>
          <CardContent>
            <img className='rounded-xl' src='/images/project/payze.jpg' alt="" />
            <h1 className='font-bold my-4'>PayZe</h1>
            <p className='text-sm text-gray-300 mb-3'>Ecommerce Wordpress. Sells single-load Gift Cards and Reloadable Cards</p>
            <Badge>Wordpress</Badge>
            <Badge>Elementor</Badge>
            <Badge>Woocommerce</Badge>
            <br/>
            <a href="https://payze.nz/" target='_blank'>
              <Button variant="outline" size="sm" className='text-xs border-white mt-4 transition-all group'>
                <WebsiteIcon className='group-hover:stroke-black stroke-white transition-colors' />
                Website
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className='dark bg-transparent border-[#e5e7eb] py-6 bottom-0 hover:bottom-1 transition-all relative'>
          <CardContent>
            <img className='rounded-xl' src='/images/project/mj.jpg' alt="" />
            <h1 className='font-bold my-4'>MyJournal - PWA</h1>
            <p className='text-sm text-gray-300 mb-3'>PWA Personal Loyalty App used by multiple clients. Earn points with transactions and redeem points for vouchers.</p>
            <Badge>Next.JS</Badge>
            <Badge>React</Badge> 
            <Badge>Tailwind CSS</Badge>
            <Badge>shadcn/ui</Badge>
          </CardContent>
        </Card>

        <Card className='dark bg-transparent border-[#e5e7eb] py-6 bottom-0 hover:bottom-1 transition-all relative'>
          <CardContent>
            <Carousel className='rounded-xl' opts={{
                align: "start",
                loop: true,
              }}>
              <CarouselContent>
                <CarouselItem>
                  <img src='/images/project/mj-generic-1.jpg' alt="MyJournal Web" />
                </CarouselItem>
                <CarouselItem>
                  <img src='/images/project/mj-generic-2.jpg' alt="MyJournal Web" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <h1 className='font-bold my-4'>MyJournal - Web</h1>
            <p className='text-sm text-gray-300 mb-3'>Web-based Loyalty App used by multiple clients. Earn points with transactions and redeem points for vouchers.</p>
            <Badge>Next.JS</Badge>
            <Badge>React</Badge>
            <Badge>Tailwind CSS</Badge>
            <br/>
            <a href="https://loyalty.columbuscoffee.co.nz/login" target='_blank'>
              <Button variant="outline" size="sm" className='text-xs border-white mt-4 transition-all group'>
                <WebsiteIcon className='group-hover:stroke-black stroke-white transition-colors' />
                Website
              </Button>
            </a>
          </CardContent>
          
        </Card>

        <Card className='dark bg-transparent border-[#e5e7eb] py-6 bottom-0 hover:bottom-1 transition-all relative'>
          <CardContent>
            <img className='rounded-xl' src='/images/project/kupid.jpg' alt="" />
            <h1 className='font-bold my-4'>Kupid Web Admin</h1>
            <p className='text-sm text-gray-300 mb-3'>Admin Portal for the Kupid Point of Sale System. Set up products, pricing, users and more.</p>
            <Badge>Next.JS</Badge>
            <Badge>React</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>shadcn/ui</Badge>
          </CardContent>
        </Card>

        <Card className='dark bg-transparent border-[#e5e7eb] py-6 bottom-0 hover:bottom-1 transition-all relative'>
          <CardContent>
            <Carousel className='rounded-xl' opts={{
                align: "start",
                loop: true,
              }}>
              <CarouselContent>
                <CarouselItem>
                  <img className='' src='/images/project/subway-1.jpg' alt="" />
                </CarouselItem>
                <CarouselItem>
                  <img className='' src='/images/project/subway-3.jpg' alt="" />
                </CarouselItem>
                <CarouselItem>
                  <img className='' src='/images/project/subway-2.jpg' alt="" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <h1 className='font-bold my-4'>Subway Rewards</h1>
            <p className='text-sm text-gray-300 mb-3'>Loyalty website with various promotions and gamification setup. Links to the Subway App.</p>
            <Badge>React</Badge>
            <Badge>Tailwind CSS</Badge>
          </CardContent>
        </Card>

        <Card className='dark bg-transparent border-[#e5e7eb] py-6 bottom-0 hover:bottom-1 transition-all relative'>
          <CardContent>
            <Carousel className='rounded-xl' opts={{
                align: "start",
                loop: true,
              }}>
              <CarouselContent>
                <CarouselItem>
                  <img className='' src='/images/project/portfolio2020-1.jpg' alt="" />
                </CarouselItem>
                <CarouselItem>
                  <img className='' src='/images/project/portfolio2020-2.jpg' alt="" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <h1 className='font-bold my-4'>Portfolio 2020</h1>
            <p className='text-sm text-gray-300 mb-3'>First Portfolio developed back in 2020.</p>
            <Badge>EJS</Badge>
            <Badge>Particle.JS</Badge>
            {/* <br/>
            <a href="https://gar212.github.io/" target='_blank'>
              <Button variant="outline" size="sm" className='text-xs border-white mt-4 transition-all group'>
                <WebsiteIcon className='group-hover:stroke-black stroke-white transition-colors' />
                Website
              </Button>
            </a> */}
          </CardContent>
        </Card>

        </div>
      </div>
  </div>
  )
}

export default Projects