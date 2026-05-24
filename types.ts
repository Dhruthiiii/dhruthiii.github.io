import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: string; // e.g. "Deep Learning", "Frontend"
  imagePlaceholderColor: string;
  imageUrl?: string;
  link?: string;
}

export interface BlogItem {
  id: string;
  title: string;
  summary: string;
  category: 'Security' | 'API' | 'GenAI' | 'Engineering' | 'Career';
  readTime: string;
  date: string;
  content: string;
}

export interface BlogPlaylist {
  id: string;
  title: string;
  description: string;
  iconName: 'shield' | 'brain' | 'terminal' | 'server';
  color: string;
  blogs: BlogItem[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}