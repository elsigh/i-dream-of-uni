import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'
import { featuredProjects, profile, talks } from '~/siteData'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featuredTalks = talks.slice(0, 3)

  return (
    <main id="content">
      <section className="home-hero" aria-label="Lindsey Simon">
        <div className="home-hero__content">
          <p className="eyebrow">Builder. Musician. Cook. Web developer.</p>
          <h1>{profile.name}</h1>
          <p className="hero-lede">{profile.tagline}</p>
          <div className="hero-actions">
            <Button asChild className="button-link button-link--light">
              <a href="#selected-work">
                Selected work
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <a
              className="text-link text-link--light"
              href="https://songbook.studio/"
              target="_blank"
              rel="noreferrer"
            >
              Songbook.Studio
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="intro-band__inner">
          <p>{profile.shortBio}</p>
          <dl className="stat-grid" aria-label="Profile highlights">
            <div>
              <dt>Now</dt>
              <dd>VP Engineering at Vercel</dd>
            </div>
            <div>
              <dt>Before</dt>
              <dd>Google, Quip, Shift, startups</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Web performance, developer experience, AI tools</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="selected-work" className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Things with code, chords, and craft.</h2>
          <a className="text-link" href="/projects">
            All projects
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <Card
              className="project-card"
              key={project.name}
            >
              <a
                className="project-card__link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <CardHeader className="project-card__header">
                  <project.icon aria-hidden="true" />
                  <p className="card-kicker">{project.kicker}</p>
                  <h3>{project.name}</h3>
                </CardHeader>
                <CardContent className="project-card__content">
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter className="project-card__footer">
                  <span>
                    Visit
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </CardFooter>
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section className="page-section page-section--contrast">
        <div className="section-heading">
          <p className="eyebrow">Talks</p>
          <h2>Engineering leadership, fast websites, and AI-assisted work.</h2>
          <a className="text-link" href="/talks">
            All talks
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="talk-strip">
          {featuredTalks.map((talk) => (
            <a
              className="talk-row"
              href={talk.href}
              key={`${talk.title}-${talk.event}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>{talk.year}</span>
              <strong>{talk.title}</strong>
              <em>{talk.event}</em>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
