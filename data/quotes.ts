export interface Quote {
  id: number;
  text: string;
  author: string;
  category:
    | "Love"
    | "Hope"
    | "Healing"
    | "Memory"
    | "Reflection"
    | "Life"
    | "Growth"
    | "Poetry";
  featured: boolean;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text:
      "Some letters are written not to be delivered, but to finally be understood.",
    author: "Vihaan",
    category: "Reflection",
    featured: true,
  },

  {
    id: 2,
    text:
      "The heart remembers what time tries to forget.",
    author: "Vihaan",
    category: "Memory",
    featured: true,
  },

  {
    id: 3,
    text:
      "Not every goodbye is spoken aloud.",
    author: "Vihaan",
    category: "Life",
    featured: false,
  },

  {
    id: 4,
    text:
      "Some emotions stay because they never found the right words.",
    author: "Vihaan",
    category: "Love",
    featured: true,
  },

  {
    id: 5,
    text:
      "Silence is often where healing begins.",
    author: "Vihaan",
    category: "Healing",
    featured: false,
  },

  {
    id: 6,
    text:
      "Every memory is a letter written by time.",
    author: "Vihaan",
    category: "Memory",
    featured: false,
  },

  {
    id: 7,
    text:
      "Hope survives even in unfinished stories.",
    author: "Vihaan",
    category: "Hope",
    featured: true,
  },

  {
    id: 8,
    text:
      "Growth begins where comfort ends.",
    author: "Vihaan",
    category: "Growth",
    featured: false,
  },

  {
    id: 9,
    text:
      "The most meaningful conversations are sometimes the ones we have with ourselves.",
    author: "Vihaan",
    category: "Reflection",
    featured: false,
  },

  {
    id: 10,
    text:
      "A poem begins where ordinary language stops.",
    author: "Vihaan",
    category: "Poetry",
    featured: true,
  },

  {
    id: 11,
    text:
      "The distance between two people is not always measured in miles.",
    author: "Vihaan",
    category: "Love",
    featured: false,
  },

  {
    id: 12,
    text:
      "Some chapters end quietly, but they still change the story.",
    author: "Vihaan",
    category: "Life",
    featured: false,
  },

  {
    id: 13,
    text:
      "Healing is not forgetting. It is remembering without breaking.",
    author: "Vihaan",
    category: "Healing",
    featured: true,
  },

  {
    id: 14,
    text:
      "Yesterday still visits sometimes, not to stay, but to remind us.",
    author: "Vihaan",
    category: "Memory",
    featured: false,
  },

  {
    id: 15,
    text:
      "Every feeling deserves a voice, even if it never reaches its destination.",
    author: "Vihaan",
    category: "Love",
    featured: true,
  },

  {
    id: 16,
    text:
      "The journey matters as much as the destination.",
    author: "Vihaan",
    category: "Life",
    featured: false,
  },

  {
    id: 17,
    text:
      "A broken heart still knows how to love.",
    author: "Vihaan",
    category: "Healing",
    featured: false,
  },

  {
    id: 18,
    text:
      "Memories grow more beautiful as they learn to live inside us.",
    author: "Vihaan",
    category: "Memory",
    featured: false,
  },

  {
    id: 19,
    text:
      "There is wisdom hidden inside every silence.",
    author: "Vihaan",
    category: "Reflection",
    featured: false,
  },

  {
    id: 20,
    text:
      "Life is not about arriving. Life is about becoming.",
    author: "Vihaan",
    category: "Growth",
    featured: true,
  },

  {
    id: 21,
    text:
      "The moon listens to letters no one else will ever read.",
    author: "Vihaan",
    category: "Poetry",
    featured: false,
  },

  {
    id: 22,
    text:
      "Sometimes the strongest people are simply those who kept going.",
    author: "Vihaan",
    category: "Growth",
    featured: false,
  },

  {
    id: 23,
    text:
      "Every ending carries the seed of a beginning.",
    author: "Vihaan",
    category: "Hope",
    featured: true,
  },

  {
    id: 24,
    text:
      "The stories we never tell often shape us the most.",
    author: "Vihaan",
    category: "Reflection",
    featured: false,
  },

  {
    id: 25,
    text:
      "For every feeling left unspoken, there is a story waiting to be written.",
    author: "Vihaan",
    category: "Love",
    featured: true,
  },
];

export const featuredQuotes = quotes.filter(
  (quote) => quote.featured
);

export const getQuotesByCategory = (
  category: Quote["category"]
) => {
  return quotes.filter(
    (quote) => quote.category === category
  );
};

export const getRandomQuote = (): Quote => {
  return quotes[
    Math.floor(Math.random() * quotes.length)
  ];
};

export const quoteCategories = [
  "Love",
  "Hope",
  "Healing",
  "Memory",
  "Reflection",
  "Life",
  "Growth",
  "Poetry",
] as const;