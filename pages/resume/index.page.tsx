import React from 'react';
import { Header } from './components/Header';
import { AddressBar } from './components/AddressBar';
import { EmploymentSection } from './components/EmploymentSection';
import { AwardsSection } from './components/AwardsSection';
import { EducationSection } from './components/EducationSection';
import { DocumentProps, PageProps } from '#root/renderer/types';
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
export { SideTags as OutOfLayout } from './components/SideTags';

export const documentProps: DocumentProps = {
  title: 'Arabi Alhumsi - Résumé',
  description:
    'The résumé of Arabi Alhumsi - Built using vite-plugin-ssr and react.',
};

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
  const { profiles, ...basicInfoNoProfiles } = basicInfo;

  return (
    <>
      <base target="_blank"></base>
      <Header basicInfo={basicInfoNoProfiles} />
      <AddressBar links={profiles} />
      <EmploymentSection work={work} />
      <EducationSection education={education} />
      <AwardsSection awards={awards} />
      <AdditionalExperience additionalExperience={additionalExperience} />
    </>
  );
}
