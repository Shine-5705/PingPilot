import { ArrowRight, CheckCircle2, Compass, Layers3, Sparkles, Target, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import PublicFooter from '../components/layout/PublicFooter'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

const principles = [
  {
    icon: Target,
    title: 'Signal over noise',
    body: 'Every workflow is built to surface high-intent leads and remove low-quality busy work from outreach teams.',
  },
  {
    icon: Layers3,
    title: 'One coherent system',
    body: 'Discovery, enrichment, drafting, and tracking should live in one place so teams stop context-switching across tools.',
  },
  {
    icon: Users,
    title: 'Human tone at scale',
    body: 'Automation should accelerate execution, not flatten personality. Messages stay context-aware and role-aware.',
  },
]

const milestones = [
  ['Foundation', 'Unified contact sourcing and campaign setup into a single flow.'],
  ['Data quality', 'Added email + LinkedIn enrichment with lightweight confidence cues.'],
  ['AI drafts', 'Shipped personalized message generation grounded in campaign context.'],
  ['Live workspace', 'Introduced real-time dashboard behaviors and activity updates.'],
]

const capabilities = [
  'Crustdata-powered company and role search',
  'Session-style CRM with status transitions',
  'Campaign-level live performance visibility',
  'Reusable outreach templates with personalization',
  'Collaboration-ready workflows for growing teams',
  'Custom enterprise onboarding path',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f3f0] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,rgba(255,136,0,0.4),rgba(245,158,11,0.5),rgba(255,136,0,0.4))]" />
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight">
            ColdPing
          </Link>
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
            <Link to="/about" className="rounded-xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600 ring-1 ring-brand-100">
              About
            </Link>
            <Link to="/contact" className="rounded-xl px-4 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="secondary" className="hidden sm:inline-flex">
                Sign in
              </Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-6 pb-16 pt-28">
        <section className="relative mx-auto max-w-7xl overflow-hidden py-16">
          <div className="scroll-text left-0 top-[8%]">ABOUT • OPERATING SYSTEM • WORKFLOW</div>
          <div aria-hidden="true" className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-brand-100/70 blur-3xl animate-soft-pulse" />
          <div aria-hidden="true" className="absolute bottom-0 left-[-40px] h-48 w-48 rounded-full bg-blue-light-100/70 blur-3xl animate-soft-pulse" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                <Sparkles size={14} />
                Why we built ColdPing
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.03] md:text-6xl">
                Built for teams that treat outreach like a craft.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                ColdPing started as a response to fragmented outbound stacks. We wanted one deliberate product where discovery,
                enrichment, writing, and follow-up all feel connected.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/product">
                  <Button className="gap-2 px-7 py-3 text-base">
                    Explore product
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" className="gap-2 px-7 py-3 text-base">
                    Talk to our team
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="animate-fade-in-right border-2 border-slate-900 shadow-[0_30px_70px_-36px_rgba(15,23,42,0.5)]">
              <CardContent className="space-y-4">
                <p className="section-kicker">Mission snapshot</p>
                <div className="grid gap-3 text-sm">
                  {[
                    ['Focus', 'High-signal outbound workflows'],
                    ['Approach', 'AI + clean operations, together'],
                    ['Customers', 'Founders, agencies, and hiring teams'],
                    ['North star', 'Quality replies, not volume spam'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                      <p className="text-slate-600">{label}</p>
                      <p className="font-semibold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
                  Product direction updated weekly with customer workflow feedback
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-14">
          <div className="mb-8">
            <p className="section-kicker">Principles</p>
            <h2 className="font-display mt-2 text-4xl font-bold">How we design every feature</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="hover-lift border-2 border-slate-900/90" style={{ transform: `rotate(${index % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}>
                  <CardContent className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      <Icon size={13} />
                      {item.title}
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Card className="border-2 border-slate-900 bg-white/80">
              <CardContent className="space-y-5">
                <p className="section-kicker">Milestones</p>
                <h3 className="font-display text-3xl font-bold">Product journey</h3>
                <div className="space-y-3">
                  {milestones.map(([title, body]) => (
                    <div key={title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{body}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-900 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
              <CardContent className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100 ring-1 ring-white/20">
                  <Compass size={13} />
                  What this includes today
                </div>
                <h3 className="font-display text-3xl font-bold">Capabilities shaped by real outreach projects</h3>
                <div className="grid gap-2 text-sm text-slate-200">
                  {capabilities.map((item) => (
                    <p key={item} className="inline-flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-1 text-emerald-300" />
                      {item}
                    </p>
                  ))}
                </div>
                <div className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-slate-200">
                  Enterprise roadmap: custom data sources, approvals, deeper analytics, and team governance.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-14">
          <Card className="overflow-hidden border-2 border-slate-900 bg-gradient-to-br from-brand-500 via-orange-500 to-mustard-500 text-white">
            <CardContent className="space-y-5 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/40">
                <Zap size={13} />
                Build with us
              </div>
              <h3 className="font-display text-3xl font-bold">Want to shape the next version of ColdPing?</h3>
              <p className="max-w-2xl text-sm leading-7 text-white/90">
                We work directly with teams to ship features that reduce manual effort and improve reply quality. Tell us your current outreach workflow and where it breaks.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                    Contact us
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button className="bg-slate-900 text-white hover:bg-slate-800">View pricing</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <PublicFooter />
      </main>
    </div>
  )
}
