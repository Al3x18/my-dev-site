import { useState } from 'react'
import './Projects.css'

const projectsData = [
  {
    id: 'raceroom',
    name: 'Race Room',
    icon: '🏎️',
    status: 'live',
    platform: 'Flutter / Play Store',
    description: 'Complete Formula 1 companion app with real-time data, schedules, and standings',
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
      github: 'https://github.com/Al3x18/reports-app-public'
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
      'university': { label: 'UNIVERSITY', class: 'status-university' }
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
              {project.highlight && <div className="featured-badge">★ FEATURED PROJECT</div>}
              
              <div 
                className="project-header"
                onClick={() => toggleProject(project.id)}
              >
                <div className="project-icon">{project.icon}</div>
                <div className="project-main-info">
                  <div className="project-title-row">
                    <h3 className="project-name">{project.name}</h3>
                    <span className={`status-badge ${status.class}`}>{status.label}</span>
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

