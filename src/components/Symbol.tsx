/** Original DarlingAgent mark: an open ring, a rotated square, and a single seafoam node. */
export function Symbol({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M24 3a21 21 0 1 0 21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="14" y="14" width="20" height="20" transform="rotate(45 24 24)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="42" cy="9" r="3" fill="#A8D8CC" />
      <line x1="24" y1="3" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
