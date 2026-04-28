import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PublicFooter from '../components/layout/PublicFooter'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

const calendlyUrl = 'https://calendly.com/your-calendly-link'

const contactPoints = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@coldping.com',
    href: 'mailto:hello@coldping.com',
  },
  {
    icon: Clock3,
    title: 'Live chat',
    value: 'Monday to Friday, 9:00 AM - 6:00 PM EST',
    href: '#',
  },
  {
    icon: MessageCircle,
    title: 'Enterprise support',
    value: 'enterprise@coldping.com',
    href: 'mailto:enterprise@coldping.com',
  },
]

const socialLinks = [
  { href: 'https://x.com', label: 'X' },
  { href: 'https://github.com', label: 'GH' },
  { href: 'https://linkedin.com', label: 'IN' },
]

const useCases = [
  {
    title: 'Founders and operators',
    body: 'Set up a clean outbound engine without stitching five tools together.',
  },
  {
    title: 'Agency teams',
    body: 'Run multiple client campaigns with consistent quality and fast turnarounds.',
  },
  {
    title: 'Hiring and talent outreach',
    body: 'Target high-fit candidates and personalize communication at scale.',
  },
]

const supportFlow = [
  ['Step 1', 'Share your workflow goals'],
  ['Step 2', 'We map setup and integrations'],
  ['Step 3', 'Launch first campaign in days'],
  ['Step 4', 'Optimize based on live metrics'],
]

const subjects = [
  'General Inquiry',
  'Sales Question',
  'Technical Support',
  'Partnership Opportunity',
  'Press & Media',
  'Other',
]

