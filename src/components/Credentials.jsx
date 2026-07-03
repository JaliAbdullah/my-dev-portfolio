import profile from '../data/profile.js'

function CredentialCard({ cred, headerBg, statusLabel, statusStyle }) {
  return (
    <div className="border-border-width border-on-background neo-shadow bg-surface-container-lowest flex flex-col">
      <div className={`p-4 border-b-border-width border-on-background flex justify-between items-center ${headerBg}`}>
        <h4 className="font-body-lg text-body-lg font-bold uppercase">{cred.name}</h4>
        <span className={`px-4 py-2 font-label-mono text-label-mono uppercase font-bold whitespace-nowrap ${statusStyle}`}>
          {statusLabel}
        </span>
      </div>
      <div className="p-6 flex flex-col gap-2">
        <p className="font-label-mono text-label-mono uppercase">{cred.issuer}</p>
        <p className="font-body-md text-body-md">{cred.focus}</p>
      </div>
    </div>
  )
}

export default function Credentials() {
  const { completed, active } = profile.certifications
  return (
    <section id="credentials" className="flex flex-col gap-12 w-full mt-12">
      <h2 className="font-headline-md text-headline-md font-black uppercase text-on-background">
        CREDENTIALS &amp; TIMELINE
      </h2>

      <div className="flex flex-col gap-8">
        <h3 className="font-headline-sm text-headline-sm font-bold uppercase text-on-background bg-tertiary-container inline-block px-4 py-2 self-start border-border-width border-on-background">
          VERIFIED INDUSTRY CERTIFICATIONS
        </h3>
        <div className="flex flex-col gap-6">
          {completed.map((cred, i) => (
            <CredentialCard
              key={cred.name}
              cred={cred}
              headerBg={i % 2 === 0 ? 'bg-secondary-container' : 'bg-primary-container'}
              statusLabel="COMPLETED"
              statusStyle="bg-on-background text-on-primary"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="font-headline-sm text-headline-sm font-bold uppercase text-on-background bg-tertiary-container inline-block px-4 py-2 self-start border-border-width border-on-background">
          ACTIVE TECHNICAL ENHANCEMENTS
        </h3>
        <div className="flex flex-col gap-6">
          {active.map((cred, i) => (
            <CredentialCard
              key={cred.name}
              cred={cred}
              headerBg={i % 2 === 0 ? 'bg-primary-container' : 'bg-secondary-container'}
              statusLabel="IN PROGRESS"
              statusStyle="bg-surface-container-highest text-on-background border-border-width border-on-background"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
