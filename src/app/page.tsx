// src/app/page.tsx
"use client"
import { useRef } from 'react';
import { ProjectsCarousel } from '@/components/projects-display/ProjectsCarousel';
import Autoplay from "embla-carousel-autoplay"
import { NameTag } from '@/components/name-tag/NameTag';
import { projects } from '@/data';

export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
      <div className='flex flex-col items-start gap-2'>
        {/* <h1 className="text-2xl sm:text-4xl font-semibold tracking-tighter">
          Nicole Trieu
        </h1> */}
        <NameTag/>
        <p className="mb-6 sm:mb-6 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed opacity-0 fade-in-up-animation">
          Hi! I&apos;m a full stack developer who used to teach science before getting into coding. 
          I really enjoy the puzzle-solving aspect of development - breaking down complex 
          problems and figuring out how all the pieces fit together. My teaching 
          background helps me write code that other developers can understand and present 
          technical concepts clearly. I like working on challenging projects with a team 
          where I can dig into complex problems.
        </p>
      </div>
      <ProjectsCarousel
        projects={projects}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        carouselClassName='w-full max-w-sm sm:max-w-none opacity-0 fade-in-up-animation'
        itemClassName='basis-full sm:basis-1/2 flex pl-4'
        prevNextClassName='hidden sm:flex'
      />
    </>
  );
}