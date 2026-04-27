import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function NotFound() {
  return (
    <main className="container grid min-h-[70vh] place-items-center py-10">
      <Card className="w-full max-w-xl bg-card/80">
        <CardHeader>
          <CardTitle>404 - Page Not Found</CardTitle>
          <CardDescription>The route you requested does not exist or has been moved.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/">
            <Button>Back to home</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}

export default NotFound
