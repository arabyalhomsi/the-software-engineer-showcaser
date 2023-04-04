import React from 'react';
import { Header } from './components/Header';
import { AddressBar } from './components/AddressBar';
import { EmploymentSection } from './components/EmploymentSection';
import { AwardsSection } from './components/AwardsSection';
import { EducationSection } from './components/EducationSection';
import { PageProps } from '#root/renderer/types';
import {
  AdditionalExperience as AdditionalExperienceType,
  Awards,
  BasicInfo,
  Education,
  Work,
} from '#root/services/ContentLoader/types';
import { AdditionalExperience } from './components/AdditionalExperience';
export { Page };
export { ShowcaseLayout as Layout } from '#root/layouts/ShowcaseLayout';

export type ResumePageProps = PageProps & {
  basicInfo: BasicInfo;
  work: Work[];
  awards: Awards;
  education: Education[];
  additionalExperience: AdditionalExperienceType;
};

function Page({
  basicInfo,
  work,
  awards,
  education,
  additionalExperience,
}: ResumePageProps) {
  return (
    <>
      <Header
        phone={basicInfo.phone}
        address={basicInfo.address}
        title={basicInfo.name}
        image={basicInfo.image}
        url={basicInfo.url}
      />
      <AddressBar links={basicInfo.profiles} />
      <EmploymentSection work={work} />
      <EducationSection education={education} />
      <AdditionalExperience additionalExperience={additionalExperience} />
      <AwardsSection awards={awards} />
    </>
  );
}
