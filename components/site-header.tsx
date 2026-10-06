import { Button } from '@/components/ui/button'
import { AMAZON_URL } from '@/lib/book'

const links = [
  { href: '#about', label: 'The Book' },
  { href: '#chapters', label: 'Chapters' },
  { href: '#author', label: 'Author' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="font-serif text-xl tracking-wide">
          Arnie Palyola
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
            Buy on Amazon
          </a>
        </Button>
      </div>
    </header>
  )
}
