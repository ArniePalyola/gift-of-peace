import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BookMockup } from '@/components/book-mockup'
import { AMAZON_URL } from '@/lib/book'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div className="flex flex-col gap-7">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            A new book by Arnie Palyola
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] text-balance md:text-7xl">
            The Gift of <em className="text-primary">Peace</em>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            A gentle guide to beginning each day with God — through meditation, Scripture and prayer — and discovering
            the simplicity, humility and quiet joy He intends for us.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-12 px-7 text-base"
              nativeButton={false}
              render={<a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" />}
            >
              Get your copy — $4.99
            </Button>
            <a href="#about" className="text-sm font-medium underline-offset-4 hover:underline">
              Read more about the book
            </a>
          </div>
          <p className="text-sm text-muted-foreground">Paperback · 90 pages · Includes a 120-day Psalms meditation journal</p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/morning-light.png"
              alt="An open Bible on a wooden table in soft morning light beside a cup of tea"
              fill
              priority
              sizes="(min-width: 768px) 28rem, 100vw"
              className="object-cover"
            />
          </div>
          <BookMockup priority className="absolute -bottom-8 -left-6 w-40 md:-left-16 md:w-52" />
        </div>
      </div>
    </section>
  )
}
