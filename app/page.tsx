import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutBook } from '@/components/about-book'
import { Chapters } from '@/components/chapters'
import { JournalFeature } from '@/components/journal-feature'
import { Author } from '@/components/author'
import { Purchase } from '@/components/purchase'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutBook />
        <Chapters />
        <JournalFeature />
        <Author />
        <Purchase />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; 2026 Arnie Palyola. All rights reserved.</p>
          <p className="font-serif italic">The Gift of Peace</p>
        </div>
      </footer>
    </>
  )
}
