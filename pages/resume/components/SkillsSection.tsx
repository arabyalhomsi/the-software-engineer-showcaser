import { SectionContainer } from '#root/components/SectionContainer';
import { SectionTags } from '#root/components/SectionTags';
import { Skill } from '#root/services/ContentLoader/types';
import React from 'react';

export { SkillsSection };

type SkillsProps = {
  skills: Skill[];
};
function SkillsSection({ skills }: SkillsProps) {
  return (
    <SectionContainer title="Skills">
      <div className="mb-2">
        <SectionTags tags={skills} big />
      </div>
    </SectionContainer>
  );
}
