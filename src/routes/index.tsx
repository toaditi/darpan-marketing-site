import { createFileRoute } from '@tanstack/react-router'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  ArrowRight,
  BellRing,
  Braces,
  Check,
  Clock3,
  Database,
  Layers3,
  Search,
  ShieldCheck,
  Shuffle,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const highlights = [
  {
    icon: Database,
    title: 'Connect every source that matters',
    description:
      'Reuse SFTP, NetSuite, Shopify, HotWax, and provider settings across reconciliation flows instead of rebuilding setup for each run.',
  },
  {
    icon: Braces,
    title: 'Make schemas operational',
    description:
      'Describe files and records before comparison starts, then keep schema decisions visible when results need review.',
  },
  {
    icon: Shuffle,
    title: 'Run comparisons with context',
    description:
      'Save source, schema, primary-key, and RuleSet choices so repeat runs stay stable, explainable, and ready for automation.',
  },
  {
    icon: ShieldCheck,
    title: 'Explain every variance',
    description:
      'Preserve generated output so teams can classify differences as source data, schema selection, rule behavior, or expected business variance.',
  },
]

const workflow = [
  'Choose tenant environment',
  'Confirm source setup',
  'Create the run',
  'Apply RuleSets',
  'Review output',
]

const testimonials = [
  {
    quote:
      'Darpan gave merchandising and operations a shared place to discuss mismatches without pulling engineering into every investigation.',
    name: 'Mira Shah',
    role: 'Director of Marketplace Operations',
  },
  {
    quote:
      'The saved-run model changed reconciliation from a one-off spreadsheet task into a repeatable control.',
    name: 'Rohan Mehta',
    role: 'Finance Systems Lead',
  },
  {
    quote:
      'Ask Darpan makes the product feel like a command center. People jump straight to runs, setup records, or result files.',
    name: 'Anika Rao',
    role: 'Retail Technology Consultant',
  },
]

