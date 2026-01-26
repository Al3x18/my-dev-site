import { useState, useRef, useEffect } from 'react'
import './Education.css'
import knowledgeData from '../content/knowledgeData'

function Education() {
  const [expandedKnowledge, setExpandedKnowledge] = useState(null)
  const [heights, setHeights] = useState({})
  const contentRefs = useRef({})

  const toggleKnowledge = (id) => {
    setExpandedKnowledge(expandedKnowledge === id ? null : id)
  }

  // Calculate height when knowledge is expanded
  useEffect(() => {
    if (expandedKnowledge) {
      const contentElement = contentRefs.current[expandedKnowledge]
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
          
          // Final height includes everything
          const finalHeight = contentTotalHeight + marginsTotal
          
          // Set the calculated height with a small buffer for safety
          setHeights(prev => ({
            ...prev,
            [expandedKnowledge]: Math.ceil(finalHeight) + 2
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
  }, [expandedKnowledge])

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
            
            <div 
              ref={el => contentRefs.current[item.id] = el}
              className={`knowledge-content ${expandedKnowledge === item.id ? 'show' : ''}`}
              style={expandedKnowledge === item.id && heights[item.id] ? {
                maxHeight: `${heights[item.id]}px`
              } : {}}
            >
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

