import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Label, Select } from '../components/ui/FormControls'
import { Toast } from '../components/ui/Toast'

const SETTINGS_STORAGE_KEY = 'coldping_workspace_settings'

const defaultSettings = {
  fullName: 'Shine Gupta',
  headline: 'CS Student | AI + Data Systems',
  crustApiKey: '',
  llmApiKey: '',
  smtpHost: '',
  senderEmail: '',
  tone: 'Professional',
  contactLimit: 50,
  followupDays: 4,
}

export default function SettingsPage() {
  const [settings, setSettings] = useState(() => {
    const saved = sessionStorage.getItem(SETTINGS_STORAGE_KEY)
    if (!saved) return defaultSettings

    try {
      return { ...defaultSettings, ...JSON.parse(saved) }
    } catch {
      return defaultSettings
    }
  })
  const [toastOpen, setToastOpen] = useState(false)

  useEffect(() => {
    if (!toastOpen) return undefined
    const timer = setTimeout(() => setToastOpen(false), 2200)
    return () => clearTimeout(timer)
  }, [toastOpen])

  const update = (field, value) => setSettings((prev) => ({ ...prev, [field]: value }))

  const saveSettings = () => {
    sessionStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
    setToastOpen(true)
  }

  return (
    <div className="space-y-6">
      <section className="reference-panel overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/40 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Settings</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-slate-950">Workspace settings</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              Profile, resume, API keys, and outreach preferences.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
            <Sparkles size={14} />
            Secure workspace controls
          </div>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card className="overflow-hidden">
          <CardHeader className="border-b border-slate-100 bg-slate-50/70">
            <h3 className="text-base font-semibold text-slate-900">Profile</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" value={settings.fullName} onChange={(e) => update('fullName', e.target.value)} />
            </div>
            <div>
              <Label htmlFor="headline">Professional headline</Label>
              <Input id="headline" value={settings.headline} onChange={(e) => update('headline', e.target.value)} />
            </div>
            <div>
              <Label htmlFor="resume">Resume file</Label>
              <Input id="resume" type="file" />
            </div>
            <Button onClick={saveSettings}>Save profile</Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="border-b border-slate-100 bg-slate-50/70">
            <h3 className="text-base font-semibold text-slate-900">Integrations</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="crust">Crustdata API key</Label>
              <Input id="crust" type="password" placeholder="cd_..." value={settings.crustApiKey} onChange={(e) => update('crustApiKey', e.target.value)} />
            </div>
            <div>
              <Label htmlFor="llm">LLM API key (Grok or Gemini)</Label>
              <Input id="llm" type="password" placeholder="xai_..." value={settings.llmApiKey} onChange={(e) => update('llmApiKey', e.target.value)} />
            </div>
            <div>
              <Label htmlFor="smtp">SMTP sender</Label>
              <Input id="smtp" placeholder="mail.yourdomain.com" value={settings.smtpHost} onChange={(e) => update('smtpHost', e.target.value)} />
            </div>
            <div>
              <Label htmlFor="senderEmail">Sender email</Label>
              <Input id="senderEmail" placeholder="you@yourdomain.com" value={settings.senderEmail} onChange={(e) => update('senderEmail', e.target.value)} />
            </div>
            <Button variant="secondary" onClick={saveSettings}>Validate keys</Button>
          </CardContent>
        </Card>

        <Card className="xl:col-span-2 overflow-hidden">
          <CardHeader className="border-b border-slate-100 bg-slate-50/70">
            <h3 className="text-base font-semibold text-slate-900">Preferences</h3>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            <div>
              <Label htmlFor="tone">Default message tone</Label>
              <Select id="tone" value={settings.tone} onChange={(e) => update('tone', e.target.value)}>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Direct</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="limit">Contacts per campaign</Label>
              <Input id="limit" type="number" value={settings.contactLimit} onChange={(e) => update('contactLimit', Number(e.target.value || 0))} />
            </div>
            <div>
              <Label htmlFor="followup">Auto follow-up days</Label>
              <Input id="followup" type="number" value={settings.followupDays} onChange={(e) => update('followupDays', Number(e.target.value || 0))} />
            </div>
            <div className="md:col-span-3">
              <Button onClick={saveSettings}>Save preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Toast open={toastOpen} message="Settings saved." />
    </div>
  )
}
