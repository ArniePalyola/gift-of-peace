import { Button } from '@/components/ui/button'
import { BookMockup } from '@/components/book-mockup'
import { AMAZON_URL, bookDetails } from '@/lib/book'

export function Purchase() {
  return (
    <section id="buy" className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[22rem_1fr] md:py-24">
        <div className="mx-auto flex w-full max-w-sm items-end gap-4">
          <BookMockup className="w-1/2" />
          <BookMockup side="back" className="w-1/2" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">Begin your journey to peace</h2>
          <p className="text-lg text-muted-foreground">
            Available now in paperback on Amazon.{' '}
            <span className="font-semibold text-foreground">$4.99</span>
          </p>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
            {bookDetails.map((detail) => (
              <div key={detail.label}>
                <dt className="text-muted-foreground">{detail.label}</dt>
                <dd className="font-medium">{detail.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 px-8 text-base"
              nativeButton={false}
              render={<a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" />}
            >
              Buy on Amazon
              <span className="sr-only"> (opens in a new tab)</span>
            </Button>
            <p className="text-sm text-muted-foreground">Makes a thoughtful gift — gift wrap available at checkout.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
