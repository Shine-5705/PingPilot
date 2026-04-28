import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'

export default function PublicFooter() {
  return (
    <footer className="mx-auto mt-14 max-w-7xl overflow-hidden rounded-[2rem] border-2 border-slate-900 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
      <div className="h-1 bg-[linear-gradient(90deg,rgba(255,136,0,0.15),rgba(255,136,0,0.9),rgba(11,165,236,0.75),rgba(255,136,0,0.15))]" />
      <div className="relative px-6 py-10 md:px-10 md:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-brand-100 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-light-100 blur-3xl" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              <Sparkles size={14} />
              ColdPing
            </div>
            <div>
              <p className="font-display text-3xl font-bold tracking-tight text-slate-950">Run outreach like a system.</p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                Source contacts, enrich them, draft personalized messages, and keep the whole loop organized in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/signup">
                <Button className="gap-2 px-5 py-2.5 text-sm">
                  Get Started
                  <ArrowRight size={14} />
                </Button>
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div>
            <p className="section-kicker">Product</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <Link to="/product" className="transition hover:text-brand-700">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-brand-700">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="transition hover:text-brand-700">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-brand-700">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/signup" className="transition hover:text-brand-700">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-kicker">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="mailto:hello@coldping.com" className="transition hover:text-brand-700">
                  hello@coldping.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-700">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-700">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>ColdPing © 2026. Built for focused outbound workflows.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Terms
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
