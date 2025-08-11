// src/app/page.tsx
import { GitCommitVertical, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
