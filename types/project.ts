export interface ProjectSection {
  title: string;
  body: string;
}

export interface ProjectAward {
  src: string;
  label: string;
}

export interface Project {
  slug: string;
  id: string;
  name: string;
  category: string;
  year: string;
  duration: string;
  location: string;
  heroTagline: string;
  objectivesDescription: string;
  tags: string[];
  heroImage: string;
  galleryImages: string[];
  siteUrl: string;
  sections: ProjectSection[];
  techStack?: string[];
  awardImage?: ProjectAward;
}
