export interface Memory {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Childhood"
    | "Friendship"
    | "Family"
    | "Nostalgia"
    | "Travel"
    | "Life Moments"
    | "Reflection";

  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  location?: string;
  image?: string;
  tags: string[];
  content: string;
}

export const memories: Memory[] = [
  {
    id: 1,

    slug: "summer-evenings",

    title: "Summer Evenings",

    excerpt:
      "The fading sunlight, the laughter of friends, and moments that never truly left.",

    category: "Childhood",

    author: "Vihaan",

    date: "2026-06-01",

    readTime: "4 min read",

    featured: true,

    location: "Chapra, Bihar",

    image: "/images/memories/summer-evenings.jpg",

    tags: [
      "childhood",
      "summer",
      "nostalgia",
      "friends",
    ],

    content: `
The evenings seemed endless back then.

The sky would slowly change colors while
we chased each other through dusty streets.

There were no deadlines.

No responsibilities.

Only laughter and the certainty that
tomorrow would be just as beautiful.

Years later, I realize those ordinary
moments became extraordinary memories.

And perhaps that is the true magic of childhood.

— Vihaan
`,
  },

  {
    id: 2,

    slug: "the-last-train-home",

    title: "The Last Train Home",

    excerpt:
      "A journey that became more about memories than destinations.",

    category: "Travel",

    author: "Vihaan",

    date: "2026-06-03",

    readTime: "6 min read",

    featured: false,

    location: "India",

    image: "/images/memories/last-train-home.jpg",

    tags: [
      "travel",
      "journey",
      "reflection",
      "life",
    ],

    content: `
The train moved steadily through the night.

Outside the window,
small towns appeared and disappeared.

Inside, people slept.

But I remained awake.

Watching.

Thinking.

Remembering.

Sometimes the destination matters less
than everything we discover along the way.

— Vihaan
`,
  },

  {
    id: 3,

    slug: "old-photographs",

    title: "Old Photographs",

    excerpt:
      "Some pictures capture more than faces—they preserve entire worlds.",

    category: "Reflection",

    author: "Vihaan",

    date: "2026-06-05",

    readTime: "5 min read",

    featured: true,

    image: "/images/memories/old-photographs.jpg",

    tags: [
      "photographs",
      "memories",
      "reflection",
      "family",
    ],

    content: `
I found an old photograph today.

The faces were familiar.

The clothes belonged to another time.

The smiles seemed untouched by worry.

A photograph freezes a moment.

But what it really preserves
is the feeling attached to that moment.

That is why old photographs feel alive.

— Vihaan
`,
  },

  {
    id: 4,

    slug: "a-forgotten-friendship",

    title: "A Forgotten Friendship",

    excerpt:
      "The people who shaped us often remain part of us, even after they leave.",

    category: "Friendship",

    author: "Vihaan",

    date: "2026-06-07",

    readTime: "7 min read",

    featured: false,

    image: "/images/memories/forgotten-friendship.jpg",

    tags: [
      "friendship",
      "relationships",
      "nostalgia",
      "growth",
    ],

    content: `
We promised to stay in touch.

Most people do.

Few actually succeed.

Years passed.

Life happened.

And eventually we became strangers
with shared memories.

Yet I still smile when I remember
those conversations.

Those adventures.

Those years.

Friendship does not always end.

Sometimes it simply changes form.

— Vihaan
`,
  },

  {
    id: 5,

    slug: "rainy-afternoons",

    title: "Rainy Afternoons",

    excerpt:
      "A simple memory that still feels alive whenever it rains.",

    category: "Nostalgia",

    author: "Vihaan",

    date: "2026-06-08",

    readTime: "3 min read",

    featured: false,

    image: "/images/memories/rainy-afternoons.jpg",

    tags: [
      "rain",
      "nostalgia",
      "childhood",
      "peace",
    ],

    content: `
Rain has a strange way of opening old doors.

One drop becomes a memory.

A hundred drops become a story.

Whenever it rains,
I remember afternoons spent watching
the world through a window.

Simple moments.

Yet unforgettable.

— Vihaan
`,
  },

  {
    id: 6,

    slug: "the-house-we-left-behind",

    title: "The House We Left Behind",

    excerpt:
      "Some places become memories long before we realize they are gone.",

    category: "Family",

    author: "Vihaan",

    date: "2026-06-10",

    readTime: "8 min read",

    featured: true,

    location: "Bihar",

    image: "/images/memories/old-house.jpg",

    tags: [
      "family",
      "home",
      "nostalgia",
      "childhood",
    ],

    content: `
The house seemed smaller when I returned.

The rooms that once felt enormous
now felt ordinary.

Yet every corner carried a memory.

Every wall remembered a story.

Every doorway echoed with voices
from another chapter of life.

The house remained.

But time had moved on.

And perhaps that is why it felt sacred.

— Vihaan
`,
  },

  {
    id: 7,

    slug: "a-festival-long-ago",

    title: "A Festival Long Ago",

    excerpt:
      "Lights, laughter, and memories illuminated by time.",

    category: "Life Moments",

    author: "Vihaan",

    date: "2026-06-12",

    readTime: "5 min read",

    featured: false,

    image: "/images/memories/festival.jpg",

    tags: [
      "festival",
      "family",
      "celebration",
      "tradition",
    ],

    content: `
The lights seemed brighter.

The sweets tasted better.

The conversations lasted longer.

Or perhaps memory simply adds warmth
to everything it touches.

Either way,
those celebrations still live inside me.

— Vihaan
`,
  },

  {
    id: 8,

    slug: "the-road-back-home",

    title: "The Road Back Home",

    excerpt:
      "Sometimes the longest journey is returning to where it all began.",

    category: "Life Moments",

    author: "Vihaan",

    date: "2026-06-15",

    readTime: "6 min read",

    featured: false,

    location: "Chapra",

    image: "/images/memories/road-home.jpg",

    tags: [
      "home",
      "journey",
      "reflection",
      "life",
    ],

    content: `
We spend years chasing the future.

Building careers.

Creating identities.

Searching for meaning.

And then one day,
we return home.

Not because the journey failed.

But because we finally understand
where it began.

— Vihaan
`,
  },
];

export const featuredMemories = memories.filter(
  (memory) => memory.featured
);

export const latestMemories = [...memories]
  .sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )
  .slice(0, 6);

export const getMemoryBySlug = (slug: string) => {
  return memories.find(
    (memory) => memory.slug === slug
  );
};

export const getMemoriesByCategory = (
  category: Memory["category"]
) => {
  return memories.filter(
    (memory) => memory.category === category
  );
};