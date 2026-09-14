/**
 * TypeScript type definitions for Dr. Jipeng Zhang's academic website data models.
 */

export type ArtifactBadgeType = 'available' | 'functional' | 'reproduced' | 'evaluated';

export interface ArtifactBadge {
  type: ArtifactBadgeType;
  label: string;
  url?: string;
}

export interface PublicationLinks {
  pdf?: string;
  eprint?: string;
  code?: string;
  codeAvx2?: string;
  codeAvx512?: string;
  zenodo?: string;
  slides?: string;
  video?: string;
  award?: string;
  awardLink?: string;
  statsLink?: string;
  link?: string;
  venue?: string;
  [key: string]: string | undefined;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  award: string | null;
  selected: boolean;
  links: PublicationLinks;
  artifactBadges: ArtifactBadge[];
  bibtex: string;
  citations?: number;
}

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  department?: string;
  period: string;
  yearStart: number;
  yearEnd: number;
  advisor?: string;
  advisorUrl?: string;
  thesisTitle?: string;
  thesisPdf?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  label?: string;
}

export interface Affiliation {
  name: string;
  shortName: string;
  url: string;
  role?: string;
  department?: string;
}

export interface ProfileAdvisor {
  name: string;
  url: string;
  institution?: string;
}

export interface Profile {
  name: string;
  chineseName: string;
  title: string;
  affiliation: Affiliation;
  advisor: ProfileAdvisor;
  phd: Education;
  bsc: Education;
  education: Education[];
  email: string;
  avatar: string;
  bio: string;
  shortBio: string;
  interests: string[];
  socials: SocialLink[];
}

export interface ProgramCommitteeItem {
  venue: string;
  year: string;
  role?: string;
}

export interface TalkItem {
  date: string;
  title: string;
  event: string;
  location: string;
  slides?: string;
  pictures?: string[];
  link?: string;
}

export interface SoftwareItem {
  title: string;
  repo: string;
  repoUrl: string;
  prNumber?: number;
  prUrl?: string;
  status: 'merged' | 'open' | 'closed';
  description: string;
}

export interface ProjectItem {
  title: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  period: string;
  dateStart?: string;
  dateEnd?: string;
  role?: string;
  location?: string;
  description: string;
}

export interface ActivitiesData {
  programCommittee: ProgramCommitteeItem[];
  talks: TalkItem[];
  software: SoftwareItem[];
  projects: ProjectItem[];
}

export interface CitationMetric {
  all: number;
  recent: number;
}

export interface YearlyCitation {
  year: number;
  citations: number;
}

export interface ScholarPublication {
  title: string;
  citations: number;
  year: number | null;
}

export interface ScholarData {
  userId: string;
  profileUrl: string;
  updatedAt: string;
  totalCitations: number;
  hIndex: number;
  i10Index: number;
  stats: {
    citations: CitationMetric;
    hIndex: CitationMetric;
    i10Index: CitationMetric;
  };
  citationsPerYear: YearlyCitation[];
  publications: ScholarPublication[];
}

export interface NewsLink {
  label: string;
  url: string;
}

export interface NewsItem {
  id: string;
  date: string;
  year: string;
  title: string;
  description?: string;
  category: 'paper' | 'service' | 'award' | 'talk' | 'general';
  highlight?: boolean;
  award?: boolean;
  pinned?: boolean;
  authorRole?: 'first' | 'co-author' | 'both';
  links?: NewsLink[];
}