function encodeForm(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e8] text-[#171714]">
      <Hero />
      <FeatureHighlights />
      <WorkflowSection />
      <Testimonials />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] border-b border-black/10 px-5 py-5 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(245,241,232,0.94)_0%,rgba(245,241,232,0.78)_42%,rgba(208,96,53,0.10)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[calc(92vh-2.5rem)] max-w-7xl flex-col">
        <nav className="flex items-center justify-between gap-6 py-3">
          <a href="/" aria-label="Darpan home">
            <img
              src="/darpan-wordmark.svg"
              alt="Darpan"
              className="h-9 w-auto"
            />
          </a>
          <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-[#4d4a42] md:flex">
            <a className="transition hover:text-[#171714]" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#171714]" href="#workflow">
              Workflow
            </a>
            <a className="transition hover:text-[#171714]" href="#newsletter">
              Updates
            </a>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-[#171714] bg-[#171714] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#f7f1e3] shadow-[4px_4px_0_rgba(23,23,20,0.18)] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(23,23,20,0.18)] focus:outline-none focus:ring-2 focus:ring-[#d06035]"
          >
            Request access
            <ArrowRight size={14} />
          </a>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[0.94fr_1.06fr] lg:py-10">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[#676156]">
              <Sparkles size={14} />
              Reconciliation workspace
            </p>
            <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-normal text-[#171714] sm:text-7xl lg:text-[6.8rem]">
              Every mismatch deserves a trail.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#4d4a42]">
              Darpan connects source systems, describes source data with
              schemas, runs comparisons, applies RuleSets, and keeps the output
              teams need to explain each difference.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d06035] px-6 py-4 font-mono text-sm uppercase tracking-[0.16em] text-white shadow-[6px_6px_0_rgba(23,23,20,0.18)] transition hover:-translate-y-0.5 hover:bg-[#b74f2b] focus:outline-none focus:ring-2 focus:ring-[#171714]"
              >
                Plan a pilot
                <ArrowRight size={18} />
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-4 font-mono text-sm uppercase tracking-[0.16em] text-[#171714] transition hover:border-[#171714] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#d06035]"
              >
                See the flow
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-28 w-28 rotate-6 border border-[#d06035]/50 bg-[#e5c75f]/60 lg:block" />
            <div className="relative rounded-[2rem] border border-black/10 bg-[#171714] p-3 shadow-[18px_22px_0_rgba(23,23,20,0.13)]">
              <img
                src="/darpan-hero-light.png"
                alt="Darpan product interface showing reconciliation documentation"
                className="aspect-[1.28] w-full rounded-[1.35rem] object-cover"
              />
              <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-black/10 bg-[#fbf7ee] p-4 shadow-xl sm:left-auto sm:w-72">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#676156]">
                    Run status
                  </span>
                  <span className="rounded-full bg-[#dfead5] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#416035]">
                    Review ready
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <Metric value="4,812" label="Records" />
                  <Metric value="73" label="Diffs" />
                  <Metric value="18" label="Rules" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white/70 p-3">
      <p className="font-mono text-sm font-semibold text-[#171714]">{value}</p>
      <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#676156]">
        {label}
      </p>
    </div>
  )
}

function FeatureHighlights() {
  return (
    <section id="features" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d06035]">
              Feature highlights
            </p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none text-[#171714] sm:text-6xl">
              Built for the work after the import.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-72 border border-black/10 bg-white/55 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white ${
                  index === 1 ? 'md:mt-10' : ''
                } ${index === 2 ? 'md:-mt-4' : ''}`}
              >
                <item.icon className="mb-10 text-[#d06035]" size={30} />
                <h3 className="text-2xl font-semibold text-[#171714]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5f5a50]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="border-y border-black/10 bg-[#171714] px-5 py-24 text-[#f7f1e3] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e5c75f]">
              Run path
            </p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none sm:text-6xl">
              From setup records to explainable output.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8d0bf]">
              Darpan treats connections, schemas, RuleSets, saved runs, and
              generated files as one operating model, not scattered admin work.
            </p>
          </div>

          <div className="grid gap-5">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border border-white/12 bg-white/[0.04] p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5c75f] font-mono text-sm font-semibold text-[#171714]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-xl font-semibold">{step}</p>
                <Check className="text-[#e5c75f]" size={22} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <Signal icon={Search} label="Ask Darpan" value="Search-first navigation" />
          <Signal icon={Clock3} label="Automation" value="Scheduled or manual runs" />
          <Signal icon={BellRing} label="Notifications" value="Completion alerts by tenant" />
        </div>
      </div>
    </section>
  )
}

function Signal({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Search
  label: string
  value: string
}) {
  return (
    <div className="border border-white/12 bg-white/[0.04] p-5">
      <Icon className="text-[#e5c75f]" size={24} />
      <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-[#bcb39d]">
        {label}
      </p>
      <p className="mt-2 text-xl font-semibold">{value}</p>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d06035]">
              Field notes
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl font-semibold leading-none text-[#171714] sm:text-6xl">
              Teams stop arguing over spreadsheets.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#5f5a50]">
            Darpan gives operations, finance, and technical teams the same
            record of what ran, what changed, and what should happen next.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex min-h-80 flex-col justify-between border border-black/10 bg-[#fbf7ee] p-7"
            >
              <blockquote className="text-2xl leading-9 text-[#2a2925]">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-10">
                <p className="font-semibold text-[#171714]">
                  {testimonial.name}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-[#676156]">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section id="cta" className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border border-black/10 bg-[#d06035] p-8 text-white shadow-[14px_14px_0_rgba(23,23,20,0.13)] md:grid-cols-[1fr_auto] md:items-center md:p-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/75">
            Pilot-ready
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-none sm:text-6xl">
            Put reconciliation runs on rails before the next close.
          </h2>
        </div>
        <a
          href="mailto:hello@darpan.app?subject=Darpan%20pilot%20request"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#171714] px-7 py-4 font-mono text-sm uppercase tracking-[0.16em] text-[#f7f1e3] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Start a conversation
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}

function SiteFooter() {
  const [fields, setFields] = useState({
    email: '',
    role: 'Operations',
    'bot-field': '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFields((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': 'newsletter',
          ...fields,
        }),
      })

      if (!response.ok) {
        throw new Error('Newsletter signup failed')
      }

      setStatus('success')
      setFields({ email: '', role: 'Operations', 'bot-field': '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer
      id="newsletter"
      className="border-t border-black/10 px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <img
            src="/darpan-wordmark.svg"
            alt="Darpan"
            className="h-10 w-auto"
          />
          <p className="mt-6 max-w-md text-lg leading-8 text-[#5f5a50]">
            Product notes for teams turning reconciliation from a manual
            recovery exercise into a repeatable operating rhythm.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#676156]">
            <span className="inline-flex items-center gap-2">
              <Layers3 size={14} />
              Schemas
            </span>
            <span className="inline-flex items-center gap-2">
              <Shuffle size={14} />
              RuleSets
            </span>
            <span className="inline-flex items-center gap-2">
              <Search size={14} />
              Ask Darpan
            </span>
          </div>
        </div>

        <div className="border border-black/10 bg-[#fbf7ee] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d06035]">
            Newsletter
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#171714]">
            Get reconciliation playbooks and release notes.
          </h2>
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mt-6 grid gap-3 sm:grid-cols-[1fr_13rem_auto]"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>
                Do not fill this out:
                <input
                  name="bot-field"
                  value={fields['bot-field']}
                  onChange={handleChange}
                />
              </label>
            </p>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="ops@example.com"
              value={fields.email}
              onChange={handleChange}
              className="min-h-14 w-full border border-black/15 bg-white px-4 text-base text-[#171714] outline-none transition placeholder:text-[#8c8578] focus:border-[#d06035] focus:ring-2 focus:ring-[#d06035]/20"
            />
            <label className="sr-only" htmlFor="newsletter-role">
              Role
            </label>
            <select
              id="newsletter-role"
              name="role"
              value={fields.role}
              onChange={handleChange}
              className="min-h-14 w-full border border-black/15 bg-white px-4 text-base text-[#171714] outline-none transition focus:border-[#d06035] focus:ring-2 focus:ring-[#d06035]/20"
            >
              <option>Operations</option>
              <option>Finance</option>
              <option>Engineering</option>
              <option>Product</option>
            </select>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex min-h-14 items-center justify-center rounded-none bg-[#171714] px-6 font-mono text-xs uppercase tracking-[0.16em] text-[#f7f1e3] transition hover:bg-[#2b2924] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending' : 'Sign up'}
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-sm font-medium text-[#416035]">
              Thanks. Product updates will arrive at the address provided.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm font-medium text-[#9b3327]">
              The signup did not go through. Please try again.
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-black/10 pt-6 font-mono text-xs uppercase tracking-[0.16em] text-[#676156] sm:flex-row">
        <p>&copy; 2026 Darpan. All rights reserved.</p>
        <p>Reconciliation, explained.</p>
      </div>
    </footer>
  )
}
