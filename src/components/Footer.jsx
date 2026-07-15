function Footer() {
  return (
    <footer className="col-start-2 mt-6 flex flex-col justify-between gap-2 border-t border-black py-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground sm:flex-row">
      <p>© {new Date().getFullYear()} Alex De Pasquale</p>
      <p>React + Vite · Vercel</p>
    </footer>
  )
}

export default Footer
