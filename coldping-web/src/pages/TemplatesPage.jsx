import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Textarea } from '../components/ui/FormControls'
import { Toast } from '../components/ui/Toast'
import { templates as defaultTemplates } from '../data/mockData'

const TEMPLATE_STORAGE_KEY = 'coldping_templates'

const createTemplateId = () => `tpl-${Date.now()}-${Math.floor(Math.random() * 1000)}`

export default function TemplatesPage() {
  const [templates, setTemplates] = useState(() => {
    const saved = sessionStorage.getItem(TEMPLATE_STORAGE_KEY)
    if (!saved) return defaultTemplates

    try {
      const parsed = JSON.parse(saved)
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultTemplates
    } catch {
      return defaultTemplates
    }
  })
  const [newTitle, setNewTitle] = useState('')
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const showToast = (message) => {
    setToastMessage(message)
    setToastOpen(true)
  }

  useEffect(() => {
    if (!toastOpen) return undefined
    const timer = setTimeout(() => setToastOpen(false), 2200)
    return () => clearTimeout(timer)
  }, [toastOpen])

  const persistTemplates = (nextTemplates, message) => {
    setTemplates(nextTemplates)
    sessionStorage.setItem(TEMPLATE_STORAGE_KEY, JSON.stringify(nextTemplates))
    if (message) showToast(message)
  }

  const updateTemplate = (id, body) => {
    setTemplates((prev) => prev.map((template) => (template.id === id ? { ...template, body } : template)))
  }

  const addTemplate = () => {
    if (!newTitle.trim()) {
      showToast('Template name is required.')
      return
    }

    const nextTemplates = [
      ...templates,
      {
        id: createTemplateId(),
        title: newTitle.trim(),
        body: 'Hi {first_name},',
      },
    ]

    persistTemplates(nextTemplates, `Template "${newTitle.trim()}" created.`)
    setNewTitle('')
  }

  const duplicateTemplate = (template) => {
    const nextTemplates = [
      ...templates,
      {
        ...template,
        id: createTemplateId(),
        title: `${template.title} (copy)`,
      },
    ]

    persistTemplates(nextTemplates, 'Template duplicated.')
  }

  const saveTemplate = () => {
    const nextTemplates = templates.map((template) => ({ ...template }))
    persistTemplates(nextTemplates, 'Template saved.')
  }

  return (
    <div className="space-y-6">
      <section className="reference-panel overflow-hidden bg-gradient-to-br from-white via-white to-brand-25 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Templates</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-slate-950">Reusable message blocks</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              Manage your reusable outreach message blocks.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
            <Sparkles size={14} />
            AI-ready snippets
          </div>
        </div>
      </section>

      <Card className="overflow-hidden">
        <CardHeader className="border-b border-slate-100 bg-slate-50/70">
          <h3 className="text-base font-semibold text-slate-900">Create template</h3>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Input
            placeholder="Template name (for campaign step 3)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="max-w-md"
          />
          <Button onClick={addTemplate}>Add template</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 xl:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_-30px_rgba(16,24,40,0.18)]">
            <CardHeader className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/70">
              <h3 className="text-base font-semibold text-slate-900">{template.title}</h3>
              <Button variant="ghost" className="px-2 py-1 text-xs" onClick={() => duplicateTemplate(template)}>
                Duplicate
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={template.body}
                onChange={(e) => updateTemplate(template.id, e.target.value)}
                className="min-h-40"
              />
              <Button variant="secondary" className="w-full text-sm" onClick={saveTemplate}>
                Save template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Toast open={toastOpen} message={toastMessage} />
    </div>
  )
}