const faqs = [
  {
    question: 'How quickly will I get a response?',
    answer: 'General inquiries usually receive a reply within 24 hours. Enterprise and technical requests are prioritized.',
  },
  {
    question: 'Do you offer personalized demos?',
    answer: 'Yes. We provide tailored demos for teams based on your current outreach workflow and goals.',
  },
  {
    question: 'Can you support enterprise onboarding?',
    answer: 'Yes. We support rollout planning, training sessions, and workflow design for larger teams.',
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      })
    }, 1200)
  }

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
            <Link to="/about" className="rounded-xl px-4 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600">
              About
            </Link>
            <Link to="/contact" className="rounded-xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600 ring-1 ring-brand-100">
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
        <section className="relative overflow-hidden py-16">
          <div className="scroll-text left-0 top-[8%]">CONTACT • DEMO • SUPPORT</div>
          <div aria-hidden="true" className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-brand-100/70 blur-3xl animate-soft-pulse" />
          <div aria-hidden="true" className="absolute bottom-0 left-[-40px] h-48 w-48 rounded-full bg-blue-light-100/70 blur-3xl animate-soft-pulse" />

          <div className="relative mx-auto max-w-4xl space-y-6 text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                <Sparkles size={14} />
                Talk to the team
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.03] md:text-6xl">
              Let's start a <span className="bg-gradient-to-r from-brand-600 to-blue-light-600 bg-clip-text text-transparent">conversation</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Have questions? We'd love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border-4 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              <div className="mb-6">
                <h2 className="font-display text-3xl font-bold text-slate-900">Send us a message</h2>
              </div>

              <div className="space-y-6">
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 size={28} />
                    </div>
                    <h2 className="font-display text-3xl font-bold">Message sent!</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">Thanks for reaching out. We will get back to you within 24 hours.</p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-5 text-sm font-semibold text-brand-700 transition hover:text-brand-600"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">Your Name</label>
                          <input
                            required
                            value={formData.name}
                            onChange={(event) => updateField('name', event.target.value)}
                            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(event) => updateField('email', event.target.value)}
                            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Company (Optional)</label>
                        <input
                          value={formData.company}
                          onChange={(event) => updateField('company', event.target.value)}
                          className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(event) => updateField('subject', event.target.value)}
                          className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(event) => updateField('message', event.target.value)}
                          className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500"
                          placeholder="Tell us how we can help"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-slate-900">Get in touch</h2>
                <p className="mt-3 text-slate-600">
                  We are here to help and answer any questions. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-5">
                {contactPoints.map((point) => {
                  const Icon = point.icon
                  return (
                    <a key={point.title} href={point.href} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 transition hover:bg-white">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                        <Icon size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-900">{point.title}</span>
                        <span className="block text-sm text-slate-600">{point.value}</span>
                      </span>
                    </a>
                  )
                })}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                <p className="text-sm font-semibold text-slate-900">Book a guided walkthrough</p>
                <p className="mt-2 text-sm text-slate-600">Prefer to see it live? Schedule a demo and we will map it to your workflow.</p>
                <div className="mt-4">
                  <a href={calendlyUrl} target="_blank" rel="noreferrer">
                    <Button className="w-full gap-2" variant="secondary">
                      Open Calendly
                      <CalendarDays size={16} />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold text-slate-900">Follow us</p>
                <div className="mt-4 flex gap-3">
                  {socialLinks.map((item) => {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-700"
                        aria-label={item.label}
                      >
                        <span className="text-xs font-semibold tracking-[0.08em]">{item.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-14">
          <Card className="border-2 border-slate-900 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
              <CardContent className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100 ring-1 ring-white/20">
                  <Users size={13} />
                  Engagement models
                </div>
                <h3 className="font-display text-3xl font-bold">Built for real project scenarios</h3>
                <div className="grid gap-2 text-sm text-slate-200">
                  {[
                    'Founder-led setup for early-stage teams',
                    'Campaign system design for agencies',
                    'Enterprise rollout and onboarding plans',
                    'Template and messaging optimization sprints',
                  ].map((item) => (
                    <p key={item} className="inline-flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-1 text-emerald-300" />
                      {item}
                    </p>
                  ))}
                </div>
                <div className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-slate-200">
                  Dedicated support is available for enterprise teams with custom SLAs.
                </div>
              </CardContent>
            </Card>
        </section>

        <section className="mx-auto max-w-7xl py-14">
          <div className="mb-8">
            <p className="section-kicker">Where we help</p>
            <h2 className="font-display mt-2 text-4xl font-bold">Built for real outreach projects</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {useCases.map((item, index) => (
              <Card key={item.title} className="hover-lift border-2 border-slate-900/90" style={{ transform: `rotate(${index % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}>
                <CardContent className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    <Users size={13} />
                    Use case
                  </div>
                  <p className="text-base font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl py-14">
          <div className="mb-8 text-center">
            <p className="section-kicker">Common questions</p>
            <h2 className="font-display mt-2 text-4xl font-bold">Answers before you reach out</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border border-slate-200 bg-white/70">
                <CardContent className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                  <p className="text-sm leading-7 text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-14">
          <Card className="border-2 border-slate-900 bg-white/80">
            <CardContent className="space-y-4">
              <p className="section-kicker">Support flow</p>
              <h3 className="font-display text-3xl font-bold">What happens after you contact us</h3>
              <div className="space-y-3">
                {supportFlow.map(([step, text]) => (
                  <div key={step} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <span className="rounded-full bg-brand-100 px-2 py-1 text-xs font-semibold text-brand-700">{step}</span>
                    <p className="text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto max-w-7xl py-14">
          <Card className="overflow-hidden border-2 border-slate-900 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <CardContent className="space-y-5 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100 ring-1 ring-white/20">
                <Zap size={13} />
                Final CTA
              </div>
              <h3 className="font-display text-3xl font-bold">Need a walkthrough tailored to your pipeline?</h3>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                Share your current process and we will suggest an implementation path based on your team size, campaign goals, and data stack.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={calendlyUrl} target="_blank" rel="noreferrer">
                  <Button className="gap-2 px-7 py-3">
                    Schedule a demo
                    <ArrowRight size={15} />
                  </Button>
                </a>
                <Link to="/about">
                  <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                    Learn about us
                  </Button>
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
