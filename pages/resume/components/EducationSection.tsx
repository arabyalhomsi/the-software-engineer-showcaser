import { SectionContainer } from '#root/components/SectionContainer';
import { ListType, SectionList } from '#root/components/SectionList';
import { SectionTitle } from '#root/components/SectionTitle';
import { Education } from '#root/services/ContentLoader/types';
import React from 'react';

export { EducationSection };

type EducationSectionProps = { education: Education[] };
function EducationSection({ education }: EducationSectionProps) {
  const subSections = education.map((level, index) => {
    return (
      <div className="mb-2" key={index}>
        <SectionTitle
          left={level.area}
          middle={level.institution}
          middleUrl={level.url}
          right={`${level.startDate} - ${level.endDate}`}
        />

        <SectionList type={ListType.BULLET} points={level.highlights} />
      </div>
    );
  });

  return <SectionContainer title="Education">{subSections}</SectionContainer>;
}
