import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Brackets,
  ChevronDown,
  FileText,
  GitCompareArrows,
  History,
  KeyRound,
  Play,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  Workflow,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const navItems = [
  ['Teams', '#use-cases'],
  ['Product', '#product'],
  ['Workflow', '#workflow'],
  ['Systems', '#systems'],
  ['FAQ', '#faq'],
] as const

const productCards = [
  {
    icon: GitCompareArrows,
    title: 'Record-by-record diff',
    body: 'Matched on the primary IDs your team already trusts. No best-guess fuzzy joins.',
    action: 'See match rules',
  },
  {
    icon: Brackets,
    title: 'Schema-aware values',
    body: 'Field-level differences are read through the schema, so JSON, CSV, and API rows compare cleanly.',
    action: 'See schema setup',
  },
  {
    icon: FileText,
    title: 'Evidence you can reopen',
    body: 'Every saved run keeps inputs, counts, and generated output together. Auditable, rerunnable, exportable.',
    action: 'See saved runs',
  },
] as const

const runSteps = [
  {
    step: 'Connect',
    detail: 'Point Darpan at two sources: Shopify, NetSuite, HotWax, SFTP, or a REST endpoint.',
  },
  {
    step: 'Describe',
    detail: 'Save the schema and the primary ID fields that identify each record.',
  },
  {
    step: 'Compare',
    detail: 'Run the reconciliation. Optionally apply a RuleSet for classification logic.',
  },
  {
    step: 'Review',
    detail: 'Open counts, mismatch rows, and generated output files. Rerun on a schedule.',
  },
]

const systems = [
  'Shopify',
  'NetSuite',
  'HotWax',
  'SFTP',
  'REST APIs',
  'CSV / JSON files',
]

const previewSourceFiles = [
  ['Shopify Admin API', 'orders_2026-03.json', '21.4 MB'],
  ['NetSuite SuiteQL', 'orders_2026-03.csv', '19.8 MB'],
] as const

const previewBuckets = [
  ['Only in Shopify', '14'],
  ['Only in NetSuite', '8'],
  ['Value mismatch', '21'],
] as const

const previewRows = [
  ['SO-10481', 'Value mismatch', 'fulfillment_status differs'],
  ['SO-10477', 'Missing in NetSuite', 'present in Shopify'],
  ['SO-10472', 'Missing in Shopify', 'present in NetSuite'],
] as const

const exampleStats = [
  ['Avg. records per file', '540K'],
  ['Avg. run time', '18s'],
] as const

const useCases = [
  {
    icon: Workflow,
    title: 'For operators',
    body: 'Customer Service keeps forwarding orders that say "paid" in Shopify but never reached the warehouse. Engineering swears the integration is fine. You see the symptoms every Monday morning.',
    prompts: [
      'Which paid Shopify orders never reached NetSuite?',
      'Which orders show fulfilled in Shopify but open in NetSuite?',
      "Which cancellations didn't roll back inventory in NetSuite?",
    ],
    answer: 'Darpan lists every record that left one system and never landed in the other, so the team can act before customers escalate.',
  },
  {
    icon: FileText,
    title: 'For finance teams',
    body: 'Every close, a five-figure variance between Shopify revenue and the NetSuite GL burns two days. Refunds, returns, store credits, processor fees. Nobody has time to fully reconcile, but the CFO still asks where it came from.',
    prompts: [
      'What is the revenue gap this month?',
      "Which refunds didn't post in both systems?",
      'Which orders fell on different sides of close?',
    ],
    answer: 'Darpan returns the exact rows behind the variance, classified and exportable, so close goes out with an answer instead of an estimate.',
  },
  {
    icon: SquareTerminal,
    title: 'For technical leaders',
    body: 'Ops keeps asking you to "just check" if last night\'s sync ran clean. You SSH in, run the same SQL, dump CSVs, diff in a spreadsheet. The query lives in your head and nowhere else.',
    prompts: [
      "Did last night's sync drop any orders?",
      'Which customers exist twice between systems?',
      'Which records changed in both systems before they synced?',
    ],
    answer: 'Sources, schemas, primary IDs, and result evidence are saved as one run, so ops can rerun the check without pulling you into Slack.',
  },
] as const

