import Link from "next/link";
import {
  Feather,
  Heart,
  BookOpen,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  PenTool,
} from "lucide-react";

export const metadata = {
  title: "Poetry",
  description:
    "Explore poetry from Letters Never Sent — verses of love, longing, hope, healing, memories, and the emotions that shape us.",
};

const poems = [
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
      "Silence speaks in ways language never could.",
  },
  {
    slug: "a-room-full-of-memories",
    title: "A Room Full of Memories",
    category: "Nostalgia",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "Every corner remembers what time forgot.",
  },
  {
    slug: "letters-to-the-moon",
    title: "Letters to the Moon",
    category: "Dreams",
    date: "June 2026",
    readTime: "3 min read",
    excerpt:
      "A conversation with the sky on a sleepless night.",
  },
  {
    slug: "the-last-goodbye",
    title: "The Last Goodbye",
    category: "Loss",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "Not every farewell is spoken aloud.",
  },
  {
    slug: "still-growing",
    title: "Still Growing",
    category: "Hope",
    date: "June 2026",
    readTime: "2 min read",
    excerpt:
      "Even broken branches can bloom again.",
  },
];

export default function PoetryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <Feather size={52} />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Poetry
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Poetry is where emotions become rhythm,
            memories become imagery,
            and silence finds a voice.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            A Collection of Feelings
          </h2>

          <p className="text-lg leading-relaxed text-zinc-400">
            Some emotions are too large for ordinary sentences.
            Poetry allows them to breathe.
            <br />
            <br />
            Here you'll find verses inspired by love, longing,
            hope, healing, memory, and the quiet moments
            that shape our lives.
          </p>
        </div>
      </section>

      {/* Featured Poem */}
      <section className="border-y border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles size={20} />
              <span className="text-zinc-400">
                Featured Poem
              </span>
            </div>

            <h2 className="mb-8 text-4xl font-bold">
              Between the Lines
            </h2>

            <div className="max-w-2xl text-lg leading-relaxed text-zinc-300">
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

      {/* Poetry Categories */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Explore Themes
          </h2>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Love",
              "Hope",
              "Loss",
              "Dreams",
              "Healing",
              "Nostalgia",
            ].map((theme) => (
              <div
                key={theme}
                className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-white/20"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poems Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
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
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-zinc-400">
                    {poem.category}
                  </span>

                  <PenTool size={18} className="text-zinc-500" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {poem.title}
                </h3>

                <p className="mb-6 text-zinc-500">
                  {poem.excerpt}
                </p>

                <div className="mb-8 flex gap-4 text-sm text-zinc-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {poem.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {poem.readTime}
                  </div>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium hover:text-zinc-300"
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
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl font-light leading-relaxed md:text-5xl">
            “Poetry begins where ordinary words
            are no longer enough.”
          </blockquote>

          <p className="mt-8 text-zinc-500">
            — Letters Never Sent
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Heart size={36} className="mx-auto mb-6" />

          <h2 className="mb-6 text-4xl font-bold">
            Continue Reading
          </h2>

          <p className="mb-10 text-zinc-500">
            Explore letters, memories, reflections,
            and stories from the heart.
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