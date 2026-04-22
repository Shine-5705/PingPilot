import { Activity, ArrowUpRight, MessageSquare, Users } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { StatusBadge } from '../components/ui/StatusBadge'
import { activityFeed, campaigns, metrics } from '../data/mockData'

const iconMap = [Users, MessageSquare, Activity, ArrowUpRight]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Dashboard</h2>
        <p className="mt-1 text-sm text-slate-500">Performance snapshot of your outreach efforts.</p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = iconMap[index]
          return (
            <Card key={metric.label} className="transition hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">{metric.label}</p>
                  <Icon size={17} className="text-slate-400" />
                </div>
                <p className="text-3xl font-semibold tracking-tight text-slate-900">{metric.value}</p>
                <p className="text-sm font-medium text-emerald-600">{metric.delta}</p>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-slate-900">Recent campaigns</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="grid gap-3 rounded-xl border border-slate-100 p-3 md:grid-cols-[2fr_1fr_1fr_1fr_auto] md:items-center"
              >
                <div>
                  <p className="font-medium text-slate-900">{campaign.name}</p>
                  <p className="text-sm text-slate-500">{campaign.company} · {campaign.roleFilter}</p>
                </div>
                <p className="text-sm text-slate-600">{campaign.contacts} contacts</p>
                <p className="text-sm text-slate-600">{campaign.sent} sent</p>
                <p className="text-sm text-slate-600">{campaign.replies} replies</p>
                <StatusBadge status={campaign.status} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-slate-900">Activity feed</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            {activityFeed.map((item) => (
              <div key={item} className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
