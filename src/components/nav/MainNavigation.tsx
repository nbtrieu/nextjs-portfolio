// src/components/nav/MainNavigation.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MainNavigation() {
  const pathname = usePathname()
  
  return (
    <header className="sticky top-[20px] z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-10 sm:px-8 md:px-32 lg:px-32 xl:px-[300px]">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  href="/" 
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    pathname === '/' 
                      ? '!bg-black !text-white hover:!bg-black/90 dark:!bg-foreground dark:!text-background' 
                      : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50'
                  }`}
                  style={pathname === '/' ? { backgroundColor: '#000000', color: '#ffffff' } : {}}
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    pathname.includes('projects')
                      ? '!bg-black !text-white hover:!bg-black/90 dark:!bg-foreground dark:!text-background' 
                      : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50'
                  }`}
                  style={pathname.includes('projects') ? { backgroundColor: '#000000', color: '#ffffff' } : {}}
                >Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Full Stack Projects
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out my end-to-end web apps.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/projects#front-end" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          Front-End Projects
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Interactive web applications built with vanilla JavaScript/HTML/CSS.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/projects#back-end" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          Back-End Projects
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Server-side infrastructure and services.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  href="/contact" 
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    pathname === '/contact' 
                      ? '!bg-black !text-white hover:!bg-black/90 dark:!bg-foreground dark:!text-background' 
                      : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50'
                  }`}
                  style={pathname === '/contact' ? { backgroundColor: '#000000', color: '#ffffff' } : {}}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  href="/resume" 
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    pathname === '/resume' 
                      ? '!bg-black !text-white hover:!bg-black/90 dark:!bg-foreground dark:!text-background' 
                      : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50'
                  }`}
                  style={pathname === '/resume' ? { backgroundColor: '#000000', color: '#ffffff' } : {}}
                >
                  Resume
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-start justify-between space-x-2 md:justify-end">
          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav className="flex flex-col gap-6 mt-10 px-4">
                  <div className="flex flex-col space-y-4">
                    <Link
                      href="/"
                      className={`flex items-center py-2 px-3 text-lg font-medium rounded-md transition-colors hover:text-foreground/80 ${
                        pathname === '/' 
                          ? '!bg-black !text-white hover:!bg-black/90 dark:!bg-foreground dark:!text-background' 
                          : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50'
                      }`}
                    >
                      About
                    </Link>
                    
                    <div className="flex flex-col space-y-3">
                      <Link
                        href="/projects"
                        className={`flex items-center py-2 px-3 text-lg font-medium rounded-md transition-colors hover:text-foreground/80 ${
                          pathname.includes('projects')
                            ? '!bg-black !text-white hover:!bg-black/90 dark:!bg-foreground dark:!text-background' 
                            : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50'
                        }`}
                      >
                        Projects
                      </Link>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Link
                          href="/projects"
                          className="py-1 px-3 text-md text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
                        >
                          Full Stack
                        </Link>
                        <Link
                          href="/projects#front-end"
                          className="py-1 px-3 text-md text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
                        >
                          Front-End
                        </Link>
                        <Link
                          href="/projects#back-end"
                          className="py-1 px-3 text-md text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
                        >
                          Back-End
                        </Link>
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className={`flex items-center py-2 px-3 text-lg font-medium rounded-md transition-colors hover:text-foreground/80 ${
                        pathname === '/contact' 
                          ? '!bg-black !text-white hover:!bg-black/90 dark:!bg-foreground dark:!text-background' 
                          : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50'
                      }`}
                    >
                      Contact
                    </Link>
                    
                    <Link
                      href="/resume"
                      className={`flex items-center py-2 px-3 text-lg font-medium rounded-md transition-colors hover:text-foreground/80 ${
                        pathname === '/resume' 
                          ? '!bg-black !text-white hover:!bg-black/90 dark:!bg-foreground dark:!text-background' 
                          : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50'
                      }`}
                    >
                      Resume
                    </Link>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button asChild variant="ghost" className="w-full border border-black dark:border-foreground">
                      <Link href="/contact">Get In Touch</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="flex items-center">
            <Button asChild variant="ghost" className="border border-black dark:border-foreground">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>    
  )
}