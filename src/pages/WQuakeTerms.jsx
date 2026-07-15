import { termsEN } from '../content/w-quake/wQuakeTerms';
import LegalPage from '@/components/LegalPage';
import InlineMarkdown from '@/components/InlineMarkdown';

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
          <p key={pIndex}><InlineMarkdown>{paragraph}</InlineMarkdown></p>
        )),
      }))}
      footer={<p>Last Updated: {terms.lastUpdated}</p>}
    />
  );
}

export default WQuakeTerms;
