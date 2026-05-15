import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Github } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'
import { projects } from '~/siteData'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <main id="content" className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Products, tools, experiments, and music.</h1>
        <p className="lede">
          A selected set of public projects and personal work, from chord
          editing tools to browser performance history.
        </p>
      </div>
      <div className="card-grid card-grid--wide">
        {projects.map((project) => (
          <Card className="project-card" key={project.name}>
            <CardHeader className="project-card__header">
              <project.icon aria-hidden="true" />
              <p className="card-kicker">{project.kicker}</p>
              <h2>{project.name}</h2>
            </CardHeader>
            <CardContent className="project-card__content">
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="project-card__footer card-actions">
              <Button asChild variant="link" className="card-action-link">
                <a href={project.href} target="_blank" rel="noreferrer">
                  Visit
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              {project.repo ? (
                <Button asChild variant="link" className="card-action-link">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Code
                    <Github aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
