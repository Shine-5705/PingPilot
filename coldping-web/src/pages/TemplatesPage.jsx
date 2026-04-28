import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Textarea } from '../components/ui/FormControls'
import { templates as defaultTemplates } from '../data/mockData'

export default function TemplatesPage() {
  const [templates, setTemplates] = useState(defaultTemplates)

  const updateTemplate = (id, body) => {
    setTemplates((prev) => prev.map((template) => (template.id === id ? { ...template, body } : template)))
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

      <div className="grid gap-4 xl:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_-30px_rgba(16,24,40,0.18)]">
            <CardHeader className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/70">
              <h3 className="text-base font-semibold text-slate-900">{template.title}</h3>
              <Button variant="ghost" className="px-2 py-1 text-xs">
                Duplicate
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={template.body}
                onChange={(e) => updateTemplate(template.id, e.target.value)}
                className="min-h-40"
              />
              <Button variant="secondary" className="w-full text-sm">
                Save template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
