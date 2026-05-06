import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

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
      {
        title: 'Darpan | See where your systems disagree.',
      },
      {
        name: 'description',
        content:
          'Darpan compares records across systems and returns the rows that are missing, different, or out of sync.',
      },
      {
        property: 'og:title',
        content: 'Darpan | See where your systems disagree.',
      },
      {
        property: 'og:description',
        content:
          'Reconciliation software for teams that need to see where systems disagree.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/darpan-mark.svg" />
        <link rel="shortcut icon" href="/darpan-mark.svg" />
        <link rel="apple-touch-icon" href="/darpan-mark.svg" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
