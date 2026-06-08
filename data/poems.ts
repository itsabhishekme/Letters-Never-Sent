export interface Poem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Love"
    | "Hope"
    | "Loss"
    | "Dreams"
    | "Healing"
    | "Nostalgia"
    | "Reflection"
    | "Life";

  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  image?: string;
  tags: string[];
  content: string;
}

export const poems: Poem[] = [
  {
    id: 1,

    slug: "between-the-lines",

    title: "Between the Lines",

    excerpt:
      "Sometimes the most important words are the ones left unwritten.",

    category: "Love",

    author: "Vihaan",

    date: "2026-06-01",

    readTime: "2 min read",

    featured: true,

    image: "/images/poetry/between-the-lines.jpg",

    tags: [
      "love",
      "poetry",
      "emotions",
      "relationships",
    ],

    content: `
There are words

hidden between the lines,

waiting to be noticed.



There are stories

inside every silence,

waiting to be heard.



And there are feelings

inside every heart,

waiting to be understood.

— Vihaan
`,
  },

  {
    id: 2,

    slug: "the-weight-of-silence",

    title: "The Weight of Silence",

    excerpt:
      "Silence speaks in ways language never could.",

    category: "Reflection",

    author: "Vihaan",

    date: "2026-06-03",

    readTime: "3 min read",

    featured: true,

    image: "/images/poetry/weight-of-silence.jpg",

    tags: [
      "silence",
      "reflection",
      "mindfulness",
      "life",
    ],

    content: `
Silence is not empty.

It carries stories.

It carries memories.

It carries unfinished conversations.



Sometimes

the loudest truths

arrive quietly.

— Vihaan
`,
  },

  {
    id: 3,

    slug: "a-room-full-of-memories",

    title: "A Room Full of Memories",

    excerpt:
      "Every corner remembers what time forgot.",

    category: "Nostalgia",

    author: "Vihaan",

    date: "2026-06-05",

    readTime: "4 min read",

    featured: false,

    image: "/images/poetry/room-memories.jpg",

    tags: [
      "memories",
      "nostalgia",
      "time",
      "reflection",
    ],

    content: `
A chair.

A photograph.

A window facing yesterday.



The room remains unchanged.

Only the people

have become memories.

— Vihaan
`,
  },

  {
    id: 4,

    slug: "letters-to-the-moon",

    title: "Letters to the Moon",

    excerpt:
      "A conversation with the sky on a sleepless night.",

    category: "Dreams",

    author: "Vihaan",

    date: "2026-06-07",

    readTime: "3 min read",

    featured: false,

    image: "/images/poetry/moon-letters.jpg",

    tags: [
      "moon",
      "dreams",
      "night",
      "hope",
    ],

    content: `
Tonight

I wrote another letter

to the moon.



Not because it would answer.

But because

it always listens.

— Vihaan
`,
  },

  {
    id: 5,

    slug: "the-last-goodbye",

    title: "The Last Goodbye",

    excerpt:
      "Not every farewell is spoken aloud.",

    category: "Loss",

    author: "Vihaan",

    date: "2026-06-08",

    readTime: "4 min read",

    featured: false,

    image: "/images/poetry/last-goodbye.jpg",

    tags: [
      "loss",
      "farewell",
      "grief",
      "healing",
    ],

    content: `
Some goodbyes

arrive without warning.



No final conversation.

No closing chapter.



Only silence

where a voice once lived.

— Vihaan
`,
  },

  {
    id: 6,

    slug: "still-growing",

    title: "Still Growing",

    excerpt:
      "Even broken branches can bloom again.",

    category: "Hope",

    author: "Vihaan",

    date: "2026-06-10",

    readTime: "2 min read",

    featured: true,

    image: "/images/poetry/still-growing.jpg",

    tags: [
      "hope",
      "growth",
      "healing",
      "life",
    ],

    content: `
The storm came.

The branches broke.

The leaves disappeared.



Yet spring returned.

And so did I.

— Vihaan
`,
  },

  {
    id: 7,

    slug: "unfinished-sky",

    title: "Unfinished Sky",

    excerpt:
      "Some dreams remain beautiful because they were never completed.",

    category: "Dreams",

    author: "Vihaan",

    date: "2026-06-12",

    readTime: "3 min read",

    featured: false,

    image: "/images/poetry/unfinished-sky.jpg",

    tags: [
      "dreams",
      "future",
      "imagination",
      "possibilities",
    ],

    content: `
An unfinished sky

still holds stars.



An unfinished dream

still holds hope.



And an unfinished story

still holds possibility.

— Vihaan
`,
  },

  {
    id: 8,

    slug: "learning-the-rain",

    title: "Learning the Rain",

    excerpt:
      "Every storm teaches a lesson the sunshine cannot.",

    category: "Healing",

    author: "Vihaan",

    date: "2026-06-14",

    readTime: "3 min read",

    featured: false,

    image: "/images/poetry/learning-rain.jpg",

    tags: [
      "healing",
      "rain",
      "growth",
      "strength",
    ],

    content: `
Rain never apologizes

for falling.



It simply arrives,

changes everything,

and leaves.



Perhaps healing

works the same way.

— Vihaan
`,
  },

  {
    id: 9,

    slug: "becoming",

    title: "Becoming",

    excerpt:
      "Life is not about arriving. It is about becoming.",

    category: "Life",

    author: "Vihaan",

    date: "2026-06-15",

    readTime: "4 min read",

    featured: true,

    image: "/images/poetry/becoming.jpg",

    tags: [
      "life",
      "growth",
      "purpose",
      "journey",
    ],

    content: `
I spent years

searching for a destination.



Then I realized

the journey itself

was the answer.



Life is not arriving.

Life is becoming.

— Vihaan
`,
  },

  {
    id: 10,

    slug: "echoes-of-yesterday",

    title: "Echoes of Yesterday",

    excerpt:
      "The past never truly leaves; it simply learns to whisper.",

    category: "Nostalgia",

    author: "Vihaan",

    date: "2026-06-18",

    readTime: "3 min read",

    featured: false,

    image: "/images/poetry/echoes-yesterday.jpg",

    tags: [
      "nostalgia",
      "memories",
      "past",
      "reflection",
    ],

    content: `
Yesterday

still visits sometimes.



Not to stay.

Not to hurt.



Only to remind me

of who I once was.

— Vihaan
`,
  },
];

export const featuredPoems = poems.filter(
  (poem) => poem.featured
);

export const latestPoems = [...poems]
  .sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )
  .slice(0, 6);

export const getPoemBySlug = (slug: string) => {
  return poems.find(
    (poem) => poem.slug === slug
  );
};

export const getPoemsByCategory = (
  category: Poem["category"]
) => {
  return poems.filter(
    (poem) => poem.category === category
  );
};