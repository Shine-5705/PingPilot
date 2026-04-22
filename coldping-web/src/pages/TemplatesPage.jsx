import { useState } from 'react'
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
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Templates</h2>
        <p className="mt-1 text-sm text-slate-500">Manage your reusable outreach message blocks.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardHeader className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-900">{template.title}</h3>
              <Button variant="ghost" className="px-2 py-1 text-xs">
                Duplicate
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={template.body}
                onChange={(e) => updateTemplate(template.id, e.target.value)}
                className="min-h-36"
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
