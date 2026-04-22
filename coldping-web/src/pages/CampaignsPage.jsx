import { useMemo, useState } from 'react'
import { Sparkles, UploadCloud } from 'lucide-react'
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
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Campaign Builder</h2>
        <p className="mt-1 text-sm text-slate-500">
          Build an outreach session using Crustdata filters and AI personalization.
        </p>
      </div>

      <Card>
        <CardContent className="grid gap-2 md:grid-cols-4">
          {steps.map((title, index) => {
            const stepNumber = index + 1
            const active = step === stepNumber
            const completed = step > stepNumber
            return (
              <button
                key={title}
                onClick={() => setStep(stepNumber)}
                className={`rounded-xl border p-3 text-left text-sm transition ${
                  active
                    ? 'border-indigo-300 bg-indigo-50'
                    : completed
                      ? 'border-emerald-200 bg-emerald-50'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <p className="font-medium text-slate-900">Step {stepNumber}</p>
                <p className="text-slate-600">{title}</p>
              </button>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-slate-900">Step {step}</h3>
        </CardHeader>
        <CardContent className="space-y-4">
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
                <Input id="role" value={form.role} onChange={(e) => update('role', e.target.value)} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="intent">Outreach intent</Label>
                <Select id="intent" value={form.intent} onChange={(e) => update('intent', e.target.value)}>
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
            </div>
          )}

          {step === 3 && (
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
              <div>
                <Label htmlFor="resume">Resume upload</Label>
                <label
                  htmlFor="resume"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-sm text-slate-600 hover:bg-slate-100"
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
              <div className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2 text-indigo-700">
                <Sparkles size={16} />
                Ready to generate enriched contacts and personalized drafts.
              </div>
            </div>
          )}

          <div className="flex flex-wrap justify-between gap-3 border-t border-slate-100 pt-4">
            <Button variant="secondary" onClick={() => setStep((prev) => Math.max(prev - 1, 1))}>
              Back
            </Button>
            <Button onClick={() => setStep((prev) => Math.min(prev + 1, 4))}>
              {step === 4 ? 'Generate campaign' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
