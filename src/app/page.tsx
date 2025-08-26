// src/app/page.tsx
"use client"
import { useRef } from 'react';
import { ProjectsCarousel } from '@/components/carousel/ProjectsCarousel';
import Autoplay from "embla-carousel-autoplay"
import { NameTag } from '@/components/name-tag/NameTag';
import { projects } from '@/data';

export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
      <div className='flex flex-col items-start'>
        {/* <h1 className="text-2xl sm:text-4xl font-semibold tracking-tighter">
          Nicole Trieu
        </h1> */}
        <NameTag/>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
          Hey there! I&apos;m a Full Stack Developer with a background in Science Education and a love for lifelong learning.
          I enjoy combining my communication skills with problem-solving to create applications that are both powerful
          and user-friendly. I&apos;m passionate about writing clean, efficient code and building scalable solutions, and
          I&apos;m always excited to dive into complex and collaborative projects where I can make a real impact.
        </p>
      </div>
      <ProjectsCarousel
        projects={projects}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        itemClassName='basis-1/2 flex pl-4'
      />
    </>
  );
}