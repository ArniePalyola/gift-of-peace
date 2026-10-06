import { chapters } from '@/lib/book'

export function Chapters() {
  return (
    <section id="chapters" className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Inside the book</p>
        <h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">Five chapters toward peace</h2>
      </div>
      <ol className="flex flex-col">
        {chapters.map((chapter) => (
          <li
            key={chapter.number}
            className="grid gap-3 border-t border-border py-8 last:border-b md:grid-cols-[10rem_1fr] md:gap-8"
          >
            <p className="font-serif text-lg italic text-accent-foreground/70">Chapter {chapter.number}</p>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-3xl">{chapter.title}</h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">{chapter.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
