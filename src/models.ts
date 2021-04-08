export interface IProps {
  children?: React.ReactChild | React.ReactChild[] | React.ReactNode | JSX.Element;
}

export type Social = {
  facebook?: string;
  youtube?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  'stack-overflow'?: string;
  email?: string;
};

export interface Experience {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  companyLogo: string;
  startDate: Date;
  endDate: Date | null;
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export interface Testimonial {
  text: string;
  user: string;
}

export interface UserData {
  isPublic: boolean;
  fullName: string;
  userName: string;
  imageURL: string;
  bio: string;
  shortDescriptions: string[];
  actionButtonText: string;
  countryOfResidence: string;
  resumeUrl: string;

  social: Social;

  experience: Experience[];
  education: Education[];
  // TODO: Merge skill types & use skill category instead
  softSkills: Skill[];
  techSkills: Skill[];
  interests: Skill[];
  portfolio: Project[];
  testimonials: Testimonial[];
}

export type UserMessage = {
  name: string;
  emailOrPhone: string;
  message: string;
  isRead?: boolean;
};
