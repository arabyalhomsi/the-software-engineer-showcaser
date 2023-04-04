import { SectionContainer } from '#root/components/SectionContainer';
import { ListType, SectionList } from '#root/components/SectionList';
import { SectionSummary } from '#root/components/SectionSummary';
import { SectionTags } from '#root/components/SectionTags';
import { SectionTitle } from '#root/components/SectionTitle';
import { Work } from '#root/services/ContentLoader/types';
import React from 'react';

export { EmploymentSection };

type EmploymentSectionProps = { work: Work[] };
function EmploymentSection({ work }: EmploymentSectionProps) {
  const subSections = work.map((job, index) => {
    return (
      <div className="mb-2" key={index}>
        <SectionTitle
          left={job.position}
          middle={job.name}
          right={`${job.startDate} - ${job.endDate}`}
        />

        <SectionSummary content={job.summary} />

        <SectionList type={ListType.CHECKMARK} points={job.highlights} />

        <SectionTags tags={job.keywords} />
      </div>
    );
  });

  return <SectionContainer title="Employment">{subSections}</SectionContainer>;
}
