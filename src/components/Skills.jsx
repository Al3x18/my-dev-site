import { useState, useRef, useEffect } from 'react'
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
      'Widget architecture: StatelessWidget, StatefulWidget, and custom widgets',
      'Navigation: Navigator, Routes, and navigation patterns',
      'State Management: Riverpod, GetX for reactive state handling',
      'MVVM Architecture: Model-View-ViewModel pattern implementation',
      'Networking: HTTP package for REST API integration and data fetching',
      'Firebase integration: Authentication, Firestore, Cloud Storage, Analytics',
      'Maps integration: flutter_map for interactive map features',
      'RevenueCat: In-app purchases and subscription management',
      'Local storage: Shared Preferences for key-value data persistence',
      'Complex widgets: SliverList, CustomScrollView, and scrollable widgets',
      'Performance optimization: Lazy loading, pagination, image caching strategies',
      'Custom UI/UX: Material Design and Cupertino widgets implementation',
      'Responsive design: LayoutBuilder and MediaQuery for adaptive UIs',
      'Async programming: Future, Stream, async/await patterns',
      'Error handling: Try-catch, error boundaries, and user feedback',
      'Play Store deployment: App signing, release management, and store optimization'
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
      'FastAPI: Modern async web framework for high-performance APIs',
      'Web scraping: Selenium, Playwright',
      'Async programming: asyncio, async/await patterns',
      'Backend service development',
      'FastF1 integration (F1 telemetry)',
      'Data processing: pandas for data analysis and manipulation',
      'API design and implementation',
      'Third-party API integration',
      'Deployment: Docker containerization and Railway platform',
      'Data processing and automation'
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript & TypeScript',
    icon: '⚡',
    level: 'Intermediate',
    color: '#F7DF1E',
    accentColor: '#F7DF1E',
    description: 'Web development & Dynamic applications',
    details: [
      'ES6+ modern syntax: Arrow functions, template literals, destructuring',
      'Advanced functions: Higher-order functions, closures, currying, function composition',
      'Asynchronous programming: Promises, async/await patterns',
      'Array methods: map, filter, reduce, flatMap, find, some, every',
      'Objects & Collections: Object.keys/values/entries, Set, Map data structures',
      'ES6 Modules: import/export syntax and module bundling',
      'Vite: Build tool configuration and development workflow',
      'TypeScript: Type system, interfaces, generics, and type definitions',
      'DOM manipulation: Element selection, event handling, and DOM APIs',
      'Fetch API: HTTP requests, headers, and response handling',
      'Browser APIs: LocalStorage, SessionStorage, Geolocation, Canvas API',
      'JSON: Data serialization and parsing',
      'Node.js: Basic understanding of server-side JavaScript'
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
      'OOP principles: Classes, Inheritance, Polymorphism, Encapsulation',
      'Collections Framework: HashMap, HashSet, TreeMap for data structures',
      'Java EE: Enterprise application development with Apache Tomcat',
      'Database connectivity: JDBC for database operations',
      'Remote web request handling: HTTP client and server communication',
      'Enterprise architecture: Multi-tier application design patterns',
      'University project experience: Academic and practical implementations'
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
      'Linked Lists: Implementation and manipulation',
      'Binary Trees: Traversal algorithms (in-order, pre-order, post-order)',
      'Queue & Stack: Data structures implementation and usage',
      'Sorting algorithms: Quicksort implementation and optimization',
      'Memory management: Dynamic allocation, memory leaks debugging',
      'File I/O: File operations (fopen, fread, fwrite) for data persistence',
      'Pointers: Pointer arithmetic and dynamic memory allocation',
      'Low-level programming: System-level concepts and optimization'
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
      'OOP: Classes, inheritance, polymorphism, virtual functions, abstract classes',
      'STL Containers: vector, map, set for efficient data structures',
      'Smart Pointers: shared_ptr for automatic memory management',
      'Modern C++: Lambda expressions, auto keyword, and C++11+ features',
      'SFML: Graphics library for game development and multimedia',
      '2D Game Engine: Development basics and game architecture',
      'Entity Component System (ECS): Design pattern for game entities',
      'Game loop: Architecture and frame-based rendering',
      'Performance optimization: Memory management and code efficiency'
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
      'SQL queries: SELECT, INSERT, UPDATE, DELETE operations',
      'Advanced queries: Subqueries and nested queries',
      'Window functions: ROW_NUMBER, RANK, DENSE_RANK, aggregate functions over partitions',
      'Triggers: Database triggers for automated actions',
      'JOIN operations: INNER, LEFT, RIGHT, FULL OUTER joins',
      'Transactions: BEGIN, COMMIT, ROLLBACK for data integrity',
      'PostgreSQL: Database management and administration',
      'MySQL: Relational database management system',
      'SQLite: Lightweight embedded database',
      'E-R (Entity-Relationship) modeling: Conceptual database design',
      'Logical and conceptual schema design: Database architecture',
      'ACID properties: Atomicity, Consistency, Isolation, Durability',
      'Database normalization: Normal forms and schema optimization',
      'Physical memory management: Database storage concepts'
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
    name: 'Swift & SwiftUI',
    icon: '🍎',
    level: 'Intermediate',
    color: '#FA7343',
    accentColor: '#FF9F0A',
    description: 'iOS Development & Declarative UI Framework',
    details: [
      'SwiftUI: Declarative UI framework and component architecture',
      'MVVM Architecture: Model-View-ViewModel pattern implementation',
      'Animations: Custom animations and motion design',
      'Transitions: View transitions and state-based animations',
      'Navigation: NavigationStack, NavigationLink, and routing patterns',
      'View Modifiers: Custom and built-in modifiers for UI composition',
      'GeometryReader: Layout calculations and responsive UI design',
      'Networking: URLSession, REST API integration, and HTTP requests',
      'Codable: JSON encoding/decoding and data serialization',
      'Error Handling: Result type, do-catch, guard statements, and throw',
      'Generics: Generic programming for reusable code',
      'Extensions: Extending existing types with new functionality',
      'Protocols: Protocol-oriented programming and protocol extensions',
      'Enums: Associated values, raw values, and pattern matching',
      'Structs & Classes: Value types vs reference types',
      'Observable: @Observable macro and reactive state management',
      'Concurrency: Async/await, Task, TaskGroup, and Main Actor',
      'Actors: Actor isolation for thread-safe concurrency',
      'Data Persistence: SwiftData and UserDefaults for local storage',
      'Property Wrappers: @State, @Binding, @Bindable, @Published, and custom wrappers',
      'Combine Framework: Reactive programming and data flow management'
    ]
  }
]

