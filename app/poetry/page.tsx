import Link from "next/link";
import {
  Feather,
  Heart,
  BookOpen,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock3,
  PenTool,
  Quote,
  Moon,
  Stars,
  Flower2,
  Wind,
  Flame,
  Sun,
  BookHeart,
  PenSquare,
  Bookmark,
  Coffee,
  Music,
  CloudRain,
  LucideIcon,
} from "lucide-react";

export const metadata = {
  title: "Poetry | Letters Never Sent",
  description:
    "Explore poetry from Letters Never Sent — verses of love, longing, hope, healing, nostalgia, dreams, grief, and the emotions that shape the human experience.",
};

interface Poem {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const poems: Poem[] = [
  {
    slug: "between-the-lines",
    title: "Between the Lines",
    category: "Love",
    date: "June 2026",
    readTime: "2 min read",
    excerpt:
      "Sometimes the most important words are the ones left unwritten.",
  },
  {
    slug: "the-weight-of-silence",
    title: "The Weight of Silence",
    category: "Reflection",
    date: "June 2026",
    readTime: "3 min read",
    excerpt:
      "Silence often carries truths that language struggles to express.",
  },
  {
    slug: "a-room-full-of-memories",
    title: "A Room Full of Memories",
    category: "Nostalgia",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "Every corner remembers something time tried to erase.",
  },
  {
    slug: "letters-to-the-moon",
    title: "Letters To The Moon",
    category: "Dreams",
    date: "June 2026",
    readTime: "3 min read",
    excerpt:
      "A conversation with the night sky during a sleepless evening.",
  },
  {
    slug: "the-last-goodbye",
    title: "The Last Goodbye",
    category: "Loss",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "Not every farewell arrives with words or warning.",
  },
  {
    slug: "still-growing",
    title: "Still Growing",
    category: "Hope",
    date: "June 2026",
    readTime: "2 min read",
    excerpt:
      "Even broken branches continue reaching toward sunlight.",
  },
];

const themes = [
  "Love",
  "Hope",
  "Loss",
  "Dreams",
  "Healing",
  "Nostalgia",
  "Longing",
  "Reflection",
  "Growth",
  "Wonder",
  "Friendship",
  "Heartbreak",
];

const poetryHighlights = [
  {
    icon: Heart,
    title: "Emotion",
    description:
      "Poetry gives shape to feelings that often remain unspoken.",
  },
  {
    icon: Moon,
    title: "Reflection",
    description:
      "Moments of introspection transformed into imagery and rhythm.",
  },
  {
    icon: Feather,
    title: "Expression",
    description:
      "A place where thoughts become verses and memories become art.",
  },
  {
    icon: Stars,
    title: "Imagination",
    description:
      "Language that explores wonder, dreams, and possibility.",
  },
];

const collections: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Love Poems",
    description:
      "Verses about affection, connection, devotion, and the complexities of the heart.",
    icon: Heart,
  },
  {
    title: "Dream Poems",
    description:
      "Poetry inspired by imagination, wonder, possibility, and the night sky.",
    icon: Stars,
  },
  {
    title: "Healing Poems",
    description:
      "Words written for recovery, resilience, acceptance, and hope.",
    icon: Flower2,
  },
  {
    title: "Nature Poems",
    description:
      "Reflections inspired by seasons, landscapes, weather, and change.",
    icon: Wind,
  },
  {
    title: "Passion Poems",
    description:
      "Poetry fueled by intensity, creativity, ambition, and desire.",
    icon: Flame,
  },
  {
    title: "Life Poems",
    description:
      "Observations on growth, memory, time, and the human experience.",
    icon: Sun,
  },
];

export default function PoetryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[150px]" />
      </div>

      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300">
            <Feather size={15} />
            Poetry Collection
          </div>

          <div className="mb-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-6">
              <Feather size={60} />
            </div>
          </div>

          <h1 className="mb-8 text-6xl font-bold tracking-tight md:text-8xl">
            Poetry
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Poetry is where emotions become rhythm, memories become imagery,
            and silence discovers a voice. Here you'll find verses inspired by
            love, longing, hope, healing, wonder, and the moments that quietly
            shape a life.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16">
            <div className="mb-6 flex justify-center">
              <Quote size={42} />
            </div>

            <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl">
              A Collection Of Feelings
            </h2>

            <p className="text-center text-lg leading-relaxed text-zinc-400">
              Some emotions are too large for ordinary sentences. Poetry allows
              them to breathe. Through rhythm, imagery, metaphor, and silence,
              poetry captures experiences that often escape explanation. Every
              poem is an attempt to preserve a feeling before it disappears.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {poetryHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <Icon size={34} className="mb-5" />

                  <h3 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Poem */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              <Sparkles size={14} />
              Featured Poem
            </div>

            <h2 className="mb-10 text-4xl font-bold md:text-6xl">
              Between The Lines
            </h2>

            <div className="max-w-3xl text-xl leading-relaxed text-zinc-300">
              <p>There are words</p>
              <p>hidden between the lines,</p>
              <p>waiting to be noticed.</p>

              <br />

              <p>There are stories</p>
              <p>inside every silence,</p>
              <p>waiting to be heard.</p>

              <br />

              <p>And there are feelings</p>
              <p>inside every heart,</p>
              <p>waiting to be understood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-5xl font-bold">
            Explore Themes
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {themes.map((theme) => (
              <div
                key={theme}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition hover:border-white/20"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Poetry Collections
            </h2>

            <p className="text-zinc-500">
              Discover poems through different emotional landscapes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection) => {
              const Icon = collection.icon;

              return (
                <div
                  key={collection.title}
                  className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20"
                >
                  <Icon size={34} className="mb-5" />

                  <h3 className="mb-3 text-2xl font-semibold">
                    {collection.title}
                  </h3>

                  <p className="text-zinc-500">
                    {collection.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Poems Grid */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Poetry Collection
            </h2>

            <p className="text-zinc-500">
              Verses written for every feeling left unspoken.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {poems.map((poem) => (
              <article
                key={poem.slug}
                className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-wider text-zinc-400">
                    {poem.category}
                  </span>

                  <PenTool size={18} className="text-zinc-500" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {poem.title}
                </h3>

                <p className="mb-6 leading-relaxed text-zinc-500">
                  {poem.excerpt}
                </p>

                <div className="mb-8 flex flex-wrap gap-4 text-sm text-zinc-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {poem.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {poem.readTime}
                  </div>
                </div>

                <Link
                  href={`/poetry/${poem.slug}`}
                  className="inline-flex items-center gap-2 font-medium transition hover:text-zinc-300"
                >
                  Read Poem
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <Bookmark size={46} />
          </div>

          <blockquote className="text-3xl font-light leading-relaxed md:text-6xl">
            “Poetry begins where ordinary words
            <br />
            are no longer enough.”
          </blockquote>

          <p className="mt-10 text-lg text-zinc-500">
            — Letters Never Sent
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Coffee size={46} />
          </div>

          <h2 className="mb-8 text-5xl font-bold">
            Why Poetry Matters
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Poetry reminds us that feelings do not need to be explained in
            order to be understood. A few carefully chosen lines can hold an
            entire lifetime of experience, offering comfort, recognition, and
            connection.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <BookHeart size={46} />
          </div>

          <h2 className="mb-6 text-5xl font-bold">
            Continue Reading
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-500">
            Explore letters, memories, reflections, emotions, and stories from
            the heart.
          </p>

          <Link
            href="/letters"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 text-lg transition-all duration-300 hover:bg-white hover:text-black"
          >
            Browse Letters
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}