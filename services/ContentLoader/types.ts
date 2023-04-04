export interface WorkInfo {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  keywords: string[];
}

export interface Profile {
  icon: string;
  username: string;
  url: string;
}

export interface BasicInfo {
  name: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  address: string;
  profiles: Profile[];
}
