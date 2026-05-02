import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function GoogleCallbackPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // Demo auth flow: always complete to dashboard from callback route.
    sessionStorage.removeItem('google_oauth_started')
    localStorage.setItem('coldping_authenticated', 'true')
    navigate('/app/dashboard', { replace: true })
  }, [navigate])

  return (
    <div className="min-h-screen bg-[#f5f3f0] px-6 py-20 text-center text-slate-700">
      <p className="font-medium">Completing Google sign in...</p>
    </div>
  )
}
