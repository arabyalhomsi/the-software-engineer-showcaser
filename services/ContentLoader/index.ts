import { BasicInfo, WorkInfo } from './types';

const makeMissingFieldErrorMessage = (field: string) =>
  `resume.json is missing the ${field}`;

export function getWorkInfo(resumeData: unknown): WorkInfo[] {
  const field = 'work';

  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !(field in resumeData)
  ) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }

  return resumeData.work as WorkInfo[];
}

export const getBasicInfo = (resumeData: unknown): BasicInfo => {
  const field = 'basics';
  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !(field in resumeData)
  ) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }

  return resumeData.basics as BasicInfo;
};