const faqItems = [
  {
    question: 'What does Darpan do?',
    answer: 'Darpan compares records across two systems and returns the rows that are matched, missing in source, or have a value mismatch, along with the evidence behind each call.',
  },
  {
    question: 'Which systems can Darpan compare?',
    answer: 'Anything that can be reached by API, SFTP, or file upload and mapped to a primary ID. Current connections include Shopify, NetSuite, and HotWax, plus generic SFTP and REST sources.',
  },
  {
    question: 'What does a run return?',
    answer: 'Counts by category (Matched, Missing in source, Value mismatch, Processing error), per-record evidence, generated output files, and the saved setup that produced the result.',
  },
  {
    question: 'Does Darpan change data in our systems?',
    answer: 'No. Darpan is read-only against your source systems. It surfaces the mismatch list; your team decides what to correct at the source.',
  },
  {
    question: 'How is our data handled?',
    answer: 'Each customer runs in their own tenant. Access is scoped to that tenant context, source credentials are stored as connection records, and runs preserve evidence for review and rerun. Darpan is in invite-only pilot. Security questions can be sent to hello@drpn.ai.',
  },
  {
    question: 'Who uses Darpan?',
    answer: 'Operators, finance teams, and technical leaders who are still reconciling commerce, ERP, and warehouse data by hand when it should be a saved run.',
  },
  {
    question: 'How do teams start?',
    answer: 'Pick one recurring comparison you still check by hand. Save its sources, schema, and primary IDs as a run, then schedule it. Pilot access is invite-only today. Request access from the contact section below.',
  },
] as const

function Home() {
  useScrollReveal()

  return (
    <main className="site-shell">
      <SiteHeader />
      <HeroSection />
      <UseCasesSection />
      <ProductSection />
      <RunModelSection />
      <SystemsSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}

function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('reveal-enabled')
      return
    }

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          '.section-heading',
          '.use-case-panel',
          '.product-panel',
          '.run-model-copy',
          '.run-flow-step',
          '.systems-section .section-heading',
          '.run-artifact',
          '.faq-item',
          '.contact-section > *',
          '.footer-links',
          '.footer-wordmark',
          '.site-footer > p',
          '.example-stats',
        ].join(', ')
      )
    )

    document.documentElement.classList.add('reveal-enabled')

    revealTargets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 70}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -14%',
        threshold: 0.12,
      }
    )

    revealTargets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-enabled')
      revealTargets.forEach((target) => {
        target.classList.remove('is-visible')
        target.style.removeProperty('--reveal-delay')
      })
    }
  }, [])
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

type TypingPhase = 'holding' | 'deleting' | 'typing'

const questionTypingTiming = {
  hold: 3300,
  type: 78,
  delete: 54,
  deleteStep: 1,
}

function TypedQuestion({
  questions,
  delayOffset = 0,
  active = true,
}: {
  questions: readonly string[]
  delayOffset?: number
  active?: boolean
}) {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [visibleLength, setVisibleLength] = useState(questions[0]?.length ?? 0)
  const [phase, setPhase] = useState<TypingPhase>('holding')

  const activeQuestion = questions[questionIndex] ?? ''
  const visibleQuestion = activeQuestion.slice(0, visibleLength)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !active || questions.length <= 1) {
      return
    }

    const timeout = window.setTimeout(() => {
      if (phase === 'holding') {
        setPhase('deleting')
        return
      }

      if (phase === 'deleting') {
        if (visibleLength > 0) {
          setVisibleLength((length) => Math.max(0, length - questionTypingTiming.deleteStep))
          return
        }

        setQuestionIndex((index) => (index + 1) % questions.length)
        setPhase('typing')
        return
      }

      if (visibleLength < activeQuestion.length) {
        setVisibleLength((length) => Math.min(activeQuestion.length, length + 1))
        return
      }

      setPhase('holding')
    }, phase === 'holding' ? questionTypingTiming.hold + delayOffset : phase === 'deleting' ? questionTypingTiming.delete : questionTypingTiming.type)

    return () => window.clearTimeout(timeout)
  }, [activeQuestion, active, delayOffset, phase, questions, visibleLength])

  return (
    <span className="typed-question" aria-label={activeQuestion}>
      <span className="typed-question-text">{visibleQuestion}</span>
      <span className="typed-question-cursor" aria-hidden />
    </span>
  )
}

