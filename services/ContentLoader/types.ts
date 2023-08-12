interface Profile {
  icon: string;
  username: string;
  url: string;
}

interface Keyword {
  name: string;
  link: string;
}

export type KernedLetter =
  | string
  | {
      character: string;
      letterSpacing: string;
    };

export interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  keywords: Keyword[];
}

export interface BasicInfo {
  name: string;
  nameKerned: KernedLetter[];
  image: string;
  email: string;
  phone: string;
  url: string;
  address: string;
  profiles: Profile[];
}

export interface Education {
  area: string;
  endDate: string;
  startDate: string;
  highlights: string[];
  institution: string;
  url: string;
}

export interface SkillContainer {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  link: string;
}

export interface Education {
  area: string;
  endDate: string;
  startDate: string;
  highlights: string[];
  institution: string;
  url: string;
}

export type Awards = string[];
export type AdditionalExperience = string[];
