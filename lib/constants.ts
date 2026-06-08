export const SITE_CONFIG = {
  name: "Letters Never Sent",

  tagline: "For Every Feeling Left Unspoken",

  description:
    "A literary home for unsent letters, personal reflections, poetry, memories, and stories that continue to live beyond the moment they were written.",

  url: "https://lettersneversent.com",

  author: "Vihaan",

  email: "hello@lettersneversent.com",

  copyright: `© ${new Date().getFullYear()} Letters Never Sent. All Rights Reserved.`,

  locale: "en-US",

  keywords: [
    "Letters Never Sent",
    "Unsent Letters",
    "Love Letters",
    "Personal Reflections",
    "Poetry",
    "Memories",
    "Storytelling",
    "Literary Journal",
    "Essays",
    "Creative Writing",
    "Emotional Writing",
    "Vihaan",
  ],
};

export const NAVIGATION_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Letters",
    href: "/letters",
  },
  {
    title: "Emotions",
    href: "/emotions",
  },
  {
    title: "Memories",
    href: "/memories",
  },
  {
    title: "Reflections",
    href: "/reflections",
  },
  {
    title: "Poetry",
    href: "/poetry",
  },
  {
    title: "Newsletter",
    href: "/newsletter",
  },
  {
    title: "Submissions",
    href: "/submissions",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
] as const;

export const FOOTER_LINKS = {
  explore: [
    {
      title: "Letters",
      href: "/letters",
    },
    {
      title: "Poetry",
      href: "/poetry",
    },
    {
      title: "Memories",
      href: "/memories",
    },
    {
      title: "Reflections",
      href: "/reflections",
    },
  ],

  community: [
    {
      title: "Newsletter",
      href: "/newsletter",
    },
    {
      title: "Submissions",
      href: "/submissions",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],

  legal: [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms of Service",
      href: "/terms-of-service",
    },
  ],
};

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  medium: "https://medium.com",
  x: "https://x.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

export const LETTER_CATEGORIES = [
  "Love",
  "Hope",
  "Healing",
  "Reflection",
  "Growth",
  "Loss",
  "Friendship",
  "Memory",
] as const;

export const MEMORY_CATEGORIES = [
  "Childhood",
  "Friendship",
  "Family",
  "Nostalgia",
  "Travel",
  "Life Moments",
  "Reflection",
] as const;

export const POETRY_CATEGORIES = [
  "Love",
  "Hope",
  "Loss",
  "Dreams",
  "Healing",
  "Nostalgia",
  "Reflection",
  "Life",
] as const;

export const REFLECTION_CATEGORIES = [
  "Growth",
  "Healing",
  "Purpose",
  "Relationships",
  "Mindfulness",
  "Self Discovery",
  "Life Lessons",
  "Personal Journey",
] as const;

export const NEWSLETTER_BENEFITS = [
  "Exclusive Letters",
  "Personal Reflections",
  "Poetry & Essays",
  "Monthly Updates",
  "Early Access Content",
  "Subscriber-Only Stories",
];

export const FEATURED_QUOTES = [
  "Some letters are written not to be delivered, but to finally be understood.",
  "Every memory is a letter written by time.",
  "Healing is not forgetting. It is remembering without breaking.",
  "Hope survives even in unfinished stories.",
  "Life is not about arriving. Life is about becoming.",
  "For every feeling left unspoken, there is a story waiting to be written.",
];

export const SEO_DEFAULTS = {
  title: "Letters Never Sent",
  titleTemplate: "%s | Letters Never Sent",

  description:
    "For Every Feeling Left Unspoken",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Letters Never Sent",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export const PAGINATION = {
  POSTS_PER_PAGE: 9,
  LETTERS_PER_PAGE: 12,
  MEMORIES_PER_PAGE: 12,
  POEMS_PER_PAGE: 12,
  REFLECTIONS_PER_PAGE: 12,
};

export const API_ROUTES = {
  NEWSLETTER_SUBSCRIBE: "/api/newsletter",
  CONTACT_FORM: "/api/contact",
  SUBMISSIONS: "/api/submissions",
};

export const DEFAULT_AUTHOR = {
  name: "Vihaan",

  bio: "Writer, storyteller, and creator of Letters Never Sent.",

  avatar: "/images/author/vihaan.jpg",
};

export const THEME = {
  default: "dark",

  colors: {
    background: "#000000",
    foreground: "#ffffff",
    muted: "#71717a",
    border: "#27272a",
  },
};

export const APP_NAME = SITE_CONFIG.name;

export const APP_DESCRIPTION =
  SITE_CONFIG.description;

export const APP_URL =
  SITE_CONFIG.url;