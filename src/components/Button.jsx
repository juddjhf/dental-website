import { ArrowUpRight } from 'lucide-react'

export default function Button({ children, onClick, href, variant = 'primary', className = '', type = 'button' }) {
  const classes = `button button-${variant} ${className}`

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </button>
  )
}