function Skills() {
  const [expandedSkill, setExpandedSkill] = useState(null)
  const [heights, setHeights] = useState({})
  const contentRefs = useRef({})

  const toggleSkill = (id) => {
    setExpandedSkill(expandedSkill === id ? null : id)
  }

  // Calculate height when skill is expanded
  useEffect(() => {
    if (expandedSkill) {
      const contentElement = contentRefs.current[expandedSkill]
      if (contentElement) {
        // Use requestAnimationFrame for better timing
        const measureHeight = () => {
          // Force a reflow to ensure content is rendered
          contentElement.offsetHeight
          
          // Get the computed styles to account for all spacing
          const computedStyle = window.getComputedStyle(contentElement)
          const paddingTop = parseFloat(computedStyle.paddingTop) || 0
          const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0
          const marginTop = parseFloat(computedStyle.marginTop) || 0
          const marginBottom = parseFloat(computedStyle.marginBottom) || 0
          
          // Get the actual scroll height of the content
          const scrollHeight = contentElement.scrollHeight
          
          // Calculate total height: content + padding + margins
          const contentTotalHeight = scrollHeight + paddingTop + paddingBottom
          const marginsTotal = marginTop + marginBottom
          
          // Add container padding (bottom padding of .skill-details.show = 1.25rem ≈ 20px)
          const containerPadding = 20
          
          // Final height includes everything
          const finalHeight = contentTotalHeight + marginsTotal + containerPadding
          
          // Set the calculated height with a small buffer for safety
          setHeights(prev => ({
            ...prev,
            [expandedSkill]: Math.ceil(finalHeight) + 2
          }))
        }
        
        // Use double requestAnimationFrame to ensure DOM is fully updated
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            measureHeight()
          })
        })
      }
    }
    // Note: We don't clear heights when collapsed to avoid unnecessary re-renders
    // The height will be recalculated when the skill is expanded again
  }, [expandedSkill])

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
            
            <div 
              className={`skill-details ${expandedSkill === skill.id ? 'show' : ''}`}
              style={expandedSkill === skill.id && heights[skill.id] ? {
                maxHeight: `${heights[skill.id]}px`
              } : {}}
            >
              <div 
                ref={el => contentRefs.current[skill.id] = el}
                className="details-content"
              >
                <span className="details-label">$ cat {skill.id}_details.txt</span>
                <ul className="details-list">
                  {skill.details.map((detail, i) => (
                    <li key={i}>
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
