import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function NotFound() {
  return (
    <main className="container flex min-h-screen min-h-svh items-center justify-center px-5 py-10 text-center">
      <Card className="w-full max-w-xl bg-card/80">
        <CardHeader className="items-center">
          <CardTitle>404 - Page Not Found</CardTitle>
          <CardDescription>Looks like there&apos;s nothing to see here.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Link to="/">
            <Button>Back to home</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}

export default NotFound
