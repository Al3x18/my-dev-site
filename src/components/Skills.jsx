import { useState } from 'react'
import './Skills.css'

const skillsData = [
  {
    id: 'flutter',
    name: 'Flutter & Dart',
    icon: '📱',
    level: 'Advanced',
    color: '#02569B',
    accentColor: '#54C5F8',
    description: 'Cross-platform mobile development framework',
    details: [
      'Widget architecture & Navigation patterns',
      'State Management: Riverpod, GetX',
      'Firebase integration (Auth, Firestore, Storage)',
      'Maps integration (flutter_map)',
      'RevenueCat for in-app purchases',
      'Local storage (Shared Preferences)',
      'Custom UI/UX implementations',
      'Play Store deployment experience'
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    level: 'Intermediate',
    color: '#3776ab',
    accentColor: '#FFD43B',
    description: 'Backend development & Automation',
    details: [
      'Flask framework for REST APIs',
      'Web scraping: Selenium, Playwright',
      'Backend service development',
      'FastF1 integration (F1 telemetry)',
      'API design and implementation',
      'Data processing and automation'
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    level: 'Basic-Intermediate',
    color: '#F7DF1E',
    accentColor: '#F7DF1E',
    description: 'Web development & Dynamic applications',
    details: [
      'ES6+ modern syntax and features',
      'DOM manipulation and events',
      'Asynchronous programming (Promises, async/await)',
      'Fetch API for HTTP requests',
      'JSON data handling',
      'Basic Node.js understanding'
    ]
  },
  {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    level: 'Basic-Intermediate',
    color: '#61DAFB',
    accentColor: '#61DAFB',
    description: 'Modern frontend development library',
    details: [
      'Component-based architecture',
      'Hooks (useState, useEffect, custom hooks)',
      'JSX syntax and best practices',
      'Props and state management',
      'Vite for project setup',
      'CSS-in-JS and modular styling'
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    level: 'Intermediate',
    color: '#f89820',
    accentColor: '#5382A1',
    description: 'Object-Oriented Programming & Enterprise',
    details: [
      'OOP principles: Classes, Inheritance, Polymorphism',
      'Java EE with Apache Tomcat',
      'Database connectivity (JDBC)',
      'Remote web request handling',
      'Enterprise application architecture',
      'University project experience'
    ]
  },
  {
    id: 'c',
    name: 'C',
    icon: '⚙️',
    level: 'Intermediate',
    color: '#A8B9CC',
    accentColor: '#00599C',
    description: 'Systems Programming & Data Structures',
    details: [
      'Linked Lists implementation',
      'Binary Trees & traversal algorithms',
      'Queue & Stack data structures',
      'Memory management fundamentals',
      'Pointers and dynamic allocation',
      'Low-level programming concepts'
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: '🎮',
    level: 'Basic-Intermediate',
    color: '#00599C',
    accentColor: '#9C033A',
    description: 'Game Development & Systems',
    details: [
      'Language syntax and OOP',
      '2D Game Engine development basics',
      'Entity Component System (ECS) pattern',
      'Game loop architecture',
      'Performance optimization concepts'
    ]
  },
  {
    id: 'sql',
    name: 'SQL & Databases',
    icon: '🗄️',
    level: 'Intermediate',
    color: '#336791',
    accentColor: '#F29111',
    description: 'Relational Database Management',
    details: [
      'SQL queries and optimization',
      'PostgreSQL database management',
      'E-R (Entity-Relationship) modeling',
      'Logical and conceptual schema design',
      'ACID properties understanding',
      'Physical memory management concepts',
      'Database normalization'
    ]
  },
  {
    id: 'rest',
    name: 'REST APIs',
    icon: '🌐',
    level: 'Intermediate',
    color: '#FF6B35',
    accentColor: '#00D4FF',
    description: 'API Design & Integration',
    details: [
      'RESTful API design principles',
      'Flask backend implementation',
      'HTTP methods and status codes',
      'JSON data handling',
      'API endpoint architecture',
      'Third-party API integration'
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: '🍎',
    level: 'Basic',
    color: '#FA7343',
    accentColor: '#FF9F0A',
    description: 'iOS Development basics',
    details: [
      'Language syntax and structure',
      'Variables, constants and data types',
      'Optionals and unwrapping',
      'Control flow and loops',
      'Functions and closures',
      'Basic OOP concepts in Swift'
    ]
  }
]

function Skills() {
  const [expandedSkill, setExpandedSkill] = useState(null)

  const toggleSkill = (id) => {
    setExpandedSkill(expandedSkill === id ? null : id)
  }

  return (
    <section className="section skills-section">
      <h2 className="section-title">skills --list</h2>
      
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div 
            key={skill.id}
            className={`skill-item ${expandedSkill === skill.id ? 'expanded' : ''}`}
            style={{ 
              '--skill-color': skill.color,
              '--skill-accent': skill.accentColor,
              animationDelay: `${index * 0.05}s`
            }}
          >
            <div 
              className="skill-header"
              onClick={() => toggleSkill(skill.id)}
            >
              <div className="skill-left">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-description">{skill.description}</span>
                </div>
              </div>
              <div className="skill-right">
                <span className="skill-level">{skill.level}</span>
                <div className={`expand-icon ${expandedSkill === skill.id ? 'rotated' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className={`skill-details ${expandedSkill === skill.id ? 'show' : ''}`}>
              <div className="details-content">
                <span className="details-label">$ cat {skill.id}_details.txt</span>
                <ul className="details-list">
                  {skill.details.map((detail, i) => (
                    <li key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                      <span className="bullet">→</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
