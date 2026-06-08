export interface Letter {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Love"
    | "Hope"
    | "Healing"
    | "Reflection"
    | "Growth"
    | "Loss"
    | "Friendship"
    | "Memory";

  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  image?: string;
  tags: string[];
  content: string;
}

export const letters: Letter[] = [
  {
    id: 1,
    slug: "the-letter-i-never-sent",
    title: "The Letter I Never Sent",
    excerpt:
      "Some words remain with us because they were never spoken.",

    category: "Love",

    author: "Vihaan",

    date: "2026-06-01",

    readTime: "5 min read",

    featured: true,

    image: "/images/letters/letter-1.jpg",

    tags: [
      "love",
      "relationships",
      "heart",
      "emotions",
    ],

    content: `
Dear You,

There are words I carried for years without
ever finding the courage to say.

Not because they lacked meaning.

Not because they were insignificant.

But because some feelings become heavier
the longer we carry them.

I often imagined what might have happened
if I had sent this letter.

Would anything have changed?

Would we have become strangers anyway?

Or would we have discovered something
worth holding onto?

Perhaps some letters are not written to
reach another person.

Perhaps they are written to help us
understand ourselves.

And perhaps that is enough.

— Vihaan
`,
  },

  {
    id: 2,
    slug: "to-the-person-i-never-became",

    title: "To The Person I Never Became",

    excerpt:
      "A reflection on abandoned dreams and untaken paths.",

    category: "Reflection",

    author: "Vihaan",

    date: "2026-06-02",

    readTime: "6 min read",

    featured: true,

    image: "/images/letters/letter-2.jpg",

    tags: [
      "reflection",
      "growth",
      "dreams",
      "life",
    ],

    content: `
Dear Stranger,

I think about you sometimes.

The version of me that chose differently.

The version that stayed when I left.

The version that said yes when I said no.

I wonder what your life looks like.

What dreams you pursued.

What mistakes you made.

What lessons you learned.

Yet with every passing year,
I realize something important.

You are not my regret.

You are simply a reminder that life
is built from choices.

And every choice leaves behind
another possible story.

— Vihaan
`,
  },

  {
    id: 3,

    slug: "a-conversation-with-silence",

    title: "A Conversation With Silence",

    excerpt:
      "What silence teaches when words no longer help.",

    category: "Healing",

    author: "Vihaan",

    date: "2026-06-03",

    readTime: "4 min read",

    featured: false,

    image: "/images/letters/letter-3.jpg",

    tags: [
      "healing",
      "silence",
      "mindfulness",
      "peace",
    ],

    content: `
Silence is often misunderstood.

People think silence means absence.

But silence can be full.

Full of memories.

Full of emotions.

Full of questions waiting patiently
for answers.

Sometimes healing begins when we stop
searching for noise and start listening
to ourselves.

That is where silence becomes a teacher.

— Vihaan
`,
  },

  {
    id: 4,

    slug: "to-my-younger-self",

    title: "To My Younger Self",

    excerpt:
      "A letter filled with lessons learned through time.",

    category: "Growth",

    author: "Vihaan",

    date: "2026-06-05",

    readTime: "7 min read",

    featured: false,

    image: "/images/letters/letter-4.jpg",

    tags: [
      "growth",
      "life lessons",
      "wisdom",
      "future",
    ],

    content: `
Dear Younger Me,

You will spend years worrying about things
that never happen.

You will underestimate yourself more times
than you can count.

You will lose people.

You will lose opportunities.

But you will also discover strength.

You will learn resilience.

You will find purpose in places you never
expected.

Be patient.

Life is unfolding exactly as it needs to.

— Vihaan
`,
  },

  {
    id: 5,

    slug: "the-goodbye-i-never-said",

    title: "The Goodbye I Never Said",

    excerpt:
      "Some farewells happen only in our hearts.",

    category: "Loss",

    author: "Vihaan",

    date: "2026-06-06",

    readTime: "5 min read",

    featured: false,

    image: "/images/letters/letter-5.jpg",

    tags: [
      "loss",
      "farewell",
      "grief",
      "healing",
    ],

    content: `
Some goodbyes are never spoken.

There is no final conversation.

No closing chapter.

No perfect ending.

Just distance.

Time.

And the quiet realization that someone
who once mattered deeply is no longer
part of your daily life.

Yet gratitude remains.

Because some people change us forever.

Even after they leave.

— Vihaan
`,
  },

  {
    id: 6,

    slug: "dear-future-me",

    title: "Dear Future Me",

    excerpt:
      "A message for the person I hope to become.",

    category: "Hope",

    author: "Vihaan",

    date: "2026-06-07",

    readTime: "4 min read",

    featured: true,

    image: "/images/letters/letter-6.jpg",

    tags: [
      "future",
      "hope",
      "dreams",
      "purpose",
    ],

    content: `
Dear Future Me,

I hope you remained curious.

I hope you stayed kind.

I hope you continued creating things
that mattered.

If life became difficult,
I hope you remembered why you started.

And if life became beautiful,
I hope you paused long enough
to appreciate it.

No matter where you are,
keep moving forward.

There are still stories waiting to be written.

— Vihaan
`,
  },

  {
    id: 7,

    slug: "the-distance-between-us",

    title: "The Distance Between Us",

    excerpt:
      "Not all distance is measured in miles.",

    category: "Love",

    author: "Vihaan",

    date: "2026-06-08",

    readTime: "5 min read",

    featured: false,

    image: "/images/letters/letter-7.jpg",

    tags: [
      "love",
      "distance",
      "relationships",
      "connection",
    ],

    content: `
The hardest distance is not physical.

It is emotional.

It is standing beside someone
and feeling worlds apart.

It is remembering a connection
that no longer exists.

Sometimes distance teaches us
what presence never could.

— Vihaan
`,
  },

  {
    id: 8,

    slug: "thank-you-for-leaving",

    title: "Thank You For Leaving",

    excerpt:
      "A letter about growth disguised as loss.",

    category: "Healing",

    author: "Vihaan",

    date: "2026-06-09",

    readTime: "6 min read",

    featured: false,

    image: "/images/letters/letter-8.jpg",

    tags: [
      "healing",
      "growth",
      "relationships",
      "acceptance",
    ],

    content: `
For a long time,
I wished things had ended differently.

But now I understand.

Some endings create space
for new beginnings.

Some departures become invitations
to grow.

And some losses reveal strengths
we never knew we possessed.

Thank you for leaving.

Because in the process,
I found myself.

— Vihaan
`,
  },
];

export const featuredLetters = letters.filter(
  (letter) => letter.featured
);

export const latestLetters = [...letters]
  .sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )
  .slice(0, 6);

export const getLetterBySlug = (slug: string) => {
  return letters.find((letter) => letter.slug === slug);
};

export const getLettersByCategory = (
  category: Letter["category"]
) => {
  return letters.filter(
    (letter) => letter.category === category
  );
};