import { cn } from '@/lib/utils'

export function BookMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn('relative aspect-[5.06/7.81] w-full', className)}
      role="img"
      aria-label="The Gift of Peace by Arnie Palyola, paperback book"
    >
      <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-sm bg-foreground/20 blur-xl" aria-hidden="true" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-r-sm rounded-l-[2px] bg-primary text-primary-foreground shadow-2xl">
        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" aria-hidden="true" />
        <div className="absolute inset-3 rounded-[2px] border border-accent/50" aria-hidden="true" />
        <div className="relative flex flex-1 flex-col items-center justify-between px-6 py-10 text-center">
          <p className="text-[0.6rem] uppercase tracking-[0.35em] text-primary-foreground/70">Compact Edition</p>
          <div className="flex flex-col items-center gap-4">
            <svg viewBox="0 0 40 40" className="size-10 text-accent" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <path d="M20 6v28M6 20h28" strokeLinecap="round" />
              <circle cx="20" cy="20" r="13" opacity="0.5" />
            </svg>
            <h3 className="font-serif text-4xl leading-none text-balance">
              <span className="block text-xl italic text-primary-foreground/80">The Gift of</span>
              Peace
            </h3>
            <div className="h-px w-12 bg-accent" aria-hidden="true" />
            <p className="max-w-[12rem] text-[0.65rem] leading-relaxed text-primary-foreground/75">
              Meditation, Scripture &amp; Prayer with a 120-Day Psalms Journal
            </p>
          </div>
          <p className="whitespace-nowrap font-serif text-sm tracking-[0.18em] uppercase">Arnie Palyola</p>
        </div>
      </div>
    </div>
  )
}
