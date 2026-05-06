import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Braces,
  Check,
  Database,
  Home as HomeIcon,
  Moon,
  Play,
  Search,
  Settings,
  ShieldCheck,
  SquareTerminal,
  Sun,
  User,
  Workflow,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const productModules = [
  {
    icon: Database,
    title: 'Source connections',
    description:
      'Connect SFTP, NetSuite, Shopify, HotWax, APIs, and files before the run starts.',
  },
  {
    icon: Braces,
    title: 'Schema contracts',
    description:
      'Map fields, data types, and primary IDs so every comparison has a stable contract.',
  },
  {
    icon: Workflow,
    title: 'Saved runs',
    description:
      'Reuse the same sources, schemas, keys, and RuleSets manually or on a schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'Evidence trail',
    description:
      'Keep counts, differences, generated files, and result links tied to run history.',
  },
]

const runSteps = [
  {
    title: 'Connect',
    body: 'Point Darpan at APIs, SFTP locations, configured systems, or files once.',
  },
  {
    title: 'Shape',
    body: 'Map fields and primary IDs so both sides speak the same record language.',
  },
  {
    title: 'Compare',
    body: 'Run reusable matching logic and RuleSets that classify differences.',
  },
  {
    title: 'Explain',
    body: 'Open counts, generated files, and result links from the same run history.',
  },
]

const sourceSystems = [
  'NetSuite',
  'Shopify',
  'HotWax',
  'SFTP',
  'CSV / JSON',
  'REST APIs',
]

const technicalPoints = [
  'Tenant-aware setup records',
  'Reusable saved-run configuration',
  'Schema-driven file and payload parsing',
  'RuleSet-backed difference classification',
  'Generated files linked to completed runs',
  'Manual and scheduled execution paths',
]

