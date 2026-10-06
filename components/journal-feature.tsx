import Image from 'next/image'

export function JournalFeature() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src="/images/journal.png"
            alt="An open journal with a fountain pen, olive branch and candle on linen"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70">Included</p>
          <h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
            A 120-day Psalms meditation journal
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Turn reading into practice. The companion journal guides you through a psalm each day, with space to
            reflect, pray and record how God is shaping you over four months of consistent quiet time.
          </p>
          <blockquote className="border-l-2 border-accent pl-5 font-serif text-2xl italic leading-snug">
            {'“Great peace have they which love thy law.”'}
            <footer className="mt-2 font-sans text-sm not-italic text-primary-foreground/70">Psalm 119:165</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
