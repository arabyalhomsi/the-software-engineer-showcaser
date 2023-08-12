import { SectionContainer } from '#root/components/SectionContainer';
import { ListType, SectionList } from '#root/components/SectionList';
import { AdditionalExperience as AdditionalExperienceType } from '#root/services/ContentLoader/types';
import React from 'react';

export { AdditionalExperience };

type AdditionalExperienceProps = {
  additionalExperience: AdditionalExperienceType;
};
function AdditionalExperience({
  additionalExperience,
}: AdditionalExperienceProps) {
  return (
    <SectionContainer title="Open Source And Volunteering">
      <div className="mb-2">
        <SectionList type={ListType.BULLET} points={additionalExperience} />
      </div>
    </SectionContainer>
  );
}
