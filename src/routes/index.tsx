import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'
import { featuredProjects, profile, talks } from '~/siteData'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featuredTalks = talks.slice(0, 4)

  return (
    <main id="content">
      <section className="home-hero" aria-label="Lindsey Simon">
        <div className="home-hero__content">
          <h1>{profile.name}</h1>
          <p className="hero-lede">{profile.tagline}</p>
          <div className="hero-actions">
            <Button asChild className="button-link">
              <a href="#selected-work">
                Selected work
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <a
              className="text-link"
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

      <section id="selected-work" className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Selected work.</h2>
          </div>
          <a className="text-link" href="/projects">
            All projects
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <Card className="project-card" key={project.name}>
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

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Talks</p>
            <h2>Recent talks and interviews.</h2>
          </div>
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
