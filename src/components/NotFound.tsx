import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Button } from '~/components/ui/button'

export function NotFound({ children }: { children?: ReactNode }) {
  return (
    <main className="page-shell page-shell--narrow">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p className="lede">
        {children || 'The page you are looking for is not here.'}
      </p>
      <div className="button-row">
        <Button
          type="button"
          onClick={() => window.history.back()}
          className="button-link"
        >
          Go back
        </Button>
        <Button asChild className="button-link button-link--secondary">
          <Link to="/">Home</Link>
        </Button>
      </div>
    </main>
  )
}
