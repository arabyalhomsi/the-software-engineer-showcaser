import { SectionContainer } from '#root/components/SectionContainer';
import { ListType, SectionList } from '#root/components/SectionList';
import { Awards } from '#root/services/ContentLoader/types';
import React from 'react';

export { AwardsSection };

type AwardsSectionProps = { awards: Awards };
function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <SectionContainer title="Awards and Most Proud of">
      <div className="mb-2">
        <SectionList type={ListType.BULLET} points={awards} />
      </div>
    </SectionContainer>
  );
}
