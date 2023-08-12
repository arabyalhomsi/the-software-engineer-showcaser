import {
  AdditionalExperience,
  Awards,
  BasicInfo,
  Education,
  Skill,
  Work,
} from './types';

const makeMissingFieldErrorMessage = (field: string) =>
  `resume.json is missing the ${field}`;

export function getAdditionalExperience(
  resumeData: unknown,
): AdditionalExperience {
  const field = 'additionalExperience';

  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !(field in resumeData)
  ) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }

  return resumeData[field] as AdditionalExperience;
}

export function getEducation(resumeData: unknown): Education[] {
  const field = 'education';

  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !(field in resumeData)
  ) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }

  return resumeData[field] as Education[];
}

export function getAwards(resumeData: unknown): Awards {
  const field = 'awards';

  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !(field in resumeData)
  ) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }

  return resumeData[field] as Awards;
}

export function getWork(resumeData: unknown): Work[] {
  const field = 'work';

  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !(field in resumeData)
  ) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }

  return resumeData[field] as Work[];
}

export function getSkills(resumeData: unknown): Skill[] {
  const field = 'skills';

  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !(field in resumeData)
  ) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }

  return resumeData[field] as Skill[];
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

  return resumeData[field] as BasicInfo;
};
