export type ProjectCategory = 'SaaS' | 'AI Tools' | 'Web Apps' | 'Mobile Apps' | 'Personal';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  label: string;
  description: string;
  longDescription: string;
  technologies: string[];
  accent: string;
  image: string;
  imageAlt: string;
  features: string[];
  challenge: string;
  result: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  current?: boolean;
}
