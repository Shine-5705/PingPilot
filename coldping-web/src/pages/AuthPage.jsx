import { Globe } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Label } from '../components/ui/FormControls'

export default function AuthPage() {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    navigate('/app/dashboard')
  }

  const onGoogleContinue = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const redirectUri =
      import.meta.env.VITE_GOOGLE_REDIRECT_URI || `${window.location.origin}/auth/google/callback`
    const scope = import.meta.env.VITE_GOOGLE_OAUTH_SCOPE || 'openid email profile'

    if (!clientId) {
      navigate('/app/dashboard')
      return
    }

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope,
      access_type: 'offline',
      prompt: 'consent',
    })

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
  }

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white/85 shadow-[0_30px_80px_-40px_rgba(16,24,40,0.55)] backdrop-blur md:grid-cols-[1.08fr_0.92fr]">
        <section className="relative hidden overflow-hidden bg-gray-950 p-8 text-white md:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,136,0,0.20),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(11,165,236,0.18),transparent_26%)]" />
          <div aria-hidden="true" className="absolute -top-16 right-[-60px] h-56 w-56 rounded-full bg-brand-500/25 blur-3xl animate-soft-pulse" />
          <div aria-hidden="true" className="absolute bottom-[-80px] left-[-30px] h-48 w-48 rounded-full bg-blue-light-500/20 blur-3xl animate-soft-pulse" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-100 ring-1 ring-white/20">
                ColdPing workspace
              </div>
              <h1 className="font-display mt-4 max-w-lg text-5xl font-bold leading-[1] animate-fade-in-left">
                Outreach that feels curated, not automated.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 animate-fade-in-left">
                Find the right people, build better sessions, and generate outreach that looks like it came from a sharp operator.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm animate-fade-in-up">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/30 text-emerald-200">✓</span>
                <span>75% of repetitive outreach tasks handled automatically</span>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in-right">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ['Enrichment', 'LinkedIn + email'],
                  ['CRM', 'Statuses + notes'],
                  ['AI drafts', 'Personalized messages'],
                  ['Campaigns', 'Session-based outreach'],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">{title}</p>
                    <p className="mt-2 text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                Designed for internship, referral, research, and custom outreach campaigns.
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center bg-[linear-gradient(180deg,rgba(252,252,253,0.96)_0%,rgba(249,250,251,0.96)_100%)] p-4 md:p-8">
          <Card className="w-full max-w-lg overflow-hidden border-slate-200/90 animate-fade-in-right">
            <CardHeader className="space-y-2">
              <p className="section-kicker">Authentication</p>
              <h2 className="font-display text-3xl font-bold text-slate-950">Sign in to continue</h2>
              <p className="text-sm leading-7 text-slate-500">
                Access your campaigns, contacts, and AI-powered outreach workspace.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    Remember me
                  </label>
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full bg-slate-950 hover:bg-slate-800">
                  Sign in
                </Button>

                <div className="relative py-1 text-center text-xs text-slate-400">
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-slate-200" />
                  <span className="relative bg-white px-3">or continue with</span>
                </div>

                <Button type="button" variant="secondary" className="w-full gap-2" onClick={onGoogleContinue}>
                  <Globe size={16} />
                  Continue with Google
                </Button>
              </form>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slate-500">
                <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">Secure</div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">Fast setup</div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">Team ready</div>
              </div>

              <p className="mt-4 text-center text-sm text-slate-500">
                Don&apos;t have an account?{' '}
                <Link to="/signup" className="font-medium text-orange-600 hover:text-orange-500">
                  Create one now
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
