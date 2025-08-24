// src/app/projects/page.tsx
"use client"

import { GitBranch } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { projects } from '@/data';
import { removeHyphensAndCapitalize } from '@/lib/utils';

export default function Projects() {
  const sections = ["full-stack", "front-end", "back-end"]
  
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-4 sm:px-8 md:px-32 lg:px-32 xl:px-[300px]">
        <div className='mb-12'>
          <h1 className="sm:mb-6 text-2xl sm:text-4xl font-semibold tracking-tighter">
            Projects
          </h1>
        </div>
        {Array.from(sections).map((section) => (
          <section key={section} id={section} className='mb-14'>
            <h3 className="mb-2 sm:mb-4 text-md sm:text-lg font-semibold">
              {removeHyphensAndCapitalize(section)}
            </h3>
            <div className='w-full max-w-xlg grid grid-cols-2 gap-8 items-start'>
              {Array.from(projects).map((project) => (
                project.section == section && (
                  <Card key={project.imgFileName} className='rounded-md'>
                    <CardHeader className="pb-2">
                      <CardTitle className='flex flex-row items-center gap-2'>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-text-portfolio">
                          {project.name}
                        </a>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <GitBranch className="w-5 h-5"/>
                        </a>
                      </CardTitle>
                      <CardDescription className="text-nowrap overflow-hidden text-xs leading-tight">
                        {project.skills}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2 pb-2">
                      <a 
                        href={`/assets/projects/${project.imgFileName}.png`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <img
                          src={`/assets/projects/${project.imgFileName}.png`}
                          draggable="false"
                          alt={`${project.name} project screenshot`}
                          className='rounded-md w-full h-auto cursor-pointer transition-transform hover:scale-105'
                        />
                      </a>
                    </CardContent>
                    <CardFooter className="pt-2 flex gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="secondary" size="sm">Details</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-100" align='start'>
                          {project.descriptionTitle !== '' && (
                            <p className='text-sm font-semibold'>{project.descriptionTitle}</p>
                          )}
                          <p className="text-sm">{project.descriptionBody}</p>
                        </PopoverContent>
                      </Popover>
                      
                      {project.link && project.link !== '' && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Visit Project
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                )
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}