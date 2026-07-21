import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Text column */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-10 lg:py-28 xl:pl-16">
          <p className="text-[0.65rem] font-light tracking-luxe uppercase text-gold">
            The Debut Eau de Parfum
          </p>
          <h1 className="mt-8 font-serif text-5xl font-light leading-[0.95] tracking-tight text-espresso text-balance sm:text-6xl xl:text-7xl">
            Sokole
            <br />
            Velvet
          </h1>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-espresso/70">
            Rare ingredients, composed with intention. A rich, velvety
            fragrance wrapped in warmth and quiet elegance — for those who
            enter a room and stay long after they have gone.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#velvet"
              className="group inline-flex items-center gap-3 bg-espresso px-9 py-4 text-[0.65rem] font-light tracking-luxe uppercase text-cream transition-colors hover:bg-wine"
            >
              Discover Velvet
            </a>
            <a
              href="#collection"
              className="inline-flex items-center border-b border-espresso/40 pb-1 text-[0.65rem] font-light tracking-wide-caps uppercase text-espresso transition-colors hover:border-espresso"
            >
              Explore the House
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="relative min-h-[70vh] lg:min-h-[88vh]">
          <Image
            src="/products/sokole-velvet-bottle.png"
            alt="Sokole Velvet eau de parfum, a cream lacquered flacon with a pearl cap, resting on marble beside dried gypsophila"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute bottom-6 left-6 flex items-end gap-3">
            <span className="text-[0.6rem] font-light tracking-luxe uppercase text-cream/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
              Eau de Parfum &mdash; 50ml
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
