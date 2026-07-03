import profile from '../data/profile.js'

// Tailwind needs full, static class names to detect them at build time —
// dynamic string interpolation like `bg-${accent}` gets missed by the
// scanner, so we map accent keys to complete class strings here.
const accentBg = {
  'secondary-container': 'bg-secondary-container',
  'primary-container': 'bg-primary-container',
  'tertiary-container': 'bg-tertiary-container',
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="flex flex-col gap-8 w-full mt-12">
      <h2 className="font-headline-md text-headline-md font-black uppercase text-on-background">
        TECHNICAL TOOLKIT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {profile.toolkit.map((group) => {
          const isDark = group.accent === 'dark'
          return (
            <div
              key={group.title}
              className="border-border-width border-on-background neo-shadow bg-surface-container-lowest"
            >
              <div
                className={`p-4 border-b-border-width border-on-background ${
                  isDark ? 'bg-on-background' : accentBg[group.accent]
                }`}
              >
                <h3
                  className={`font-headline-sm text-headline-sm font-bold uppercase ${
                    isDark ? 'text-on-primary' : 'text-on-background'
                  }`}
                >
                  {group.title.toUpperCase()}
                </h3>
              </div>
              <div className="p-6">
                <ul className="font-label-mono text-label-mono space-y-2 uppercase">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
