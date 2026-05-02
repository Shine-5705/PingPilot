import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2, Mail, Sparkles } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Label, Select, Textarea } from '../components/ui/FormControls'
import { Toast } from '../components/ui/Toast'
import { contacts as mockContacts, templates as defaultTemplates } from '../data/mockData'

const CAMPAIGN_STORAGE_KEY = 'coldping_campaigns_v2'
const TEMPLATE_STORAGE_KEY = 'coldping_templates'
const SETTINGS_STORAGE_KEY = 'coldping_workspace_settings'

const intents = ['Internship', 'Referral', 'Research collaboration', 'Sales', 'Other']
const templateModes = ['Saved template', 'Write my own template', 'LLM decides per profile']
const steps = [
  'Company and role filters',
  'Outreach intent',
  'Template strategy and prompt',
]

const createCampaignId = () => `cmp-${Date.now()}-${Math.floor(Math.random() * 1000)}`

const applyTokens = (text, person, context) =>
  text
    .replaceAll('{first_name}', person.name.split(' ')[0] || person.name)
    .replaceAll('{company}', person.company)
    .replaceAll('{role}', person.role)
    .replaceAll('{intent}', context.intent)

const buildPrompt = ({ person, form, senderEmail, templateText }) => {
  const intent = form.intent === 'Other' ? form.customIntent || 'Custom outreach' : form.intent
  return [
    'You are an expert outbound campaign assistant.',
    `Sender email: ${senderEmail}`,
    `Target recipient: ${person.name}`,
    `Recipient role: ${person.role}`,
    `Recipient company: ${person.company}`,
    `Recipient previous background hint: ${person.reason}`,
    `Outreach intent: ${intent}`,
    `Template mode: ${form.templateMode}`,
    `Template or base content: ${templateText || 'Generate from scratch while staying concise.'}`,
    `Extra context from user: ${form.extraContext || 'None'}`,
    `Global details for all emails: ${form.globalDetails || 'None'}`,
    'Generate a concise email with a strong personalized first line and a clear CTA.',
  ].join('\n')
}

