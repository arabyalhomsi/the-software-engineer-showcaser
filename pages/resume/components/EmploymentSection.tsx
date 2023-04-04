import { SectionContainer } from '#root/components/SectionContainer';
import { ListType, SectionList } from '#root/components/SectionList';
import { SectionSummary } from '#root/components/SectionSummary';
import { SectionTags } from '#root/components/SectionTags';
import { SectionTitle } from '#root/components/SectionTitle';
import { WorkInfo } from '#root/services/ContentLoader/types';
import React from 'react';

export { EmploymentSection };

type EmploymentSectionProps = { workInfo: WorkInfo[] };
function EmploymentSection({ workInfo }: EmploymentSectionProps) {
  const subSections = workInfo.map((job) => {
    return (
      <div className="mb-2">
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
