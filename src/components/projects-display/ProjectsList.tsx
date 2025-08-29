import { GitBranch } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { AppTypes } from '@/types'

interface ProjectsListProps {
  projects: AppTypes.Project[]
  showDetails?: boolean
}

export function ProjectsList({
  projects,
  showDetails = false
}: ProjectsListProps) {
  return (
    <div className='grid gap-6'>
      {projects.map((project) => (
        <Card key={project.imgFileName} className='rounded-lg border-slate-500 h-full flex flex-col'>
          <CardHeader className="flex-shrink-0">
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
          <CardContent className="pt-2 pb-2 flex-1 flex flex-col justify-center">
            <a
              href={`/assets/projects/${project.imgFileName}.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/assets/projects/${project.imgFileName}.png`}
                draggable="false"
                alt={`${project.name} project screenshot`}
                className={'rounded-md w-full h-auto cursor-pointer transition-transform hover:scale-105'}
              />
            </a>
          </CardContent>
          {showDetails && (
            <CardFooter className="pt-2 flex gap-2 flex-shrink-0">
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
                <Button variant="secondary" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Project
                  </a>
                </Button>
              )}
            </CardFooter>
          )}
        </Card>
    ))}
    </div>
  )
}