import { policyEN } from '../content/w-quake/wQuakePolicy';
import './WQuakePolicy.css';

// Helper function to parse bold text
const parseText = (text) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => 
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

function WQuakePolicy() {
  const policy = policyEN;

  return (
    <div className="policy-page">
      <div className="policy-container">
        <header className="policy-header">
          <h1 className="policy-title">🌍 {policy.title}</h1>
          <p className="policy-effective">Effective Date: {policy.effectiveDate}</p>
        </header>

        <div className="policy-intro">
          <p>{policy.intro.text}</p>
        </div>

        {policy.sections.map((section, index) => (
          <section key={index} className="policy-section">
            <h2>{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{parseText(paragraph)}</p>
            ))}
          </section>
        ))}

        <footer className="policy-footer">
          <p className="agreement">By using W-Quake, you agree to this Privacy Policy.</p>
          <p className="last-updated">Last Updated: {policy.effectiveDate}</p>
        </footer>
      </div>
    </div>
  );
}

export default WQuakePolicy;

