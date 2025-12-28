import { policyEN } from '../content/race-room/raceRoomPolicy';
import './RaceRoomPolicy.css';

// Helper function to parse bold text and links
const parseText = (text) => {
  if (!text) return '';
  
  // Handle markdown links [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let keyIndex = 0;
  
  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      const beforeText = text.substring(lastIndex, match.index);
      if (beforeText) {
        parts.push(parseBold(beforeText, keyIndex++));
      }
    }
    
    // Add the link
    parts.push(
      <a 
        key={`link-${keyIndex++}`} 
        href={match[2]} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {parseBold(match[1], keyIndex++)}
      </a>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      parts.push(parseBold(remainingText, keyIndex++));
    }
  }
  
  return parts.length > 0 ? parts : parseBold(text, 0);
};

// Helper function to parse bold text
const parseBold = (text, baseKey) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  if (parts.length === 1) return text;
  
  return parts.map((part, index) => 
    index % 2 === 1 ? <strong key={`bold-${baseKey}-${index}`}>{part}</strong> : part
  );
};

function RaceRoomPolicy() {
  const policy = policyEN;

  return (
    <div className="policy-page">
      <div className="policy-container">
        <header className="policy-header">
          <h1 className="policy-title">🏎️ {policy.title}</h1>
          <p className="policy-effective">Effective Date: {policy.effectiveDate}</p>
        </header>

        <div className="policy-intro">
          <p>{policy.intro.text}</p>
        </div>

        {policy.sections.map((section, index) => (
          <section key={index} className="policy-section">
            <h2>{section.title}</h2>
            {section.content.map((paragraph, pIndex) => {
              const parsed = parseText(paragraph);
              return (
                <p key={pIndex}>
                  {typeof parsed === 'string' ? parsed : parsed}
                </p>
              );
            })}
          </section>
        ))}

        <footer className="policy-footer">
          <p className="agreement">By using Race Room, you agree to this Privacy Policy.</p>
          <p className="last-updated">Last Updated: {policy.effectiveDate}</p>
        </footer>
      </div>
    </div>
  );
}

export default RaceRoomPolicy;

