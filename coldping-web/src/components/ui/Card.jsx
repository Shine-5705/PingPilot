import { clsx } from 'clsx'

export function Card({ className, children }) {
  return (
    <div
      className={clsx(
        'rounded-3xl border border-gray-200 bg-white shadow-[0_18px_60px_-30px_rgba(16,24,40,0.28)] backdrop-blur',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return <div className={clsx('border-b border-gray-100 p-5', className)}>{children}</div>
}

export function CardContent({ className, children }) {
  return <div className={clsx('p-5', className)}>{children}</div>
}
