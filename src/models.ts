export interface IProps {
  children?: React.ReactChild | React.ReactChild[] | React.ReactNode | JSX.Element;
}

export interface Social {
  name: string;
  url: string;
  className: string;
}

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
  description: string;
  image: string;
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

export interface Testimonials {
  testimonials: Testimonial[];
}

export interface UserData {
  fullName: string;
  imageURL: string;
  employer: string;
  bio: string;
  shortDescriptions: string[];
  actionButtonText: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  resumeUrl: string;
  social: Social[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  portfolio: Portfolio[];
  testimonials: Testimonials;
}
