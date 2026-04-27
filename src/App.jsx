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
          <div className="sticky top-8 z-40 mb-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-card/95 via-card/90 to-secondary/70 p-2 shadow-lg shadow-black/20 backdrop-blur-xl md:p-3">
            <nav className="grid grid-cols-2 gap-2 text-sm md:grid-cols-6 md:gap-2.5">
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
                  className="rounded-full border border-white/10 bg-secondary/45 px-3.5 py-2 text-center font-medium text-muted-foreground transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15 hover:text-foreground"
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
