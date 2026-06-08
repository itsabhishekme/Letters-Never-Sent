import Link from "next/link";
import {
  BookOpen,
  Feather,
  Brain,
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Reflections",
  description:
    "Personal reflections, thoughts, observations, and life lessons from Letters Never Sent.",
};

const reflections = [
  {
    slug: "learning-to-let-go",
    title: "Learning to Let Go",
    category: "Growth",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Sometimes growth begins the moment we stop holding on to what no longer serves us.",
  },
  {
    slug: "the-art-of-being-alone",
    title: "The Art of Being Alone",
    category: "Self Discovery",
    date: "June 2026",
    readTime: "6 min read",
    excerpt:
      "Solitude is not emptiness; it is an opportunity to meet yourself again.",
  },
  {
    slug: "what-silence-taught-me",
    title: "What Silence Taught Me",
    category: "Mindfulness",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "The most important answers often arrive when everything becomes quiet.",
  },
  {
    slug: "unfinished-conversations",
    title: "Unfinished Conversations",
    category: "Relationships",
    date: "June 2026",
    readTime: "7 min read",
    excerpt:
      "Some conversations never end; they simply continue inside us.",
  },
  {
    slug: "the-weight-of-expectations",
    title: "The Weight of Expectations",
    category: "Life Lessons",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Much of our struggle comes from trying to become who others expect us to be.",
  },
  {
    slug: "becoming",
    title: "Becoming",
    category: "Personal Journey",
    date: "June 2026",
    readTime: "8 min read",
    excerpt:
      "Life is less about arriving and more about continuously becoming.",
  },
];

export default function ReflectionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <Brain size={52} />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Reflections
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Thoughts written in quiet moments.
            Observations gathered through experience.
            Reflections shaped by time.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Looking Inward
          </h2>

          <p className="text-lg leading-relaxed text-zinc-400">
            Reflection allows us to revisit experiences,
            understand emotions, and discover meaning in
            ordinary moments.
            <br />
            <br />
            These essays explore personal growth, relationships,
            self-discovery, healing, and the lessons life quietly teaches.
          </p>
        </div>
      </section>

      {/* Featured Reflection */}
      <section className="border-y border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles size={20} />
              <span className="text-zinc-400">
                Featured Reflection
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold">
              Learning to Let Go
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
              There comes a moment when holding on becomes
              more painful than letting go.
              <br />
              <br />
              Growth often begins when we stop resisting change
              and start trusting the direction life is taking us.
            </p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Reflection Topics
          </h2>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Growth",
              "Healing",
              "Purpose",
              "Relationships",
              "Mindfulness",
              "Self Discovery",
            ].map((topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-white/20"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflections Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Reflection Collection
            </h2>

            <p className="text-zinc-500">
              Essays, insights, and lessons gathered through life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {reflections.map((reflection) => (
              <article
                key={reflection.slug}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-zinc-400">
                    {reflection.category}
                  </span>

                  <BookOpen size={18} className="text-zinc-500" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {reflection.title}
                </h3>

                <p className="mb-6 text-zinc-500">
                  {reflection.excerpt}
                </p>

                <div className="mb-8 flex gap-4 text-sm text-zinc-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {reflection.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {reflection.readTime}
                  </div>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium hover:text-zinc-300"
                >
                  Read Reflection
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
          <Quote size={40} className="mx-auto mb-8 text-zinc-500" />

          <blockquote className="text-3xl font-light leading-relaxed md:text-5xl">
            “Reflection turns experience
            into understanding.”
          </blockquote>

          <p className="mt-8 text-zinc-500">
            — Letters Never Sent
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Feather size={36} className="mx-auto mb-6" />

          <h2 className="mb-6 text-4xl font-bold">
            Continue Exploring
          </h2>

          <p className="mb-10 text-zinc-500">
            Discover letters, memories, emotions,
            poetry, and more reflections.
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