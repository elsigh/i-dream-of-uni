import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Mic2, Newspaper } from 'lucide-react'
import { talks, writing } from '~/siteData'

export const Route = createFileRoute('/talks')({
  component: Talks,
})

function Talks() {
  return (
    <main id="content" className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">Talks</p>
        <h1>Talks, interviews, and writing.</h1>
        <p className="lede">
          Selected appearances across engineering leadership, frontend
          infrastructure, web performance, and AI-assisted development.
        </p>
      </div>
      <section className="talk-list" aria-label="Talks and interviews">
        {talks.map((talk) => (
          <a
            className="talk-card"
            href={talk.href}
            key={`${talk.title}-${talk.event}`}
            target="_blank"
            rel="noreferrer"
          >
            <Mic2 aria-hidden="true" />
            <span>{talk.year}</span>
            <div>
              <h2>{talk.title}</h2>
              <p>{talk.event}</p>
              {talk.description ? <em>{talk.description}</em> : null}
            </div>
            <ArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </section>
      <section className="writing-section" aria-label="Writing">
        <div className="section-heading">
          <p className="eyebrow">Writing</p>
          <h2>Articles and references that still show up in the web.</h2>
        </div>
        <div className="writing-list">
          {writing.map((item) => (
            <a
              className="writing-card"
              href={item.href}
              key={item.title}
              target="_blank"
              rel="noreferrer"
            >
              <Newspaper aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.publisher}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
