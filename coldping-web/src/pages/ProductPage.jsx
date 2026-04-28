import { ArrowRight, CheckCircle2, Sparkles, Workflow, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import PublicFooter from '../components/layout/PublicFooter'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

const featureBlocks = [
  {
    title: 'Contact Discovery',
    body: 'Search target companies and roles, then capture high-quality HR and recruiter leads with context that matters.',
    bullets: ['Company + role filters', 'High-intent targeting', 'Fast shortlist generation'],
  },
  {
    title: 'Automated Enrichment',
    body: 'Add verified email, LinkedIn profile links, and campaign-fit scoring so your outreach starts with clean data.',
    bullets: ['Email + LinkedIn enrichment', 'Reasoning snippets', 'Campaign readiness score'],
  },
  {
    title: 'AI Personalization',
    body: 'Generate outreach drafts based on your resume, goals, and campaign context so each message feels crafted.',
    bullets: ['Role-aware messaging', 'Reusable templates', 'One-click draft generation'],
  },
]

export default function ProductPage() {
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
            <Link to="/product" className="rounded-xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600 ring-1 ring-brand-100">
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
          <div className="scroll-text left-0 top-[8%]">PRODUCT • WORKFLOW • AUTOMATION</div>
          <div aria-hidden="true" className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-brand-100/70 blur-3xl animate-soft-pulse" />
          <div aria-hidden="true" className="absolute bottom-0 left-[-40px] h-48 w-48 rounded-full bg-blue-light-100/70 blur-3xl animate-soft-pulse" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                <Sparkles size={14} />
                Product overview
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.03] md:text-6xl">
                Outreach infrastructure for modern operators.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                ColdPing unifies lead discovery, enrichment, and personalized messaging into one focused workflow so teams spend less time stitching tools together.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/signup">
                  <Button className="gap-2 px-7 py-3 text-base">
                    Start Free Trial
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="secondary" className="px-7 py-3 text-base">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="animate-fade-in-right border-2 border-slate-900 shadow-[0_30px_70px_-36px_rgba(15,23,42,0.5)]">
              <CardContent className="space-y-4">
                <p className="section-kicker">Live workflow</p>
                <div className="grid gap-3 text-sm">
                  {[
                    ['Prospects scanned', '1,248'],
                    ['Profiles enriched', '927'],
                    ['Drafts generated', '412'],
                    ['Replies received', '137'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                      <p className="text-slate-600">{label}</p>
                      <p className="font-semibold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
                  Automation engine active · updates every few seconds
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-10">
          <div className="mb-8">
            <p className="section-kicker">Capabilities</p>
            <h2 className="font-display mt-2 text-4xl font-bold">Everything from sourcing to sending</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featureBlocks.map((block, index) => (
              <Card key={block.title} className="hover-lift border-2 border-slate-900/90" style={{ transform: `rotate(${index % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}>
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    <Workflow size={13} />
                    {block.title}
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{block.body}</p>
                  <div className="space-y-2">
                    {block.bullets.map((item) => (
                      <p key={item} className="inline-flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={15} className="text-emerald-600" />
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-10">
          <Card className="overflow-hidden border-2 border-slate-900 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
            <CardContent className="space-y-5 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100 ring-1 ring-white/20">
                <Zap size={13} />
                Why teams choose ColdPing
              </div>
              <h3 className="font-display text-3xl font-bold">Build repeatable outreach that still feels personal.</h3>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                ColdPing keeps your workflow structured while preserving nuance in messaging so you can scale outreach without sounding robotic.
              </p>
              <Link to="/signup">
                <Button className="gap-2 px-7 py-3">
                  Create your workspace
                  <ArrowRight size={15} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        <PublicFooter />
      </main>
    </div>
  )
}
