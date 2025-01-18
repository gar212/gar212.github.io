import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Explist from './Explist'

const Experience = () => {
  return (
    <div id="experience" className="flex items-center text-left flex-col mx-10 text-white animate-slide-up-smooth opacity-0" style={{animationDelay: `${3}s`}}>
    <div className='max-w-4xl w-full mt-20'>
      <p className='text-xl tracking-wide mb-6 text-white'>Experience</p>
      <Tabs defaultValue="work" className="w-full">
        <TabsList>
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <Card className='dark bg-transparent border-[#e5e7eb]'>
            <CardContent>
              <ul className="ml-5 border-l border-[#e5e7eb]">
                <Explist image="tranxactor.jpg" company="Tranxactor" title="Web Developer" time="Oct 2021 - Present" />
                <Explist image="nihi.jpg" company="National Institute for Health Innovation" title="Software Developer - Internship" time="Jul 2021 - Oct 2021" />
                {/* <Explist image="missionready.jpg" company="Mission Ready" title="Web Developer - Contract" time="Mar 2021 - Jul 2021" /> */}
                <Explist image="photoshack.jpg" company="Photoshack Ltd" title="Project Manager / Lead Graphic Designer" time="Jan 2018 - Mar 2021" />
                <Explist image="fisherpaykel.jpg" company="Fisher & Paykel Healthcare" title="Digital Content Admin - Contract" time="Feb 2020 - Apr 2020" />
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card className='dark bg-transparent border-[#e5e7eb]'>
            <CardContent>
              <ul className="ml-5 border-l border-[#e5e7eb]">
                <Explist image="missionready.jpg" company="Mission Ready" title="Advanced Software Development" time="Jul 2021 - Oct 2021" />
                <Explist image="autuni.jpg" company="Auckland University of Technology" title="Bachelor of Digital Design" time="Mar 2021 - Jul 2021" />
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
      </div>
  </div>
  )
}

export default Experience