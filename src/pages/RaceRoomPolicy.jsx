import { policyEN } from '../content/race-room/raceRoomPolicy';
import LegalPage from '@/components/LegalPage';
import InlineMarkdown from '@/components/InlineMarkdown';

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
        content: section.content.map((paragraph, pIndex) => (
          <p key={pIndex}><InlineMarkdown>{paragraph}</InlineMarkdown></p>
        )),
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
