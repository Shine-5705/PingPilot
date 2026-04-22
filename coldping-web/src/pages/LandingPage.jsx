import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { contacts } from '../data/mockData'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,#dbeafe_0%,#eef2ff_35%,#f8fafc_70%)] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur md:px-8">
          <p className="text-xl font-semibold tracking-tight text-slate-900">ColdPing</p>
          <Link to="/login">
            <Button variant="secondary">Sign in</Button>
          </Link>
        </header>

        <section className="grid gap-8 pb-8 pt-14 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles size={14} />
              AI-Powered Outreach Assistant
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
              Find the right people and send messages that get replies.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Build campaigns, discover relevant professionals, and generate personalized
              emails and LinkedIn drafts from one clean workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/login">
                <Button className="gap-2 px-6 py-3 text-base">
                  Start for free
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Button variant="secondary" className="px-6 py-3 text-base">
                Watch product tour
              </Button>
            </div>
            <div className="mt-8 grid gap-2 text-sm text-slate-600">
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Auto-enrichment with email and LinkedIn links
              </p>
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                AI personalized drafts based on your resume
              </p>
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Mini CRM tracking with outreach statuses
              </p>
            </div>
          </div>

          <Card className="overflow-hidden border-white/80">
            <CardContent className="p-0">
              <div className="border-b border-slate-100 bg-slate-900 px-5 py-3 text-sm text-slate-100">
                Campaign: Google HR Internship Push
              </div>
              <div className="space-y-2 p-4">
                {contacts.slice(0, 4).map((contact) => (
                  <div
                    key={contact.id}
                    className="grid grid-cols-[1.6fr_1.2fr_1fr] items-center gap-3 rounded-xl border border-slate-100 p-3 text-sm"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{contact.name}</p>
                      <p className="text-slate-500">{contact.role}</p>
                    </div>
                    <a
                      className="truncate text-indigo-600 hover:text-indigo-500"
                      href={contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn profile
                    </a>
                    <p className="truncate text-slate-500">{contact.email}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm backdrop-blur md:grid-cols-4">
          {['Backed by operators', 'Trusted by 120+ students', '2.7x reply uplift', 'Global company coverage'].map((proof) => (
            <div key={proof} className="rounded-xl border border-slate-100 bg-white px-3 py-2 text-center">
              {proof}
            </div>
          ))}
        </section>

        <footer className="py-8 text-center text-sm text-slate-500">ColdPing © 2026</footer>
      </div>
    </div>
  )
}
