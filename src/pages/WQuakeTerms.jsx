import { termsEN } from '../content/w-quake/wQuakeTerms';
import LegalPage from '@/components/LegalPage';

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
    <LegalPage
      icon="🌍"
      title={terms.title}
      intro={`${terms.intro.welcome} ${terms.intro.agreement}`}
      sections={terms.sections.map((section) => ({
        title: section.title,
        content: section.content.map((paragraph, pIndex) => (
          <p key={pIndex}>{parseText(paragraph)}</p>
        )),
      }))}
      footer={<p>Last Updated: {terms.lastUpdated}</p>}
    />
  );
}

export default WQuakeTerms;

