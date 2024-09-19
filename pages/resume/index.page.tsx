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
  SkillContainer,
  Work,
} from '#root/services/ContentLoader/types';
import { AdditionalExperience } from './components/AdditionalExperience';
import { SkillsSection } from './components/SkillsSection';
export { Page };
export { ShowcaseLayout as Layout } from '#root/layouts/ShowcaseLayout';
export { SideTags as OutOfLayout } from './components/SideTags';
export { DeploymentInfo as Footer } from './components/DeploymentInfo';

export const documentProps: DocumentProps = {
  title: 'Abdullah Alhumsi - Résumé',
  description:
    'The résumé of Abdullah Alhumsi - Built using vite-plugin-ssr and react.',
};

export type ResumePageProps = PageProps & {
  basicInfo: BasicInfo;
  work: Work[];
  awards: Awards;
  education: Education[];
  skills: SkillContainer[];
  additionalExperience: AdditionalExperienceType;
};

function Page({
  basicInfo,
  work,
  skills,
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
      <SkillsSection skills={skills} />
    </>
  );
}
