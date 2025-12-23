import { useState, useEffect } from 'react'
import './Header.css'
import logoImg from '../assets/A-dev-logo.png'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

function Header() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Full-Stack & Mobile Developer'
  
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
      flutter: ["Flutter", "Dart", "Riverpod", "GetX"],
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

  return (
    <header className="header">
      <div className="header-content">
        <div className="avatar-container">
          <div className="avatar">
            <img src={logoImg} alt="Alex De Pasquale Logo" className="avatar-img" />
          </div>
          <div className="status-indicator"></div>
        </div>
        
        <div className="header-info">
          <div className="name-line">
            <span className="prompt-symbol">~/</span>
            <h1 className="name">Alex De Pasquale</h1>
          </div>
          
          <div className="role-line">
            <span className="comment">// </span>
            <span className="role">{typedText}</span>
            <span className="cursor-inline">|</span>
          </div>
          
          <div className="bio">
            <div className="code-block">
              <span className="keyword">const</span>{' '}
              <span className="variable">developer</span> = {'{'}
            </div>
            
            <div className="code-content">
              <div className="code-line">
                <span className="property">name</span>: <span className="string">"{developer.name}"</span>,
              </div>
              <div className="code-line">
                <span className="property">age</span>: <span className="string">"{developer.age}"</span>,
              </div>
              <div className="code-line">
                <span className="property">location</span>: <span className="string">"{developer.location}"</span>,
              </div>
              <div className="code-line">
                <span className="property">education</span>: <span className="string">"{developer.education}"</span>,
              </div>
              <div className="code-line nested-obj">
                <span className="property">skills</span>: {'{'}
              </div>
              <div className="code-line indent-2">
                <span className="property">Flutter/Dart</span>: [<span className="string">"{developer.skills.flutter.join('", "')}"</span>],
              </div>
              <div className="code-line indent-2">
                <span className="property">Python</span>: [<span className="string">"{developer.skills.python.join('", "')}"</span>],
              </div>
              <div className="code-line indent-2">
                <span className="property">JavaScript</span>: [<span className="string">"{developer.skills.javascript.join('", "')}"</span>],
              </div>
              <div className="code-line indent-2">
                <span className="property">C/C++</span>: [<span className="string">"{developer.skills.c.join('", "')}"</span>],
              </div>
              <div className="code-line indent-2">
                <span className="property">Java</span>: [<span className="string">"{developer.skills.java.join('", "')}"</span>],
              </div>
              <div className="code-line indent-2">
                <span className="property">Database</span>: [<span className="string">"{developer.skills.database.join('", "')}"</span>],
              </div>
              <div className="code-line indent-2">
                <span className="property">Other</span>: [<span className="string">"{developer.skills.other.join('", "')}"</span>]
              </div>
              <div className="code-line nested-close">
                {'}'},
              </div>
              <div className="code-line">
                <span className="property">knowledge</span>: [<span className="string">"{developer.knowledge.join('", "')}"</span>],
              </div>
              <div className="code-line">
                <span className="property">mainProject</span>: <span className="string">"{developer.mainProject}"</span>,
              </div>
              {/* <div className="code-line">
                <span className="property">availableForWork</span>: <span className="boolean">{developer.availableForWork.toString()}</span>
              </div> */}
            </div>
            
            <div className="code-block">{'}'}</div>
          </div>
        </div>
      </div>
      
      <div className="social-links">
        <a 
          href="https://github.com/Al3x18" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link github"
        >
          <svg viewBox="0 0 24 24" className="social-icon">
            <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/alex-de-pasquale-28535860/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link linkedin"
        >
          <svg viewBox="0 0 24 24" className="social-icon">
            <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
        
        <a 
          href="https://play.google.com/store/apps/details?id=com.adp.raceRoom" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link playstore"
        >
          <svg viewBox="0 0 24 24" className="social-icon">
            <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <span>Play Store</span>
        </a>
      </div>
      
      <div className="terminal-info">
        <code>
          <span className="prompt">alex@portfolio</span>:<span className="path">~</span>$ <span className="cmd">neofetch</span>
        </code>
      </div>
    </header>
  )
}

export default Header
