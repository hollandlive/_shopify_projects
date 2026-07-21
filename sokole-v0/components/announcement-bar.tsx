const MESSAGES = [
  'Complimentary samples with every order',
  'Wrapped by hand in the Sokole atelier',
  'Complimentary shipping across Europe',
  'A fragrance that stays long after you have gone',
]

export function AnnouncementBar() {
  const line = [...MESSAGES, ...MESSAGES]

  return (
    <div className="w-full overflow-hidden border-b border-espresso/10 bg-espresso text-cream">
      <div className="flex w-max animate-marquee">
        {line.map((message, index) => (
          <span
            key={index}
            className="flex shrink-0 items-center py-2.5 text-[0.6rem] font-light tracking-luxe uppercase"
          >
            {message}
            <span aria-hidden className="mx-8 text-gold">
              &#10022;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
