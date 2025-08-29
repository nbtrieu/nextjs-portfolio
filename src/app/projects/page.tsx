// src/app/projects/page.tsx
"use client"

import { ProjectsCarousel } from '@/components/projects-display/ProjectsCarousel';
import { ProjectsList } from '@/components/projects-display/ProjectsList';
import { projects } from '@/data';
import { removeHyphensAndCapitalize } from '@/lib/utils';

export default function Projects() {
  const sections = ["full-stack", "front-end", "back-end"]
  
  return (
    <div>
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
              <h3 className="mb-4 sm:mb-4 text-lg sm:text-lg font-semibold">
                {removeHyphensAndCapitalize(section)}
              </h3>

              {/* Mobile: Projects displayed as list */}
              <div className='block sm:hidden'>
                <ProjectsList
                  projects={sectionProjects}
                  showDetails={true}
                />
              </div>

              {/* Desktop: Projects displayed in carousels */}
              <div className='hidden sm:block'>
                <ProjectsCarousel
                  projects={sectionProjects}
                  carouselClassName='w-full max-w-xs sm:max-w-none'
                  itemClassName='basis-full sm:basis-1/2 lg:basis-1/3 flex pl-4'
                  showDetails={true}
                />
              </div>

            </section>
          )
        })}
      </div>
    </div>
  )
}