import { SokoleWordmark } from './sokole-mark'

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: 'Shop',
    links: ['Sokole Velvet', 'The Coffret', 'Discovery Set', 'Gift Cards'],
  },
  {
    title: 'The House',
    links: ['Our Story', 'The Atelier', 'Sustainability', 'Journal'],
  },
  {
    title: 'Client Care',
    links: ['Contact', 'Shipping & Returns', 'Track Order', 'FAQ'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-espresso/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <SokoleWordmark />
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-espresso/60">
              Rare ingredients, composed with intention. A niche fragrance house
              for those who wear their story.
            </p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-[0.6rem] font-light tracking-luxe uppercase text-espresso/50">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-espresso/75 transition-colors hover:text-espresso"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-espresso/10 pt-8 sm:flex-row">
          <p className="text-[0.6rem] font-light tracking-wide-caps uppercase text-espresso/45">
            &copy; {new Date().getFullYear()} Sokole Fragrance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Privacy', 'Terms'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.6rem] font-light tracking-wide-caps uppercase text-espresso/45 transition-colors hover:text-espresso"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
