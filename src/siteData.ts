import {
  Bot,
  Code2,
  Gauge,
  Guitar,
  Mic2,
  Music2,
  PawPrint,
  Radio,
  Sprout,
  TableProperties,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const profile = {
  name: 'Lindsey Simon',
  tagline:
    'Builder of products, teams, and communities. VP of Engineering at Vercel. Musician, cook, and lifelong web developer.',
  shortBio:
    'I work on developer experience, engineering teams, and the systems that make the web faster and more creative.',
  about: [
    "I'm an engineer with a long-running obsession for the web: making it faster, more understandable, and more useful for the people building on it.",
    "At Vercel, I work with teams building the frontend cloud and the tools developers use to ship. Before that, I spent years across Google, Quip, Shift, and startups, working on web platform, translation, collaboration, commerce, and developer tooling.",
    "Outside of work, I write songs, cook, play table tennis, and spend time in the woods looking for fungi. The common thread is the same: craft, taste, curiosity, and learning from people who care deeply about what they do.",
  ],
}

export const resumeHighlights = [
  {
    period: 'Now',
    label: 'Vercel',
    description:
      'VP of Engineering, focused on frontend cloud, developer experience, and AI-augmented engineering workflows.',
  },
  {
    period: '2010s',
    label: 'Google, Quip, Shift',
    description:
      'Worked across App Engine, Google Translate, web performance, collaboration software, and applied product engineering.',
  },
  {
    period: 'Earlier',
    label: 'Browserscope, Dishola, startups',
    description:
      'Built community software, open source browser measurement tools, and early web applications in Austin and San Francisco.',
  },
]

export type Project = {
  name: string
  kicker: string
  description: string
  href: string
  repo?: string
  featured?: boolean
  icon: LucideIcon
}

export const projects: Array<Project> = [
  {
    name: 'Songbook.Studio',
    kicker: 'Music software',
    description:
      'Create, collaborate, and share chords and lyrics with friends.',
    href: 'https://songbook.studio/',
    featured: true,
    icon: Music2,
  },
  {
    name: 'Commoner',
    kicker: 'Music',
    description: 'An Americana-sounding band from San Francisco.',
    href: 'https://commoner.com/',
    featured: true,
    icon: Guitar,
  },
  {
    name: 'Gecko Cam',
    kicker: 'Hardware and web video',
    description:
      'Live HLS streaming and motion-triggered event clips for a gecko vivarium on Raspberry Pi.',
    href: 'https://gecko-cam.vercel.app/',
    repo: 'https://github.com/elsigh/gecko-cam',
    featured: true,
    icon: Radio,
  },
  {
    name: 'Paws Or Peeps',
    kicker: 'AI image experiment',
    description:
      'A playful image tool that transforms animals into humans and humans into animals.',
    href: 'https://pawsorpeeps.com/',
    repo: 'https://github.com/elsigh/paws-or-peeps',
    icon: PawPrint,
  },
  {
    name: 'Browserscope',
    kicker: 'Open web history',
    description:
      'Crowdsourced browser behavior tests for making browsers faster, safer, and more consistent.',
    href: 'https://github.com/elsigh/browserscope',
    repo: 'https://github.com/elsigh/browserscope',
    icon: Gauge,
  },
  {
    name: 'Dishola',
    kicker: 'Food community',
    description:
      'A food-focused community project from the earlier social web era.',
    href: 'https://dishola-web.vercel.app/',
    repo: 'https://github.com/elsigh/dishola',
    icon: Sprout,
  },
  {
    name: 'CSSJanus',
    kicker: 'Internationalization',
    description:
      'A left-to-right and right-to-left CSS conversion tool for internationalized interfaces.',
    href: 'https://github.com/elsigh/cssjanus',
    repo: 'https://github.com/elsigh/cssjanus',
    icon: Code2,
  },
  {
    name: 'Redux + PDiff FTW',
    kicker: 'Talk demo',
    description:
      'Demo repository for a JavaScript talk on Redux and PDiff.',
    href: 'https://github.com/elsigh/redux-pdiff',
    repo: 'https://github.com/elsigh/redux-pdiff',
    icon: Bot,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export type Talk = {
  title: string
  event: string
  year: string
  href: string
  description?: string
  /** Matching key in talkArchives. */
  archiveSlug?: string
}

export const talks: Array<Talk> = [
  {
    title: 'Effective Thinking in the Age of Augmented Tooling',
    event: 'TechLead Conf Amsterdam 2026',
    year: '2026',
    href: 'https://gitnation.com/person/lindsey_simon',
    description:
      'Clear thinking, productive failure, and shared vocabulary for AI-assisted engineering.',
    archiveSlug: 'effective-thinking',
  },
  {
    title: 'How Vercel Uses AI',
    event: 'Jam.dev AI Speedrun',
    year: '2025',
    href: 'https://youtu.be/nGRyvYax1BI',
    archiveSlug: 'how-vercel-uses-ai',
  },
  {
    title: 'Conducting Interviews and Interviewing in the Age of AI Tools',
    event: 'TechLead Conference 2024',
    year: '2024',
    href: 'https://gitnation.com/person/lindsey_simon',
    archiveSlug: 'conducting-interviews-ai',
  },
  {
    title: 'Developer-led Innovation and the Future of Frontend',
    event: 'Modern Web Podcast',
    year: '2024',
    href: 'https://open.spotify.com/episode/1oW2O5Ez7su7uxyj9CuQmi',
    archiveSlug: 'modern-web-podcast',
  },
  {
    title: 'Frontend Cloud: Unleashing Creative Power',
    event: 'Tech Leaders Unplugged',
    year: '2023',
    href: 'https://www.techleadersunplugged.com/frontend-cloud-unleashing-creative-power/',
    archiveSlug: 'frontend-cloud',
  },
  {
    title: 'Your Career Path: From the Outside, from the Inside',
    event: 'ELC Annual 2022',
    year: '2022',
    href: 'https://sfelc.com/annual2022/topics/your-career-path-from-the-outside-from-the-inside',
    archiveSlug: 'career-path',
  },
  {
    title: 'Faster, Safer, More Consistent Browsers',
    event: 'Velocity 2012',
    year: '2012',
    href: 'https://www.youtube.com/watch?v=RwvcjPE2Rm0',
    archiveSlug: 'faster-safer-browsers',
  },
  {
    title: 'Minimizing Browser Reflow',
    event: 'Google Search Central',
    year: '2010',
    href: 'https://developers.google.com/speed/docs/insights/browser-reflow',
    archiveSlug: 'minimizing-browser-reflow',
  },
]

export type WritingItem = {
  title: string
  publisher: string
  href: string
  archiveSlug?: string
}

export const writing: Array<WritingItem> = [
  {
    title: 'Measuring the Performance of Task Completion',
    publisher: 'Web Performance Calendar',
    href: 'https://calendar.perfplanet.com/2010/measuring-the-performance-of-task-completion/',
    archiveSlug: 'measuring-task-completion',
  },
  {
    title: 'The XSLDataGrid: XSLT Rocks Ajax',
    publisher: 'XML.com',
    href: 'https://www.xml.com/pub/a/2006/08/23/xsldatagrid-xslt-ajax.html',
    archiveSlug: 'xsldatagrid',
  },
  {
    title: 'Browserscope security tests',
    publisher: 'High Performance Web Sites',
    href: 'https://www.stevesouders.com/blog/2010/02/19/new-browserscope-security-tests/',
    archiveSlug: 'browserscope-security',
  },
]
