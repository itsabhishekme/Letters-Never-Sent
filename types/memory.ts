export type MemoryCategory =
  | "Childhood"
  | "Friendship"
  | "Family"
  | "Nostalgia"
  | "Travel"
  | "Life Moments"
  | "Reflection";

export interface Memory {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;

  category: MemoryCategory;

  author: string;

  date: string;

  readTime: string;

  featured: boolean;

  location?: string;

  image?: string;

  tags: string[];

  createdAt?: string;

  updatedAt?: string;
}

export interface MemoryCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: MemoryCategory;
  date: string;
  readTime: string;
  location?: string;
  featured?: boolean;
}

export interface MemoryMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface MemoryFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: MemoryCategory;
  tags?: string[];
  image?: string;
  location?: string;
  featured?: boolean;
}

export interface MemoryResponse {
  success: boolean;
  data: Memory[];
  total: number;
}

export interface SingleMemoryResponse {
  success: boolean;
  data: Memory | null;
}

export interface MemorySearchParams {
  query?: string;
  category?: MemoryCategory;
  tag?: string;
  featured?: boolean;
  location?: string;
}

export interface MemoryFilterOptions {
  categories: MemoryCategory[];
  tags: string[];
  locations: string[];
}

export interface RelatedMemory {
  slug: string;
  title: string;
  excerpt: string;
  category: MemoryCategory;
}

export interface MemoryAuthor {
  name: string;
  bio?: string;
  avatar?: string;
  website?: string;
}

export interface MemoryStats {
  totalMemories: number;
  totalCategories: number;
  featuredMemories: number;
}

export interface MemoryPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface MemoryCollection {
  memories: Memory[];
  pagination?: MemoryPagination;
}

export interface MemorySEO {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
}

export interface MemoryLocation {
  name: string;
  country?: string;
  state?: string;
}

export const MEMORY_CATEGORIES: MemoryCategory[] = [
  "Childhood",
  "Friendship",
  "Family",
  "Nostalgia",
  "Travel",
  "Life Moments",
  "Reflection",
];

export type MemorySlug = string;

export type MemoryTag = string;