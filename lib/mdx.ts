import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MdxFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
}

function getReadingTime(text: string): string {
  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export interface MdxContent {
  slug: string;
  frontmatter: MdxFrontmatter;
  content: string;
  readingTime: string;
}

const CONTENT_PATH = path.join(
  process.cwd(),
  "content"
);

export function getMdxFileBySlug(
  folder: string,
  slug: string
): MdxContent | null {
  try {
    const filePath = path.join(
      CONTENT_PATH,
      folder,
      `${slug}.mdx`
    );

    const source = fs.readFileSync(
      filePath,
      "utf8"
    );

    const { data, content } = matter(source);

    return {
      slug,
      frontmatter: data as MdxFrontmatter,
      content,
      readingTime: getReadingTime(content),
    };
  } catch {
    return null;
  }
}

export function getAllMdxFiles(
  folder: string
): MdxContent[] {
  const folderPath = path.join(
    CONTENT_PATH,
    folder
  );

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");

      const source = fs.readFileSync(
        path.join(folderPath, file),
        "utf8"
      );

      const { data, content } = matter(source);

      return {
        slug,
        frontmatter: data as MdxFrontmatter,
        content,
        readingTime: getReadingTime(content),
      };
    })
    .sort(
      (a, b) =>
        new Date(
          b.frontmatter.date
        ).getTime() -
        new Date(
          a.frontmatter.date
        ).getTime()
    );
}

export function getFeaturedMdxFiles(
  folder: string
): MdxContent[] {
  return getAllMdxFiles(folder).filter(
    (item) => item.frontmatter.featured
  );
}

export function getMdxByCategory(
  folder: string,
  category: string
): MdxContent[] {
  return getAllMdxFiles(folder).filter(
    (item) =>
      item.frontmatter.category.toLowerCase() ===
      category.toLowerCase()
  );
}

export function getMdxByTag(
  folder: string,
  tag: string
): MdxContent[] {
  return getAllMdxFiles(folder).filter((item) =>
    item.frontmatter.tags?.some(
      (t) =>
        t.toLowerCase() === tag.toLowerCase()
    )
  );
}

export function getRecentMdxFiles(
  folder: string,
  limit = 6
): MdxContent[] {
  return getAllMdxFiles(folder).slice(
    0,
    limit
  );
}

export function getRelatedMdxFiles(
  folder: string,
  slug: string,
  limit = 3
): MdxContent[] {
  const allFiles = getAllMdxFiles(folder);

  const currentPost = allFiles.find(
    (post) => post.slug === slug
  );

  if (!currentPost) {
    return [];
  }

  return allFiles
    .filter(
      (post) =>
        post.slug !== slug &&
        post.frontmatter.category ===
          currentPost.frontmatter.category
    )
    .slice(0, limit);
}

export function getAllSlugs(
  folder: string
): string[] {
  const folderPath = path.join(
    CONTENT_PATH,
    folder
  );

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  return fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) =>
      file.replace(".mdx", "")
    );
}

export function getAllCategories(
  folder: string
): string[] {
  const posts = getAllMdxFiles(folder);

  return [
    ...new Set(
      posts.map(
        (post) =>
          post.frontmatter.category
      )
    ),
  ];
}

export function getAllTags(
  folder: string
): string[] {
  const posts = getAllMdxFiles(folder);

  const tags = posts.flatMap(
    (post) =>
      post.frontmatter.tags || []
  );

  return [...new Set(tags)];
}

export function searchMdxContent(
  folder: string,
  query: string
): MdxContent[] {
  const posts = getAllMdxFiles(folder);

  const searchTerm =
    query.toLowerCase();

  return posts.filter((post) => {
    return (
      post.frontmatter.title
        .toLowerCase()
        .includes(searchTerm) ||
      post.frontmatter.description
        .toLowerCase()
        .includes(searchTerm) ||
      post.content
        .toLowerCase()
        .includes(searchTerm) ||
      post.frontmatter.tags?.some((tag) =>
        tag
          .toLowerCase()
          .includes(searchTerm)
      )
    );
  });
}

export const LETTERS_PATH = "letters";
export const MEMORIES_PATH = "memories";
export const POETRY_PATH = "poetry";
export const REFLECTIONS_PATH =
  "reflections";