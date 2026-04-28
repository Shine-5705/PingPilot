import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, Sparkles, UploadCloud } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Label, Select, Textarea } from '../components/ui/FormControls'

const intents = ['Internship', 'Referral', 'Research', 'Custom']
const steps = [
  'Company and role filters',
  'Outreach intent',
  'Message and resume',
  'Review and generate',
]

export default function CampaignsPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    company: 'Google',
    role: 'HR|Recruiter|Talent|Hiring',
    intent: 'Internship',
    customIntent: '',
    note: '',
    globalDetails: '',
    resume: null,
  })

  const intentLabel = useMemo(
    () => (form.intent === 'Custom' ? form.customIntent || 'Custom intent' : form.intent),
    [form.intent, form.customIntent],
  )

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  return (
    <div className="space-y-6">
      <section className="reference-panel overflow-hidden bg-gradient-to-br from-white via-white to-brand-25 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Campaigns</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-slate-950">Campaign Builder</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              Build an outreach session using Crustdata filters and AI personalization.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
            <Sparkles size={14} />
            Guided wizard flow
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.55fr]">
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <CardContent className="grid gap-2 md:grid-cols-4">
              {steps.map((title, index) => {
                const stepNumber = index + 1
                const active = step === stepNumber
                const completed = step > stepNumber
                return (
                  <button
                    key={title}
                    onClick={() => setStep(stepNumber)}
                    className={`rounded-2xl border p-4 text-left text-sm transition-all duration-300 ${
                      active
                        ? 'border-brand-200 bg-brand-50 shadow-sm'
                        : completed
                          ? 'border-emerald-200 bg-emerald-50'
                          : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:bg-slate-50'
                    }`}
                  >
                    <p className="flex items-center gap-2 font-medium text-slate-900">
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                          active
                            ? 'bg-brand-500 text-white'
                            : completed
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {stepNumber}
                      </span>
                      Step {stepNumber}
                    </p>
                    <p className="mt-2 text-slate-600">{title}</p>
                  </button>
                )
              })}
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/70">
              <div>
                <p className="section-kicker">Wizard</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">Step {step}</h3>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                {step}/4
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              {step === 1 && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="company">Target company</Label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Role regex filter</Label>
                    <Input
                      id="role"
                      value={form.role}
                      onChange={(e) => update('role', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="intent">Outreach intent</Label>
                    <Select
                      id="intent"
                      value={form.intent}
                      onChange={(e) => update('intent', e.target.value)}
                    >
                      {intents.map((intent) => (
                        <option key={intent} value={intent}>
                          {intent}
                        </option>
                      ))}
                    </Select>
                  </div>
                  {form.intent === 'Custom' && (
                    <div>
                      <Label htmlFor="customIntent">Custom intent title</Label>
                      <Input
                        id="customIntent"
                        value={form.customIntent}
                        onChange={(e) => update('customIntent', e.target.value)}
                        placeholder="e.g., Recommendation letter"
                      />
                    </div>
                  )}
                  <div className="md:col-span-2 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 md:grid-cols-2">
                    {['Internship ask', 'Referral ask', 'Research collaboration', 'Custom recruiter note'].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-600" />
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="note">Extra message context (optional)</Label>
                      <Textarea
                        id="note"
                        value={form.note}
                        onChange={(e) => update('note', e.target.value)}
                        placeholder="I want to work under your guidance and contribute to research in LLM eval."
                      />
                    </div>
                    <div>
                      <Label htmlFor="globalDetails">Global details for all messages</Label>
                      <Textarea
                        id="globalDetails"
                        value={form.globalDetails}
                        onChange={(e) => update('globalDetails', e.target.value)}
                        placeholder="Add concise details to include in every email beyond resume information."
                      />
                    </div>
                  </div>

                  <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div>
                      <Label htmlFor="resume">Resume upload</Label>
                      <label
                        htmlFor="resume"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-8 text-sm text-slate-600 transition hover:border-brand-200 hover:bg-brand-50"
                      >
                        <UploadCloud size={18} />
                        {form.resume ? form.resume.name : 'Upload PDF / DOCX'}
                      </label>
                      <input
                        id="resume"
                        type="file"
                        className="hidden"
                        onChange={(e) => update('resume', e.target.files?.[0] || null)}
                      />
                    </div>
                    <div className="rounded-xl bg-white p-4 text-sm text-slate-600">
                      <p className="font-medium text-slate-900">Preview notes</p>
                      <p className="mt-2 leading-6">
                        Use this space for positioning notes that should appear in every generated draft.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
                  <p>
                    <strong>Company:</strong> {form.company}
                  </p>
                  <p>
                    <strong>Role filter:</strong> {form.role}
                  </p>
                  <p>
                    <strong>Intent:</strong> {intentLabel}
                  </p>
                  <p>
                    <strong>Extra context:</strong> {form.note || 'None'}
                  </p>
                  <p>
                    <strong>Global details:</strong> {form.globalDetails || 'None'}
                  </p>
                  <p>
                    <strong>Resume:</strong> {form.resume?.name || 'Not uploaded'}
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-xl bg-brand-50 px-3 py-2 text-brand-700">
                    <Sparkles size={16} />
                    Ready to generate enriched contacts and personalized drafts.
                  </div>
                </div>
              )}

              <div className="flex flex-wrap justify-between gap-3 border-t border-slate-100 pt-4">
                <Button variant="secondary" onClick={() => setStep((prev) => Math.max(prev - 1, 1))}>
                  Back
                </Button>
                <Button
                  className="gap-2"
                  onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                >
                  {step === 4 ? 'Generate campaign' : 'Next'}
                  <ArrowRight size={15} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 xl:sticky xl:top-6 xl:self-start">
          <Card className="overflow-hidden">
            <CardHeader>
              <p className="section-kicker">Session summary</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">What will happen</h3>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <div className="rounded-xl bg-slate-50 p-3">
                Search people at <span className="font-medium text-slate-900">{form.company}</span> with role filter{' '}
                <span className="font-medium text-slate-900">{form.role}</span>.
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                Generate drafts for <span className="font-medium text-slate-900">{intentLabel}</span> outreach.
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                Attach resume context and global notes for personalization.
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <p className="section-kicker">Flow</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Campaign states</h3>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {['Search contacts', 'Enrich profiles', 'Generate messages', 'Track replies'].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                        step > index + 1 ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                  <span className="text-xs text-slate-400">{step > index + 1 ? 'Done' : 'Pending'}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}