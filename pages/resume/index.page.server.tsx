import resumeJson from '#root/resume.json';
import {
  getAdditionalExperience,
  getAwards,
  getBasicInfo,
  getEducation,
  getWork,
} from '#root/services/ContentLoader';
import { ResumePageProps } from './index.page';

export function onBeforeRender() {
  const basicInfo = getBasicInfo(resumeJson);
  const work = getWork(resumeJson);
  const awards = getAwards(resumeJson);
  const education = getEducation(resumeJson);
  const additionalExperience = getAdditionalExperience(resumeJson);

  const pageProps: ResumePageProps = {
    basicInfo,
    work,
    awards,
    education,
    additionalExperience,
  };

  return {
    pageContext: {
      pageProps,
    },
  };
}

export const passToClient = ['pageProps'];
