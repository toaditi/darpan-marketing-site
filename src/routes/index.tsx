import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  ChevronDown,
  Database,
  FileText,
  GitCompareArrows,
  History,
  Play,
  SquareTerminal,
  Workflow,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const navItems = [
  ['Product', '#product'],
  ['Workflow', '#run-model'],
  ['Systems', '#systems'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
] as const

const productCards = [
  {
    number: '01',
    icon: Database,
    title: 'Source setup',
    body: 'Select the systems, files, or APIs that should agree.',
    action: 'Choose sources',
  },
  {
    number: '02',
    icon: Braces,
    title: 'Field mapping',
    body: 'Match records by the IDs and fields your team trusts.',
    action: 'Map fields',
  },
  {
    number: '03',
    icon: GitCompareArrows,
    title: 'Mismatch review',
    body: 'Review missing rows, changed values, and status differences.',
    action: 'Review mismatches',
  },
]

const runSteps = [
  {
    step: 'Connect',
    detail: 'Select the two sources to reconcile.',
  },
  {
    step: 'Map',
    detail: 'Define the fields that identify and describe each record.',
  },
  {
    step: 'Compare',
    detail: 'Run the reconciliation and separate matches from mismatches.',
  },
  {
    step: 'Review',
    detail: 'Open the counts, mismatch list, and output files.',
  },
]

const systems = [
  'ERP',
  'Commerce',
  'Operations',
  'Warehouse',
  'Files',
  'APIs',
]

const previewSourceFiles = [
  ['Shopify', 'Source A'],
  ['NetSuite', 'Source B'],
] as const

const previewBuckets = [
  ['Only in Shopify', '14'],
  ['Only in NetSuite', '8'],
  ['Different values', '21'],
] as const

const previewRows = [
  ['REC-001', 'Value mismatch', 'field changed'],
  ['REC-002', 'Missing in NetSuite', 'present in Shopify'],
  ['REC-003', 'Missing in Shopify', 'present in NetSuite'],
] as const

const useCases = [
  {
    number: '01',
    icon: Workflow,
    title: 'For operators',
    body: 'Catch pending orders that cannot move to fulfillment because Shopify and NetSuite do not agree.',
    prompts: [
      'Which pending orders are blocked from fulfillment?',
      'Which Shopify orders are missing in NetSuite?',
      'Which orders changed status before fulfillment?',
    ],
    answer: 'Darpan shows the orders missing or different between Shopify and NetSuite so the team knows what must sync before fulfillment moves.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'For finance teams',
    body: 'During monthly close, check that Shopify and NetSuite agree before finance locks the books.',
    prompts: [
      'What needs to sync before month-end close?',
      'Which revenue records disagree before close?',
      'Which NetSuite lines do not match Shopify?',
    ],
    answer: 'Darpan shows the missing or different records so finance can clear the mismatch list before closing the month.',
  },
  {
    number: '03',
    icon: SquareTerminal,
    title: 'For technical leaders',
    body: 'Replace one-off scripts and spreadsheets with a repeatable comparison your team can reopen.',
    prompts: [
      'Where is the reconciliation logic defined?',
      'Which saved run produced this output?',
      'What changed since the last comparison?',
    ],
    answer: 'Sources, field mapping, and run output stay together.',
  },
] as const

const faqItems = [
  {
    question: 'What does Darpan do?',
    answer: 'Darpan compares records across two systems and shows the rows that are missing, different, or out of sync.',
  },
  {
    question: 'Which systems can Darpan compare?',
    answer: 'Darpan can compare commerce, ERP, operations, warehouse, file, and API data as long as the records can be mapped to a shared identifier.',
  },
  {
    question: 'What does a run return?',
    answer: 'A run returns counts, classifications, evidence, history, and output files so the team can review exactly what changed.',
  },
  {
    question: 'Does Darpan change data in our systems?',
    answer: 'No. Darpan highlights mismatches first. Your team decides what should be corrected in the source systems.',
  },
  {
    question: 'Who uses Darpan?',
    answer: 'Operators, finance teams, and technical leaders use Darpan when manual reconciliation is slowing down fulfillment, close, or reporting work.',
  },
  {
    question: 'How do teams start?',
    answer: 'Start with one recurring comparison: choose two sources, map the trusted fields, run the reconciliation, and review the mismatch list.',
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
}: {
  questions: readonly string[]
  delayOffset?: number
}) {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [visibleLength, setVisibleLength] = useState(questions[0]?.length ?? 0)
  const [phase, setPhase] = useState<TypingPhase>('holding')

  const activeQuestion = questions[questionIndex] ?? ''
  const visibleQuestion = activeQuestion.slice(0, visibleLength)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || questions.length <= 1) {
      setQuestionIndex(0)
      setVisibleLength(questions[0]?.length ?? 0)
      setPhase('holding')
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
  }, [activeQuestion, delayOffset, phase, questions, visibleLength])

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
      <div className="hero-background" aria-hidden />

      <div className="hero-content">
        <div className="hero-copy">
          <h1>See where your systems disagree.</h1>
          <p>
            Darpan is for teams moving too fast for manual reconciliation. It
            compares records across systems and returns the rows that are
            missing, different, or out of sync.
          </p>
          <div className="hero-actions">
            <a className="pill-action pill-action--solid" href="mailto:hello@drpn.ai?subject=Darpan%20demo">
              Start with a run
            </a>
            <a className="pill-action" href="https://docs.drpn.ai">
              Read docs
            </a>
          </div>
        </div>

        <RunResultPreview />
      </div>
    </section>
  )
}

