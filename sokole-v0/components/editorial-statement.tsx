import Image from 'next/image'

export function EditorialStatement() {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden">
      <Image
        src="/products/sokole-velvet-box-silk.png"
        alt="The Sokole Velvet coffret in deep burgundy with gold foil, staged on crimson silk beside marble"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/75 via-espresso/30 to-transparent"
      />
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="max-w-xl text-cream">
          <p className="text-[0.65rem] font-light tracking-luxe uppercase text-gold">
            The Philosophy
          </p>
          <blockquote className="mt-8 font-serif text-4xl font-light leading-[1.1] text-balance sm:text-5xl">
            &ldquo;Every bottle begins as a question — what does beauty smell
            like without compromise?&rdquo;
          </blockquote>
          <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-cream/80">
            Our perfumers work with rare, hand-selected materials sourced from
            the same producers who have supplied the great houses for
            generations. Each composition is crafted to evolve on your skin over
            hours. Not a statement. An atmosphere.
          </p>
          <a
            href="#story"
            className="mt-10 inline-flex items-center border-b border-cream/40 pb-1 text-[0.65rem] font-light tracking-wide-caps uppercase text-cream transition-colors hover:border-cream"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}
