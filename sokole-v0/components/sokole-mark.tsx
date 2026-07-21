import { cn } from '@/lib/utils'

export function SokoleFlame({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 64"
      fill="none"
      aria-hidden="true"
      className={cn('text-gold', className)}
    >
      <path
        d="M24 2c-6 8 2 13 2 20 0 5-4 8-9 8 3 3 9 2 12-2 4-5 2-12-1-17-2-3-3-5-4-9Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M16 20c-5 6-9 13-9 22 0 10 7 18 15 18-6-4-9-10-9-17 0-8 4-14 8-19 3-4 5-8 4-13-3 2-6 5-9 9Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SokoleWordmark({
  className,
  markClassName,
}: {
  className?: string
  markClassName?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <SokoleFlame className={cn('h-7 w-auto', markClassName)} />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl font-medium tracking-[0.18em] text-espresso">
          SOKOLE
        </span>
        <span className="mt-1 text-[0.5rem] font-light tracking-luxe text-gold">
          FRAGRANCE
        </span>
      </span>
    </span>
  )
}
