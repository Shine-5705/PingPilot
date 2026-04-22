export function Toast({ message, open }) {
  if (!open) return null

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-slide-up rounded-xl bg-slate-900 px-4 py-2 text-sm text-white shadow-xl shadow-slate-900/20">
      {message}
    </div>
  )
}
