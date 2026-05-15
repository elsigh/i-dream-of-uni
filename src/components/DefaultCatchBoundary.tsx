import {
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  })

  console.error('DefaultCatchBoundary Error:', error)

  return (
    <main className="page-shell page-shell--narrow">
      <p className="eyebrow">Something went wrong</p>
      <h1>That page did not render.</h1>
      <p className="lede">{error.message}</p>
      <div className="button-row">
        <Button
          type="button"
          onClick={() => {
            router.invalidate()
          }}
          className="button-link"
        >
          Try again
        </Button>
        {isRoot ? (
          <Button asChild className="button-link button-link--secondary">
            <Link to="/">Home</Link>
          </Button>
        ) : (
          <Button asChild className="button-link button-link--secondary">
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault()
                window.history.back()
              }}
            >
              Go back
            </Link>
          </Button>
        )}
      </div>
    </main>
  )
}
