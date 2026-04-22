import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Label, Select } from '../components/ui/FormControls'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Settings</h2>
        <p className="mt-1 text-sm text-slate-500">Profile, resume, API keys, and outreach preferences.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="text-base font-semibold text-slate-900">Profile</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" defaultValue="Shine Gupta" />
            </div>
            <div>
              <Label htmlFor="headline">Professional headline</Label>
              <Input id="headline" defaultValue="CS Student | AI + Data Systems" />
            </div>
            <div>
              <Label htmlFor="resume">Resume file</Label>
              <Input id="resume" type="file" />
            </div>
            <Button>Save profile</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-base font-semibold text-slate-900">Integrations</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="crust">Crustdata API key</Label>
              <Input id="crust" type="password" placeholder="cd_..." />
            </div>
            <div>
              <Label htmlFor="llm">LLM API key (Grok or Gemini)</Label>
              <Input id="llm" type="password" placeholder="xai_..." />
            </div>
            <div>
              <Label htmlFor="smtp">SMTP sender</Label>
              <Input id="smtp" placeholder="mail.yourdomain.com" />
            </div>
            <Button variant="secondary">Validate keys</Button>
          </CardContent>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader>
            <h3 className="text-base font-semibold text-slate-900">Preferences</h3>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            <div>
              <Label htmlFor="tone">Default message tone</Label>
              <Select id="tone" defaultValue="Professional">
                <option>Professional</option>
                <option>Friendly</option>
                <option>Direct</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="limit">Contacts per campaign</Label>
              <Input id="limit" type="number" defaultValue={50} />
            </div>
            <div>
              <Label htmlFor="followup">Auto follow-up days</Label>
              <Input id="followup" type="number" defaultValue={4} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
