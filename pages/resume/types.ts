import { PageProps } from '#root/renderer/types';
import { BasicInfo } from '#root/services/ContentLoader/types';

export type ResumePageProps = PageProps & {
  basicInfo: BasicInfo;
};
