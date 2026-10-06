export function Author() {
  return (
    <section id="author" className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <div className="flex flex-col items-center gap-6">
        <div
          className="flex size-24 items-center justify-center rounded-full border border-border bg-secondary font-serif text-3xl text-primary"
          aria-hidden="true"
        >
          AP
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">About the author</p>
        <h2 className="font-serif text-4xl md:text-5xl">Arnie Palyola</h2>
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          Arnie Palyola writes from a life shaped by the daily practice of beginning each morning with God. In{' '}
          <em>The Gift of Peace</em>, he shares his own journey of meditation, prayer and Scripture — and the growth in
          peace, humility and simple joy that followed — so that readers can discover that same gift for themselves.
        </p>
      </div>
    </section>
  )
}
