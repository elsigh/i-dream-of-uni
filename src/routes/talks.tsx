import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { talks, writing } from '~/siteData'

export const Route = createFileRoute('/talks')({
  component: Talks,
})

function Talks() {
  return (
    <main id="content" className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">Talks &amp; writing</p>
        <h1>Talks, interviews, and writing.</h1>
        <p className="lede">
          Selected appearances across engineering leadership, frontend
          infrastructure, web performance, and AI-assisted development. Each
          item has a local archive so the content survives if the original host
          goes away.
        </p>
      </div>
      <section className="talk-list" aria-label="Talks and interviews">
        {talks.map((talk) => (
          <article
            className="talk-card"
            key={`${talk.title}-${talk.event}`}
          >
            <span>{talk.year}</span>
            <div>
              <h2>{talk.title}</h2>
              <p>{talk.event}</p>
              {talk.description ? <em>{talk.description}</em> : null}
              <div className="archive-actions">
                {talk.archiveSlug ? (
                  <Link
                    className="text-link"
                    to="/archive/$slug"
                    params={{ slug: talk.archiveSlug }}
                  >
                    Read archive
                  </Link>
                ) : null}
                <a
                  className="text-link"
                  href={talk.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Original
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="writing-section" aria-label="Writing">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Writing</p>
            <h2>Articles and references that still show up on the web.</h2>
          </div>
        </div>
        <div className="writing-list">
          {writing.map((item) => (
            <article className="writing-card" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.publisher}</p>
                <div className="archive-actions">
                  {item.archiveSlug ? (
                    <Link
                      className="text-link"
                      to="/archive/$slug"
                      params={{ slug: item.archiveSlug }}
                    >
                      Read archive
                    </Link>
                  ) : null}
                  <a
                    className="text-link"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Original
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
