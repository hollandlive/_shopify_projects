'use client'

import { useState } from 'react'
import { SokoleFlame } from './sokole-mark'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-espresso text-cream">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center px-6 py-24 text-center md:px-10 lg:py-32">
        <SokoleFlame className="h-10 w-auto" />
        <p className="mt-8 text-[0.65rem] font-light tracking-luxe uppercase text-gold">
          The Sokole Letter
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-tight text-balance sm:text-5xl">
          Be the first to know when Velvet returns
        </h2>
        <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-cream/70">
          Private launches, restock notices and an invitation to sample new
          compositions before anyone else.
        </p>

        {submitted ? (
          <p className="mt-10 text-sm font-light tracking-wide text-gold">
            Thank you — your invitation is on its way.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email.trim()) setSubmitted(true)
            }}
            className="mt-10 flex w-full max-w-md items-center border-b border-cream/30 focus-within:border-gold"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent py-3 text-sm font-light tracking-wide text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 py-3 pl-4 text-[0.6rem] font-light tracking-luxe uppercase text-cream transition-colors hover:text-gold"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
