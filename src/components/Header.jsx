import { useState, useEffect } from 'react'
import logoImg from '../assets/A-dev-logo.png'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function Header() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Full-Stack Developer (Flutter, Swift, Python)'
  
  // Write fullText letter by letter with a delay of 50ms
  // in this function the state of typedText changes every 50ms until the fullText length is reached
  useEffect(() => {
    if (typedText.length === fullText.length) return;
  
    const timer = setTimeout(() => {
      setTypedText(fullText.slice(0, typedText.length + 1));
    }, 50);
  
    return () => clearTimeout(timer);
  }, [typedText]);

  function calculateMyAge() {
    dayjs.extend(customParseFormat);
    const birthDate = dayjs('18-01-1997', 'DD-MM-YYYY');
    const now = dayjs();
    return now.diff(birthDate, 'year').toString();
  }

  const developer = {
    name: "Alex De Pasquale",
    age: calculateMyAge(),
    location: "Italy 🇮🇹",
    education: "L-31 Computer Science (In Progress)",
    skills: {
      flutter: ["Flutter", "Dart", "Bloc", "Riverpod"],
      python: ["Python", "Flask", "Playwright", "Selenium"],
      javascript: ["JavaScript", "React"],
      c: ["C", "C++"],
      java: ["Java"],
      database: ["SQL", "PostgreSQL"],
      other: ["Swift", "Firebase"]
    },
    knowledge: ["Networks", "Linux", "Databases", "Blockchain"],
    mainProject: "Race Room 🏎️"
  }

  const featuredProjects = [
    {
      name: 'Race Room',
      subtitle: 'Flutter app available on Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.adp.raceRoom',
      highlighted: true,
    },
    {
      name: 'SwiftF1Telemetry',
      subtitle: 'Swift package',
      href: 'https://swiftpackageindex.com/Al3x18/SwiftF1Telemetry',
      highlighted: false,
    },
    {
      name: 'Flutter W-Quake',
      subtitle: 'Open-source app',
      href: 'https://github.com/Al3x18/flutter_w-quake',
      highlighted: false,
    },
  ]

  const stackGroups = [
    {
      title: 'Mobile engineering',
      tone: 'from-primary/20 to-primary/5 border-primary/30',
      skills: ['Flutter', 'Dart', 'Bloc', 'Riverpod', 'Swift'],
    },
    {
      title: 'Backend and automation',
      tone: 'from-accent/20 to-accent/5 border-accent/30',
      skills: ['Python', 'Flask', 'API Design', 'Playwright', 'Selenium'],
    },
    {
      title: 'Tooling and data',
      tone: 'from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-400/30',
      skills: ['Git', 'SQL', 'PostgreSQL', 'Vite', 'Firebase', 'JavaScript', 'React'],
    },
  ]

  return (
    <header className="space-y-6">
      <Card className="overflow-hidden border-primary/30 bg-card/80">
        <CardContent className="p-0">
          <div className="grid gap-6 p-6 md:grid-cols-[auto,1fr] md:p-8">
            <div className="relative mx-auto h-28 w-28 rounded-2xl border border-border bg-secondary/70 p-3 md:mx-0">
              <img src={logoImg} alt="Alex De Pasquale Logo" className="h-full w-full object-contain" />
              <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full border-2 border-background bg-emerald-400" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Alex De Pasquale</h1>
                <Badge variant="secondary" className="bg-primary/15 text-primary">Available</Badge>
              </div>

              <p className="mt-2 text-lg text-muted-foreground">
                {typedText}
                <span className="ml-0.5 animate-pulse text-primary">|</span>
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                I design and build mobile products with a strong focus on usability, performance, and clean architecture.
                My strongest stack today is Flutter (with Bloc and Riverpod), Swift, and Python for backend/API automation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/80">
        <CardContent className="p-5 md:p-6">
          <div className="grid gap-5 md:grid-cols-[1.1fr,1.9fr]">
            <div className="space-y-3 rounded-xl border border-border/70 bg-secondary/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Profile snapshot</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Name</span>
                  <span className="text-right font-medium text-foreground">{developer.name}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Age</span>
                  <span className="font-medium text-foreground">{developer.age}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium text-foreground">{developer.location}</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-muted-foreground">Education</span>
                  <span className="max-w-[13rem] text-right font-medium text-foreground">{developer.education}</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Profiles</p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://github.com/Al3x18" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">GitHub</Button>
                  </a>
                  <a href="https://www.linkedin.com/in/alex-de-pasquale-28535860/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">LinkedIn</Button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <h2 className="text-base font-semibold">Core capabilities</h2>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Competencies grouped by domain</p>
              </div>
              <div className="space-y-3">
                {stackGroups.map((group) => (
                  <div
                    key={group.title}
                    className={`rounded-xl border bg-gradient-to-r p-3.5 ${group.tone}`}
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/90">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((item) => (
                        <Badge key={item} variant="outline" className="border-white/20 bg-black/20 text-foreground">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      <Card className="bg-card/80">
        <CardContent className="p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-base font-semibold">Featured projects</h2>
            <Badge variant="secondary" className="bg-secondary/60 text-xs">Quick access</Badge>
          </div>

          <div className="grid gap-2 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg border p-3 transition hover:border-primary/40 hover:bg-secondary/40 ${
                  project.highlighted
                    ? 'border-primary/35 bg-primary/10'
                    : 'border-border bg-secondary/20'
                }`}
              >
                <p className="text-sm font-medium">{project.name}</p>
                <p className="text-xs text-muted-foreground">{project.subtitle}</p>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </header>
  )
}

export default Header
