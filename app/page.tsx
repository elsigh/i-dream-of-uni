import type React from "react"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Linkedin, Twitter, Music, Mic, Lightbulb, Link2 } from "lucide-react"

interface Project {
  name: string
  description: string
  href: string
  icon?: React.ElementType
}

interface Talk {
  title: string
  platform: string
  href: string
  icon?: React.ElementType
}

const projects: Project[] = [
  {
    name: "Commoner",
    description: "A new kind of news reader.",
    href: "https://commoner.com/",
    icon: Lightbulb,
  },
  {
    name: "Songbook Studio",
    description: "Create, collaborate, and share your music.",
    href: "https://songbook.studio/",
    icon: Music,
  },
]

const talks: Talk[] = [
  {
    title: "Developer-led Innovation and the Future of Frontend",
    platform: "Spotify - Modern Web Podcast",
    href: "https://open.spotify.com/episode/1oW2O5Ez7su7uxyj9CuQmi",
    icon: Mic,
  },
  {
    title: "Frontend Cloud: Unleashing Creative Power",
    platform: "Tech Leaders Unplugged",
    href: "https://www.techleadersunplugged.com/frontend-cloud-unleashing-creative-power/",
    icon: Mic,
  },
  {
    title: "Your Career Path: From the Outside & From the Inside",
    platform: "SFELC Annual 2022",
    href: "https://sfelc.com/annual2022/topics/your-career-path-from-the-outside-from-the-inside",
    icon: Mic,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-900 dark:to-stone-800">
      <header className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-slate-200 dark:border-slate-700 shadow-lg">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Lindsey Simon" />
            <AvatarFallback>LS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">Lindsey Simon</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mt-1">
              Builder of products, teams, and communities. Advisor. Investor. Musician.
            </p>
            <div className="mt-4 flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/lindseysimon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://x.com/elsigh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section id="about" className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-200">About Me</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            <p>
              I'm an engineering leader with a passion for the web platform, developer experience, and fostering
              innovation. My journey has taken me through impactful roles at companies like Vercel, Google (Chrome, Web
              Platform), and YouTube, where I've had the privilege to lead and grow talented teams.
            </p>
            <p>
              Beyond technology, I'm an optimist, feminist, and actively involved as an advisor and investor in the
              startup ecosystem. When I'm not immersed in code or strategy, you might find me playing the piano,
              singing, or songwriting.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-200">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="bg-white dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  {project.icon && <project.icon className="h-8 w-8 text-sky-600 dark:text-sky-400" />}
                  <div>
                    <CardTitle className="text-xl text-slate-800 dark:text-slate-100">{project.name}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
                  >
                    <Link href={project.href} target="_blank" rel="noopener noreferrer">
                      Visit Project <Link2 className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="talks" className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-200">Talks & Interviews</h2>
          <div className="space-y-6">
            {talks.map((talk) => (
              <Card
                key={talk.title}
                className="bg-white dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100">{talk.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">{talk.platform}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
                  >
                    <Link href={talk.href} target="_blank" rel="noopener noreferrer">
                      Listen/Watch <Link2 className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-slate-600 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Lindsey Simon. All rights reserved.</p>
      </footer>
    </div>
  )
}
