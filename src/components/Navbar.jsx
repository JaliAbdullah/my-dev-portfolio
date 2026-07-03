import profile from '../data/profile.js'

const links = ['ABOUT', 'TOOLKIT', 'CREDENTIALS', 'PROJECTS', 'CONTACT']

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-background dark:bg-on-background z-50 flex justify-between items-center px-gutter py-4 max-w-[1440px] mx-auto">
      <div className="font-headline-sm text-headline-sm font-black tracking-tighter text-on-background dark:text-surface-bright uppercase">
        PORTFOLIO
      </div>
      <div className="hidden md:flex items-center gap-6 font-body-md text-body-md font-bold uppercase">
        {links.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`hover:translate-x-shadow-offset-pressed hover:translate-y-shadow-offset-pressed transition-transform active:translate-x-shadow-offset active:translate-y-shadow-offset ${
              i === 0 ? 'text-primary dark:text-primary-fixed-dim' : 'text-on-background dark:text-surface-variant'
            }`}
          >
            {link}
          </a>
        ))}
      </div>
      <a
        href={profile.resumePdfHref}
        className="bg-primary-container text-on-background border-border-width border-on-background font-body-md text-body-md font-bold uppercase px-6 py-2 neo-shadow neo-shadow-hover hidden md:block"
      >
        DOWNLOAD PDF RESUME
      </a>
      <button className="md:hidden block p-2 border-border-width border-on-background neo-shadow bg-primary-container">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  )
}
