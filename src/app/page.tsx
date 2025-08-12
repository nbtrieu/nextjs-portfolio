// src/app/page.tsx
import { GitCommitVertical, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="p-4 sm:p-8 lg:p-12">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]">
          <section>
            <h1 className='mt-8 mb-8 text-4xl font-semibold tracking-tighter'>Nicole Trieu</h1>
            <p className='mb-8 text-md mt-4'>
              Hey there! I'm a Full Stack Developer with a background in Science Education and a love for lifelong learning.
              I enjoy combining my communication skills with problem-solving to create applications that are both powerful
              and user-friendly. I'm passionate about writing clean, efficient code and building scalable solutions, and
              I'm always excited to dive into complex and collaborative projects where I can make a real impact.
            </p>
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        </div>
      </main>
      
      <footer className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px] flex gap-[24px] flex-wrap items-center p-4">
        <a
          className="flex items-center text-neutral-600 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="https://github.com/nbtrieu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitCommitVertical/>
          GitHub
        </a>
        <a
          className="flex items-center text-neutral-600 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="https://www.linkedin.com/in/nicole-nghi-trieu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <User/>
          LinkedIn
        </a>
      </footer>
    </div>
  );
}