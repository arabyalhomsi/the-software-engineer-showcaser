import resumeJson from '#root/resume.json';
import { getBasicInfo, getWorkInfo } from '#root/services/ContentLoader';
import { ResumePageProps } from './types';

export function onBeforeRender() {
  const basicInfo = getBasicInfo(resumeJson);
  const workInfo = getWorkInfo(resumeJson);

  const pageProps: ResumePageProps = {
    basicInfo,
    workInfo,
  };

  return {
    pageContext: {
      pageProps,
    },
  };
}

export const passToClient = ['pageProps'];