function SiteHeader() {
  return (
    <header className="site-header" aria-label="Darpan marketing navigation">
      <a className="brand-link" href="/" aria-label="Darpan home">
        <img src="/darpan-mark.svg" alt="" className="brand-mark" />
        <span>Darpan</span>
      </a>

      <nav className="site-nav" aria-label="Page sections">
        {navItems.map(([label, href]) => (
          <a className="line-link" href={href} key={label}>
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <a className="line-link header-contact" href="https://darpan-app.hotwax.io">
        <span>Open Darpan</span>
      </a>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background" aria-hidden>
        <span className="mirror-stage" />
        <span className="mirror-horizon" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <span className="hero-kicker">
            <Sparkles size={13} aria-hidden />
            Darpan · Sanskrit for mirror
          </span>
          <h1>Spot the difference.</h1>
          <p>
            Darpan is a reconciliation workspace for teams moving too fast for
            manual checking. It returns every record that's missing, different,
            or out of sync, with the evidence behind each call.
          </p>
          <div className="hero-actions">
            <a className="pill-action pill-action--solid" href="#contact">
              Request pilot access
              <ArrowRight size={15} aria-hidden />
            </a>
            <a className="pill-action" href="https://docs.drpn.ai">
              Read the docs
            </a>
          </div>
          <ExampleStats />
        </div>

        <RunResultPreview />
      </div>
    </section>
  )
}

function ExampleStats() {
  return (
    <dl className="example-stats" aria-label="Example reconciliation run metrics">
      {exampleStats.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function RunResultPreview() {
  return (
    <article className="app-preview" aria-label="Darpan saved run result preview">
      <header className="app-preview-header">
        <div>
          <span>Saved run</span>
          <h2>Shopify ↔ NetSuite · March 2026 orders</h2>
        </div>
        <button type="button" aria-label="Open run result">
          <Play size={16} aria-hidden />
        </button>
      </header>

      <section className="app-preview-source" aria-label="Run source details">
        <div>
          <span>Status</span>
          <strong>Completed</strong>
        </div>
        <div className="app-preview-files">
          {previewSourceFiles.map(([label, fileName, size]) => (
            <p key={fileName}>
              <span>{label}</span>
              <strong>{fileName}</strong>
              <span className="app-preview-files-size">{size}</span>
            </p>
          ))}
        </div>
      </section>

      <div className="app-preview-buckets" aria-label="Difference summary">
        {previewBuckets.map(([label, count]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{count}</strong>
          </div>
        ))}
      </div>

      <div className="app-preview-table" aria-label="Generated output rows">
        <div className="app-preview-table-head">
          <span>Record ID</span>
          <span>Classification</span>
          <span>Evidence</span>
        </div>
        {previewRows.map(([recordId, classification, evidence]) => (
          <div className="app-preview-table-row" key={recordId}>
            <span>{recordId}</span>
            <span>{classification}</span>
            <span>{evidence}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

function SectionCue({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-cue" aria-label={`${label} section ${number}`}>
      <span>{number}</span>
      <strong>{label}</strong>
    </div>
  )
}

function UseCasesSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section id="use-cases" ref={ref} className="page-section use-cases-section">
      <div className="section-heading">
        <SectionCue number="01" label="Teams" />
        <h2>Different teams. One mismatch list.</h2>
      </div>

      <div className="use-case-stack">
        {useCases.map((item, index) => (
          <article className="use-case-panel" key={item.title}>
            <div className="use-case-copy">
              <item.icon size={24} aria-hidden />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>

            <div className="use-case-window">
              <header>
                <span>Ask Darpan</span>
                <button type="button" aria-label={`Open ${item.title} run preview`}>
                  <Play size={16} aria-hidden />
                </button>
              </header>
              <div className="use-case-prompt">
                <TypedQuestion
                  questions={item.prompts}
                  delayOffset={index * 240}
                  active={inView}
                />
              </div>
              <p>{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProductSection() {
  return (
    <section id="product" className="page-section product-section">
      <div className="section-heading">
        <SectionCue number="02" label="Product" />
        <h2>What every run gives you back.</h2>
      </div>

      <div className="product-panels">
        {productCards.map((item) => (
          <article className="product-panel" key={item.title}>
            <div className="product-panel-meta" aria-hidden>
              <div>
                <item.icon size={44} />
              </div>
            </div>
            <div className="product-panel-copy">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
            <a className="inline-action" href="#workflow">
              {item.action}
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function RunModelSection() {
  return (
    <section id="workflow" className="page-section run-model-section">
      <div className="run-model-copy">
        <SectionCue number="03" label="Workflow" />
        <h2>How a run works.</h2>
        <p>
          A saved run is one repeatable reconciliation: sources, schema, primary
          IDs, optional RuleSet, and the generated output that proves the result.
        </p>
      </div>

      <div className="run-flow">
        {runSteps.map((item, index) => (
          <article className="run-flow-step" key={item.step}>
            <span>Step {String(index + 1).padStart(2, '0')}</span>
            <h3>{item.step}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SystemsSection() {
  return (
    <section id="systems" className="page-section systems-section">
      <div className="section-heading">
        <SectionCue number="04" label="Systems" />
        <h2>Use the systems your team already has.</h2>
      </div>

      <div className="system-stage" aria-label="Darpan source systems and run artifacts">
        <div className="system-list">
          {systems.map((system) => (
            <span key={system}>{system}</span>
          ))}
        </div>
        <RunArtifactPreview />
      </div>
    </section>
  )
}

function RunArtifactPreview() {
  return (
    <article className="run-artifact">
      <header>
        <div>
          <span>Saved run</span>
          <h3>Daily orders reconciliation</h3>
        </div>
        <button type="button" aria-label="Open run result">
          <Play size={18} aria-hidden />
        </button>
      </header>

      <div className="run-artifact-grid">
        <div>
          <span>Result</span>
          <strong>Succeeded</strong>
        </div>
        <div>
          <span>Differences</span>
          <strong>43</strong>
        </div>
        <div>
          <span>Primary ID</span>
          <strong>order_number</strong>
        </div>
        <div>
          <span>Output</span>
          <strong>1 file</strong>
        </div>
      </div>

      <ol>
        <li>
          <History size={16} aria-hidden />
          Saved runs keep schema, IDs, and result evidence together.
        </li>
        <li>
          <KeyRound size={16} aria-hidden />
          Matching is keyed on the primary IDs your team already trusts.
        </li>
        <li>
          <Workflow size={16} aria-hidden />
          Automations rerun the same comparison on a schedule.
        </li>
      </ol>
    </article>
  )
}

function FaqSection() {
  return (
    <section id="faq" className="page-section faq-section">
      <div className="section-heading">
        <SectionCue number="05" label="FAQ" />
        <h2>Basic questions, straight answers.</h2>
      </div>

      <div className="faq-list">
        {faqItems.map((item, index) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span className="faq-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="faq-question">{item.question}</span>
              <span className="faq-toggle" aria-hidden>
                <ChevronDown size={18} />
              </span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>

      <p className="faq-footnote">
        <ShieldCheck size={15} aria-hidden />
        Darpan is in invite-only pilot.{' '}
        <a href="#contact" className="inline-link">
          Request access
          <ArrowUpRight size={13} aria-hidden />
        </a>
      </p>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <h2>Start with the reconciliation you still check by hand.</h2>
        <p>
          Pilot access is invite-only. Tell us about one comparison you would run
          weekly if it were saved, and we will get back with next steps.
        </p>
      </div>
      <div className="contact-actions">
        <a
          className="pill-action pill-action--solid"
          href="mailto:hello@drpn.ai?subject=Darpan%20pilot%20access&body=Comparison%20I%20still%20run%20by%20hand%3A%0A%0ASource%20systems%3A%0A%0AFrequency%3A%0A%0ATeam%3A%0A"
        >
          Request pilot access
          <ArrowRight size={17} aria-hidden />
        </a>
        <a className="pill-action" href="https://docs.drpn.ai">
          Read the docs
        </a>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a className="line-link" href="https://docs.drpn.ai">
          <span>Docs</span>
        </a>
        <a className="line-link" href="https://darpan-app.hotwax.io">
          <span>Open Darpan</span>
        </a>
        <a className="line-link" href="mailto:hello@drpn.ai">
          <span>Contact</span>
        </a>
      </div>

      <div className="footer-wordmark" aria-hidden>
        <img src="/darpan-mark.svg" alt="" />
        <span>Darpan</span>
      </div>

      <p>© {new Date().getFullYear()} Darpan. All rights reserved.</p>
    </footer>
  )
}
