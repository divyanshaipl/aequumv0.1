type LogoProps = {
  compact?: boolean
  className?: string
}

export function Logo({ compact = false, className = '' }: LogoProps) {
  return (
    <span className={`logo ${className}`.trim()} aria-label="Aequum">
      <svg className="logo-mark" viewBox="0 0 56 48" role="img" aria-hidden="true">
        <path
          d="M9 42 24.5 7.5c1.4-3.1 5.7-3.1 7.1 0L47 42h-9.8l-9.3-21.1L18.8 42H9Z"
          fill="currentColor"
        />
        <rect x="13" y="25" width="30" height="5" rx="2.5" fill="var(--teal)" />
      </svg>
      {!compact && <span className="logo-word">AEQUUM</span>}
    </span>
  )
}
