import { useEffect, useMemo, useState } from 'react'
import { Activity, ArrowRight, ArrowUpRight, Clock3, MessageSquare, Radio, Sparkles, Users, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { activityFeed, campaigns, metrics } from '../data/mockData'

const iconMap = [Users, MessageSquare, Activity, ArrowUpRight]

const liveMessages = [
  'Automation engine queued 3 new personalized drafts.',
  'New contact enrichment finished for Google HR list.',
  'Follow-up sequence triggered for warm leads.',
  'Reply intent model scored inbound messages.',
]

export default function DashboardPage() {
  const [liveStats, setLiveStats] = useState({
    visitors: 29,
    eventsPerMin: 14,
    replyRate: 14.2,
    queuedDrafts: 24,
  })
  const [feed, setFeed] = useState(
    activityFeed.map((item, index) => ({
      id: `seed-${index}`,
      text: item,
      time: `${(index + 1) * 2}m ago`,
    })),
  )
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTick(Date.now())
      setLiveStats((prev) => ({
        visitors: Math.max(18, prev.visitors + Math.floor(Math.random() * 5) - 2),
        eventsPerMin: Math.max(8, prev.eventsPerMin + Math.floor(Math.random() * 3) - 1),
        replyRate: Number((Math.max(10, prev.replyRate + (Math.random() * 0.8 - 0.35))).toFixed(1)),
        queuedDrafts: Math.max(10, prev.queuedDrafts + Math.floor(Math.random() * 5) - 2),
      }))

      if (Math.random() > 0.55) {
        const message = liveMessages[Math.floor(Math.random() * liveMessages.length)]
        setFeed((prev) => [
          {
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            text: message,
            time: 'just now',
          },
          ...prev.slice(0, 5),
        ])
      }
    }, 3200)

    return () => window.clearInterval(interval)
  }, [])

  const nowLabel = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(tick),
    [tick],
  )

  return (
    <div className="space-y-6">
      <section className="reference-panel overflow-hidden bg-gradient-to-br from-white via-white to-brand-25 p-6 md:p-7">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              <Sparkles size={14} />
              Active campaign workspace
            </div>
            <div>
              <p className="section-kicker">Overview</p>
              <h2 className="font-display mt-2 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Dashboard
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                Performance snapshot of your outreach efforts with live campaign movement and automation activity.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Avg reply rate</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">{liveStats.replyRate}%</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Contacts enriched</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">1,248</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Live visitors</p>
                <p className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-slate-950">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  {liveStats.visitors}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_20px_60px_-28px_rgba(15,23,42,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,136,0,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(11,165,236,0.16),transparent_24%)]" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Current focus</p>
                <h3 className="mt-2 text-2xl font-semibold">Google HR internship push</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                  Search, enrich, and draft in one scrollable workflow that stays centered on the campaign.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-right">
                <p className="text-xs text-slate-400">Status</p>
                <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-white">
                  <Radio size={14} className="text-emerald-300" />
                  Running live
                </p>
              </div>
            </div>
            <div className="relative mt-5 grid grid-cols-2 gap-3 text-sm text-slate-200">
              {[
                ['Prospects', '128'],
                ['Replies', '11'],
                ['Messages sent', '46'],
                ['Drafts queued', `${liveStats.queuedDrafts}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              <span className="inline-flex items-center gap-2 text-slate-300">
                <Clock3 size={14} className="text-blue-200" />
                Last sync: {nowLabel}
              </span>
              <ArrowRight size={16} className="text-brand-200" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = iconMap[index]
          const liveValue =
            index === 1 ? `${Math.max(820, 820 + liveStats.eventsPerMin * 2)}` : metric.value

          return (
            <Card key={metric.label} className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_60px_-30px_rgba(16,24,40,0.18)]">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">{metric.label}</p>
                  <div className="rounded-2xl bg-brand-50 p-2 text-brand-700 shadow-sm shadow-brand-500/5">
                    <Icon size={17} />
                  </div>
                </div>
                <p className="text-3xl font-semibold tracking-tight text-slate-900">{liveValue}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-emerald-600">{metric.delta}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    live
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <Card className="overflow-hidden">
          <CardHeader className="flex items-center justify-between border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Recent campaigns</h3>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Scrollable queue</p>
          </CardHeader>
          <CardContent className="max-h-[460px] space-y-3 overflow-y-auto custom-scrollbar">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="grid gap-3 rounded-2xl border border-slate-100 bg-white p-3 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_14px_36px_-24px_rgba(255,136,0,0.22)] md:grid-cols-[2fr_1fr_1fr_1fr_auto] md:items-center"
              >
                <div>
                  <p className="font-medium text-slate-900">{campaign.name}</p>
                  <p className="text-sm text-slate-500">
                    {campaign.company} · {campaign.roleFilter}
                  </p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-blue-light-500" style={{ width: `${Math.min(100, Math.round((campaign.sent / campaign.contacts) * 100))}%` }} />
                  </div>
                </div>
                <p className="text-sm text-slate-600">{campaign.contacts} contacts</p>
                <p className="text-sm text-slate-600">{campaign.sent} sent</p>
                <p className="text-sm text-slate-600">{campaign.replies} replies</p>
                <div className="space-y-1 text-right">
                  <StatusBadge status={campaign.status} />
                  {(campaign.status === 'Active' || campaign.status === 'Running') && (
                    <p className="inline-flex items-center gap-1 text-[11px] text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      updating now
                    </p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="border-b border-slate-100">
              <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Zap size={16} className="text-brand-500" />
                Live activity feed
              </h3>
            </CardHeader>
            <CardContent className="max-h-[220px] space-y-3 overflow-y-auto custom-scrollbar">
              {feed.map((item) => (
                <div key={item.id} className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600 transition hover:bg-slate-100">
                  <p>{item.text}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{item.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">Pipeline health</h3>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="rounded-2xl bg-slate-50 px-3 py-3 transition hover:bg-slate-100">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600">Not Contacted</p>
                  <p className="font-medium text-slate-900">43</p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[52%] rounded-full bg-slate-500" />
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 px-3 py-3 transition hover:bg-slate-100">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600">Contacted</p>
                  <p className="font-medium text-slate-900">31</p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[38%] rounded-full bg-brand-500" />
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 px-3 py-3 transition hover:bg-slate-100">
                <div className="flex items-center justify-between">
                  <p className="text-slate-600">Replied</p>
                  <p className="font-medium text-emerald-700">11</p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[16%] rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
