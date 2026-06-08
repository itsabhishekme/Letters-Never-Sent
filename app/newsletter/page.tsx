import Link from "next/link";
import {
  Mail,
  Send,
  Bell,
  BookOpen,
  Feather,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the Letters Never Sent Newsletter and receive new letters, reflections, memories, and poetry directly in your inbox.",
};

const benefits = [
  {
    icon: Mail,
    title: "Exclusive Letters",
    description:
      "Receive unpublished letters before they appear on the website.",
  },
  {
    icon: Feather,
    title: "Personal Reflections",
    description:
      "Stories, thoughts, and reflections shared only with subscribers.",
  },
  {
    icon: BookOpen,
    title: "New Articles",
    description:
      "Stay updated whenever new memories, essays, or poetry are published.",
  },
  {
    icon: Heart,
    title: "Meaningful Writing",
    description:
      "Words that explore love, loss, hope, healing, and human connection.",
  },
];

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <Mail size={52} />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Newsletter
          </h1>

          <p className="mb-4 text-xl text-zinc-400">
            For Every Feeling Left Unspoken
          </p>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-500">
            Join readers from around the world and receive thoughtful letters,
            reflections, memories, and poetry directly in your inbox.
          </p>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-14">
            <div className="mb-10 text-center">
              <Bell size={40} className="mx-auto mb-6" />

              <h2 className="mb-4 text-4xl font-bold">
                Subscribe Today
              </h2>

              <p className="text-zinc-500">
                Receive new content, updates, and exclusive writings.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-90"
              >
                <Send size={18} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              What You'll Receive
            </h2>

            <p className="text-zinc-500">
              More than a newsletter. A collection of meaningful words.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-white/10 p-8"
                >
                  <Icon size={36} className="mb-5" />

                  <h3 className="mb-3 text-xl font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="text-zinc-500">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Subscribe */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Why Join?
            </h2>

            <p className="text-zinc-500">
              Become part of a community that values thoughtful storytelling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Early access to new letters",
              "Exclusive subscriber-only content",
              "Monthly reflections and essays",
              "Poetry and personal stories",
              "Announcements and updates",
              "A quieter alternative to social media",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-5"
              >
                <CheckCircle size={20} />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl font-light leading-relaxed md:text-5xl">
            “Some letters are written for everyone
            who has ever felt something deeply.”
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
            Explore More
          </h2>

          <p className="mb-10 text-zinc-500">
            Discover letters, emotions, memories, reflections, and poetry.
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