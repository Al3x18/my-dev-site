import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import logoImg from '../assets/a-dev-no-background.png'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

dayjs.extend(customParseFormat)

const featuredProjects = [
  {
    name: 'Race Room',
    subtitle: 'Flutter app available on Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.adp.raceRoom',
  },
  {
    name: 'SwiftF1Telemetry',
    subtitle: 'Swift package',
    href: 'https://swiftpackageindex.com/Al3x18/SwiftF1Telemetry',
  },
  {
    name: 'Flutter W-Quake',
    subtitle: 'Open-source app',
    href: 'https://github.com/Al3x18/flutter_w-quake',
  },
]

const stackGroups = [
  {
    title: 'Mobile engineering',
    skills: ['Flutter', 'Dart', 'Bloc', 'Riverpod', 'Swift'],
  },
  {
    title: 'Backend and automation',
    skills: ['Python', 'Flask', 'API Design', 'Playwright', 'Selenium'],
  },
  {
    title: 'Tooling and data',
    skills: ['Git', 'SQL', 'PostgreSQL', 'Vite', 'Firebase', 'JavaScript', 'React'],
  },
]

function Header() {
  const birthDate = dayjs('18-01-1997', 'DD-MM-YYYY')
  const age = dayjs().diff(birthDate, 'year').toString()

  return (
    <header>
      <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
        <div>
          <h1 className="max-w-4xl font-serif text-[clamp(4rem,11vw,9.5rem)] font-normal leading-[0.78] tracking-[-0.075em]">
            Alex<br />De Pasquale
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-snug md:text-3xl">
            Full-Stack Developer <span className="font-serif italic">focused on</span> Flutter, Swift &amp; Python.
          </p>
        </div>

        <div className="border-t border-black pt-5 lg:border-l lg:border-t-0 lg:pb-1 lg:pl-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            I design and build mobile products with a strong focus on usability, performance, and clean architecture.
            My strongest stack today is Flutter with Bloc and Riverpod, Swift, and Python for backend and API automation.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="https://github.com/Al3x18" target="_blank" rel="noopener noreferrer"><Button size="sm">GitHub ↗</Button></a>
            <a href="https://www.linkedin.com/in/alex-de-pasquale-28535860/" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm">LinkedIn ↗</Button></a>
          </div>
        </div>
      </div>

      <div className="grid border border-black md:grid-cols-[220px_1fr]">
        <div className="flex min-h-32 items-center justify-center border-b border-black p-5 md:min-h-56 md:border-b-0 md:border-r md:p-8">
          <img src={logoImg} alt="Alex De Pasquale Logo" className="h-24 w-24 object-contain md:h-32 md:w-32" />
        </div>

        <div className="grid grid-cols-2">
          {[
            ['Name', 'Alex De Pasquale'],
            ['Age', age],
            ['Location', 'Italy 🇮🇹'],
            ['Education', 'L-31 Computer Science (In Progress)'],
          ].map(([label, value], index) => (
            <div key={label} className={`flex min-h-24 flex-col items-center justify-center p-3 text-center md:min-h-32 md:p-8 ${index < 2 ? 'border-b border-black' : ''} ${index % 2 === 0 ? 'border-r border-black' : ''}`}>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground md:text-xs md:tracking-[0.16em]">{label}</p>
              <p className="mt-2 text-sm font-bold leading-snug md:mt-3 md:text-lg">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.18em]">Core capabilities</p>
          <div className="border-t border-black">
            {stackGroups.map((group, index) => (
              <div key={group.title} className={`capability-row capability-row-${index + 1} border-b border-black px-4 py-5`}>
                <div>
                  <p className="mb-3 font-serif text-xl">{group.title}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.18em]">Selected work</p>
          <div className="border-t border-black">
            {featuredProjects.map((project) => (
              <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="selected-project group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-black px-4 py-5">
                <div>
                  <p className="font-serif text-2xl transition-transform group-hover:translate-x-1">{project.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{project.subtitle}</p>
                </div>
                <span className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
