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

  return resumeData.basics as BasicInfo;
};
