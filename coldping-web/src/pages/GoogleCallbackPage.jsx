import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function GoogleCallbackPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')

    // Placeholder flow: if Google returns an auth code, send user to app.
    // In production, exchange this code on your backend first.
    if (code) {
      navigate('/app/dashboard', { replace: true })
      return
    }

    navigate('/login', { replace: true })
  }, [navigate])

  return (
    <div className="min-h-screen bg-[#f5f3f0] px-6 py-20 text-center text-slate-700">
      <p className="font-medium">Completing Google sign in...</p>
    </div>
  )
}
