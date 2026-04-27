import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

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
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Currently learning</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {workingOn.map((skill, index) => (
          <Card
            key={skill.id}
            className="bg-card/80"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{skill.icon} {skill.name}</CardTitle>
                <Badge variant="secondary" className="bg-primary/15 text-primary">In progress</Badge>
              </div>
              <CardDescription>{skill.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  )
}

export default WorkingOn

