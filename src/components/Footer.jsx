import profile from '../data/profile.js'

export default function Footer() {
  const { contact } = profile
  return (
    <footer id="contact" className="w-full block mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full min-h-[400px]">
        <a
          href={contact.emailHref}
          className="bg-primary-container flex flex-col justify-center items-center p-8 hover:bg-secondary hover:text-on-secondary transition-colors duration-200 cursor-pointer active:scale-95 group"
        >
          <span className="font-headline-md text-headline-md font-black uppercase text-on-background group-hover:text-on-secondary">
            EMAIL
          </span>
          <span className="material-symbols-outlined text-[64px] mt-4 text-on-background group-hover:text-on-secondary">
            mail
          </span>
          <span className="font-label-mono text-label-mono mt-2 lowercase">{contact.email}</span>
        </a>
        <a
          href={contact.githubHref}
          target="_blank"
          rel="noreferrer"
          className="bg-secondary-container flex flex-col justify-center items-center p-8 hover:bg-secondary hover:text-on-secondary transition-colors duration-200 cursor-pointer active:scale-95 group"
        >
          <span className="font-headline-md text-headline-md font-black uppercase text-on-background group-hover:text-on-secondary">
            GITHUB
          </span>
          <span className="material-symbols-outlined text-[64px] mt-4 text-on-background group-hover:text-on-secondary">
            code
          </span>
          <span className="font-label-mono text-label-mono mt-2 lowercase">{contact.github}</span>
        </a>
        <a
          href={contact.linkedinHref}
          target="_blank"
          rel="noreferrer"
          className="bg-surface-container-highest flex flex-col justify-center items-center p-8 hover:bg-secondary hover:text-on-secondary transition-colors duration-200 cursor-pointer active:scale-95 group"
        >
          <span className="font-headline-md text-headline-md font-black uppercase text-on-background group-hover:text-on-secondary">
            LINKEDIN
          </span>
          <span className="material-symbols-outlined text-[64px] mt-4 text-on-background group-hover:text-on-secondary">
            work
          </span>
          <span className="font-label-mono text-label-mono mt-2 lowercase">{contact.linkedin}</span>
        </a>
      </div>
      <div className="bg-on-background p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-headline-sm text-headline-sm text-on-primary uppercase font-bold max-w-xl">
          LET&apos;S TALK ABOUT YOUR TEAM&apos;S NEXT INTERN!
        </p>
        <div className="flex flex-col items-end gap-2">
          <p className="font-label-mono text-label-mono text-secondary-fixed uppercase">
            © 2026 {profile.name}. {profile.footerNote}
          </p>
          <p className="font-label-mono text-[10px] text-surface-variant uppercase tracking-widest">
            [ SYS_LOC: {profile.sysLoc} // STATUS: READY_FOR_DEPLOYMENT ]
          </p>
        </div>
      </div>
    </footer>
  )
}
