const themes = [
  { title: 'Meditation', text: 'Reflect on one psalm a day and make quiet time with God a consistent practice.' },
  { title: 'Scripture', text: 'Grow in love for the Bible and learn the ancient practice of Lectio Divina.' },
  { title: 'Prayer', text: 'Find steadiness in faith through confession, worship and discernment.' },
  { title: 'Simple Joy', text: 'Let God shape you into who He intended — peaceful, kind and humble.' },
]

export function AboutBook() {
  return (
    <section id="about" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">About the book</p>
            <h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
              A day that begins with God
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-pretty">
              In a world of pride, worry and anxiety, <em>The Gift of Peace</em> asks a simple question: should
              Christians meditate? Drawing on Scripture and personal experience, Arnie Palyola shows that a focus on
              God through meditation is not only beneficial and healthy — it is part of God&apos;s plan for us to be close
              to Him.
            </p>
            <p className="text-pretty">
              Compact and approachable, this book walks you through meditation, simplicity, the Bible, and prayer, and
              closes with a practical 120-day psalms and meditation journal to help you make peace a daily practice.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((theme) => (
            <li key={theme.title} className="flex flex-col gap-3 bg-card p-7">
              <h3 className="font-serif text-2xl text-primary">{theme.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{theme.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
