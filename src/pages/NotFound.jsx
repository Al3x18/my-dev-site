import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="app">
      <div className="scanlines"></div>
      <div className="noise"></div>

      <main className="not-found-page">
        <div className="not-found-container">
          <section className="section not-found-section">
            <h2 className="section-title">$ cat error.log</h2>

            <div className="not-found-content">
              <div className="error-code-block">
                <span className="keyword">Error</span>
                <span className="punctuation">:</span>
                <span className="error-code"> 404</span>
                <span className="punctuation"> — </span>
                <span className="string">"Page Not Found"</span>
              </div>

              <p className="not-found-message">
                <span className="comment">// The route you requested does not exist.</span>
              </p>
              <p className="not-found-message">
                <span className="comment">// Perhaps you mistyped the URL or the page was moved.</span>
              </p>

              <div className="terminal-block">
                <div className="terminal-line">
                  <span className="prompt">alex@portfolio</span>:<span className="path">~</span>$ <span className="cmd">ls -la ./</span>
                </div>
                <div className="terminal-output">
                  <span className="muted">drwxr-xr-x  ...  .</span><br />
                  <span className="muted">drwxr-xr-x  ...  ..</span><br />
                  <span className="lime">lrwxrwxrwx  ...  home → /</span>
                </div>
              </div>

              <Link to="/" className="not-found-link">
                <span className="link-arrow">→</span> Back to home
              </Link>
            </div>
          </section>
        </div>

        <div className="terminal-info not-found-footer">
          <code>
            <span className="prompt">alex@portfolio</span>:<span className="path">~</span>$ <span className="blink">_</span>
          </code>
        </div>
      </main>
    </div>
  )
}

export default NotFound
