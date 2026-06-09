import Link from "next/link";
import {
  BookOpen,
  Feather,
  Brain,
  Sparkles,
  Calendar,
  Clock3,
  ArrowRight,
  Quote,
  Compass,
  Lightbulb,
  Heart,
  Flower2,
  Moon,
  Sun,
  Mountain,
  Wind,
  Bookmark,
  Coffee,
  PenTool,
  BookHeart,
  Stars,
  Target,
  ShieldCheck,
  Users,
  LucideIcon,
} from "lucide-react";

export const metadata = {
  title: "Reflections | Letters Never Sent",
  description:
    "Personal reflections, essays, observations, lessons, and thoughtful writing about growth, healing, relationships, purpose, and the human experience.",
};

interface Reflection {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const reflections: Reflection[] = [
  {
    slug: "learning-to-let-go",
    title: "Learning To Let Go",
    category: "Growth",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Sometimes growth begins the moment we stop holding on to what no longer serves us.",
  },
  {
    slug: "the-art-of-being-alone",
    title: "The Art Of Being Alone",
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
    title: "The Weight Of Expectations",
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

const reflectionTopics = [
  "Growth",
  "Healing",
  "Purpose",
  "Relationships",
  "Mindfulness",
  "Self Discovery",
  "Life Lessons",
  "Resilience",
  "Identity",
  "Change",
  "Acceptance",
  "Creativity",
];

const highlights = [
  {
    icon: Brain,
    title: "Self Awareness",
    description:
      "Understanding ourselves through honest observation and reflection.",
  },
  {
    icon: Compass,
    title: "Direction",
    description:
      "Finding clarity when life feels uncertain or overwhelming.",
  },
  {
    icon: Lightbulb,
    title: "Insight",
    description:
      "Discovering lessons hidden within everyday experiences.",
  },
  {
    icon: Heart,
    title: "Meaning",
    description:
      "Exploring emotions, relationships, and human connection.",
  },
];

const collections: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Personal Growth",
    description:
      "Reflections on change, resilience, self-improvement, and becoming.",
    icon: Mountain,
  },
  {
    title: "Relationships",
    description:
      "Thoughts about connection, communication, friendship, and love.",
    icon: Users,
  },
  {
    title: "Healing",
    description:
      "Essays exploring recovery, acceptance, forgiveness, and hope.",
    icon: Flower2,
  },
  {
    title: "Purpose",
    description:
      "Questions and reflections about meaning, ambition, and fulfillment.",
    icon: Target,
  },
  {
    title: "Mindfulness",
    description:
      "Finding peace through awareness, presence, and simplicity.",
    icon: Moon,
  },
  {
    title: "Life Lessons",
    description:
      "Wisdom gathered through experience, mistakes, and time.",
    icon: ShieldCheck,
  },
];

export default function ReflectionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-white/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-white/5 blur-[150px]" />
      </div>

      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300">
            <Brain size={15} />
            Essays & Thoughtful Writing
          </div>

          <div className="mb-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-6">
              <Brain size={60} />
            </div>
          </div>

          <h1 className="mb-8 text-6xl font-bold tracking-tight md:text-8xl">
            Reflections
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Thoughts written in quiet moments. Observations gathered through
            experience. Reflections shaped by time, growth, relationships,
            healing, and the lessons life quietly teaches.
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
              Looking Inward
            </h2>

            <p className="text-center text-lg leading-relaxed text-zinc-400">
              Reflection allows us to revisit experiences, understand emotions,
              question assumptions, and discover meaning in ordinary moments.
              Through thoughtful observation, we gain perspective not only on
              what happened, but also on who we are becoming.
            </p>
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
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Reflection */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              <Sparkles size={14} />
              Featured Reflection
            </div>

            <h2 className="mb-8 text-4xl font-bold md:text-6xl">
              Learning To Let Go
            </h2>

            <div className="max-w-3xl text-lg leading-relaxed text-zinc-400">
              <p>
                There comes a moment when holding on becomes more painful than
                letting go.
              </p>

              <br />

              <p>
                Growth often begins when we stop resisting change and start
                trusting the direction life is taking us.
              </p>

              <br />

              <p>
                Letting go is not about forgetting. It is about making room for
                what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-14 text-center text-5xl font-bold">
            Reflection Topics
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {reflectionTopics.map((topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition hover:border-white/20"
              >
                {topic}
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
              Explore Collections
            </h2>

            <p className="text-zinc-500">
              Different paths toward understanding ourselves and life.
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

      {/* Reflections Grid */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Reflection Collection
            </h2>

            <p className="text-zinc-500">
              Essays, insights, observations, and lessons gathered through
              experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {reflections.map((reflection) => (
              <article
                key={reflection.slug}
                className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-wider text-zinc-400">
                    {reflection.category}
                  </span>

                  <BookOpen size={18} className="text-zinc-500" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {reflection.title}
                </h3>

                <p className="mb-6 leading-relaxed text-zinc-500">
                  {reflection.excerpt}
                </p>

                <div className="mb-8 flex flex-wrap gap-4 text-sm text-zinc-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {reflection.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {reflection.readTime}
                  </div>
                </div>

                <Link
                  href={`/reflections/${reflection.slug}`}
                  className="inline-flex items-center gap-2 font-medium transition hover:text-zinc-300"
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
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <Bookmark size={46} />
          </div>

          <blockquote className="text-3xl font-light leading-relaxed md:text-6xl">
            “Reflection turns experience
            <br />
            into understanding.”
          </blockquote>

          <p className="mt-10 text-lg text-zinc-500">
            — Letters Never Sent
          </p>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Coffee size={46} />
          </div>

          <h2 className="mb-8 text-5xl font-bold">
            Why Reflection Matters
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Reflection transforms events into wisdom. It allows us to recognize
            patterns, understand emotions, learn from mistakes, appreciate
            growth, and approach the future with greater clarity and intention.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Stars size={46} />
          </div>

          <h2 className="mb-8 text-5xl font-bold">
            Thoughts Worth Revisiting
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Some reflections are written once but continue teaching us for
            years. They evolve as we evolve, offering new meaning each time we
            return to them.
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
            Continue Exploring
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-500">
            Discover letters, memories, emotions, poetry, essays, and more
            reflections from the heart.
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