const NOTES = [
  {
    step: 'I',
    phase: 'Top',
    accord: 'The Opening',
    detail: 'Calabrian bergamot, pink pepper and a breath of saffron.',
  },
  {
    step: 'II',
    phase: 'Heart',
    accord: 'The Velvet',
    detail: 'Turkish rose absolute, orris butter and warm violet leaf.',
  },
  {
    step: 'III',
    phase: 'Base',
    accord: 'The Trail',
    detail: 'Mysore sandalwood, ambergris, tonka and cashmere musk.',
  },
]

export function NotesSection() {
  return (
    <section className="border-y border-espresso/10 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:py-32">
        <div className="max-w-xl">
          <p className="text-[0.65rem] font-light tracking-luxe uppercase text-gold">
            The Composition
          </p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-espresso text-balance sm:text-5xl">
            An olfactory pyramid, built to unfold
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-espresso/10 bg-espresso/10 md:grid-cols-3">
          {NOTES.map((note) => (
            <div key={note.phase} className="flex flex-col gap-6 bg-secondary p-10 lg:p-12">
              <span className="font-serif text-3xl font-light text-gold">
                {note.step}
              </span>
              <div>
                <p className="text-[0.6rem] font-light tracking-luxe uppercase text-espresso/50">
                  {note.phase} Note
                </p>
                <h3 className="mt-3 font-serif text-2xl font-light text-espresso">
                  {note.accord}
                </h3>
              </div>
              <p className="text-sm font-light leading-relaxed text-espresso/70">
                {note.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
