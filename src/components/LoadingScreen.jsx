import './LoadingScreen.css'
import logoImg from '../assets/A-dev-logo.png'

function LoadingScreen({ progress, currentTask }) {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo */}
        <div className="loading-logo">
          <img src={logoImg} alt="Logo" className="logo-img" />
          <div className="logo-glow"></div>
        </div>
        
        {/* Name */}
        <h1 className="loading-name">Alex De Pasquale</h1>
        <p className="loading-role">Full-Stack & Mobile Developer</p>
        
        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
            <div className="progress-glow" style={{ left: `${progress}%` }}></div>
          </div>
          <span className="progress-percent">{progress}%</span>
        </div>
        
        {/* Current task */}
        <div className="task-container">
          <span className="task-icon">⚡</span>
          <span className="task-text">{currentTask}</span>
        </div>
        
        {/* Terminal decoration */}
        <div className="terminal-decoration">
          <span className="terminal-prompt">~/portfolio $</span>
          <span className="terminal-cmd">npm run awesome</span>
          <span className="terminal-cursor">▊</span>
        </div>
      </div>
      
      {/* Skip hint */}
      <p className="skip-hint">
        <span className="skip-key">↵</span> Press any key or tap to skip
      </p>
      
      {/* Background decoration */}
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>
    </div>
  )
}

export default LoadingScreen

