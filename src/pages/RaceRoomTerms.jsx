import { termsEN, termsIT } from '../content/race-room/raceRoomTerms';
import LegalPage from '@/components/LegalPage';

// Helper function to parse bold text
const parseText = (text) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => 
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

function RaceRoomTerms({ lang = 'en' }) {
  const terms = lang === 'it' ? termsIT : termsEN;

  return (
    <LegalPage
      icon="🏎️"
      title={terms.title}
      intro={`${terms.intro.welcome} ${terms.intro.agreement}`}
      sections={terms.sections.map((section) => ({
        title: section.title,
        content: section.content.map((paragraph, pIndex) => (
          <p key={pIndex}>{parseText(paragraph)}</p>
        )),
      }))}
      footer={
        <p>
          {lang === 'it' ? 'Ultimo aggiornamento' : 'Last Updated'}: {terms.lastUpdated}
        </p>
      }
    />
  );
}

export function RaceRoomTermsEN() {
  return <RaceRoomTerms lang="en" />;
}

export function RaceRoomTermsIT() {
  return <RaceRoomTerms lang="it" />;
}

export default RaceRoomTerms;

