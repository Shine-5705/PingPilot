import { clsx } from 'clsx'

const variants = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
  secondary:
    'bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50 focus-visible:outline-slate-500',
  ghost:
    'text-slate-600 hover:bg-slate-100 focus-visible:outline-slate-500',
}

export function Button({
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
