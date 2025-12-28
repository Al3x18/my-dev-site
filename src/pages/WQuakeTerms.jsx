import { termsEN } from '../content/w-quake/wQuakeTerms';
import './WQuakeTerms.css';

// Helper function to parse bold text
const parseText = (text) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => 
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

function WQuakeTerms() {
  const terms = termsEN;

  return (
    <div className="terms-page">
      <div className="terms-container">
        <header className="terms-header">
          <h1 className="terms-title">🌍 {terms.title}</h1>
        </header>

        <div className="terms-intro">
          <p className="intro-welcome">{terms.intro.welcome}</p>
          <p className="intro-agreement">{terms.intro.agreement}</p>
        </div>

        {terms.sections.map((section, index) => (
          <section key={index} className="terms-section">
            <h2>{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{parseText(paragraph)}</p>
            ))}
          </section>
        ))}

        <footer className="terms-footer">
          <p className="last-updated">
            Last Updated: {terms.lastUpdated}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default WQuakeTerms;

