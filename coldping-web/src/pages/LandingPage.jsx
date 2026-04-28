import { ArrowRight, CheckCircle2, Code2, Gauge, LockKeyhole, PlayCircle, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import PublicFooter from '../components/layout/PublicFooter'
import { contacts } from '../data/mockData'

const logoStrip = ['OpenAI Labs', 'RampDesk', 'TalentForge', 'HireGrid', 'ScaleOps', 'RecruitOS']

const workflowSteps = [
  {
    step: '01',
    title: 'Define target signal',
    body: 'Choose company patterns, role bands, and intent filters so outreach starts with fit, not guesswork.',
  },
  {
    step: '02',
    title: 'Enrich and personalize',
    body: 'Add verified contact data and generate context-rich drafts that sound like a human wrote them.',
  },
  {
    step: '03',
    title: 'Run and optimize loops',
    body: 'Track replies, improve templates, and tighten your pipeline every cycle using live campaign feedback.',
  },
]

const integrationBlocks = [
  {
    title: 'Data sources',
    items: ['Crustdata company search', 'LinkedIn profile signals', 'CSV import and merge'],
  },
  {
    title: 'Activation tools',
    items: ['Gmail workflows', 'Template libraries', 'One-click copy sequences'],
  },
  {
    title: 'Team systems',
    items: ['Slack notifications', 'Webhook actions', 'CRM sync-ready exports'],
  },
]

const testimonials = [
  {
    quote: 'ColdPing replaced three tools in our outreach stack and cut campaign setup from hours to minutes.',
    name: 'Aanya Mehta',
    role: 'Growth Lead, TalentForge',
  },
  {
    quote: 'Our response quality improved because drafts finally reflected role context instead of generic templates.',
    name: 'Marcus Lee',
    role: 'Operator, RampDesk',
  },
  {
    quote: 'The live dashboard made weekly optimization obvious. We stopped guessing and started iterating with data.',
    name: 'Ishan Roy',
    role: 'Founder, HireGrid',
  },
]

const faqs = [
  {
    question: 'Is this built for individual operators or teams?',
    answer: 'Both. Solo operators can run fast campaigns, and teams can standardize messaging and workflow quality.',
  },
  {
    question: 'Can I bring my own messaging templates?',
    answer: 'Yes. You can import and adapt your existing outreach templates, then refine variants by role and campaign.',
  },
  {
    question: 'Do I need to change my current sending workflow?',
    answer: 'No. ColdPing can fit into your existing process while providing cleaner discovery, enrichment, and draft generation.',
  },
]

const benchmarkStats = [
  ['< 120ms', 'Draft generation first-token latency'],
  ['99.99%', 'Workspace uptime reliability'],
  ['50%+', 'Reduction in repetitive outreach work'],
  ['10x', 'Faster campaign launch for new roles'],
]

const platformModules = [
  {
    title: 'Scout',
    subtitle: 'Discovery module',
    points: ['High-intent role and company targeting', 'Signal-first lead qualification', 'Rapid shortlisting for campaigns'],
  },
  {
    title: 'Forge',
    subtitle: 'Draft intelligence module',
    points: ['Context-aware personalized messaging', 'Tone and objective controls', 'Reusable variants for role clusters'],
  },
  {
    title: 'Pulse',
    subtitle: 'Live monitoring module',
    points: ['Reply and conversion trend monitoring', 'Campaign-level health alerts', 'Iteration loop recommendations'],
  },
]

const securityItems = ['SOC 2-aligned controls', 'GDPR-ready data handling', 'Role-based access controls', 'Encrypted data at rest and in transit']

const industryUseCases = [
  ['Recruitment', 'Candidate outreach and role-specific personalization'],
  ['SaaS sales', 'Lead qualification and outbound pipeline acceleration'],
  ['Agencies', 'Multi-client campaign operations at scale'],
  ['Operations teams', 'Consistent messaging across high-volume workflows'],
]

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f3f0] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,rgba(255,136,0,0.4),rgba(245,158,11,0.5),rgba(255,136,0,0.4))]" />
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6">
          <p className="font-display text-2xl font-bold tracking-tight">ColdPing</p>
          <nav className="hidden items-center gap-1 md:flex">
            <Link to="/" className="rounded-xl px-4 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600">
              Home
            </Link>
            <Link to="/product" className="rounded-xl px-4 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600">
              Product
            </Link>
            <Link to="/pricing" className="rounded-xl px-4 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600">
              Pricing
            </Link>
            <Link to="/contact" className="rounded-xl px-4 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600">
              Contact
            </Link>
            <Link to="/about" className="rounded-xl px-4 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="secondary" className="hidden sm:inline-flex">Sign in</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-6 pb-16 pt-28">
        <section className="relative overflow-hidden py-20">
          <div className="scroll-text left-0 top-[12%]">COLDPING • OUTREACH • CRM</div>
          <div aria-hidden="true" className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-brand-100/70 blur-3xl animate-soft-pulse" />
          <div aria-hidden="true" className="absolute bottom-0 left-[-40px] h-56 w-56 rounded-full bg-mustard-100/60 blur-3xl animate-soft-pulse" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-20 h-[340px] w-[340px] opacity-10 animate-rotate-slow">
            <div className="h-full w-full rounded-full border-2 border-brand-500" />
          </div>
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-10 bg-[linear-gradient(90deg,transparent_0%,rgba(255,136,0,0.08)_20%,rgba(255,136,0,0.22)_50%,rgba(255,136,0,0.08)_80%,transparent_100%)]" />
          <div aria-hidden="true" className="absolute left-1/2 top-10 h-24 w-[680px] -translate-x-1/2 opacity-25">
            <svg viewBox="0 0 680 24" className="h-full w-full">
              <defs>
                <pattern id="hero-beads" x="0" y="0" width="34" height="24" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="12" x2="34" y2="12" stroke="#ff8800" strokeWidth="0.8" opacity="0.35" />
                  <circle cx="17" cy="12" r="1.4" fill="#ff8800" opacity="0.6" />
                  <path d="M0,12 L1.5,8.5 L3,12 L1.5,15.5 Z" fill="#f59e0b" opacity="0.45" />
                  <path d="M31,12 L32.5,8.5 L34,12 L32.5,15.5 Z" fill="#f59e0b" opacity="0.45" />
                </pattern>
              </defs>
              <rect width="100%" height="24" fill="url(#hero-beads)" />
            </svg>
          </div>

          <div className="animate-fade-in-left relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100 transition-transform duration-300 hover:scale-105">
                <Sparkles size={14} />
                Cold outreach operating system
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.04] md:text-6xl">
                Find better people and send outreach that gets real replies.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Crustdata search, enriched contacts, and personalized AI drafts in one intentional interface inspired by modern admin products.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/signup">
                  <Button className="gap-2 px-7 py-3 text-base hover-lift">
                    Start Free Trial
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Button variant="secondary" className="gap-2 px-7 py-3 text-base hover-lift">
                  <PlayCircle size={16} />
                  Watch Demo
                </Button>
              </div>
              <div className="grid gap-2 text-sm text-slate-600 md:max-w-xl">
                {[
                  'Auto-enrichment with email and LinkedIn links',
                  'AI personalized drafts from your resume context',
                  'Session-based mini CRM with status tracking',
                ].map((item) => (
                  <p key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-right relative z-10 hidden h-[560px] lg:block">
              <div
                className="animate-float-tilted absolute right-0 top-8 w-[360px] rounded-[1.75rem] border-2 border-slate-900 bg-white p-5 shadow-2xl shadow-slate-900/25 transition hover:-translate-y-1"
                style={{ transform: 'rotate(4deg)' }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold">Campaign Pulse</p>
                  <span className="rounded-full bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">Live</span>
                </div>
                <div className="space-y-2">
                  {[72, 94, 58, 87, 64].map((h, i) => (
                    <div key={h} className="flex items-end gap-2">
                      <div className="w-8 text-xs text-slate-400">D{i + 1}</div>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-blue-light-500" style={{ width: `${h}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="animate-float absolute bottom-0 left-0 w-[420px] overflow-hidden border-2 border-slate-900 shadow-[0_30px_70px_-36px_rgba(15,23,42,0.55)]" style={{ transform: 'rotate(-3deg)' }}>
                <CardContent className="p-0">
                  <div className="border-b border-slate-100 bg-slate-950 px-5 py-4 text-sm text-slate-100">
                    <p className="text-xs uppercase tracking-[0.18em] text-orange-200">Session Preview</p>
                    <p className="mt-1 text-base font-medium">Google HR Internship Push</p>
                  </div>
                  <div className="custom-scrollbar max-h-[320px] space-y-2 overflow-y-auto p-4">
                    {contacts.slice(0, 4).map((contact) => (
                      <div
                        key={contact.id}
                        className="grid grid-cols-[1.5fr_1.2fr_1fr] items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 text-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-sm"
                      >
                        <div>
                          <p className="font-medium text-slate-900">{contact.name}</p>
                          <p className="text-slate-500">{contact.role}</p>
                        </div>
                        <a className="truncate text-indigo-600 hover:text-indigo-500" href={contact.linkedin} target="_blank" rel="noreferrer">
                          LinkedIn profile
                        </a>
                        <p className="truncate text-slate-500">{contact.email}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative mx-auto mt-4 overflow-hidden py-20">
          <div className="scroll-text right-0 top-[10%]">PROOF • GROWTH • SPEED</div>
          <div aria-hidden="true" className="absolute bottom-[-70px] right-[-40px] h-48 w-48 rounded-full bg-blue-light-100/50 blur-3xl animate-soft-pulse" />
          <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border-2 border-slate-900 bg-white p-5 shadow-xl md:grid-cols-4">
            {[
              ['25k+', 'Operators using workflow products like this'],
              ['2.7x', 'Median reply uplift'],
              ['< 8 min', 'Average campaign setup'],
              ['99.9%', 'Reliable draft generation pipeline'],
            ].map(([value, label]) => (
              <div key={value} className="hover-lift rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center hover:border-brand-200 hover:bg-white">
                <p className="text-2xl font-bold text-slate-900">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text left-0 top-[9%]">TRUSTED • TEAMS • MOMENTUM</div>
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="text-center">
              <p className="section-kicker">Social Proof</p>
              <h2 className="font-display mt-2 text-4xl font-bold">Trusted by teams building repeatable outbound</h2>
            </div>

            <div className="grid gap-3 rounded-3xl border-2 border-slate-900 bg-white p-4 md:grid-cols-3 lg:grid-cols-6">
              {logoStrip.map((logo) => (
                <div key={logo} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 text-center text-xs font-semibold tracking-[0.08em] text-slate-700">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text left-0 top-[8%]">FEATURES • WORKFLOW • REVIEW</div>
          <div aria-hidden="true" className="absolute left-[-90px] top-20 h-56 w-56 rounded-full bg-brand-100/50 blur-3xl animate-soft-pulse" />
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="section-kicker">Core Features</p>
                <h2 className="font-display mt-2 text-4xl font-bold">Built for focused operators</h2>
              </div>
              <div className="hidden items-center gap-1 md:flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} className="fill-mustard-500 text-mustard-500" />
                ))}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ['Source Better Contacts', 'Filter by company and role, then enrich profiles with verified email and LinkedIn links.'],
                ['Generate Personal Outreach', 'Create role-aware drafts using your resume context and campaign-specific goals.'],
                ['Track Like a Mini CRM', 'Move contacts across statuses, review AI reasoning, and keep your pipeline clean.'],
                ['Review Session Insights', 'Understand what worked in each campaign and sharpen your next outreach loop.'],
                ['Template Blocks', 'Reuse proven intros and CTAs with lightweight edits per contact.'],
                ['Fast Manual Action', 'Open LinkedIn links, copy emails, and send from your preferred workflow.'],
              ].map(([title, body], idx) => (
                <Card
                  key={title}
                  className="hover-lift border-2 border-slate-900/90 hover:border-brand-500"
                  style={{ transform: `rotate(${idx % 2 === 0 ? '-0.6deg' : '0.6deg'})` }}
                >
                  <CardContent className="space-y-3">
                    <p className="text-base font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-600">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text right-0 top-[8%]">FLOW • AUTOMATION • OUTCOMES</div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="section-kicker">How It Works</p>
                <h2 className="font-display mt-2 text-4xl font-bold">Simple workflow, serious output</h2>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {workflowSteps.map((item, idx) => (
                <Card
                  key={item.step}
                  className="hover-lift border-2 border-slate-900/90"
                  style={{ transform: `rotate(${idx % 2 === 0 ? '-0.4deg' : '0.4deg'})` }}
                >
                  <CardContent className="space-y-3">
                    <div className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                      Step {item.step}
                    </div>
                    <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text left-0 top-[8%]">INTEGRATIONS • STACK • CONTROL</div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <p className="section-kicker">Works With Your Stack</p>
              <h2 className="font-display mt-2 text-4xl font-bold">Built to fit modern outreach operations</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {integrationBlocks.map((block) => (
                <Card key={block.title} className="border-2 border-slate-900/90 bg-white/90">
                  <CardContent className="space-y-4">
                    <p className="text-base font-semibold text-slate-900">{block.title}</p>
                    <div className="space-y-2">
                      {block.items.map((item) => (
                        <p key={item} className="inline-flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text right-0 top-[8%]">CUSTOMERS • STORIES • RESULTS</div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <p className="section-kicker">Customer Voices</p>
              <h2 className="font-display mt-2 text-4xl font-bold">Teams use ColdPing to move faster with better quality</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.name} className="border-2 border-slate-900/90 bg-white">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={14} className="fill-mustard-500 text-mustard-500" />
                      ))}
                    </div>
                    <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text left-0 top-[8%]">FAQ • CLARITY • DECISION</div>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="section-kicker">FAQs</p>
              <h2 className="font-display mt-2 text-4xl font-bold">Everything you need before starting</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white/70 p-5 transition hover:bg-white">
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text right-0 top-[8%]">SPEED • RELIABILITY • SCALE</div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <p className="section-kicker">Built To Scale</p>
              <h2 className="font-display mt-2 text-4xl font-bold">Production-grade performance for outbound teams</h2>
            </div>

            <div className="grid gap-4 rounded-3xl border-2 border-slate-900 bg-white p-5 md:grid-cols-2 lg:grid-cols-4">
              {benchmarkStats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center">
                  <p className="font-display text-3xl font-bold text-slate-900">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text left-0 top-[8%]">MODULES • PIPELINE • INTELLIGENCE</div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <p className="section-kicker">Platform Modules</p>
              <h2 className="font-display mt-2 text-4xl font-bold">Specialized systems that work together</h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {platformModules.map((module, idx) => (
                <Card key={module.title} className="border-2 border-slate-900/90 bg-white" style={{ transform: `rotate(${idx % 2 === 0 ? '-0.4deg' : '0.4deg'})` }}>
                  <CardContent className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                      <Gauge size={13} />
                      {module.subtitle}
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-slate-900">{module.title}</p>
                    </div>
                    <div className="space-y-2">
                      {module.points.map((point) => (
                        <p key={point} className="inline-flex items-start gap-2 text-sm leading-7 text-slate-600">
                          <CheckCircle2 size={14} className="mt-1 text-emerald-600" />
                          {point}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text right-0 top-[8%]">DEVELOPER • SDK • AUTOMATION</div>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-2 border-slate-900 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
              <CardContent className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100 ring-1 ring-white/20">
                  <Code2 size={13} />
                  For developers
                </div>
                <h3 className="font-display text-3xl font-bold">Automate campaigns with clean APIs and SDK workflows</h3>
                <p className="text-sm leading-7 text-slate-300">
                  Build custom campaign orchestration in Node and Python with simple primitives for drafting, enrichment, and reporting.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">Python SDK</Button>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">Node SDK</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-900/90 bg-white">
              <CardContent className="space-y-4">
                <p className="section-kicker">API Example</p>
                <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 text-xs leading-6 text-slate-100">
{`const payload = {
  campaignId: "<id>",
  contactId: "<id>",
  goal: "internship-outreach"
}

await client.drafts.generate(payload)
await client.campaigns.enqueue(payload)`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text left-0 top-[8%]">SECURITY • COMPLIANCE • ENTERPRISE</div>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <Card className="border-2 border-slate-900 bg-white/90">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                    <ShieldCheck size={13} />
                    Enterprise security
                  </div>
                  <h3 className="font-display text-3xl font-bold">Your outreach data stays secure and controlled</h3>
                  <div className="space-y-2">
                    {securityItems.map((item) => (
                      <p key={item} className="inline-flex items-start gap-2 text-sm text-slate-600">
                        <LockKeyhole size={14} className="mt-1 text-brand-600" />
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-900 bg-white">
                <CardContent className="space-y-4">
                  <p className="section-kicker">Powering Specialized Workflows</p>
                  <h3 className="font-display text-3xl font-bold">Used across multiple outreach-heavy industries</h3>
                  <div className="grid gap-3">
                    {industryUseCases.map(([name, detail]) => (
                      <div key={name} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                        <p className="text-sm font-semibold text-slate-900">{name}</p>
                        <p className="mt-1 text-xs text-slate-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative mx-auto overflow-hidden py-20">
          <div className="scroll-text right-0 top-[8%]">START • BUILD • SEND</div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-brand-50 via-[#f5f3f0] to-white opacity-100" />
          <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="h-[460px] w-[460px] rounded-full border-2 border-brand-500 animate-rotate-slow" />
          </div>
          <div className="relative mx-auto max-w-7xl rounded-[2rem] border-2 border-slate-900 bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white shadow-2xl md:p-10">
            <p className="section-kicker text-slate-300">Final CTA</p>
            <h2 className="font-display mt-3 text-4xl font-bold leading-tight">Ready to run cleaner outreach campaigns?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Move from contact discovery to personalized messaging in one coherent flow, with the same premium interaction language across all screens.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/signup">
                <Button className="hover-lift px-7 py-3">Start Free Trial</Button>
              </Link>
              <Button variant="secondary" className="hover-lift px-7 py-3">
                View Pricing
              </Button>
            </div>
          </div>
        </section>

        <PublicFooter />
      </main>
    </div>
  )
}
