import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#090909' },
      { title: 'Darpan — Reconciliation across your systems | Compare records by primary ID' },
      {
        name: 'description',
        content:
          'Darpan is a reconciliation tool. It compares records across any two sources — APIs, files, SFTP, or databases — by primary ID and returns the rows that are missing, different, or out of sync.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Darpan' },
      { property: 'og:url', content: 'https://drpn.ai/' },
      {
        property: 'og:title',
        content: 'Darpan — Reconciliation across your systems',
      },
      {
        property: 'og:description',
        content:
          'Compare records across any two sources by primary ID. Every missing, different, or out-of-sync row, with the evidence behind it. Invite-only pilot.',
      },
      { property: 'og:image', content: 'https://drpn.ai/darpan-hero-light.png' },
      { property: 'og:image:alt', content: 'Darpan saved-run result preview' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Darpan — Reconciliation across your systems',
      },
      {
        name: 'twitter:description',
        content:
          'Compare records across systems by primary ID and review every difference. Invite-only pilot.',
      },
      { name: 'twitter:image', content: 'https://drpn.ai/darpan-hero-light.png' },
    ],
    links: [{ rel: 'canonical', href: 'https://drpn.ai/' }],
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
