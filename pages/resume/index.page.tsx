import React from 'react';
import { Header } from './components/Header';
import { AddressBar } from './components/AddressBar';
import { ResumePageProps } from './types';

export { Page };
export { ShowcaseLayout as Layout } from '../../layouts/ShowcaseLayout';

function Page({ basicInfo }: ResumePageProps) {
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
      {/* SectionContainer */}
      {/* SectionWithDate */}
      {/* BulletPoint */}
      {/* SkillTags */}
    </>
  );
}
