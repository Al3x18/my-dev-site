import { useState, useEffect } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkingOn from './components/WorkingOn'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTask, setCurrentTask] = useState('')
  
  const loadingTasks = [
    { text: 'Booting up creativity...', duration: 400 },
    { text: 'Loading universe...', duration: 350 },
    { text: 'Calculating physics of success...', duration: 400 },
    { text: 'Compiling spaghetti code...', duration: 350 },
    { text: 'Brewing virtual coffee ☕', duration: 300 },
    { text: 'Teaching AI to be humble...', duration: 350 },
    { text: 'Downloading more RAM...', duration: 300 },
    { text: 'Convincing bugs to become features...', duration: 400 },
    { text: 'Warming up the pixels...', duration: 300 },
    { text: 'Almost there, promise!', duration: 350 },
  ]

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
    </div>
  )
}

export default App
