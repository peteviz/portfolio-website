export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'sustainability' | 'mobile' | "education" | "ML/AI";
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  challenges?: string;
  solution?: string;
  impact?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: 'development' | 'sustainability' | 'hybrid';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
  certificateUrl?: string;
  coursework?: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'sustainability' | 'tools' | 'programming' | 'ML/AI' | 'ma';
  icon?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'sustainability' | 'technology' | 'industry-insights';
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featuredImage: string;
  author: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'general' | 'project' | 'collaboration' | 'employment';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
    linkedIn: string;

  phone?: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  socialLinks?: SocialLink[];
}
