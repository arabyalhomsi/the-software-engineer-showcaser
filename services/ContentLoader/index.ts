import { BasicInfo, WorkInfo } from './types';

export function getWorkInfo(resumeData: unknown): WorkInfo[] | null {
  if (
    resumeData !== null &&
    typeof resumeData === 'object' &&
    'work' in resumeData
  ) {
    return resumeData.work as WorkInfo[];
  }

  return null;
}

export const getBasicInfo = async (
  resumeData: unknown,
): Promise<BasicInfo | null> => {
  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !('basics' in resumeData)
  ) {
    return null;
  }

  const basicInfo = resumeData.basics as BasicInfo;

  // The image path has to be relative for dynamic imports
  const loadedImage = await import(
    /* @vite-ignore */
    '../../assets/images/' + basicInfo.image
  );

  return { ...basicInfo, image: loadedImage.default };
};
