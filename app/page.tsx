import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Heart,
  BookOpen,
  PenTool,
  Feather,
  Sparkles,
  Quote,
  Clock3,
  Stars,
  MoveRight,
  Send,
} from "lucide-react";

export default function HomePage() {
  const categories = [
    {
      title: "Letters",
      description:
        "Messages written for people who never received them.",
      icon: <Mail size={34} />,
      href: "/letters",
    },
    {
      title: "Emotions",
      description:
        "Love, longing, healing, hope, grief, and everything in between.",
      icon: <Heart size={34} />,
      href: "/emotions",
    },
    {
      title: "Memories",
      description:
        "Fragments of the past that continue living within us.",
      icon: <BookOpen size={34} />,
      href: "/memories",
    },
    {
      title: "Reflections",
      description:
        "Thoughts discovered in quiet moments and long nights.",
      icon: <PenTool size={34} />,
      href: "/reflections",
    },
  ];

  const latest = [
    {
      title: "The Letter I Never Sent",
      category: "Letters",
      excerpt:
        "Some words stay with us because they never found a voice.",
    },
    {
      title: "Rain Against the Window",
      category: "Memories",
      excerpt:
        "The smallest moments often leave the deepest echoes.",
    },
    {
      title: "A Conversation With Silence",
      category: "Reflection",
      excerpt:
        "What silence teaches when language is no longer enough.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-[-300px] top-[-300px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />
          <div className="absolute bottom-[-300px] right-[-300px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3">
              <Sparkles size={16} />
              <span className="text-sm text-zinc-400">
                Literary Journal • Personal Reflections • Poetry
              </span>
            </div>

            <div className="mb-10 flex justify-center">
              <div className="rounded-full border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <Feather size={80} />
              </div>
            </div>

            <h1 className="mb-8 text-6xl font-bold tracking-tight md:text-8xl">
              Letters
              <br />
              Never Sent
            </h1>

            <p className="mb-6 text-xl text-zinc-300 md:text-2xl">
              For Every Feeling Left Unspoken
            </p>

            <p className="mx-auto mb-14 max-w-3xl text-lg leading-relaxed text-zinc-500">
              A sanctuary for unfinished conversations,
              forgotten memories, personal reflections,
              quiet heartbreaks, untold stories, and
              letters that never found their destination.
            </p>

            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/letters"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition"
              >
                Read Letters
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-8 py-4 font-medium transition hover:border-white/30"
              >
                Join Newsletter
              </Link>
            </div>

            <div className="mt-24 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <Mail size={32} className="mx-auto mb-4" />
                <h3 className="mb-2 text-3xl font-bold">
                  100+
                </h3>
                <p className="text-zinc-500">
                  Letters & Stories
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <BookOpen
                  size={32}
                  className="mx-auto mb-4"
                />
                <h3 className="mb-2 text-3xl font-bold">
                  50+
                </h3>
                <p className="text-zinc-500">
                  Reflections & Essays
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <Heart size={32} className="mx-auto mb-4" />
                <h3 className="mb-2 text-3xl font-bold">
                  Endless
                </h3>
                <p className="text-zinc-500">
                  Human Emotions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="border-y border-white/10 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Quote
            size={50}
            className="mx-auto mb-8 text-zinc-600"
          />

          <blockquote className="text-4xl font-light leading-relaxed md:text-6xl">
            Some letters are written
            <br />
            not to be sent,
            <br />
            but to finally understand
            <br />
            what the heart has been carrying.
          </blockquote>

          <p className="mt-10 text-zinc-500">
            — Vihaan
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
              Explore
            </span>

            <h2 className="mb-6 text-5xl font-bold">
              Discover Every Emotion
            </h2>

            <p className="mx-auto max-w-2xl text-zinc-500">
              Every category contains a different
              chapter of the human experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-10 transition duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="mb-8">{item.icon}</div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mb-8 text-zinc-500">
                  {item.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm">
                  Explore
                  <MoveRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="border-y border-white/10 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.02] p-10 md:p-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm">
              <Stars size={14} />
              Featured Letter
            </div>

            <h2 className="mb-8 text-5xl font-bold">
              To The Person
              <br />
              I Never Became
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
              We all carry alternate versions of ourselves.
              The roads not taken. The conversations never
              had. The dreams left unfinished. This letter
              explores the quiet relationship between who we
              are and who we once imagined becoming.
            </p>

            <Link
              href="/letters"
              className="mt-10 inline-flex items-center gap-3 text-lg"
            >
              Continue Reading
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST ENTRIES */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-5xl font-bold">
              Latest Entries
            </h2>

            <p className="text-zinc-500">
              Recently published letters, memories,
              reflections, and poetry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {latest.map((item) => (
              <article
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/[0.02] p-10"
              >
                <div className="mb-5 flex items-center gap-2 text-sm text-zinc-500">
                  <Clock3 size={14} />
                  {item.category}
                </div>

                <h3 className="mb-5 text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="mb-8 text-zinc-500">
                  {item.excerpt}
                </p>

                <Link
                  href="/letters"
                  className="inline-flex items-center gap-2"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}