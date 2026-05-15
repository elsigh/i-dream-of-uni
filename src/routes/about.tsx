import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { profile, resumeHighlights } from '~/siteData'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main id="content" className="page-shell page-shell--narrow">
      <p className="eyebrow">About</p>
      <h1>Building for the web, and for the people who build it.</h1>
      <p className="lede">{profile.shortBio}</p>
      <div className="prose">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="timeline-section" aria-label="Career highlights">
        <h2>Selected timeline</h2>
        <div className="timeline-list">
          {resumeHighlights.map((item) => (
            <article className="timeline-item" key={item.label}>
              <span>{item.period}</span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="button-row">
        <Button asChild className="button-link">
          <a href="https://github.com/elsigh" target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </main>
  )
}