function RunResultPreview() {
  return (
    <article className="app-preview" aria-label="Darpan saved run result preview">
      <header className="app-preview-header">
        <div>
          <span>Example run</span>
          <h2>Shopify / NetSuite</h2>
        </div>
        <button type="button" aria-label="Open run result">
          <Play size={16} aria-hidden />
        </button>
      </header>

      <section className="app-preview-source" aria-label="Run source details">
        <div>
          <span>Saved run</span>
          <strong>Completed with output</strong>
        </div>
        <div className="app-preview-files">
          {previewSourceFiles.map(([label, fileName]) => (
            <p key={fileName}>
              <span>{label}</span>
              <strong>{fileName}</strong>
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
  return (
    <section id="use-cases" className="page-section use-cases-section">
      <div className="section-heading">
        <SectionCue number="01" label="Teams" />
        <h2>Different teams. One mismatch list.</h2>
      </div>

      <div className="use-case-stack">
        {useCases.map((item, index) => (
          <article className="use-case-panel" key={item.title}>
            <div className="use-case-copy">
              <span className="item-cue">Role {item.number}</span>
              <item.icon size={24} aria-hidden />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>

            <div className="use-case-window">
              <header>
                <span>Run review</span>
                <button type="button" aria-label={`Open ${item.title} run preview`}>
                  <Play size={16} aria-hidden />
                </button>
              </header>
              <div className="use-case-prompt">
                <TypedQuestion questions={item.prompts} delayOffset={index * 420} />
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
        <h2>What Darpan checks.</h2>
      </div>

      <div className="product-panels">
        {productCards.map((item) => (
          <article className="product-panel" key={item.title}>
            <div className="product-panel-meta" aria-hidden>
              <span>Check {item.number}</span>
              <div>
                <item.icon size={44} />
              </div>
            </div>
            <div className="product-panel-copy">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
            <a className="inline-action" href="#run-model">
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
    <section id="run-model" className="page-section run-model-section">
      <div className="run-model-copy">
        <SectionCue number="03" label="Workflow" />
        <h2>How a run works.</h2>
        <p>
          A run is one repeatable reconciliation: sources, mapping, comparison,
          and output.
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
          <span>Saved Run</span>
          <h3>Recurring reconciliation</h3>
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
          <span>Match rule</span>
          <strong>Record comparison</strong>
        </div>
        <div>
          <span>Output</span>
          <strong>3 files</strong>
        </div>
      </div>

      <ol>
        <li>
          <History size={16} aria-hidden />
          Completed runs keep setup and result together.
        </li>
        <li>
          <FileText size={16} aria-hidden />
          Output files list the records to review.
        </li>
        <li>
          <Workflow size={16} aria-hidden />
          Scheduled runs repeat the same comparison.
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
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <h2>Start with the reconciliation you still check by hand.</h2>
        <p>
          Pick one pair of systems. Define what should match. Review the first
          mismatch list.
        </p>
      </div>
      <div className="contact-actions">
        <a className="pill-action pill-action--solid" href="mailto:hello@drpn.ai?subject=Darpan%20marketing%20site%20inquiry">
          Schedule a walkthrough
          <ArrowRight size={17} aria-hidden />
        </a>
        <a className="pill-action" href="https://darpan-app.hotwax.io">
          Open Darpan
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

      <p>
        Copyright 2026.
      </p>
    </footer>
  )
}
