import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

const faqs = [
  {
    question: 'What does Darpan reconcile?',
    answer:
      'Darpan is built for comparisons between source systems, files, and commerce platforms. Teams can configure reusable connections, schemas, primary identifiers, and RuleSets before running reconciliation.',
  },
  {
    question: 'How do teams navigate the workspace?',
    answer:
      'Ask Darpan is the search-first navigation surface. Users can jump to pages, setup records, saved runs, workflows, and generated outputs from one command-oriented entry point.',
  },
  {
    question: 'What happens after a run finishes?',
    answer:
      'Generated output is preserved for review. Teams can classify each difference as a source-data issue, schema-selection issue, rule behavior, or expected business variance.',
  },
  {
    question: 'Can Darpan support repeatable runs?',
    answer:
      'Yes. Saved reconciliation runs keep the source, schema, key, and rule choices stable so teams can rerun known comparisons and set up automations.',
  },
  {
    question: 'Which source systems are represented in the docs?',
    answer:
      'The documentation references SFTP, NetSuite, Shopify, HotWax, AI provider settings, schemas, RuleSets, saved runs, automations, and result review.',
  },
]

function FAQ() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] px-5 py-20 text-[#171714] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="font-mono text-xs uppercase tracking-[0.18em] text-[#d06035]"
        >
          Back to Darpan
        </a>
        <h1 className="mt-6 font-serif text-5xl font-semibold leading-none sm:text-6xl">
          Questions teams ask before the first run.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#5f5a50]">
          Darpan keeps reconciliation setup, execution, and review in one
          workspace so differences can be explained instead of reassembled from
          scattered artifacts.
        </p>
        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-black/10 bg-[#fbf7ee]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-5 p-5 text-left transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#d06035]"
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="px-5 pb-5 leading-7 text-[#5f5a50]">{answer}</div>}
    </div>
  )
}
