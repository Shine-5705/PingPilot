import { ArrowRight, CheckCircle2, Sparkles, Workflow } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Label } from '../components/ui/FormControls'

const highlights = [
  'Auto-enrich contacts with email + LinkedIn',
  'Generate personalized outreach from your profile context',
  'Track pipeline statuses inside one workspace',
]

export default function SignUpPage() {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    navigate('/app/dashboard')
  }

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white/85 shadow-[0_30px_80px_-40px_rgba(16,24,40,0.55)] backdrop-blur md:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden overflow-hidden bg-gray-950 p-8 text-white md:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,136,0,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(11,165,236,0.18),transparent_24%)]" />
          <div aria-hidden="true" className="absolute -top-16 right-[-70px] h-56 w-56 rounded-full bg-brand-500/20 blur-3xl animate-soft-pulse" />
          <div aria-hidden="true" className="absolute bottom-[-70px] left-[-40px] h-44 w-44 rounded-full bg-blue-light-500/20 blur-3xl animate-soft-pulse" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-100 ring-1 ring-white/20">
                <Sparkles size={14} />
                Welcome to ColdPing
              </div>
              <h1 className="font-display mt-5 max-w-lg text-5xl font-bold leading-[1.02] animate-fade-in-left">
                Start your outreach
                <br />
                engine in minutes.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 animate-fade-in-left">
                Clean pipeline, better personalization, and smarter campaign momentum from day one.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-gray-200 animate-fade-in-up">
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-center">
                  <p className="font-semibold text-white">2 min</p>
                  <p className="mt-1 text-gray-300">Setup time</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-center">
                  <p className="font-semibold text-white">1 click</p>
                  <p className="mt-1 text-gray-300">Draft generation</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-center">
                  <p className="font-semibold text-white">24/7</p>
                  <p className="mt-1 text-gray-300">Workflow ready</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in-right">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="animate-marquee-x flex w-max gap-6 text-xs text-gray-300">
                  {['Internships', 'Referrals', 'Research roles', 'Hiring campaigns', 'Follow-ups'].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                      <Workflow size={12} className="text-brand-200" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 text-sm text-gray-200">
                {highlights.map((item) => (
                  <p key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center bg-[linear-gradient(180deg,rgba(252,252,253,0.96)_0%,rgba(249,250,251,0.96)_100%)] p-4 md:p-8">
          <Card className="w-full max-w-lg overflow-hidden border-slate-200/90 animate-fade-in-right">
            <CardHeader className="space-y-2">
              <p className="section-kicker">Create account</p>
              <h2 className="font-display text-3xl font-bold text-slate-950">Sign up for ColdPing</h2>
              <p className="text-sm leading-7 text-slate-500">
                Build your first campaign and start generating personalized outreach right away.
              </p>
            </CardHeader>

            <CardContent>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <Label htmlFor="fullName">Full name</Label>
                  <Input id="fullName" type="text" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" required />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-emerald-700">
                    8+ characters
                  </div>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-blue-700">
                    1 special character
                  </div>
                </div>

                <label className="inline-flex items-start gap-2 text-xs text-slate-500">
                  <input type="checkbox" className="mt-0.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" required />
                  I agree to the Terms and Privacy Policy.
                </label>

                <Button type="submit" className="w-full gap-2">
                  Create account
                  <ArrowRight size={15} />
                </Button>
              </form>

              <p className="mt-5 text-center text-sm text-slate-500">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-brand-600 hover:text-brand-500">
                  Sign in
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}