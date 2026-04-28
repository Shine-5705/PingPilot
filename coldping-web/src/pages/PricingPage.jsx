import { CheckCircle2, Sparkles, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import PublicFooter from '../components/layout/PublicFooter'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

const calendlyUrl = 'https://calendly.com/your-calendly-link'

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for exploring outreach workflows',
    price: '$0',
    period: 'Forever free',
    cta: 'Start Free',
    ctaLink: '/signup',
    highlighted: false,
    features: [
      { name: 'Up to 100 contacts', included: true },
      { name: 'Manual outreach only', included: true },
      { name: 'Email templates', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Community support', included: true },
      { name: 'AI personalization', included: false },
      { name: 'Automated workflows', included: false },
      { name: 'Priority support', included: false },
    ],
  },
  {
    name: 'Professional',
    description: 'For growing teams scaling outreach',
    price: '$99',
    period: 'per month (billed annually)',
    cta: 'Start 14-day trial',
    ctaLink: '/signup',
    highlighted: true,
    features: [
      { name: 'Up to 10,000 contacts', included: true },
      { name: 'Automated workflows', included: true },
      { name: 'AI-powered drafts', included: true },
      { name: 'Email deliverability suite', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Email + LinkedIn enrichment', included: true },
      { name: 'Slack & Zapier integrations', included: true },
      { name: 'Email support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For teams needing custom solutions',
    price: 'Custom',
    period: 'tailored pricing',
    cta: 'Contact sales',
    ctaLink: calendlyUrl,
    highlighted: false,
    features: [
      { name: 'Unlimited contacts', included: true },
      { name: 'All Professional features', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'Custom security & compliance', included: true },
      { name: 'Advanced API access', included: true },
      { name: 'Multi-team management', included: true },
      { name: '24/7 priority support', included: true },
    ],
  },
]

const faqs = [
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, Professional plan comes with a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise customers.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes! Annual plans come with 2 months free (17% savings). Reach out for custom volume discounts.',
  },
  {
    question: 'What about data export or migration?',
    answer: 'You can export all your data anytime via CSV. We also offer white-glove migration support for Enterprise customers.',
  },
  {
    question: 'Is customer support included?',
    answer: 'Yes. Starter includes community support, Professional includes email support, and Enterprise gets 24/7 priority support.',
  },
]

export default function PricingPage() {
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
            <Link to="/pricing" className="rounded-xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600 ring-1 ring-brand-100">
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
        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl overflow-hidden py-16">
          <div className="scroll-text left-0 top-[8%]">PRICING • FLEXIBLE • TRANSPARENT</div>
          <div aria-hidden="true" className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-brand-100/70 blur-3xl animate-soft-pulse" />
          <div aria-hidden="true" className="absolute bottom-0 left-[-40px] h-48 w-48 rounded-full bg-blue-light-100/70 blur-3xl animate-soft-pulse" />

          <div className="relative space-y-6 text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              <Sparkles size={14} />
              Simple, transparent pricing
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.03] md:text-6xl">
              Pay for what you use.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Choose the plan that fits your team's needs. All plans include our core features. Upgrade, downgrade, or cancel anytime.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="relative mx-auto max-w-7xl py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  tier.highlighted ? 'ring-2 ring-brand-500 lg:scale-105' : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white opacity-40" />
                )}
                <Card className={`h-full backdrop-blur-sm ${tier.highlighted ? 'border-brand-200 bg-white/95' : 'bg-white/70'}`}>
                  <CardContent className="flex flex-col gap-8 p-8">
                    {/* Header */}
                    <div>
                      <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
                    </div>

                    {/* Price */}
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-5xl font-bold">{tier.price}</span>
                        {tier.period && <span className="text-sm text-slate-600">/{tier.period}</span>}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link to={tier.ctaLink} className="w-full">
                      <Button
                        className="w-full py-3 text-base"
                        variant={tier.highlighted ? 'default' : 'secondary'}
                      >
                        {tier.cta}
                      </Button>
                    </Link>

                    {/* Features List */}
                    <div className="space-y-4 border-t border-slate-200 pt-8">
                      {tier.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex gap-3 items-start">
                          {feature.included ? (
                            <CheckCircle2 size={20} className="mt-0.5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X size={20} className="mt-0.5 text-slate-300 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>{feature.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="relative mx-auto max-w-7xl py-20">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold">Feature Comparison</h2>
              <p className="mt-4 text-lg text-slate-600">See what's included in each plan</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-slate-600">Starter</th>
                    <th className="px-6 py-4 text-center font-semibold text-brand-600">Professional</th>
                    <th className="px-6 py-4 text-center font-semibold text-slate-600">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { feature: 'Contacts per month', starter: '100', pro: '10,000', ent: 'Unlimited' },
                    { feature: 'Automated campaigns', starter: '❌', pro: '✓', ent: '✓' },
                    { feature: 'AI-powered personalization', starter: '❌', pro: '✓', ent: '✓' },
                    { feature: 'Email deliverability tools', starter: '❌', pro: '✓', ent: '✓' },
                    { feature: 'Advanced analytics & reporting', starter: '❌', pro: '✓', ent: '✓' },
                    { feature: 'Email + LinkedIn enrichment', starter: '❌', pro: '✓', ent: '✓' },
                    { feature: 'Integrations (Slack, Zapier)', starter: '❌', pro: '✓', ent: '✓' },
                    { feature: 'Custom integrations', starter: '❌', pro: '❌', ent: '✓' },
                    { feature: 'Dedicated support', starter: 'Community', pro: 'Email', ent: '24/7 Priority' },
                    { feature: 'SLA guarantee', starter: '❌', pro: '❌', ent: '✓' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-slate-600">{row.starter}</td>
                      <td className="px-6 py-4 text-center text-sm text-slate-700 font-medium">{row.pro}</td>
                      <td className="px-6 py-4 text-center text-sm text-slate-600">{row.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative mx-auto max-w-4xl py-20">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-slate-600">Everything you need to know about ColdPing pricing</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group cursor-pointer rounded-xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm hover:bg-white/70 transition">
                  <summary className="flex justify-between items-center font-semibold text-slate-900">
                    {faq.question}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative mx-auto max-w-4xl py-20">
          <div className="space-y-8 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center">
            <div className="space-y-4">
              <h2 className="font-display text-4xl font-bold text-white">Ready to transform your outreach?</h2>
              <p className="text-lg text-slate-300">Join hundreds of teams using ColdPing to scale their cold outreach workflows.</p>
            </div>
            <div className="flex flex-col gap-3 justify-center sm:flex-row">
              <Link to="/signup">
                <Button className="px-8 py-3 text-base">Start 14-day free trial</Button>
              </Link>
              <a href={calendlyUrl} target="_blank" rel="noreferrer">
                  <Button variant="secondary" className="px-8 py-3 text-base border-slate-300 bg-white text-slate-900 hover:bg-slate-100">
                  Schedule a demo
                </Button>
              </a>
            </div>
          </div>
        </section>

        <PublicFooter />
      </main>
    </div>
  )
}
