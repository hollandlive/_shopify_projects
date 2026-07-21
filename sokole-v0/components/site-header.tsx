'use client'

import { useEffect, useState } from 'react'
import { Search, User, ShoppingBag } from 'lucide-react'
import { SokoleWordmark } from './sokole-mark'

const NAV_LEFT = ['Shop', 'The Collection']
const NAV_RIGHT = ['Discover', 'Contact']

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? 'border-espresso/10 bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-background'
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10"
        aria-label="Primary"
      >
        {/* Left nav */}
        <ul className="hidden flex-1 items-center gap-8 lg:flex">
          {NAV_LEFT.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[0.65rem] font-light tracking-wide-caps uppercase text-espresso/80 transition-colors hover:text-espresso"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Open menu"
        >
          <span className="h-px w-6 bg-espresso" />
          <span className="h-px w-6 bg-espresso" />
        </button>

        {/* Wordmark */}
        <a href="#" aria-label="Sokole Fragrance home" className="shrink-0">
          <SokoleWordmark />
        </a>

        {/* Right nav + icons */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_RIGHT.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[0.65rem] font-light tracking-wide-caps uppercase text-espresso/80 transition-colors hover:text-espresso"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-espresso">
            <button type="button" aria-label="Search" className="transition-opacity hover:opacity-60">
              <Search className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.25} />
            </button>
            <button type="button" aria-label="Account" className="hidden transition-opacity hover:opacity-60 sm:block">
              <User className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.25} />
            </button>
            <button type="button" aria-label="Cart" className="transition-opacity hover:opacity-60">
              <ShoppingBag className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
