import logoImg from '../assets/A-dev-logo.png'

function LoadingScreen({ progress, currentTask }) {
  return (
    <div className="fixed inset-0 grid place-items-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card/80 p-6 text-center shadow-2xl backdrop-blur">
        <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-xl border border-border bg-secondary/60 p-2">
          <img src={logoImg} alt="Logo" className="h-full w-full object-contain" />
        </div>
        <h1 className="text-2xl font-semibold">Alex De Pasquale</h1>
        <p className="mt-1 text-sm text-muted-foreground">Full-Stack & Mobile Developer</p>

        <div className="mt-6 space-y-2">
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{currentTask}</span>
            <span>{progress}%</span>
          </div>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">Press any key or click to skip</p>
      </div>
    </div>
  )
}

export default LoadingScreen

