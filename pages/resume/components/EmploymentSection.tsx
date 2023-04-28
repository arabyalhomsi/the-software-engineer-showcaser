import { SectionContainer } from '#root/components/SectionContainer';
import { ListType, SectionList } from '#root/components/SectionList';
import { SectionSummary } from '#root/components/SectionSummary';
import { SectionTags } from '#root/components/SectionTags';
import { SectionTitle } from '#root/components/SectionTitle';
import { Work } from '#root/services/ContentLoader/types';
import { differenceInMonths, differenceInYears, startOfYear } from 'date-fns';
import React, { useMemo } from 'react';

export { EmploymentSection };

type EmploymentSectionProps = { work: Work[] };
function EmploymentSection({ work }: EmploymentSectionProps) {
  const subSections = work.map((job, index) => {
    const jobEndDate = job.endDate === 'PRESENT' ? new Date() : new Date(job.endDate)
    const diffInYears = useMemo(() => {
      return differenceInYears(jobEndDate, new Date(job.startDate))
    }, [job])
    const diffInMonths = useMemo(() => {
      return (differenceInMonths(jobEndDate, diffInYears > 0 ? startOfYear(jobEndDate) : new Date(job.startDate)) + 1) + ' months'
    }, [job])
    const jobPeriodInString = useMemo(() => {
      return `${diffInYears > 0 ? diffInYears + ' years' : ''} ${diffInMonths}`
    }, [diffInYears, diffInMonths])
    return (
      <div className="mb-2" key={index}>
        <SectionTitle
          left={job.position}
          middle={job.name}
          middleUrl={job.url}
          right={`${job.startDate} - ${job.endDate} (${jobPeriodInString})`}
        />

        <SectionSummary content={job.summary} />

        <SectionList type={ListType.CHECKMARK} points={job.highlights} />

        <SectionTags tags={job.keywords} />
      </div>
    );
  });

  return <SectionContainer title="Employment">{subSections}</SectionContainer>;
}
