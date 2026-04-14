import { useState } from 'react'
import './Projects.css'

const projectsData = [
  {
    id: 'raceroom',
    name: 'Race Room',
    icon: '🏎️',
    status: 'live',
    platform: 'Flutter',
    description: 'Complete Formula 1 companion app with data, schedules, and standings',
    longDescription: 'A comprehensive Formula 1 application developed entirely in Flutter, providing fans with everything they need to follow the sport. Features include complete race calendar, driver and constructor standings, session results, and access to previous seasons data.',
    features: [
      'Complete F1 race calendar with session times',
      'Live driver & constructor standings',
      'Qualifying, race, and practice results',
      'Historical seasons data exploration',
      'FIA documents integration via Python backend',
      'Upcoming: FastF1 telemetry visualization'
    ],
    tech: ['Flutter', 'Dart', 'Python', 'Flask', 'FastF1'],
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.adp.raceRoom',
      backend: 'https://github.com/Al3x18/f1-race-room-backend'
    },
    highlight: true
  },
  {
    id: 'swiftf1telemetry',
    name: 'SwiftF1Telemetry',
    icon: '📡',
    status: 'early-dev',
    platform: 'Swift Package (SPM)',
    description:
      'Pure Swift library to load, parse, cache, and process Formula 1 telemetry on device',
    longDescription:
      'A Swift Package Manager library inspired by FastF1\'s workflow but with a Swift-native API: typed models, async/await, disk caching with configurable storage profiles, and chart-ready series for laps and driver comparisons. It resolves sessions from archive data, extracts fastest-lap telemetry, and supports two-driver comparisons \u2014 plus a small f1-cli for smoke testing. MIT licensed; documented releases (e.g. 0.3.2) via Git tags.',
    features: [
      'Session resolution from F1 archive data',
      'Fastest-lap lookup and per-lap telemetry extraction',
      'Two-driver fastest-lap comparison and delta series',
      'Chart-ready speed/delta series by distance',
      'Disk cache with configurable storage profiles',
      'Public Codable models; f1-cli smoke runner'
    ],
    tech: ['Swift', 'Swift PM', 'Async/Await', 'Codable', 'CLI'],
    links: {
      github: 'https://github.com/Al3x18/SwiftF1Telemetry'
    },
    highlight: true
  },
  {
    id: 'wquake',
    name: 'W-Quake',
    icon: '🌍',
    status: 'open-source',
    platform: 'Flutter',
    description: 'Real-time earthquake monitoring app with interactive maps and INGV/USGS data',
    longDescription: 'An open-source Flutter application for monitoring seismic events worldwide. Uses MVVM architecture with Riverpod for state management and GoRouter for navigation. Fetches data from official seismological institutes.',
    features: [
      'Real-time earthquake data from INGV & USGS APIs',
      'Interactive map with event markers',
      'Advanced filtering (magnitude, date, region)',
      'Multi-language support (EN/IT)',
      'User location & nearby events detection',
      'Clean MVVM architecture'
    ],
    tech: ['Flutter', 'Riverpod', 'GoRouter', 'flutter_map', 'Geolocator'],
    links: {
      github: 'https://github.com/Al3x18/flutter_w-quake'
    },
    highlight: false
  },
  {
    id: 'f1backend',
    name: 'F1 Race Room Backend',
    icon: '⚡',
    status: 'active',
    platform: 'Python',
    description: 'Backend service for scraping FIA documents and serving F1 data',
    longDescription: 'Python Flask backend that scrapes the official FIA website to retrieve download links for official F1 documents available for each event. Powers the Race Room mobile application.',
    features: [
      'FIA website scraping automation',
      'REST API endpoints for mobile app',
      'Document categorization by event',
      'Flask-based lightweight server',
      'Integration with Race Room app'
    ],
    tech: ['Python', 'Flask', 'Web Scraping', 'REST API'],
    links: {
      github: 'https://github.com/Al3x18/f1-race-room-backend'
    },
    highlight: false
  },
  {
    id: 'reports',
    name: 'Reports App',
    icon: '📋',
    status: 'university',
    platform: 'Flutter + Firebase',
    description: 'Reporting application with Firebase backend and admin management',
    longDescription: 'A Flutter application for creating and managing reports with Firebase integration. Includes photo attachments, user authentication, and an admin panel for report management. University project demonstrating Firebase integration.',
    features: [
      'Firebase Authentication',
      'Cloud Firestore database',
      'Photo upload with Firebase Storage',
      'Admin dashboard for report management',
      'User role management'
    ],
    tech: ['Flutter', 'Firebase', 'Cloud Firestore', 'Firebase Auth'],
    links: {
      github: 'https://github.com/Al3x18/reports'
    },
    highlight: false
  },
  {
    id: 'codebreaker',
    name: 'CodeBreaker',
    icon: '🎯',
    status: 'training',
    platform: 'SwiftUI',
    description: 'Mastermind-inspired game built with SwiftUI for learning and practice',
    longDescription: 'A SwiftUI training project based on the Stanford CS193p: iOS Development with SwiftUI course. CodeBreaker is a color guessing game inspired by Mastermind, created to improve SwiftUI skills and understand declarative UI patterns. Features custom views for pegs and feedback markers.',
    features: [
      'SwiftUI declarative UI framework',
      'Custom views for game pegs and markers',
      'Exact and partial match feedback system',
      'Color combination guessing mechanics',
      'Clean SwiftUI architecture',
      'Training project with learning comments'
    ],
    tech: ['Swift', 'SwiftUI', 'iOS'],
    links: {
      github: 'https://github.com/Al3x18/CodeBreaker'
    },
    highlight: false
  },
  {
    id: 'thematch',
    name: 'The Match',
    icon: '⚽',
    status: 'open-source',
    platform: 'Flutter',
    description: 'Football results app for top 5 EU leagues with match statistics and standings',
    longDescription: 'A Flutter application that allows users to check football results and statistics for the top 5 European leagues. Features include match results, standings, round selection, season history from 2010/11 to current, match details with goalscorers, and theme customization (light/dark mode).',
    features: [
      'Top 5 EU leagues results (Premier League, La Liga, Serie A, Bundesliga, Ligue 1)',
      'Match statistics with goalscorers and details',
      'League standings and table view',
      'Round and season selection (2010/11 to current)',
      'Match date and time information',
      'Light and dark theme support',
      'API-football integration for real-time data'
    ],
    tech: ['Flutter', 'Dart', 'REST API', 'API-football'],
    links: {
      github: 'https://github.com/Al3x18/the-match-public'
    },
    highlight: false
  },
  {
    id: 'hnews',
    name: 'H-News',
    icon: '📰',
    status: 'training',
    platform: 'SwiftUI',
    description: 'Hacker News reader app built with SwiftUI and MVVM architecture',
    longDescription: 'A SwiftUI training application for browsing Hacker News stories. Built as a learning exercise to practice SwiftUI development, MVVM architecture, and API integration. Features a clean and modern interface to browse through the newest stories posted on Hacker News with async/await for network requests.',
    features: [
      'Fetch and display new stories from Hacker News API',
      'Modern SwiftUI interface design',
      'MVVM architecture pattern implementation',
      'Async/await for network requests',
      'Settings view for app configuration',
      'Clean project structure with separation of concerns'
    ],
    tech: ['Swift', 'SwiftUI', 'MVVM', 'Async/Await', 'REST API'],
    links: {
      github: 'https://github.com/Al3x18/H-News'
    },
    highlight: false
  }
]

