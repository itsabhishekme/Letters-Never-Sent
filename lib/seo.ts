import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

const DEFAULT_OG_IMAGE = "/images/og-image.jpg";

export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const seoTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.name;

  const seoDescription =
    description || SITE_CONFIG.description;

  const seoImage = image || DEFAULT_OG_IMAGE;

  const seoUrl = url
    ? `${SITE_CONFIG.url}${url}`
    : SITE_CONFIG.url;

  return {
    title: seoTitle,

    description: seoDescription,

    keywords: [
      ...SITE_CONFIG.keywords,
      ...keywords,
    ],

    authors: [
      {
        name: SITE_CONFIG.author,
      },
    ],

    creator: SITE_CONFIG.author,

    publisher: SITE_CONFIG.author,

    metadataBase: new URL(
      SITE_CONFIG.url
    ),

    alternates: {
      canonical: seoUrl,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      type,
      locale: "en_US",
      url: seoUrl,
      title: seoTitle,
      description: seoDescription,
      siteName: SITE_CONFIG.name,

      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],

      ...(publishedTime && {
        publishedTime,
      }),

      ...(modifiedTime && {
        modifiedTime,
      }),

      ...(authors && {
        authors,
      }),
    },

    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,

      images: [seoImage],

      creator: "@vihaanwrites",
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },

    category: "Literature",
  };
}

export function generateArticleSEO(
  title: string,
  description: string,
  publishedTime: string,
  category: string,
  tags: string[] = [],
  image?: string
): Metadata {
  return generateSEO({
    title,
    description,
    image,
    type: "article",
    publishedTime,
    keywords: [
      category,
      ...tags,
    ],
  });
}

export function generatePageSEO(
  title: string,
  description: string,
  path: string
): Metadata {
  return generateSEO({
    title,
    description,
    url: path,
  });
}

export function generateNoIndexSEO(
  title: string,
  description: string
): Metadata {
  return generateSEO({
    title,
    description,
    noIndex: true,
  });
}

export function createJsonLd(
  data: Record<string, unknown>
) {
  return {
    "@context": "https://schema.org",
    ...data,
  };
}

export function websiteSchema() {
  return createJsonLd({
    "@type": "WebSite",

    name: SITE_CONFIG.name,

    url: SITE_CONFIG.url,

    description:
      SITE_CONFIG.description,

    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },

    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      "query-input":
        "required name=search_term_string",
    },
  });
}

export function articleSchema({
  title,
  description,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return createJsonLd({
    "@type": "Article",

    headline: title,

    description,

    image: image
      ? `${SITE_CONFIG.url}${image}`
      : `${SITE_CONFIG.url}${DEFAULT_OG_IMAGE}`,

    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },

    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },

    datePublished,

    dateModified:
      dateModified || datePublished,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}${url}`,
    },
  });
}

export function breadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[]
) {
  return createJsonLd({
    "@type": "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_CONFIG.url}${item.url}`,
      })
    ),
  });
}

export function organizationSchema() {
  return createJsonLd({
    "@type": "Organization",

    name: SITE_CONFIG.name,

    url: SITE_CONFIG.url,

    logo: `${SITE_CONFIG.url}/logo.png`,

    founder: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },

    sameAs: [],
  });
}

export function personSchema() {
  return createJsonLd({
    "@type": "Person",

    name: SITE_CONFIG.author,

    url: SITE_CONFIG.url,

    description:
      "Writer, storyteller, and creator of Letters Never Sent.",
  });
}

export function metadataKeywords(
  keywords: string[]
): string[] {
  return [
    ...SITE_CONFIG.keywords,
    ...keywords,
  ];
}