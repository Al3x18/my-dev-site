import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'alexdepasquale1997@gmail.com'

  const copyEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section contact-section">
      <h2 className="section-title">./connect.sh</h2>
      
      <div className="contact-container">
        <div className="contact-terminal">
          <div className="terminal-line">
            <span className="prompt">alex@portfolio</span>:<span className="path">~</span>$ <span className="cmd">cat contact_info.txt</span>
          </div>
          <div className="contact-output">
            <p className="contact-intro">
              Looking to collaborate on interesting projects or just want to say hello? 
              Feel free to reach out through any of the channels below!
            </p>
          </div>
        </div>
        
        <div className="contact-cards">
          <a 
            href={`mailto:${email}`}
            className="contact-card email"
          >
            <div className="card-icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Personal Mail</h3>
              <p className="card-value">Send me a message</p>
              <span className="card-hint email-hint">
                {email}
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={copyEmail}
                  title="Copy email"
                >
                  {copied ? (
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                  )}
                </button>
              </span>
            </div>
            <span className="card-arrow">→</span>
          </a>
          
          <a 
            href="https://github.com/Al3x18" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card github"
          >
            <div className="card-icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">GitHub</h3>
              <p className="card-value">@Al3x18</p>
              <span className="card-hint">Check out my repositories</span>
            </div>
            <span className="card-arrow">→</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/alex-de-pasquale-28535860/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card linkedin"
          >
            <div className="card-icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">LinkedIn</h3>
              <p className="card-value">Alex De Pasquale</p>
              <span className="card-hint">Let's connect professionally</span>
            </div>
            <span className="card-arrow">→</span>
          </a>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.adp.raceRoom" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card playstore"
          >
            <div className="card-icon">
              <svg viewBox="0 0 24 24" className="icon-svg">
                <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Play Store</h3>
              <p className="card-value">Race Room</p>
              <span className="card-hint">Download my F1 app</span>
            </div>
            <span className="card-arrow">→</span>
          </a>
        </div>
        
        <div className="status-bar">
          <span className="status-item">
            <span className="status-dot online"></span>
            Available for opportunities
          </span>
          <span className="status-item">
            <span className="status-icon">📍</span>
            Italy
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact
