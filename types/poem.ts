export type PoemCategory =
  | "Love"
  | "Hope"
  | "Loss"
  | "Dreams"
  | "Healing"
  | "Nostalgia"
  | "Reflection"
  | "Life";

export interface Poem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;

  category: PoemCategory;

  author: string;

  date: string;

  readTime: string;

  featured: boolean;

  image?: string;

  tags: string[];

  createdAt?: string;

  updatedAt?: string;
}

export interface PoetryCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: PoemCategory;
  date: string;
  readTime: string;
  author?: string;
  featured?: boolean;
}

export interface PoemMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface PoemFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: PoemCategory;
  tags?: string[];
  image?: string;
  featured?: boolean;
}

export interface PoemResponse {
  success: boolean;
  data: Poem[];
  total: number;
}

export interface SinglePoemResponse {
  success: boolean;
  data: Poem | null;
}

export interface PoemSearchParams {
  query?: string;
  category?: PoemCategory;
  tag?: string;
  featured?: boolean;
}

export interface PoemFilterOptions {
  categories: PoemCategory[];
  tags: string[];
}

export interface RelatedPoem {
  slug: string;
  title: string;
  excerpt: string;
  category: PoemCategory;
}

export interface PoemAuthor {
  name: string;
  bio?: string;
  avatar?: string;
  website?: string;
}

export interface PoemStats {
  totalPoems: number;
  totalCategories: number;
  featuredPoems: number;
}

export interface PoemPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PoemCollection {
  poems: Poem[];
  pagination?: PoemPagination;
}

export interface PoemSEO {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
}

export interface PoemSeries {
  title: string;
  description?: string;
  poems: Poem[];
}

export interface PoemQuote {
  text: string;
  author: string;
}

export const POEM_CATEGORIES: PoemCategory[] = [
  "Love",
  "Hope",
  "Loss",
  "Dreams",
  "Healing",
  "Nostalgia",
  "Reflection",
  "Life",
];

export type PoemSlug = string;

export type PoemTag = string;