export default function CampaignsPage() {
  const [step, setStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [toast, setToast] = useState({ open: false, message: '' })

  const savedTemplates = useMemo(() => {
    const raw = sessionStorage.getItem(TEMPLATE_STORAGE_KEY)
    if (!raw) return defaultTemplates

    try {
      const parsed = JSON.parse(raw)
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultTemplates
    } catch {
      return defaultTemplates
    }
  }, [])

  const senderEmail = useMemo(() => {
    const raw = sessionStorage.getItem(SETTINGS_STORAGE_KEY)
    if (!raw) return 'your.email@domain.com'
    try {
      const parsed = JSON.parse(raw)
      return parsed.senderEmail || 'your.email@domain.com'
    } catch {
      return 'your.email@domain.com'
    }
  }, [])

  const [campaigns, setCampaigns] = useState(() => {
    const raw = sessionStorage.getItem(CAMPAIGN_STORAGE_KEY)
    if (!raw) return []
    try {
      const parsed = JSON.parse(raw)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  })

  const [selectedCampaignId, setSelectedCampaignId] = useState(() => {
    const raw = sessionStorage.getItem(CAMPAIGN_STORAGE_KEY)
    if (!raw) return null
    try {
      const parsed = JSON.parse(raw)
      return Array.isArray(parsed) && parsed.length > 0 ? parsed[0].id : null
    } catch {
      return null
    }
  })

  const [form, setForm] = useState({
    company: 'Google',
    role: 'HR|Recruiter|Talent|Hiring',
    intent: 'Internship',
    customIntent: '',
    templateMode: 'Saved template',
    selectedTemplateId: savedTemplates[0]?.id || '',
    customMessage: '',
    extraContext: '',
    globalDetails: '',
  })

  const intentLabel = useMemo(
    () => (form.intent === 'Other' ? form.customIntent || 'Custom intent' : form.intent),
    [form.intent, form.customIntent],
  )

  const selectedCampaign = useMemo(
    () => campaigns.find((campaign) => campaign.id === selectedCampaignId) || null,
    [campaigns, selectedCampaignId],
  )

  const selectedTemplate = useMemo(
    () => savedTemplates.find((template) => template.id === form.selectedTemplateId) || null,
    [savedTemplates, form.selectedTemplateId],
  )

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const showToast = (message) => {
    setToast({ open: true, message })
    setTimeout(() => setToast({ open: false, message: '' }), 2400)
  }

  const persistCampaigns = (nextCampaigns) => {
    setCampaigns(nextCampaigns)
    sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(nextCampaigns))
  }

  const findPeople = () => {
    const roleRegex = new RegExp(form.role || '.*', 'i')
    const companyName = form.company.trim().toLowerCase()

    return mockContacts
      .filter((person) => {
        const companyMatch = companyName ? person.company.toLowerCase().includes(companyName) : true
        const roleMatch = roleRegex.test(person.role)
        return companyMatch && roleMatch
      })
      .slice(0, 25)
      .map((person) => ({
        ...person,
        status: 'Draft generated',
      }))
  }

  const handleGenerateCampaign = async () => {
    if (!form.company.trim()) {
      showToast('Target company is required.')
      return
    }

    if (form.intent === 'Other' && !form.customIntent.trim()) {
      showToast('Add a custom outreach intent title.')
      return
    }

    if (form.templateMode === 'Saved template' && !form.selectedTemplateId) {
      showToast('Pick a saved template from the Templates tab.')
      return
    }

    if (form.templateMode === 'Write my own template' && !form.customMessage.trim()) {
      showToast('Write your custom template message.')
      return
    }

    setIsGenerating(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))

      const prospects = findPeople()
      if (prospects.length === 0) {
        showToast('No matching people found. Broaden your regex or company filter.')
        return
      }

      const templateText =
        form.templateMode === 'Saved template'
          ? selectedTemplate?.body || ''
          : form.templateMode === 'Write my own template'
            ? form.customMessage
            : ''

      const enrichedProspects = prospects.map((person) => {
        const prompt = buildPrompt({
          person,
          form,
          senderEmail,
          templateText,
        })

        const baseDraft =
          form.templateMode === 'LLM decides per profile'
            ? `Hi ${person.name.split(' ')[0]},\n\nI came across your work in ${person.role} at ${person.company}. ${form.extraContext || 'I would value your perspective.'}\n\n${intentLabel} is the primary purpose of this note.\n\nBest regards,\n${senderEmail}`
            : `${applyTokens(templateText, person, { intent: intentLabel })}\n\n${form.extraContext || ''}\n${form.globalDetails || ''}\n\nBest regards,\n${senderEmail}`.trim()

        return {
          ...person,
          llmPrompt: prompt,
          draftEmail: baseDraft,
          status: 'Ready to send',
        }
      })

      const newCampaign = {
        id: createCampaignId(),
        name: `${form.company} - ${intentLabel}`,
        company: form.company,
        roleFilter: form.role,
        intent: intentLabel,
        templateMode: form.templateMode,
        selectedTemplateTitle: selectedTemplate?.title || null,
        contacts: enrichedProspects.length,
        sent: 0,
        replies: 0,
        status: 'Drafted',
        createdAt: new Date().toISOString(),
        customIntent: form.customIntent,
        customMessage: form.customMessage,
        extraContext: form.extraContext,
        globalDetails: form.globalDetails,
        senderEmail,
        prospects: enrichedProspects,
      }

      const nextCampaigns = [newCampaign, ...campaigns]
      persistCampaigns(nextCampaigns)
      setSelectedCampaignId(newCampaign.id)

      setStep(1)
      setForm({
        company: 'Google',
        role: 'HR|Recruiter|Talent|Hiring',
        intent: 'Internship',
        customIntent: '',
        templateMode: 'Saved template',
        selectedTemplateId: savedTemplates[0]?.id || '',
        customMessage: '',
        extraContext: '',
        globalDetails: '',
      })

      showToast(`Campaign created with ${enrichedProspects.length} prospects.`)
    } catch (error) {
      console.error('Error generating campaign:', error)
      showToast('Failed to generate campaign. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSendCampaign = async () => {
    if (!selectedCampaign) return

    setIsSending(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))

      const updatedCampaigns = campaigns.map((campaign) => {
        if (campaign.id !== selectedCampaign.id) return campaign

        const sentCount = campaign.prospects?.length || 0
        return {
          ...campaign,
          status: 'Sent',
          sent: sentCount,
          prospects: (campaign.prospects || []).map((person) => ({
            ...person,
            status: 'Sent',
          })),
        }
      })

      persistCampaigns(updatedCampaigns)
      showToast('Emails marked as sent. Connect backend API for real SMTP dispatch.')
    } catch {
      showToast('Unable to send campaign right now.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="space-y-6">
      <section className="reference-panel overflow-hidden bg-gradient-to-br from-white via-white to-brand-25 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Campaigns</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-slate-950">Campaign Builder</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              Build an outreach workflow using company filters, intent, and template strategy.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
            <Sparkles size={14} />
            Guided wizard flow
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.65fr]">
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <CardContent className="grid gap-2 md:grid-cols-3">
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
                {step}/3
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
                  {form.intent === 'Other' && (
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
                    {['Internship ask', 'Referral ask', 'Research collaboration', 'Custom campaign type'].map(
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
                      <Label htmlFor="templateMode">Template preference</Label>
                      <Select
                        id="templateMode"
                        value={form.templateMode}
                        onChange={(e) => update('templateMode', e.target.value)}
                      >
                        {templateModes.map((mode) => (
                          <option key={mode}>{mode}</option>
                        ))}
                      </Select>
                    </div>

                    {form.templateMode === 'Saved template' && (
                      <div>
                        <Label htmlFor="selectedTemplate">Template name (from Templates tab)</Label>
                        <Select
                          id="selectedTemplate"
                          value={form.selectedTemplateId}
                          onChange={(e) => update('selectedTemplateId', e.target.value)}
                        >
                          {savedTemplates.map((template) => (
                            <option key={template.id} value={template.id}>
                              {template.title}
                            </option>
                          ))}
                        </Select>
                      </div>
                    )}

                    {form.templateMode === 'Write my own template' && (
                      <div>
                        <Label htmlFor="customMessage">Your custom template</Label>
                        <Textarea
                          id="customMessage"
                          value={form.customMessage}
                          onChange={(e) => update('customMessage', e.target.value)}
                          placeholder="Use placeholders like {first_name}, {company}, and {role}."
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="extraContext">Extra message context (optional)</Label>
                      <Textarea
                        id="extraContext"
                        value={form.extraContext}
                        onChange={(e) => update('extraContext', e.target.value)}
                        placeholder="Mention your projects, strengths, or goal for this outreach."
                      />
                    </div>
                    <div>
                      <Label htmlFor="globalDetails">Global details for all messages</Label>
                      <Textarea
                        id="globalDetails"
                        value={form.globalDetails}
                        onChange={(e) => update('globalDetails', e.target.value)}
                        placeholder="Details that should be included for every recipient."
                      />
                    </div>
                  </div>

                  <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="rounded-xl bg-white p-4 text-sm text-slate-600">
                      <p className="font-medium text-slate-900">LLM prompt payload preview</p>
                      <p className="mt-2 whitespace-pre-wrap leading-6">
                        {buildPrompt({
                          person: {
                            name: 'Sample Recipient',
                            role: 'Recruiter',
                            company: form.company || 'Target Company',
                            reason: 'Background and previous work will be injected here.',
                          },
                          form,
                          senderEmail,
                          templateText:
                            form.templateMode === 'Saved template'
                              ? selectedTemplate?.body || ''
                              : form.templateMode === 'Write my own template'
                                ? form.customMessage
                                : '',
                        })}
                      </p>
                    </div>
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
                      Crustdata fetch and real SMTP send require backend APIs. This page prepares campaign payloads,
                      recipient rows, and per-recipient prompts for that pipeline.
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap justify-between gap-3 border-t border-slate-100 pt-4">
                <Button variant="secondary" onClick={() => setStep((prev) => Math.max(prev - 1, 1))}>
                  Back
                </Button>
                <Button
                  className="gap-2"
                  onClick={() => {
                    if (step === 3) {
                      handleGenerateCampaign()
                    } else {
                      setStep((prev) => Math.min(prev + 1, 3))
                    }
                  }}
                  disabled={isGenerating}
                >
                  {step === 3
                    ? isGenerating
                      ? 'Generating campaign...'
                      : 'Generate campaign'
                    : 'Next'}
                  {isGenerating ? <Loader2 size={15} className="animate-spin" /> : <ArrowRight size={15} />}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="border-b border-slate-100 bg-slate-50/70">
              <p className="section-kicker">Campaigns tab</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">All campaigns</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {campaigns.length === 0 && (
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                  No campaigns yet. Generate your first campaign from the 3-step flow.
                </p>
              )}

              {campaigns.map((campaign) => (
                <button
                  key={campaign.id}
                  onClick={() => setSelectedCampaignId(campaign.id)}
                  className={`w-full rounded-2xl border p-4 text-left text-sm transition-all duration-200 ${
                    selectedCampaignId === campaign.id
                      ? 'border-brand-200 bg-brand-50'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <p className="font-semibold text-slate-900">{campaign.name}</p>
                  <p className="mt-1 text-slate-600">
                    {campaign.contacts} prospects • {campaign.status}
                  </p>
                </button>
              ))}
            </CardContent>
          </Card>

          {selectedCampaign && (
            <Card className="overflow-hidden">
              <CardHeader className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/70">
                <div>
                  <p className="section-kicker">Campaign detail</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{selectedCampaign.name}</h3>
                </div>
                <Button className="gap-2" disabled={isSending} onClick={handleSendCampaign}>
                  {isSending ? <Loader2 size={14} className="animate-spin" /> : <Mail size={14} />}
                  {isSending ? 'Sending...' : 'Send to all'}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500">
                        <th className="px-3 py-2 font-medium">Name</th>
                        <th className="px-3 py-2 font-medium">Role</th>
                        <th className="px-3 py-2 font-medium">Company</th>
                        <th className="px-3 py-2 font-medium">Email</th>
                        <th className="px-3 py-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(selectedCampaign.prospects || []).map((person) => (
                        <tr key={person.id} className="border-b border-slate-100 last:border-b-0">
                          <td className="px-3 py-3 text-slate-900">{person.name}</td>
                          <td className="px-3 py-3 text-slate-600">{person.role}</td>
                          <td className="px-3 py-3 text-slate-600">{person.company}</td>
                          <td className="px-3 py-3 text-slate-600">{person.email}</td>
                          <td className="px-3 py-3">
                            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">
                              {person.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                  Sender: {selectedCampaign.senderEmail} • Template mode: {selectedCampaign.templateMode}
                </div>
              </CardContent>
            </Card>
          )}
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
                Template mode: <span className="font-medium text-slate-900">{form.templateMode}</span>.
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <p className="section-kicker">Flow</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Campaign states</h3>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {['Fetch contacts', 'Build prompts', 'Draft emails', 'Send campaign'].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                        step > index ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                  <span className="text-xs text-slate-400">{step > index ? 'Done' : 'Pending'}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <Toast open={toast.open} message={toast.message} />
    </div>
  )
}