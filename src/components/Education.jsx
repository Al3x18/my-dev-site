import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import knowledgeData from '../content/knowledgeData'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function Education() {
  const [activeKnowledgeId, setActiveKnowledgeId] = useState(null)

  const toggleKnowledge = (id) => {
    setActiveKnowledgeId(activeKnowledgeId === id ? null : id)
  }

  const closeOverlay = () => {
    setActiveKnowledgeId(null)
  }

  const activeKnowledge = knowledgeData.find((item) => item.id === activeKnowledgeId) ?? null

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeOverlay()
      }
    }

    if (activeKnowledge) {
      window.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [activeKnowledge])

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Education</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Bachelor&apos;s degree in Computer Science (L-31), currently in progress.
        </p>
      </div>

      <Card className="mb-4 bg-card/80">
        <CardHeader>
          <CardTitle>University knowledge areas</CardTitle>
          <CardDescription>
            Core topics studied in depth through coursework and practical projects.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {knowledgeData.map((item, index) => (
            <div key={item.id}>
              <button
                className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-left transition hover:border-primary/40"
                onClick={() => toggleKnowledge(item.id)}
                aria-expanded={activeKnowledgeId === item.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{item.icon} {item.name}</p>
                  <span className="text-xs text-muted-foreground">{activeKnowledgeId === item.id ? 'Hide' : 'View topics'}</span>
                </div>
              </button>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        {[
          "Git & Version Control",
          "RESTful API Design",
          "Clean Architecture",
          "MVVM Design Pattern",
          "MVC Design Pattern",
          "Problem Solving",
          "Self-Learning",
          "Technical Documentation",
        ].map((skill) => (
          <Badge key={skill} variant="outline" className="bg-secondary/40">{skill}</Badge>
        ))}
      </div>

      {activeKnowledge && createPortal(
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/10 p-4 backdrop-blur-[3px]"
          onClick={closeOverlay}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="knowledge-dialog-title"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h3 id="knowledge-dialog-title" className="text-lg font-semibold">
                {activeKnowledge.icon} {activeKnowledge.name}
              </h3>
              <button
                type="button"
                onClick={closeOverlay}
                className="rounded-md border border-border px-2 py-1 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                aria-label="Close topics"
              >
                Close
              </button>
            </div>

            <div className="max-h-[calc(85vh-73px)] overflow-y-auto px-5 py-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {activeKnowledge.topics.map((topic, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default Education
