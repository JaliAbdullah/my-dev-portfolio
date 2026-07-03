import profile from '../data/profile.js'

const accentBg = {
  'secondary-container': 'bg-secondary-container',
  'primary-container': 'bg-primary-container',
  'tertiary-container': 'bg-tertiary-container',
}

export default function Labs() {
  return (
    <section id="projects" className="flex flex-col gap-8 w-full mt-12">
      <h2 className="font-headline-md text-headline-md font-black uppercase text-on-background">
        FEATURED APPLICATION LABS
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {profile.labs.map((lab) => (
          <div
            key={lab.title}
            className="border-border-width border-on-background neo-shadow bg-surface-container-lowest flex flex-col h-full"
          >
            <div className={`p-6 border-b-border-width border-on-background ${accentBg[lab.accent]}`}>
              <h3 className="font-headline-sm text-headline-sm font-bold uppercase text-on-background">
                {lab.title}
              </h3>
              <p className="font-label-mono text-label-mono uppercase mt-1">{lab.focus}</p>
            </div>
            <div className="p-8 flex flex-col flex-grow gap-6">
              <p className="font-body-md text-body-md">{lab.description}</p>
              <ul className="font-body-md text-body-md list-disc list-inside space-y-1">
                {lab.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {lab.tech.map((t) => (
                  <span
                    key={t}
                    className="font-label-mono text-label-mono bg-surface-container-highest px-2 py-1 border-border-width border-on-background"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={lab.repo}
                className="bg-on-background text-on-primary border-border-width border-on-background px-6 py-4 font-headline-sm text-headline-sm font-bold uppercase text-center neo-shadow neo-shadow-hover w-full mt-4"
              >
                VIEW REPOSITORY ON GITHUB
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
