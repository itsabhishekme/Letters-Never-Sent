import Link from "next/link";
import {
  Mail,
  Search,
  ArrowRight,
  Calendar,
  Clock,
  Feather,
} from "lucide-react";

export const metadata = {
  title: "Letters",
  description:
    "Explore a collection of letters never sent — stories of love, memories, healing, hope, and unspoken emotions.",
};

const letters = [
  {
    slug: "the-letter-i-never-sent",
    title: "The Letter I Never Sent",
    excerpt:
      "Some words remain with us because they were never spoken.",
    category: "Love",
    date: "June 2026",
    readTime: "5 min read",
  },
  {
    slug: "to-the-person-i-never-became",
    title: "To The Person I Never Became",
    excerpt:
      "A reflection on abandoned dreams and untaken paths.",
    category: "Reflection",
    date: "June 2026",
    readTime: "6 min read",
  },
  {
    slug: "a-conversation-with-silence",
    title: "A Conversation With Silence",
    excerpt:
      "What silence teaches when words no longer help.",
    category: "Healing",
    date: "June 2026",
    readTime: "4 min read",
  },
  {
    slug: "to-my-younger-self",
    title: "To My Younger Self",
    excerpt:
      "A letter filled with lessons learned through time.",
    category: "Growth",
    date: "June 2026",
    readTime: "7 min read",
  },
  {
    slug: "the-goodbye-i-never-said",
    title: "The Goodbye I Never Said",
    excerpt:
      "Some farewells happen only in our hearts.",
    category: "Loss",
    date: "June 2026",
    readTime: "5 min read",
  },
  {
    slug: "dear-future-me",
    title: "Dear Future Me",
    excerpt:
      "A message for the person I hope to become.",
    category: "Hope",
    date: "June 2026",
    readTime: "4 min read",
  },
];

export default function LettersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <Mail size={50} />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Letters
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Every letter begins with a feeling.
            Every feeling deserves a voice.
            These are the messages that were written but never sent.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search letters..."
              className="w-full rounded-full border border-white/10 bg-black px-14 py-4 outline-none transition focus:border-white"
            />
          </div>
        </div>
      </section>

      {/* Featured Letter */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
            <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
              Featured Letter
            </span>

            <h2 className="mb-4 text-4xl font-bold">
              The Letter I Never Sent
            </h2>

            <p className="mb-8 max-w-3xl text-zinc-400">
              Some words remain with us because they were never spoken.
              Some emotions stay because they never found their destination.
            </p>

            <Link
              href="/letters/the-letter-i-never-sent"
              className="inline-flex items-center gap-2 text-lg font-medium hover:text-zinc-300"
            >
              Read Letter
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Browse by Emotion
          </h2>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Love",
              "Hope",
              "Healing",
              "Loss",
              "Growth",
              "Reflection",
            ].map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-white/20"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letters Grid */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              All Letters
            </h2>

            <p className="text-zinc-500">
              A growing collection of untold stories and unspoken emotions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {letters.map((letter) => (
              <article
                key={letter.slug}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-zinc-400">
                    {letter.category}
                  </span>

                  <Feather size={18} className="text-zinc-500" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {letter.title}
                </h3>

                <p className="mb-6 leading-relaxed text-zinc-500">
                  {letter.excerpt}
                </p>

                <div className="mb-8 flex items-center gap-4 text-sm text-zinc-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {letter.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {letter.readTime}
                  </div>
                </div>

                <Link
                  href={`/letters/${letter.slug}`}
                  className="inline-flex items-center gap-2 font-medium hover:text-zinc-300"
                >
                  Read Letter
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
            “Some letters are written not to be delivered,
            but to finally be understood.”
          </blockquote>

          <p className="mt-8 text-zinc-500">
            — Letters Never Sent
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Never Miss a Letter
          </h2>

          <p className="mb-10 text-zinc-500">
            Subscribe to receive new letters, reflections, memories,
            and poetry directly in your inbox.
          </p>

          <Link
            href="/newsletter"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            Join Newsletter
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}