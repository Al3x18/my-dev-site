import { policyEN } from '../content/race-room/raceRoomPolicy';
import LegalPage from '@/components/LegalPage';

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
    <LegalPage
      icon="🏎️"
      title={policy.title}
      subtitle={`Effective Date: ${policy.effectiveDate}`}
      intro={policy.intro.text}
      sections={policy.sections.map((section) => ({
        title: section.title,
        content: section.content.map((paragraph, pIndex) => {
          const parsed = parseText(paragraph)
          return <p key={pIndex}>{parsed}</p>
        }),
      }))}
      footer={
        <>
          <p>By using Race Room, you agree to this Privacy Policy.</p>
          <p className="mt-1">Last Updated: {policy.effectiveDate}</p>
        </>
      }
    />
  );
}

export default RaceRoomPolicy;

