import { PageProps } from '#root/renderer/types';
import { BasicInfo, WorkInfo } from '#root/services/ContentLoader/types';

export type ResumePageProps = PageProps & {
  basicInfo: BasicInfo;
  workInfo: WorkInfo[];
};
