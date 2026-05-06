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
        title: 'Darpan | Compare systems. Explain every difference.',
      },
      {
        name: 'description',
        content:
          'Darpan turns recurring commerce reconciliation into saved runs with sources, schemas, matching keys, rules, history, and generated files.',
      },
      {
        property: 'og:title',
        content: 'Darpan | Compare systems. Explain every difference.',
      },
      {
        property: 'og:description',
        content:
          'A client-facing overview of Darpan, the reconciliation workspace for repeatable source comparison and reviewable output.',
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
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
