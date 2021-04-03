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
  name: string;
  level: number;
  description?: string;
}

export interface Portfolio {
  title: string;
  description: string;
  image: string;
  url: string;
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
  softSkills: Skill[];
  techSkills: Skill[];
  interests: Skill[];
  portfolio: Portfolio[];
  testimonials: Testimonial[];
}
