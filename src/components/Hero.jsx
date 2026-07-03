import profile from '../data/profile.js'

export default function Hero() {
  return (
    <section id="about" className="flex flex-col gap-8 md:gap-12 w-full mt-12 md:mt-24">
      <div className="bg-surface-container-lowest border-border-width border-on-background p-8 md:p-16 neo-shadow relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary-container rounded-full -z-0" />
        <div className="relative z-10 flex flex-col gap-6">
          <p className="font-label-mono text-label-mono uppercase bg-on-background text-on-primary inline-block self-start px-3 py-1">
            SYSTEM READY
          </p>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase break-words w-full max-w-4xl">
            HELLO! I&apos;M {profile.name}. {profile.tagline}
          </h1>
          <p className="font-body-lg text-body-lg uppercase bg-primary-container px-4 py-2 inline-block font-bold self-start">
            {profile.motto}
          </p>
          <p className="font-body-md text-body-md max-w-2xl">{profile.heroBlurb}</p>
        </div>
      </div>
      <a
        href="#contact"
        className="bg-secondary-container text-on-background border-border-width border-on-background p-6 font-headline-md text-headline-md font-black uppercase text-center neo-shadow neo-shadow-hover w-full self-center max-w-3xl block mt-8"
      >
        LET&apos;S CONNECT FOR INTERNSHIPS
      </a>
    </section>
  )
}
