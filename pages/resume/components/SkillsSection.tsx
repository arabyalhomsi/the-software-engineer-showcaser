import { SectionContainer } from '#root/components/SectionContainer';
import { SectionTags } from '#root/components/SectionTags';
import { SkillContainer } from '#root/services/ContentLoader/types';
import React from 'react';

export { SkillsSection };

type SkillsProps = {
  skills: SkillContainer[];
};
function SkillsSection({ skills }: SkillsProps) {
  const skillContainersList = skills.map((skillContainer) => {
    return (
      <div className="row ml-2 flex items-center">
        <span>{skillContainer.name}: </span>
        <SectionTags tags={skillContainer.skills} big />
      </div>
    );
  });

  return (
    <SectionContainer title="Skills">
      <div className="mb-2">{skillContainersList}</div>
    </SectionContainer>
  );
}
