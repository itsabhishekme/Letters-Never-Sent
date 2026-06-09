import Link from "next/link";
import {
  Send,
  Mail,
  FileText,
  Heart,
  Feather,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  PenSquare,
  Sparkles,
  ShieldCheck,
  Clock3,
  Users,
  BookOpen,
  Star,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Submissions | Letters Never Sent",
  description:
    "Submit your letters, poetry, memories, essays, and reflections to Letters Never Sent. Share your voice with a community that values authenticity and storytelling.",
};

const categories = [
  {
    title: "Letters",
    icon: Mail,
    description:
      "Unsent letters, personal messages, open letters, confessions, and heartfelt words written from the soul.",
  },
  {
    title: "Poetry",
    icon: Feather,
    description:
      "Original poems inspired by memory, love, loss, hope, longing, imagination, and life's quiet moments.",
  },
  {
    title: "Memories",
    icon: Heart,
    description:
      "Personal stories, nostalgic experiences, family moments, childhood recollections, and meaningful encounters.",
  },
  {
    title: "Reflections",
    icon: FileText,
    description:
      "Thoughtful essays, observations, personal growth journeys, and reflections on life and humanity.",
  },
];

const guidelines = [
  "Original content only",
  "Previously unpublished work preferred",
  "Authentic and respectful storytelling",
  "No plagiarism or copied content",
  "Clear formatting and readability",
  "You retain ownership of your work",
  "Proper attribution for quotations",
  "Editorial revisions may be suggested",
];

const benefits = [
  {
    title: "Author Credit",
    description:
      "Every selected piece is published with full credit to the author.",
    icon: Star,
  },
  {
    title: "Meaningful Audience",
    description:
      "Reach readers who value thoughtful writing and emotional honesty.",
    icon: Users,
  },
  {
    title: "Editorial Review",
    description:
      "Every submission receives careful consideration before publication.",
    icon: ShieldCheck,
  },
  {
    title: "Lasting Archive",
    description:
      "Your words become part of a growing collection of human stories.",
    icon: BookOpen,
  },
];

export default function SubmissionsPage() {
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
            <Sparkles size={16} />
            Share Your Voice With The World
          </div>

          <div className="mb-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Send size={58} />
            </div>
          </div>

          <h1 className="mx-auto mb-8 max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
            Submissions
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-xl text-zinc-300 md:text-2xl">
            Every untold story deserves a place to exist.
          </p>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-500">
            Letters Never Sent welcomes writers, dreamers, poets,
            storytellers, and thoughtful observers. Whether you carry a
            letter you never delivered, a memory you never forgot, a poem
            written in silence, or a reflection born from experience, we
            invite you to share it.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16">
            <div className="mb-6 flex justify-center">
              <Quote size={42} className="text-zinc-400" />
            </div>

            <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl">
              Every Story Matters
            </h2>

            <p className="text-center text-lg leading-relaxed text-zinc-400">
              Behind every person is a story that has shaped who they are.
              Some stories are spoken aloud. Others remain hidden in journals,
              forgotten drafts, memories, and unsent messages. We believe those
              stories deserve a home. Through writing, we preserve moments,
              emotions, lessons, and experiences that connect us to one another.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              What Can You Submit?
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-zinc-500">
              We accept thoughtful, original, and meaningful writing across
              multiple formats.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Icon size={34} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Why Submit?
            </h2>

            <p className="text-zinc-500">
              More than publication — a place where stories find readers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => {
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

      {/* Submission Form */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 md:p-14">
            <div className="mb-12 text-center">
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 p-4">
                <PenSquare size={30} />
              </div>

              <h2 className="mb-4 text-5xl font-bold">
                Submit Your Work
              </h2>

              <p className="text-zinc-500">
                Fill out the form below and share your story with us.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none transition focus:border-white"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none transition focus:border-white"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                    Submission Type
                  </label>

                  <select title="Submission Type" className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white">
                    <option>Letter</option>
                    <option>Poetry</option>
                    <option>Memory</option>
                    <option>Reflection</option>
                    <option>Essay</option>
                    <option>Personal Story</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                    Estimated Word Count
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 1200 words"
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                  Submission Title
                </label>

                <input
                  type="text"
                  placeholder="Title of your work"
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                  Short Author Bio
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell readers a little about yourself..."
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                  Your Submission
                </label>

                <textarea
                  rows={14}
                  placeholder="Write or paste your work here..."
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                  Additional Notes
                </label>

                <textarea
                  rows={4}
                  placeholder="Anything you'd like the editorial team to know..."
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                <Send size={18} />
                Submit Your Story
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Submission Guidelines
            </h2>

            <p className="text-zinc-500">
              Please review these requirements before submitting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {guidelines.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6"
              >
                <CheckCircle
                  size={22}
                  className="shrink-0 text-zinc-300"
                />

                <span className="text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <Clock3 size={40} />
            </div>
          </div>

          <h2 className="mb-8 text-5xl font-bold">
            Review Process
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Every submission is reviewed individually. Because we receive
            many stories, poems, essays, and letters, response times may
            vary. Selected works may be edited for clarity, formatting,
            or publication consistency while preserving the author's
            original voice and intent.
          </p>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
              <AlertCircle size={22} />

              <p className="text-zinc-400">
                Typical review period: 3–14 days depending on submission
                volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Explore Published Stories
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-500">
            Discover letters, poetry, reflections, memories, and personal
            stories shared by writers from around the world.
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