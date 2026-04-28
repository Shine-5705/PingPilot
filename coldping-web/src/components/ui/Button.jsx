import { clsx } from 'clsx'

const variants = {
  primary:
    'bg-orange-500 text-white shadow-[0_10px_24px_-12px_rgba(255,136,0,0.65)] hover:bg-orange-600 focus-visible:outline-orange-500',
  secondary:
    'bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-500',
  ghost:
    'text-gray-600 hover:bg-gray-100 focus-visible:outline-gray-500',
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
        'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
