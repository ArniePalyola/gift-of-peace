import Image from 'next/image'
import { cn } from '@/lib/utils'

type BookMockupProps = {
  className?: string
  side?: 'front' | 'back'
  priority?: boolean
}

const covers = {
  front: {
    src: '/images/cover-front.jpg',
    alt: 'Front cover of The Gift of Peace, Compact Edition, by Arnie Palyola — a white dog looking across a sunlit lawn',
  },
  back: {
    src: '/images/cover-back.jpg',
    alt: 'Back cover of The Gift of Peace with an About the Author note, a photo of Arnie Palyola and the ISBN barcode',
  },
}

export function BookMockup({ className, side = 'front', priority = false }: BookMockupProps) {
  const cover = covers[side]

  return (
    <div className={cn('relative aspect-[972/1500] w-full', className)}>
      <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-sm bg-foreground/20 blur-xl" aria-hidden="true" />
      <div className="relative h-full overflow-hidden rounded-r-sm rounded-l-[2px] shadow-2xl">
        <Image
          src={cover.src || '/placeholder.svg'}
          alt={cover.alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 16rem, 12rem"
          className="object-cover"
        />
        {side === 'front' && (
          <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 to-transparent" aria-hidden="true" />
        )}
      </div>
    </div>
  )
}
