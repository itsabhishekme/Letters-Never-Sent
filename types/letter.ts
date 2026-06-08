export type LetterCategory =
  | "Love"
  | "Hope"
  | "Healing"
  | "Reflection"
  | "Growth"
  | "Loss"
  | "Friendship"
  | "Memory";

export interface Letter {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;

  category: LetterCategory;

  author: string;

  date: string;

  readTime: string;

  featured: boolean;

  image?: string;

  tags: string[];

  createdAt?: string;

  updatedAt?: string;
}

export interface LetterCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: LetterCategory;
  date: string;
  readTime: string;
  author?: string;
  featured?: boolean;
}

export interface LetterMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface LetterFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: LetterCategory;
  tags?: string[];
  image?: string;
  featured?: boolean;
}

export interface LetterResponse {
  success: boolean;
  data: Letter[];
  total: number;
}

export interface SingleLetterResponse {
  success: boolean;
  data: Letter | null;
}

export interface LetterSearchParams {
  query?: string;
  category?: LetterCategory;
  tag?: string;
  featured?: boolean;
}

export interface LetterFilterOptions {
  categories: LetterCategory[];
  tags: string[];
}

export interface RelatedLetter {
  slug: string;
  title: string;
  excerpt: string;
  category: LetterCategory;
}

export interface LetterAuthor {
  name: string;
  bio?: string;
  avatar?: string;
  website?: string;
}

export interface LetterStats {
  totalLetters: number;
  totalCategories: number;
  featuredLetters: number;
}

export interface LetterPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface LetterCollection {
  letters: Letter[];
  pagination?: LetterPagination;
}

export interface LetterSEO {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
}

export const LETTER_CATEGORIES: LetterCategory[] = [
  "Love",
  "Hope",
  "Healing",
  "Reflection",
  "Growth",
  "Loss",
  "Friendship",
  "Memory",
];

export type LetterSlug = string;

export type LetterTag = string;