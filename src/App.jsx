import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkingOn from './components/WorkingOn'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Separator } from '@/components/ui/separator'

const loadingTasks = [
  { text: 'Loading universe...', duration: 500 },
  { text: 'Booting up creativity...', duration: 500 },
  { text: 'Teaching AI to be humble...', duration: 500 },
  { text: 'Downloading more RAM...', duration: 500 },
  { text: 'Convincing bugs to become features...', duration: 500 },
  { text: 'Almost there, promise!', duration: 500 },
]

function App() {
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTask, setCurrentTask] = useState('')

  useEffect(() => {
    let currentIndex = 0
    let totalDuration = loadingTasks.reduce((acc, task) => acc + task.duration, 0)
    let elapsed = 0
    
    const runTask = () => {
      if (currentIndex < loadingTasks.length) {
        const task = loadingTasks[currentIndex]
        setCurrentTask(task.text)
        elapsed += task.duration
        setProgress(Math.min(Math.round((elapsed / totalDuration) * 100), 100))
        currentIndex++
        setTimeout(runTask, task.duration)
      } else {
        setProgress(100)
        setTimeout(() => setLoaded(true), 400)
      }
    }
    
    setTimeout(runTask, 300)
    
    // Skip on click/keypress
    const handleSkip = () => {
      setLoaded(true)
    }
    
    setTimeout(() => {
      window.addEventListener('keydown', handleSkip)
      window.addEventListener('click', handleSkip)
    }, 1000)
    
    return () => {
      window.removeEventListener('keydown', handleSkip)
      window.removeEventListener('click', handleSkip)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {!loaded ? (
        <LoadingScreen progress={progress} currentTask={currentTask} />
      ) : (
        <main className="container py-6 md:py-10">
          <div className="mb-6 border-b border-border/60 pb-3 md:mb-8 md:pb-4">
            <nav className="flex w-full min-w-0 items-stretch gap-1.5 sm:gap-2">
              {[
                ['Home', '#home'],
                ['Skills', '#skills'],
                ['Projects', '#projects'],
                ['Now', '#working-on'],
                ['Education', '#education'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="min-w-0 flex-1 rounded-full border border-border/70 bg-secondary/35 px-1.5 py-1.5 text-center text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground sm:px-2.5 sm:text-sm md:px-3.5 md:py-2"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-10 md:space-y-12">
            <section id="home" className="scroll-mt-28 md:scroll-mt-32">
              <Header />
            </section>
            <Separator />
            <section id="skills" className="scroll-mt-28 md:scroll-mt-32">
              <Skills />
            </section>
            <Separator />
            <section id="projects" className="scroll-mt-28 md:scroll-mt-32">
              <Projects />
            </section>
            <Separator />
            <section id="working-on" className="scroll-mt-28 md:scroll-mt-32">
              <WorkingOn />
            </section>
            <Separator />
            <section id="education" className="scroll-mt-28 md:scroll-mt-32">
              <Education />
            </section>
            <Separator />
            <section id="contact" className="scroll-mt-28 md:scroll-mt-32">
              <Contact />
            </section>
          </div>

          <Footer />
        </main>
      )}
      <Analytics />
    </div>
  )
}

export default App
