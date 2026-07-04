import profile from '../data/profile.js'

// Neo-brutalist stand-ins for the little floating tech badges — plain
// bordered circles with mono labels instead of colored brand icons, to stay
// on-palette. Edit the `label` / `top` values to reposition them vertically;
// they all sit in the same reserved right-hand column so they never overlap
// the picture.
const techBadges = [
  { label: 'JS', top: '4%' },
  { label: 'JAVA', top: '30%' },
  { label: 'PY', top: '56%' },
  { label: 'REACT', top: '82%' },
]

export default function Hero() {
  return (
    <section id="about" className="w-full mt-8 md:mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left: text content — no box, sits straight on the page background */}
        <div className="relative z-10 flex flex-col gap-6 px-margin-mobile md:px-margin-desktop py-12 lg:py-24 justify-center">
          <p className="font-label-mono text-label-mono uppercase bg-on-background text-on-primary inline-block self-start px-3 py-1">
            SYSTEM READY
          </p>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase break-words w-full">
            HELLO! I&apos;M {profile.name}. {profile.tagline}
          </h1>
          <p className="font-body-lg text-body-lg uppercase bg-primary-container px-4 py-2 inline-block font-bold self-start">
            {profile.motto}
          </p>
          <p className="font-body-md text-body-md max-w-2xl">{profile.heroBlurb}</p>
          <a
            href={profile.resumePdfHref}
            className="bg-secondary-container text-on-background border-border-width border-on-background px-6 py-4 font-headline-sm text-headline-sm font-black uppercase text-center neo-shadow neo-shadow-hover self-start flex items-center gap-2 mt-2"
          >
            GET RESUME
            <span className="material-symbols-outlined">download</span>
          </a>
        </div>

        {/* Right: big, borderless picture — badges live in a reserved right
            margin so they sit beside the photo, never on top of it */}
        <div className="relative flex items-end justify-center lg:justify-start overflow-hidden min-h-[480px] lg:min-h-[720px] pr-24 md:pr-32">
          {/* faint concentric rings, echoing the reference layout */}
          <div className="pointer-events-none absolute right-[-160px] top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-outline-variant/40" />
          <div className="pointer-events-none absolute right-[-240px] top-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-outline-variant/25" />

          <img
            src={profile.images.profile}
            alt={profile.name}
            className="relative z-0 h-full max-h-[760px] lg:max-h-[860px] w-auto object-contain object-bottom"
          />

          {/* reserved right-hand column: dashed arc + floating badges */}
          <div className="absolute right-4 md:right-8 top-0 h-full w-16 md:w-20 z-20">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 600"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 10 Q 20 150 60 300 Q 90 450 40 590"
                fill="none"
                stroke="#84727d"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
            </svg>
            {techBadges.map((badge) => (
              <div
                key={badge.label}
                style={{ top: badge.top }}
                className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface-container-lowest border-border-width border-on-background neo-shadow"
              >
                <span className="font-label-mono text-label-mono font-bold uppercase text-on-background">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
