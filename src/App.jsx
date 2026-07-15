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
        <main className="portfolio-shell">
          <div className="site-nav">
            <a href="#home" className="site-mark" aria-label="Back to top">ADP<span>.</span></a>
            <nav className="nav-links" aria-label="Primary navigation">
              {[
                ['Home', '#home'],
                ['Projects', '#projects'],
                ['Skills', '#skills'],
                ['Now', '#working-on'],
                ['Education', '#education'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="nav-link"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="portfolio-content">
            <section id="home" className="portfolio-section hero-section">
              <Header />
            </section>
            <Separator className="section-rule" />
            <section id="projects" className="portfolio-section">
              <Projects />
            </section>
            <Separator className="section-rule" />
            <section id="skills" className="portfolio-section">
              <Skills />
            </section>
            <Separator className="section-rule" />
            <section id="working-on" className="portfolio-section">
              <WorkingOn />
            </section>
            <Separator className="section-rule" />
            <section id="education" className="portfolio-section">
              <Education />
            </section>
            <Separator className="section-rule" />
            <section id="contact" className="portfolio-section">
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
