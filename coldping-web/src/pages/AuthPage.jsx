import { Globe } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Input, Label } from '../components/ui/FormControls'

export default function AuthPage() {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    navigate('/app/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <p className="text-sm text-slate-500">Welcome to ColdPing</p>
          <h1 className="text-2xl font-semibold text-slate-900">Sign in to continue</h1>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" className="w-full">Sign in</Button>
            <Button type="button" variant="secondary" className="w-full gap-2">
              <Globe size={16} />
              Continue with Google
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
              Start for free
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
