import resumeJson from '#root/resume.json';
import { getBasicInfo } from '#root/services/ContentLoader';

export async function onBeforeRender() {
  const basicInfo = await getBasicInfo(resumeJson);

  const pageProps = {
    basicInfo,
  };

  return {
    pageContext: {
      pageProps,
    },
  };
}

export const passToClient = ['pageProps'];
