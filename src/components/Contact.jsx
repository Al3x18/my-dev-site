import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'alexdepasquale1997@gmail.com'

  const copyEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Looking to collaborate or just say hi? Choose your preferred channel.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-card/80">
          <CardHeader>
            <CardTitle>Primary email</CardTitle>
            <CardDescription>{email}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <a href={`mailto:${email}`}>
              <Button>Send email</Button>
            </a>
            <Button variant="outline" onClick={copyEmail}>
              {copied ? 'Copied' : 'Copy email'}
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/80">
          <CardHeader>
            <CardTitle>Links</CardTitle>
            <CardDescription>Profiles and public work</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <a href="https://github.com/Al3x18" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
            <a href="https://www.linkedin.com/in/alex-de-pasquale-28535860/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">LinkedIn</Button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.adp.raceRoom" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Play Store</Button>
            </a>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="secondary" className="bg-primary/15 text-primary">Available for opportunities</Badge>
        <Badge variant="outline" className="bg-secondary/40">Italy</Badge>
      </div>
    </section>
  )
}

export default Contact
