// ADD THESE IMPORTS AT THE TOP

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Heart,
  BookOpen,
  PenTool,
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
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-[-300px] top-[-300px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

          <div className="absolute bottom-[-300px] right-[-300px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[220px]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
              [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-6xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-xl">
              <Sparkles size={16} />

              <span className="text-sm tracking-wider text-zinc-400">
                Literary Journal • Personal Reflections • Poetry
              </span>
            </div>

            {/* LOGO */}
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/10 blur-[80px]" />

                <div className="relative rounded-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <Image
                    src="/logo.png"
                    alt="Letters Never Sent"
                    width={180}
                    height={180}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="mb-8 text-6xl font-bold tracking-tight md:text-8xl xl:text-[110px]">
              Letters
              <br />
              Never Sent
            </h1>

            {/* Tagline */}
            <p className="mb-6 text-xl text-zinc-300 md:text-3xl">
              For Every Feeling Left Unspoken
            </p>

            {/* Description */}
            <p className="mx-auto mb-14 max-w-4xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              A sanctuary for unfinished conversations,
              forgotten memories, personal reflections,
              quiet heartbreaks, untold stories, and
              letters that never found their destination.
              <br />
              <br />
              Every page exists for emotions that were felt
              deeply but never fully spoken.
            </p>

            {/* CTA */}
            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/letters"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
              >
                Read Letters

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-medium transition hover:border-white/30"
              >
                <Send size={18} />
                Join Newsletter
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-24 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition hover:border-white/20">
                <Mail size={32} className="mx-auto mb-4" />

                <h3 className="mb-2 text-4xl font-bold">
                  100+
                </h3>

                <p className="text-zinc-500">
                  Letters & Stories
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition hover:border-white/20">
                <BookOpen
                  size={32}
                  className="mx-auto mb-4"
                />

                <h3 className="mb-2 text-4xl font-bold">
                  50+
                </h3>

                <p className="text-zinc-500">
                  Reflections & Essays
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition hover:border-white/20">
                <Heart size={32} className="mx-auto mb-4" />

                <h3 className="mb-2 text-4xl font-bold">
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

      {/* QUOTE */}
      <section className="border-y border-white/10 py-32">
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
              Every category contains a different chapter
              of the human experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-10 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="mb-8">
                  {item.icon}
                </div>

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
              had. The dreams left unfinished.
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