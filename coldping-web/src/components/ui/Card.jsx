import { clsx } from 'clsx'

export function Card({ className, children }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-slate-200 bg-white/95 shadow-sm shadow-slate-950/5 backdrop-blur',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return <div className={clsx('border-b border-slate-100 p-5', className)}>{children}</div>
}

export function CardContent({ className, children }) {
  return <div className={clsx('p-5', className)}>{children}</div>
}
