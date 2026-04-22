import { clsx } from 'clsx'

const statusStyles = {
  'Not Contacted': 'bg-slate-100 text-slate-700',
  Contacted: 'bg-blue-100 text-blue-700',
  Replied: 'bg-emerald-100 text-emerald-700',
  'Follow-up Needed': 'bg-amber-100 text-amber-700',
  Active: 'bg-indigo-100 text-indigo-700',
  Running: 'bg-sky-100 text-sky-700',
  Completed: 'bg-emerald-100 text-emerald-700',
}

export function StatusBadge({ status }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium',
        statusStyles[status] || 'bg-slate-100 text-slate-700',
      )}
    >
      {status}
    </span>
  )
}
