import Image from 'next/image'

type Product = {
  name: string
  format: string
  price: string
  image: string
  alt: string
  tag?: string
}

const PRODUCTS: Product[] = [
  {
    name: 'Sokole Velvet',
    format: 'Eau de Parfum · 50ml',
    price: '€185',
    image: '/products/sokole-velvet-bottle.png',
    alt: 'Sokole Velvet cream flacon with pearl cap on marble',
    tag: 'The Signature',
  },
  {
    name: 'The Velvet Coffret',
    format: 'Gift Edition · 50ml',
    price: '€210',
    image: '/products/sokole-velvet-box-silk.png',
    alt: 'Sokole Velvet burgundy coffret on crimson silk',
    tag: 'Limited',
  },
  {
    name: 'Velvet Maison',
    format: 'Eau de Parfum · 50ml',
    price: '€185',
    image: '/products/sokole-velvet-box-marble.png',
    alt: 'Sokole Velvet burgundy box on marble beside a ceramic vase',
  },
]

export function VelvetShowcase() {
  return (
    <section id="collection" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:py-32">
      <div className="flex flex-col items-center text-center">
        <p className="text-[0.65rem] font-light tracking-luxe uppercase text-gold">
          The Collection
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-espresso text-balance sm:text-5xl">
          One fragrance, three rituals
        </h2>
        <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-espresso/65">
          Sokole Velvet in its purest expressions — chosen by hand, foiled in
          gold, and finished for the way you wear it.
        </p>
      </div>

      <div id="velvet" className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <article key={product.name} className="group flex flex-col">
            <a href="#" className="relative block aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              {product.tag ? (
                <span className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 text-[0.55rem] font-light tracking-wide-caps uppercase text-espresso backdrop-blur-sm">
                  {product.tag}
                </span>
              ) : null}
              <span className="absolute inset-x-4 bottom-4 translate-y-3 bg-espresso py-3.5 text-center text-[0.6rem] font-light tracking-luxe uppercase text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Add to Bag
              </span>
            </a>
            <div className="mt-6 flex flex-col items-center text-center">
              <h3 className="font-serif text-xl font-medium tracking-wide text-espresso">
                {product.name}
              </h3>
              <p className="mt-2 text-[0.65rem] font-light tracking-wide-caps uppercase text-espresso/55">
                {product.format}
              </p>
              <p className="mt-3 text-sm font-light text-espresso">{product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
