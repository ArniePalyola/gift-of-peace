import Image from 'next/image'

export function Author() {
  return (
    <section id="author" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
        <div className="w-56 shrink-0 md:w-72">
          <Image
            src="/images/arnie-palyola.jpg"
            alt="Black and white portrait of Arnie Palyola wearing glasses, with a cross on the wall behind him"
            width={600}
            height={600}
            sizes="(min-width: 768px) 18rem, 14rem"
            className="aspect-square w-full rounded-sm object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-5 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">About the author</p>
          <h2 className="font-serif text-4xl md:text-5xl">Arnie Palyola</h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Arnie is currently working on a Divinity degree with HCU, and is a perpetual student of the Bible, theology
            and the Greek New Testament. A widowed father devoted to biblical and devotional studies, Arnie offers{' '}
            <em>The Gift of Peace</em> of Christian thought.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            He has a true interdisciplinary passion for literature, history, philosophy and all of the arts, and is
            profoundly moved and challenged by what he reads. With a mind that sees connections everywhere — not only
            within disciplines, but between them — he isn&apos;t satisfied with simple answers, and does the extra work
            it takes to reach more nuanced interpretations. And he is passionate about everything!
          </p>
        </div>
      </div>
    </section>
  )
}