function Projects() {
  const [expandedProject, setExpandedProject] = useState('raceroom')

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  const getStatusBadge = (status) => {
    const statusMap = {
      'live': { label: 'LIVE', class: 'status-live' },
      'open-source': { label: 'OPEN SOURCE', class: 'status-opensource' },
      'active': { label: 'ACTIVE', class: 'status-active' },
      'early-dev': { label: 'EARLY DEV', class: 'status-early-dev' },
      'university': { label: 'UNIVERSITY PROJECT', class: 'status-university' },
      'training': { label: 'TRAINING PROJECT', class: 'status-training' }
    }
    return statusMap[status] || { label: status, class: '' }
  }

  return (
    <section className="section projects-section">
      <h2 className="section-title">ls -la ./projects</h2>
      
      <div className="projects-container">
        {projectsData.map((project, index) => {
          const status = getStatusBadge(project.status)
          return (
            <div 
              key={project.id}
              className={`project-card ${expandedProject === project.id ? 'expanded' : ''} ${project.highlight ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div 
                className="project-header"
                onClick={() => toggleProject(project.id)}
              >
                <div className="project-icon">{project.icon}</div>
                <div className="project-main-info">
                  <div className="project-title-row">
                    <h3 className="project-name">{project.name}</h3>
                    <span className={`status-badge ${status.class}`}>{status.label}</span>
                    {project.highlight && <span className="featured-badge">FEATURED PROJECT</span>}
                  </div>
                  <span className="project-platform">{project.platform}</span>
                </div>
                <div className={`expand-arrow ${expandedProject === project.id ? 'rotated' : ''}`}>
                  ›
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className={`project-details ${expandedProject === project.id ? 'show' : ''}`}>
                <div className="details-inner">
                  <p className="project-long-desc">{project.longDescription}</p>
                  
                  <div className="features-section">
                    <span className="section-label">$ cat features.md</span>
                    <ul className="features-list">
                      {project.features.map((feature, i) => (
                        <li key={i}><span className="feature-bullet">•</span> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="tech-stack">
                    <span className="section-label">Tech Stack:</span>
                    <div className="tech-tags">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-links">
                    {project.links.playstore && (
                      <a href={project.links.playstore} target="_blank" rel="noopener noreferrer" className="project-link playstore">
                        <span className="link-icon">▶</span> Play Store
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                        <span className="link-icon">⌥</span> GitHub
                      </a>
                    )}
                    {project.links.backend && (
                      <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className="project-link backend">
                        <span className="link-icon">⚙</span> Backend Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
