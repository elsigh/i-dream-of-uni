import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { marked } from 'marked'
import type { Archive } from '~/content/archives'
import { talkArchives, writingArchives } from '~/content/archives'

type LoaderData = {
  archive: Archive
  kind: 'talk' | 'writing'
  html: string
}

export const Route = createFileRoute('/archive/$slug')({
  loader: async ({ params }): Promise<LoaderData> => {
    const fromTalks = talkArchives[params.slug]
    const fromWriting = writingArchives[params.slug]
    const archive = fromTalks ?? fromWriting
    if (!archive) {
      throw notFound()
    }
    const kind: LoaderData['kind'] = fromTalks ? 'talk' : 'writing'
    const html = await marked.parse(archive.markdown, {
      gfm: true,
      breaks: false,
    })
    return { archive, kind, html: html as string }
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.archive.title} — Archive · Lindsey Simon` },
            {
              name: 'description',
              content: `Local archive of "${loaderData.archive.title}" originally published at ${loaderData.archive.sourceLabel}.`,
            },
          ],
        }
      : {},
  component: ArchiveDetail,
})

function ArchiveDetail() {
  const { archive, kind, html } = Route.useLoaderData()
  const archivedDate = new Date(archive.archivedAt).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' },
  )

  return (
    <main id="content" className="page-shell page-shell--narrow">
      <Link
        className="text-link"
        to={kind === 'talk' ? '/talks' : '/talks'}
        style={{ marginBottom: '1.5rem' }}
      >
        <ArrowLeft aria-hidden="true" />
        Back to {kind === 'talk' ? 'talks' : 'writing'}
      </Link>
      <p className="eyebrow">
        {kind === 'talk' ? 'Talk archive' : 'Article archive'} · {archive.year}
      </p>
      <h1>{archive.title}</h1>
      <p className="lede">
        Originally at <strong>{archive.sourceLabel}</strong>.
      </p>
      <p className="archive-meta">
        Locally archived {archivedDate} so the content survives if the original
        host goes offline.{' '}
        <a
          className="text-link archive-meta__link"
          href={archive.originalHref}
          target="_blank"
          rel="noreferrer"
        >
          View original
          <ArrowUpRight aria-hidden="true" />
        </a>
      </p>
      {archive.note ? (
        <aside className="archive-note">{archive.note}</aside>
      ) : null}
      <article
        className="archive-prose"
        // archive content is authored locally in src/content/archives.ts,
        // not user-supplied — so embedded HTML is trusted.
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  )
}
