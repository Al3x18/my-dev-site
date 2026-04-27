function LegalPage({ icon, title, subtitle, intro, sections, footer }) {
  return (
    <main className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/80 p-6 shadow-lg md:p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold md:text-3xl">{icon} {title}</h1>
          {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
        </header>

        {intro ? <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{intro}</p> : null}

        <div className="space-y-6">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="mb-2 text-lg font-semibold">{section.title}</h2>
              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {footer ? (
          <footer className="mt-8 border-t border-border pt-4 text-sm text-muted-foreground">
            {footer}
          </footer>
        ) : null}
      </div>
    </main>
  )
}

export default LegalPage
