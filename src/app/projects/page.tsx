// src/app/projects/page.tsx
"use client"

import { ProjectsCarousel } from '@/components/carousel/ProjectsCarousel';
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

        <div className='grid gap-10'>
          {sections.map(section => {
            const sectionProjects = projects.filter(project => project.section == section)
            return (
              <section key={section} id={section}>
                <h3 className="mb-2 sm:mb-4 text-md sm:text-lg font-semibold">
                  {removeHyphensAndCapitalize(section)}
                </h3>
                <ProjectsCarousel
                  projects={sectionProjects}
                  carouselClassName='w-full max-w-xlg'
                  itemClassName='basis-1/3 flex pl-4'
                  showDetails={true}
                />
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}