import Image from 'next/image'

export function StoryBand() {
  return (
    <section id="story" className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-0 lg:grid-cols-2">
      <div className="relative min-h-[60vh] lg:min-h-[80vh]">
        <Image
          src="/products/sokole-velvet-box-marble.png"
          alt="Sokole Velvet burgundy box with gold foiling, resting on marble beside a stone vessel and dried florals"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-16 md:px-10 lg:py-24 xl:pr-16">
        <p className="text-[0.65rem] font-light tracking-luxe uppercase text-gold">
          A Reverence for Rare
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] text-espresso text-balance sm:text-5xl">
          Born from a conviction that fragrance is the most personal form of
          expression
        </h2>
        <div className="mt-8 max-w-md space-y-5 text-sm font-light leading-relaxed text-espresso/70">
          <p>
            Sokole is a small house with a long memory. We compose in limited
            batches, favouring naturals that cost more, last longer and speak
            more quietly than the alternatives.
          </p>
          <p>
            Every flacon is finished and wrapped by hand in our atelier, then
            sent with a set of samples so the fragrance can be lived with before
            it is loved.
          </p>
        </div>
        <a
          href="#"
          className="mt-10 inline-flex w-fit items-center border-b border-espresso/40 pb-1 text-[0.65rem] font-light tracking-wide-caps uppercase text-espresso transition-colors hover:border-espresso"
        >
          Inside the Atelier
        </a>
      </div>
    </section>
  )
}
