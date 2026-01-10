import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <span className="prompt">alex@portfolio:~$</span>
      <span className="blink">_</span>
      <p className="copyright">© {new Date().getFullYear()} Alex De Pasquale</p>
      <p className="copyright">Built with React + Vite | Hosted on Vercel</p>
    </footer>
  )
}

export default Footer

