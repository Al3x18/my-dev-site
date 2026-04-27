import { policyEN } from '../content/w-quake/wQuakePolicy';
import LegalPage from '@/components/LegalPage';

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
    <LegalPage
      icon="🌍"
      title={policy.title}
      subtitle={`Effective Date: ${policy.effectiveDate}`}
      intro={policy.intro.text}
      sections={policy.sections.map((section) => ({
        title: section.title,
        content: section.content.map((paragraph, pIndex) => (
          <p key={pIndex}>{parseText(paragraph)}</p>
        )),
      }))}
      footer={
        <>
          <p>By using W-Quake, you agree to this Privacy Policy.</p>
          <p className="mt-1">Last Updated: {policy.effectiveDate}</p>
        </>
      }
    />
  );
}

export default WQuakePolicy;

