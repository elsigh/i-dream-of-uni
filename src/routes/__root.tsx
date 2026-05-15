/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { Github, Linkedin, Twitter } from 'lucide-react'
import * as React from 'react'
import { Button } from '~/components/ui/button'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Lindsey Simon - Builder, musician, web developer',
        description:
          'Lindsey Simon is a builder of products, teams, and communities, VP of Engineering at Vercel, musician, cook, and web developer.',
        keywords:
          'Lindsey Simon, elsigh, Vercel, web performance, engineering leadership, talks, projects',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  errorComponent: ({ error }) => (
    <main className="page-shell page-shell--narrow">
      <p className="eyebrow">Something went wrong</p>
      <h1>That page did not render.</h1>
      <p className="lede">{error.message}</p>
      <Button asChild className="button-link">
        <Link to="/">Back home</Link>
      </Button>
    </main>
  ),
  notFoundComponent: () => (
    <main className="page-shell page-shell--narrow">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p className="lede">The page you are looking for is not here.</p>
      <Button asChild className="button-link">
        <Link to="/">Back home</Link>
      </Button>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <header className="site-header">
          <Link className="wordmark" to="/" activeOptions={{ exact: true }}>
            Lindsey Simon
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link
              to="/about"
              activeProps={{ className: 'site-nav__link is-active' }}
              className="site-nav__link"
            >
              About
            </Link>
            <Link
              to="/talks"
              activeProps={{ className: 'site-nav__link is-active' }}
              className="site-nav__link"
            >
              Talks
            </Link>
            <Link
              to="/projects"
              activeProps={{ className: 'site-nav__link is-active' }}
              className="site-nav__link"
            >
              Projects
            </Link>
          </nav>
          <div className="social-links" aria-label="Social links">
            <a
              className="icon-link"
              href="https://github.com/elsigh"
              title="GitHub"
              aria-label="GitHub"
              rel="noreferrer"
              target="_blank"
            >
              <Github aria-hidden="true" />
            </a>
            <a
              className="icon-link"
              href="https://x.com/elsigh"
              title="X"
              aria-label="X"
              rel="noreferrer"
              target="_blank"
            >
              <Twitter aria-hidden="true" />
            </a>
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/lindseysimon/"
              title="LinkedIn"
              aria-label="LinkedIn"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin aria-hidden="true" />
            </a>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <p>San Francisco. Vercel. Songbook.Studio.</p>
          <a href="mailto:elsigh@gmail.com">elsigh@gmail.com</a>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
