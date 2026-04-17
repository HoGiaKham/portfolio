export interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
}

export interface ExperienceData {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface ProjectData {
  title: string;
  role: string;
  duration: string;
  github: string;
  tech: string[];
  description: string[];
  images?: { label: string; url: string }[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}