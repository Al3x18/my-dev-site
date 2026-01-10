import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkingOn from './components/WorkingOn'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
    <div className="app">
      <div className="scanlines"></div>
      <div className="noise"></div>
      
      {!loaded ? (
        <LoadingScreen progress={progress} currentTask={currentTask} />
      ) : (
        <main className="main-content">
          <Header />
          <Skills />
          <Projects />
          <WorkingOn />
          <Education />
          <Contact />
          <Footer />
        </main>
      )}
      <Analytics />
    </div>
  )
}

export default App
