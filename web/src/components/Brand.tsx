/** Qoralis identity mark; legacy inference imports remain unchanged. */
export function Brand({ word = false }: { word?: boolean }) {
  return (
    <span className={word ? "qoralis-brand full" : "qoralis-brand"} aria-label="Qoralis Engine">
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <defs><linearGradient id="qoralis-mark" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#71E0D1" /><stop offset="1" stopColor="#6687FF" />
        </linearGradient></defs>
        <circle cx="24" cy="24" r="17" fill="none" stroke="url(#qoralis-mark)" strokeWidth="4" />
        <path d="M30.5 30.5 40 40" stroke="url(#qoralis-mark)" strokeWidth="4" strokeLinecap="round" />
        <rect x="17" y="17" width="14" height="14" rx="4" fill="currentColor" />
        <circle cx="21" cy="21" r="1.5" fill="#71E0D1" /><circle cx="27" cy="21" r="1.5" fill="#6687FF" />
        <path d="M21 26h6" stroke="#71E0D1" strokeWidth="1.8" strokeLinecap="round" />
      </svg>{word && <span className="qoralis-word">Qoralis</span>}
    </span>
  )
}
