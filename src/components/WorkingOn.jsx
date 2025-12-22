import './WorkingOn.css'

const workingOn = [
  {
    id: 'salesforce',
    name: 'Salesforce Platform Developer',
    icon: '☁️',
    description: 'Learning Salesforce platform development, Apex, Lightning Web Components, and Salesforce architecture'
  },
  {
    id: 'swiftui',
    name: 'SwiftUI',
    icon: '🍎',
    description: 'Mastering SwiftUI framework for building modern iOS applications with declarative UI'
  }
]

function WorkingOn() {
  return (
    <section className="section working-on-section">
      <h2 className="section-title">cat ./working-on.log</h2>
      
      <div className="skills-container">
        {workingOn.map((skill, index) => (
          <div 
            key={skill.id}
            className="skill-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="skill-header">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-status">IN PROGRESS</span>
              </div>
            </div>
            
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkingOn

