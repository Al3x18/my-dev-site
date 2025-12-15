import { useState } from 'react'
import './Education.css'

const knowledgeData = [
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
      'Cryptography fundamentals',
      'Public/Private key encryption',
      'Digital signatures',
      'Symmetric keys for secure channels',
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
            <p className="edu-subtitle">Computer Science Foundation</p>
          </div>
        </div>
        <p className="edu-description">
          Solid academic background in Computer Science with hands-on experience in software development, 
          systems programming, and theoretical foundations. The following areas were studied in depth 
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

