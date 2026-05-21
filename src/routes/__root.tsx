import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#F0F2EE' },
      { title: 'Darpan — AI reconciliation for retail' },
      {
        name: 'description',
        content:
          'Darpan is AI reconciliation for retail finance teams. Connect your systems, surface variance by primary ID, and close the books with evidence behind every line.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Darpan' },
      { property: 'og:url', content: 'https://drpn.ai/' },
      {
        property: 'og:title',
        content: 'Darpan — AI reconciliation for retail',
      },
      {
        property: 'og:description',
        content:
          'Retail reconciliation that closes in hours, not weeks. Connect your systems, surface variance by primary ID, and close with evidence behind every line.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Darpan — AI reconciliation for retail',
      },
      {
        name: 'twitter:description',
        content:
          'Retail reconciliation that closes in hours, not weeks. Variance surfaced by primary ID, with the evidence behind every line.',
      },
    ],
    links: [
      { rel: 'canonical', href: 'https://drpn.ai/' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
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
