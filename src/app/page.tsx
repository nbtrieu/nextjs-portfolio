// src/app/page.tsx
import { GitBranch } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { projects } from '@/data';
import { removeHyphensAndCapitalize } from '@/lib/utils';

export default function Home() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-4 sm:px-8 md:px-32 lg:px-32 xl:px-[300px]">
        <section>
          <div className='flex flex-col items-start'>
            {/* <h1 className="text-2xl sm:text-4xl font-semibold tracking-tighter">
              Nicole Trieu
            </h1> */}
            <img
              src="name.svg"
              draggable="false"
              className="h-12 sm:h-15 w-auto"
            />
            <p className="mb-4 sm:mb-6 text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
              Hey there! I'm a Full Stack Developer with a background in Science Education and a love for lifelong learning.
              I enjoy combining my communication skills with problem-solving to create applications that are both powerful
              and user-friendly. I'm passionate about writing clean, efficient code and building scalable solutions, and
              I'm always excited to dive into complex and collaborative projects where I can make a real impact.
            </p>
          </div>

          <Carousel className="w-full max-w-xlg">
            <CarouselContent>
              {Array.from(projects).map((project, i) => (
                <CarouselItem key={project.imgFileName}>
                  <Card className='rounded-lg border-slate-500'>
                    <CardHeader>
                      <CardTitle className='flex flex-row items-center gap-2'>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-text-portfolio">
                          {project.name}
                        </a>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <GitBranch className="w-5 h-5" />
                        </a>
                      </CardTitle>
                      <CardDescription>{project.skills}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img
                          src={`/assets/projects/${project.imgFileName}.png`}
                          draggable="false"
                          alt={`${project.name} project screenshot`}
                        />
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </div>
  );
}