function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('darpan-site-theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('darpan-site-theme', theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Darpan marketing navigation">
        <a className="brand-link" href="/" aria-label="Darpan home">
          <img src="/darpan-mark.svg" alt="" className="brand-mark" />
          <span>Darpan</span>
        </a>
        <nav className="site-nav" aria-label="Page sections">
          <a href="#product">Product</a>
          <a href="#run-model">Workflow</a>
          <a href="#systems">Integrations</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className={`theme-toggle ${theme}`}
            aria-label={`Switch to ${nextTheme} mode`}
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme(nextTheme)}
          >
            <Sun className="theme-toggle-icon theme-toggle-sun" aria-hidden />
            <Moon className="theme-toggle-icon theme-toggle-moon" aria-hidden />
            <span className="theme-toggle-thumb" />
          </button>
          <a className="ghost-action" href="https://docs.drpn.ai">
            Docs
          </a>
          <a className="primary-action" href="#contact">
            Talk to us
            <ArrowRight size={15} aria-hidden />
          </a>
        </div>
      </header>

      <HeroSection />
      <ProductSection />
      <RunModelSection />
      <SystemsSection />
      <TechnicalSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>Compare systems. Explain every difference.</h1>
        <p>
          Darpan turns recurring commerce reconciliation into saved runs with
          source connections, schemas, matching keys, rules, history, and
          generated files.
        </p>
        <div className="hero-actions">
          <a className="primary-action primary-action--large" href="#product">
            See how it runs
            <ArrowRight size={16} aria-hidden />
          </a>
          <a className="ghost-action ghost-action--large" href="https://docs.drpn.ai">
            Read the docs
          </a>
        </div>
      </div>
      <ProductPreview />
    </section>
  )
}

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="Darpan app run-history preview">
      <div className="app-preview-shell">
        <div className="app-preview-frame">
          <section className="app-preview-hero">
            <h2>Shopify to HotWax Orders</h2>
          </section>

          <section className="app-preview-board">
            <section className="app-preview-section">
              <header className="app-preview-section-head">
                <h3>Most Recent</h3>
              </header>
              <article className="app-preview-tile app-preview-featured-tile">
                <div className="app-preview-tile-head">
                  <span className="app-preview-tile-title">May 05, 2026 11:59 PM</span>
                  <span className="status-badge success">Succeeded</span>
                </div>
                <dl className="app-preview-metrics app-preview-metrics--featured">
                  <div>
                    <dt>Total differences</dt>
                    <dd>73</dd>
                  </div>
                  <div>
                    <dt>Missing from Shopify</dt>
                    <dd>18</dd>
                  </div>
                  <div>
                    <dt>Missing from HotWax</dt>
                    <dd>9</dd>
                  </div>
                </dl>
              </article>
            </section>

            <section className="app-preview-section">
              <header className="app-preview-section-head">
                <h3>Previous Results</h3>
              </header>
              <div className="app-preview-grid">
                {[
                  ['May 04, 2026 11:59 PM', '41', '7', '5'],
                  ['May 03, 2026 11:59 PM', '36', '4', '2'],
                ].map(([date, total, shopify, hotwax]) => (
                  <article className="app-preview-tile app-preview-history-tile" key={date}>
                    <div className="app-preview-tile-head">
                      <span className="app-preview-tile-title">{date}</span>
                    </div>
                    <dl className="app-preview-metrics">
                      <div>
                        <dt>Total differences</dt>
                        <dd>{total}</dd>
                      </div>
                      <div>
                        <dt>Missing from Shopify</dt>
                        <dd>{shopify}</dd>
                      </div>
                      <div>
                        <dt>Missing from HotWax</dt>
                        <dd>{hotwax}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>

            <section className="app-preview-section">
              <header className="app-preview-section-head">
                <h3>Run Setup</h3>
              </header>
              <div className="app-preview-summary-grid">
                <article className="app-preview-summary-card">
                  <span>Source 1</span>
                  <strong>Shopify Admin API</strong>
                </article>
                <article className="app-preview-summary-card">
                  <span>Source 2</span>
                  <strong>HotWax Orders API</strong>
                </article>
                <article className="app-preview-summary-card">
                  <span>RuleSet</span>
                  <strong>Order status audit</strong>
                </article>
              </div>
            </section>
          </section>
        </div>
      </div>

      <div className="app-preview-chrome" aria-label="Darpan app chrome preview">
        <div className="app-preview-footer-actions">
          <button type="button" className="app-preview-icon-action" aria-label="Open run">
            <Play size={18} aria-hidden />
          </button>
          <button type="button" className="app-preview-icon-action" aria-label="Run settings">
            <Settings size={18} aria-hidden />
          </button>
        </div>

        <div className="app-preview-floating-stack">
          <div className="app-preview-actions">
            <button type="button" className="app-preview-fab" aria-label="Go to Dashboard">
              <HomeIcon size={16} aria-hidden />
            </button>
            <button type="button" className="app-preview-fab" aria-label="Open user details">
              <User size={16} aria-hidden />
            </button>
          </div>

          <div className="app-preview-command">
            <span className="app-preview-command-dot" aria-hidden />
            <span>Ask Darpan</span>
            <span className="app-preview-command-shortcut">Cmd/Ctrl+K</span>
            <Search size={16} aria-hidden />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductSection() {
  return (
    <section id="product" className="page-section">
      <div className="section-copy">
        <h2>One run. Full context.</h2>
        <p>
          Each saved run keeps the connections, schemas, keys, rules, outputs,
          and history needed to rerun a comparison and explain what changed.
        </p>
      </div>
      <div className="module-grid">
        {productModules.map((item) => (
          <article className="module-card" key={item.title}>
            <item.icon size={22} aria-hidden />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function RunModelSection() {
  return (
    <section id="run-model" className="page-section page-section--band">
      <div className="section-copy">
        <h2>Connect. Compare. Explain.</h2>
        <p>
          Darpan gives reconciliation a repeatable path: define sources, shape
          the data, run the rules, and review the evidence.
        </p>
      </div>
      <div className="run-steps">
        {runSteps.map((step, index) => (
          <article className="run-step" key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SystemsSection() {
  return (
    <section id="systems" className="page-section systems-section">
      <div className="section-copy">
        <h2>Built for messy commerce data.</h2>
        <p>
          Use Darpan across ERP, OMS, commerce platforms, APIs, and files. It
          does not replace your systems of record. It makes disagreements
          traceable.
        </p>
      </div>
      <div className="system-board">
        {sourceSystems.map((system) => (
          <span key={system}>{system}</span>
        ))}
      </div>
    </section>
  )
}

function TechnicalSection() {
  return (
    <section className="page-section technical-section">
      <div className="technical-panel">
        <div>
          <h2>Ready to build. Easy to run.</h2>
          <p>
            Darpan reads, compares, classifies, and exports evidence while your
            source systems stay accountable.
          </p>
        </div>
        <ul>
          {technicalPoints.map((point) => (
            <li key={point}>
              <Check size={15} aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <h2>Bring your messiest reconciliation.</h2>
        <p>
          Start with a comparison your team still handles manually. Darpan turns
          it into a named setup, a saved run, and review-ready output.
        </p>
      </div>
      <div className="contact-actions">
        <a
          className="primary-action primary-action--large"
          href="mailto:hello@drpn.ai?subject=Darpan%20marketing%20site%20inquiry"
        >
          Start a conversation
          <ArrowRight size={16} aria-hidden />
        </a>
        <a className="ghost-action ghost-action--large" href="https://hotwax-darpan-dev.web.app/login">
          Open Darpan
          <Play size={15} aria-hidden />
        </a>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/darpan-mark.svg" alt="" className="brand-mark" />
        <span>Darpan</span>
      </div>
      <div className="footer-links">
        <a href="https://docs.drpn.ai">Docs</a>
        <a href="https://hotwax-darpan-dev.web.app/login">Open Darpan</a>
        <a href="mailto:hello@drpn.ai">Contact</a>
      </div>
      <p>
        <SquareTerminal size={14} aria-hidden />
        Reconciliation with a run trail. Copyright 2026.
      </p>
    </footer>
  )
}
