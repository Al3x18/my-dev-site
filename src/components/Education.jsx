import { useState } from 'react'
import './Education.css'

const knowledgeData = [
  {
    id: 'c-programming',
    name: 'C Programming',
    icon: '⚙️',
    category: 'university',
    topics: [
      'Language fundamentals and syntax',
      'Pointers and memory addressing',
      'Dynamic memory allocation (malloc, free)',
      'Linked Lists implementation',
      'Binary Trees and traversal algorithms',
      'Queue data structure',
      'Stack data structure',
      'Memory management concepts',
      'Data structures implementation from scratch'
    ]
  },
  {
    id: 'java-programming',
    name: 'Java Programming',
    icon: '☕',
    category: 'university',
    topics: [
      'Object-Oriented Programming fundamentals',
      'Classes and Objects',
      'Inheritance and class hierarchies',
      'Polymorphism and interfaces',
      'Java EE enterprise development',
      'Apache Tomcat server deployment',
      'Database connectivity (JDBC)',
      'Remote web request handling',
      'University project development'
    ]
  },
  {
    id: 'python-programming',
    name: 'Python Programming',
    icon: '🐍',
    category: 'university',
    topics: [
      'Language fundamentals and syntax',
      'Data structures (lists, dicts, sets)',
      'Object-Oriented Programming in Python',
      'Multithreading programming',
      'Multiprocessing programming',
      'Concurrent execution patterns',
      'Thread synchronization',
      'Process communication',
      'Performance optimization with parallelism'
    ]
  },
  {
    id: 'networking',
    name: 'Computer Networks',
    icon: '🌐',
    category: 'university',
    topics: [
      'ISO/OSI Reference Model',
      'TCP/IP Protocol Stack',
      'Application Layer: HTTP/S, IMAP, POP3, DNS',
      'Transport Layer: TCP, UDP',
      'Network Layer: IP, Routing protocols',
      'Data Link & Physical Layer',
      'IP packet structure and routing',
      'ISP tiers (Tier 1, 2, 3) architecture',
      'Subnetting: IPv4, IPv6, subnet masks',
      'Local network configuration',
      'DNS hierarchy: Root, TLD, Authoritative servers',
      'Cryptography fundamentals',
      'Public/Private key encryption',
      'Diffie-Hellman key exchange',
      'SHA hashing algorithms',
      'Digital signatures',
      'Symmetric keys for secure channels',
      'Blockchain fundamentals',
      'WiFi protocols and security'
    ]
  },
  {
    id: 'linux',
    name: 'Linux Systems',
    icon: '🐧',
    category: 'university',
    topics: [
      'File system structure and inode architecture',
      'User and group management',
      '/etc/passwd and /etc/shadow files',
      'Permission system (rwx)',
      'Access Control Lists (ACL)',
      'Multi-level security (MLS) concepts',
      'System administration basics',
      'Shell scripting fundamentals'
    ]
  },
  {
    id: 'databases',
    name: 'Database Systems',
    icon: '🗃️',
    category: 'university',
    topics: [
      'SQL query language',
      'PostgreSQL database management',
      'E-R (Entity-Relationship) modeling',
      'Conceptual schema design',
      'Logical schema design',
      'Database normalization (1NF, 2NF, 3NF)',
      'ACID properties',
      'Transaction management',
      'Physical memory management',
      'Indexing strategies'
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Bitcoin',
    icon: '⛓️',
    category: 'university',
    topics: [
      'Blockchain architecture and structure',
      'Bitcoin protocol fundamentals',
      'Block structure and chain linking',
      'Hash functions in blockchain (SHA-256)',
      'Nonce role in mining process',
      'Proof of Work (PoW) mechanism',
      'Mining and block validation',
      'Hash collision theory',
      'Merkle trees and transaction verification',
      'Distributed ledger concepts',
      'Consensus mechanisms'
    ]
  }
]

function Education() {
  const [expandedKnowledge, setExpandedKnowledge] = useState(null)

  const toggleKnowledge = (id) => {
    setExpandedKnowledge(expandedKnowledge === id ? null : id)
  }

  return (
    <section className="section education-section">
      <h2 className="section-title">cat ./education/knowledge.log</h2>
      
      <div className="education-intro">
        <div className="edu-header">
          <span className="edu-icon">🎓</span>
          <div className="edu-info">
            <h3 className="edu-title">University Education</h3>
            <p className="edu-subtitle">L-31 Computer Science • In Progress</p>
          </div>
        </div>
        <p className="edu-description">
          Currently pursuing a Bachelor's degree in Computer Science (L-31). 
          Solid academic background with hands-on experience in software development, 
          systems programming, and theoretical foundations. The following areas have been studied in depth 
          through university courses and practical projects.
        </p>
      </div>
      
      <div className="knowledge-grid">
        {knowledgeData.map((item, index) => (
          <div 
            key={item.id}
            className={`knowledge-card ${expandedKnowledge === item.id ? 'expanded' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              className="knowledge-header"
              onClick={() => toggleKnowledge(item.id)}
            >
              <span className="knowledge-icon">{item.icon}</span>
              <h4 className="knowledge-name">{item.name}</h4>
              <span className={`expand-indicator ${expandedKnowledge === item.id ? 'active' : ''}`}>
                {expandedKnowledge === item.id ? '−' : '+'}
              </span>
            </div>
            
            <div className={`knowledge-content ${expandedKnowledge === item.id ? 'show' : ''}`}>
              <ul className="topics-list">
                {item.topics.map((topic, i) => (
                  <li key={i}>
                    <span className="topic-marker">#</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="additional-skills">
        <h3 className="additional-title">
          <span className="cmd-symbol">$</span> Additional Competencies
        </h3>
        <div className="skills-tags">
          <span className="skill-tag">Git & Version Control</span>
          <span className="skill-tag">Agile Methodologies</span>
          <span className="skill-tag">RESTful API Design</span>
          <span className="skill-tag">Clean Architecture</span>
          <span className="skill-tag">MVVM Pattern</span>
          <span className="skill-tag">Problem Solving</span>
          <span className="skill-tag">Self-Learning</span>
          <span className="skill-tag">Technical Documentation</span>
        </div>
      </div>
    </section>
  )
}

export default Education

