import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Github,
	Guitar,
	Link2,
	Linkedin,
	Mic,
	Music,
	PawPrint,
	Twitter,
} from "lucide-react";
import Link from "next/link";
import type React from "react";

interface Project {
	name: string;
	description: string;
	href: string;
	icon?: React.ElementType;
}

interface Talk {
	title: string;
	platform: string;
	href: string;
	icon?: React.ElementType;
}

const projects: Project[] = [
	{
		name: "Commoner",
		description: "My Americana-sounding band from San Francisco.",
		href: "https://commoner.com/",
		icon: Guitar,
	},
	{
		name: "Songbook Studio",
		description: "Create, collaborate, and share your chords and lyrics.",
		href: "https://songbook.studio/",
		icon: Music,
	},
	{
		name: "Paws or Peeps",
		description: "Generate images of you and your pets.",
		href: "https://pawsorpeeps.com/",
		icon: PawPrint,
	},
];

const talks: Talk[] = [
	{
		title: "How Vercel uses AI",
		platform: "Jam.dev - AI Speedrun",
		href:"https://youtu.be/nGRyvYax1BI",
		icon: Mic,
	},
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
	{
		title: "Faster, Safer, More Consistent Browsers",
		platform: "Velocity 2012",
		href: "https://www.youtube.com/watch?v=RwvcjPE2Rm0",
		icon: Mic,
	},
	{
		title: "Minimizing browser reflow",
		platform: "Google Search Central",
		href: "https://www.youtube.com/watch?v=ZHxbs5WEQzE",
		icon: Mic,
	},
	{
		title: "XSLDataGrid: XSLT Rocks Ajax",
		platform: "XML.com",
		href: "https://www.xml.com/pub/a/2006/08/23/xsldatagrid-xslt-ajax.html",
		icon: Mic,
	},
];

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen bg-[#292929]">
			<header className="container mx-auto px-4 py-8 md:py-12">
				<div className="flex flex-col md:flex-row items-center gap-6">
					<Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-slate-700 shadow-lg">
						<AvatarImage src="/lindsey.jpg" alt="Lindsey Simon" />
						<AvatarFallback>LS</AvatarFallback>
					</Avatar>
					<div>
						<h1 className="text-4xl md:text-5xl font-bold text-white">
							Lindsey Simon
						</h1>
						<p className="text-xl text-slate-300 mt-1">
							Builder: products, teams, and communities. Musician. Cook. Web Developer.
						</p>
						<div className="mt-4 flex gap-3">
							<Button
								variant="outline"
								size="icon"
								asChild
								className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
							>
								<Link
									href="https://github.com/elsigh"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
								>
									<Github className="h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="icon"
								asChild
								className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
							>
								<Link
									href="https://x.com/elsigh"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="X (formerly Twitter)"
								>
									<Twitter className="h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="icon"
								asChild
								className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
							>
								<Link
									href="https://www.linkedin.com/in/lindseysimon/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
								>
									<Linkedin className="h-5 w-5" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain pointer-events-none"
					style={{ backgroundImage: "url(/vercel.png)" }}
				/>
			</header>

			<main className="container mx-auto px-4 py-4 flex-grow">
				<section id="about" className="mb-12 md:mb-16">
					<h2 className="text-3xl font-semibold mb-6 text-white">About Me</h2>
					<div className="space-y-4 text-slate-300 text-lg leading-relaxed">
						<p>
							I'm an engineer with a passion for the web, developer
							experience, and fostering innovation. My journey has taken me
							through impactful roles at companies like Vercel, Google (Chrome,
							Web Platform), and startups, where I've had the privilege to work
							with some of the most talented people in the world.
						</p>
						<p>
							Beyond technology, I'm an optimist and actively involved as an
							advisor and investor in the startup ecosystem. When not immersed
							in code or strategy, you might find me playing the music, table
							tennis, or hunting for fungi in the woods.
						</p>
					</div>
				</section>

				<section id="projects" className="mb-12 md:mb-16">
					<h2 className="text-3xl font-semibold mb-6 text-white">Projects</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{projects.map((project) => (
							<Card
								key={project.name}
								className="bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-slate-700"
							>
								<CardHeader className="flex flex-row items-center gap-4">
									{project.icon && (
										<project.icon className="h-8 w-8 text-sky-400" />
									)}
									<div>
										<CardTitle className="text-xl text-white">
											{project.name}
										</CardTitle>
										<CardDescription className="text-slate-400">
											{project.description}
										</CardDescription>
									</div>
								</CardHeader>
								<CardFooter>
									<Button
										variant="ghost"
										asChild
										className="text-sky-400 hover:text-sky-300 hover:bg-slate-700"
									>
										<Link
											href={project.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											Visit Project <Link2 className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>

				<section id="talks" className="mb-12 md:mb-16">
					<h2 className="text-3xl font-semibold mb-6 text-white">
						Talks & Interviews
					</h2>
					<div className="space-y-6">
						{talks.map((talk) => (
							<Card
								key={talk.title}
								className="bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-slate-700"
							>
								<CardHeader>
									<CardTitle className="text-xl text-white">
										{talk.title}
									</CardTitle>
									<CardDescription className="text-slate-400">
										{talk.platform}
									</CardDescription>
								</CardHeader>
								<CardFooter>
									<Button
										variant="ghost"
										asChild
										className="text-sky-400 hover:text-sky-300 hover:bg-slate-700"
									>
										<Link
											href={talk.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											Listen/Watch <Link2 className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>
			</main>

			<footer className="container mx-auto px-4 py-8 text-center text-slate-400">
				<p>
					&copy; {new Date().getFullYear()} Lindsey Simon. All rights reserved.
				</p>
			</footer>
		</div>
	);
}
