import { useState } from 'react'
import './Education.css'
import knowledgeData from '../content/knowledgeData'

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
          <span className="skill-tag">RESTful API Design</span>
          <span className="skill-tag">Clean Architecture</span>
          <span className="skill-tag">MVVM Design Pattern</span>
          <span className="skill-tag">MVC Design Pattern</span>
          <span className="skill-tag">Singleton Design Pattern</span>
          <span className="skill-tag">Problem Solving</span>
          <span className="skill-tag">Self-Learning</span>
          <span className="skill-tag">Technical Documentation</span>
        </div>
      </div>
    </section>
  )
}

export default Education

