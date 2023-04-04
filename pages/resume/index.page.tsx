import React from 'react';
import { Header } from './components/Header';
import { AddressBar } from './components/AddressBar';
import { ResumePageProps } from './types';
import { EmploymentSection } from './components/EmploymentSection';
export { Page };
export { ShowcaseLayout as Layout } from '../../layouts/ShowcaseLayout';

function Page({ basicInfo, workInfo }: ResumePageProps) {
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
      <EmploymentSection workInfo={workInfo} />
    </>
  );
}
