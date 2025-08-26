// src/app/resume/page.tsx
"use client"

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from '@/data';

export default function Resume() {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      cyan: 'bg-cyan-100 text-cyan-800',
      orange: 'bg-orange-100 text-orange-800',
      slate: 'bg-slate-100 text-slate-800',
      teal: 'bg-teal-100 text-teal-800',
      pink: 'bg-pink-100 text-pink-800'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800';
  };

  const getIconColor = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      indigo: 'text-indigo-600',
      cyan: 'text-cyan-600',
      orange: 'text-orange-600',
      slate: 'text-slate-600',
      teal: 'text-teal-600',
      pink: 'text-pink-600'
    };
    return colorMap[color] || 'text-gray-600';
  };

  return (
    <div>
      <div className='mb-12'>
        <h1 className="sm:mb-6 text-2xl sm:text-4xl font-semibold tracking-tighter">
          Resume
        </h1>
        <p className='text-md mb-6 leading-relaxed'>
          Download my full resume or view my technical skills below.
        </p>
        <Button variant="secondary" asChild>
          <a href="/resume.pdf" download="Nicole_Trieu_Resume.pdf">
            <Download className="w-4 h-4" />
            Download Full Resume
          </a>
        </Button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, data]) => {
            const IconComponent = data.icon;
            return (
              <Card key={category} className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                    <IconComponent className={`w-5 h-5 ${getIconColor(data.color)}`} />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-sm rounded-full font-medium ${getColorClasses(data.color)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}