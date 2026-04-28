import { ArrowUpRight, CircleGauge, Clock3, Filter, Radar, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../components/ui/Card'

const insightCards = [
  { label: 'Best time to send', value: 'Tue 10:30 AM', note: 'Highest reply rate in the last 30 days' },
  { label: 'Top company', value: 'Google', note: 'Most enriched contacts with a 92% match' },
  { label: 'Warmest segment', value: 'University Programs', note: '3.8x higher reply rate than average' },
]

const funnel = [
  { stage: 'Searches', value: '1,248' },
  { stage: 'Enriched', value: '862' },
  { stage: 'Drafted', value: '514' },
  { stage: 'Sent', value: '392' },
  { stage: 'Replied', value: '64' },
]

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="section-kicker">Insights</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-slate-950">Campaign intelligence</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
            Review which audiences are performing, where responses come from, and how to tune future campaigns.
          </p>
        </div>
        <div className="surface-panel rounded-xl px-3 py-2 text-xs text-slate-600">
          <span className="inline-flex items-center gap-2"><Sparkles size={14} className="text-orange-500" />Live model feedback</span>
        </div>
      </div>

      <section className="grid gap-4 xl:grid-cols-3">
        {insightCards.map((item) => (
          <Card key={item.label} className="transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-950/10">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-slate-500">{item.label}</p>
                <CircleGauge size={16} className="text-slate-400" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-display text-2xl font-bold text-slate-950">{item.value}</p>
              <p className="text-sm text-slate-600">{item.note}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Funnel</h3>
              <p className="text-sm text-slate-500">Track how leads move through your outreach system.</p>
            </div>
            <Filter size={16} className="text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {funnel.map((item, index) => (
                <div key={item.stage} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{item.stage}</p>
                      <p className="text-xs text-slate-500">Step {index + 1}</p>
                    </div>
                    <p className="font-display text-2xl font-bold text-slate-950">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-slate-900">Recommendations</h3>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <div className="rounded-xl border border-slate-100 bg-white p-4">
              <p className="font-medium text-slate-900">Focus on university recruiters</p>
              <p className="mt-1">The strongest response rate came from recruiters with internship ownership.</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4">
              <p className="font-medium text-slate-900">Shorten first paragraph</p>
              <p className="mt-1">Messages under 95 words improved open-to-reply conversion in recent sessions.</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-4">
              <p className="font-medium text-slate-900">Sequence follow-ups</p>
              <p className="mt-1">A 4-day follow-up cadence outperformed same-day reminders.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-white">
              <ArrowUpRight size={14} className="text-orange-300" />
              Send recommendations to campaign setup.
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
