import Link from "next/link";
import {
  BookHeart,
  Calendar,
  Clock3,
  ArrowRight,
  Archive,
  Sparkles,
  Home,
  Users,
  Camera,
  Map,
  Trees,
  Quote,
  Heart,
  BookOpen,
  Star,
  Bookmark,
  ChevronRight,
  Wind,
  Moon,
  Sun,
  Coffee,
  Mountain,
} from "lucide-react";

export const metadata = {
  title: "Memories | Letters Never Sent",
  description:
    "Explore memories, nostalgia, childhood stories, family moments, friendships, reflections, and the experiences that continue to shape our lives.",
};

const memories = [
  {
    slug: "summer-evenings",
    title: "Summer Evenings",
    category: "Childhood",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "The fading sunlight, endless conversations, and laughter that seemed capable of lasting forever.",
  },
  {
    slug: "the-last-train-home",
    title: "The Last Train Home",
    category: "Life Moments",
    date: "June 2026",
    readTime: "6 min read",
    excerpt:
      "A journey that slowly transformed into a collection of memories rather than a destination.",
  },
  {
    slug: "old-photographs",
    title: "Old Photographs",
    category: "Reflection",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Some photographs preserve entire worlds hidden behind a single frame.",
  },
  {
    slug: "a-forgotten-friendship",
    title: "A Forgotten Friendship",
    category: "Friendship",
    date: "June 2026",
    readTime: "7 min read",
    excerpt:
      "The people who once shaped us never truly disappear from who we become.",
  },
  {
    slug: "rainy-afternoons",
    title: "Rainy Afternoons",
    category: "Nostalgia",
    date: "June 2026",
    readTime: "3 min read",
    excerpt:
      "A simple memory that returns every time raindrops begin tapping against the window.",
  },
  {
    slug: "the-house-we-left-behind",
    title: "The House We Left Behind",
    category: "Family",
    date: "June 2026",
    readTime: "8 min read",
    excerpt:
      "Some homes continue living inside us long after we have moved away.",
  },
];

const categories = [
  {
    title: "Childhood",
    icon: Sun,
    description:
      "Moments of innocence, discovery, imagination, and wonder.",
  },
  {
    title: "Friendship",
    icon: Users,
    description:
      "The people who walked beside us through different chapters of life.",
  },
  {
    title: "Family",
    icon: Home,
    description:
      "The relationships and memories that form our foundation.",
  },
  {
    title: "Travel",
    icon: Map,
    description:
      "Journeys, destinations, and experiences that changed us.",
  },
  {
    title: "Reflection",
    icon: BookOpen,
    description:
      "Thoughtful memories revisited through the lens of time.",
  },
  {
    title: "Nostalgia",
    icon: Moon,
    description:
      "The bittersweet beauty of remembering what once was.",
  },
];

const highlights = [
  {
    icon: Camera,
    title: "Captured Moments",
    text: "Memories preserved through stories rather than photographs.",
  },
  {
    icon: Heart,
    title: "Emotional Journeys",
    text: "Experiences that continue shaping us years later.",
  },
  {
    icon: Trees,
    title: "Places We Remember",
    text: "Homes, streets, schools, and landscapes that never leave us.",
  },
  {
    icon: Mountain,
    title: "Life Lessons",
    text: "Wisdom discovered through lived experiences.",
  },
];

const memoryTags = [
  "Childhood",
  "Family",
  "Friendship",
  "Travel",
  "Nostalgia",
  "Growing Up",
  "School Days",
  "Home",
  "Love",
  "Seasons",
  "Old Letters",
  "Life Lessons",
  "Reflection",
  "Adventure",
  "Milestones",
  "Community",
  "Dreams",
  "Belonging",
];

export default function MemoriesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="relative border-b border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300">
            <BookHeart size={15} />
            Stories Preserved Through Time
          </div>

          <div className="mb-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-6">
              <BookHeart size={60} />
            </div>
          </div>

          <h1 className="mb-8 text-6xl font-bold tracking-tight md:text-8xl">
            Memories
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Memories are the letters life writes upon our hearts. Some fade
            softly into the distance. Others remain vivid forever, shaping who
            we are long after the moments themselves have passed.
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
              A Place For Remembering
            </h2>

            <p className="text-center text-lg leading-relaxed text-zinc-400">
              Every memory tells a story. Every story carries an emotion.
              Every emotion becomes part of who we are. This collection
              celebrates childhood adventures, family traditions, lifelong
              friendships, forgotten places, meaningful journeys, and the
              countless moments that quietly shape a life.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Memory Categories
            </h2>

            <p className="text-zinc-500">
              Explore memories through different chapters of life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Icon size={34} />
                  </div>

                  <h3 className="mb-4 text-3xl font-semibold">
                    {category.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-500">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Memory */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03]">
            <div className="p-10 md:p-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
                <Sparkles size={14} />
                Featured Memory
              </div>

              <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                The House We Left Behind
              </h2>

              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                Some houses become more than buildings. They absorb laughter,
                conversations, celebrations, and ordinary days until they
                become part of us. Long after we leave, their echoes remain.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Calendar size={15} />
                  June 2026
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={15} />
                  8 min read
                </div>
              </div>

              <Link
                href="#"
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 transition-all hover:bg-white hover:text-black"
              >
                Read Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => {
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
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Memory Collection */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Memory Collection
            </h2>

            <p className="text-zinc-500">
              Stories preserved through time and reflection.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {memories.map((memory) => (
              <article
                key={memory.slug}
                className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-wider text-zinc-400">
                    {memory.category}
                  </span>

                  <Archive size={18} className="text-zinc-500" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {memory.title}
                </h3>

                <p className="mb-8 leading-relaxed text-zinc-500">
                  {memory.excerpt}
                </p>

                <div className="mb-8 flex flex-wrap gap-4 text-sm text-zinc-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {memory.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {memory.readTime}
                  </div>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium transition hover:text-zinc-300"
                >
                  Read Memory
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Tags */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-5xl font-bold">
            Explore By Theme
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {memoryTags.map((tag) => (
              <div
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 transition hover:border-white/20"
              >
                {tag}
              </div>
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
            “Memories are not stored in time.
            <br />
            They live quietly inside us.”
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
            Why Memories Matter
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Memories help us understand where we have been, who we have loved,
            what we have learned, and how we have changed. They are not merely
            records of the past—they are living parts of our identity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Wind size={46} />
          </div>

          <h2 className="mb-6 text-5xl font-bold">
            Explore More Stories
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-500">
            Continue your journey through letters, emotions, poetry,
            reflections, and stories that remain long after they are told.
          </p>

          <Link
            href="/letters"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 text-lg transition-all duration-300 hover:bg-white hover:text-black"
          >
            Browse Letters
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}