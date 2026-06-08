import Link from "next/link";
import {
  BookHeart,
  Calendar,
  Clock,
  ArrowRight,
  Archive,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Memories",
  description:
    "A collection of memories, moments, reflections, and stories that continue to live within us.",
};

const memories = [
  {
    slug: "summer-evenings",
    title: "Summer Evenings",
    category: "Childhood",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "The fading sunlight, the laughter of friends, and moments that never truly left.",
  },
  {
    slug: "the-last-train-home",
    title: "The Last Train Home",
    category: "Life Moments",
    date: "June 2026",
    readTime: "6 min read",
    excerpt:
      "A journey that became more about memories than destinations.",
  },
  {
    slug: "old-photographs",
    title: "Old Photographs",
    category: "Reflection",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Some pictures capture more than faces—they preserve entire worlds.",
  },
  {
    slug: "a-forgotten-friendship",
    title: "A Forgotten Friendship",
    category: "Friendship",
    date: "June 2026",
    readTime: "7 min read",
    excerpt:
      "The people who shaped us often remain part of us, even after they leave.",
  },
  {
    slug: "rainy-afternoons",
    title: "Rainy Afternoons",
    category: "Nostalgia",
    date: "June 2026",
    readTime: "3 min read",
    excerpt:
      "A simple memory that still feels alive whenever it rains.",
  },
  {
    slug: "the-house-we-left-behind",
    title: "The House We Left Behind",
    category: "Family",
    date: "June 2026",
    readTime: "8 min read",
    excerpt:
      "Some places become memories long before we realize they are gone.",
  },
];

export default function MemoriesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <BookHeart size={52} />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Memories
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Memories are the letters life writes upon our hearts.
            Some fade with time. Others remain vivid forever.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            A Place for Remembering
          </h2>

          <p className="text-lg leading-relaxed text-zinc-400">
            Every memory tells a story.
            Every story carries an emotion.
            Every emotion becomes part of who we are.
            <br />
            <br />
            Here you'll find reflections on childhood, friendship,
            family, nostalgia, and the moments that continue to shape us.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-white/10 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Memory Categories
          </h2>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Childhood",
              "Friendship",
              "Family",
              "Nostalgia",
              "Travel",
              "Life Moments",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-white/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Memory */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles size={20} />
              <span className="text-zinc-400">
                Featured Memory
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-bold">
              The House We Left Behind
            </h2>

            <p className="mb-8 max-w-3xl text-zinc-400">
              Some places become part of us. Even after we move away,
              their echoes remain in every memory we carry.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-lg hover:text-zinc-300"
            >
              Read Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Memories Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Memory Collection
            </h2>

            <p className="text-zinc-500">
              Stories preserved through time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {memories.map((memory) => (
              <article
                key={memory.slug}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-zinc-400">
                    {memory.category}
                  </span>

                  <Archive size={18} className="text-zinc-500" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {memory.title}
                </h3>

                <p className="mb-6 text-zinc-500">
                  {memory.excerpt}
                </p>

                <div className="mb-8 flex gap-4 text-sm text-zinc-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {memory.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {memory.readTime}
                  </div>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium hover:text-zinc-300"
                >
                  Read Memory
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl font-light leading-relaxed md:text-5xl">
            “Memories are not stored in time.
            They live quietly inside us.”
          </blockquote>

          <p className="mt-8 text-zinc-500">
            — Letters Never Sent
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Explore More Stories
          </h2>

          <p className="mb-10 text-zinc-500">
            Continue your journey through letters, emotions,
            poetry, and reflections.
          </p>

          <Link
            href="/letters"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            Browse Letters
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}