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
  Sparkles,
  Quote,
  Globe,
  Users,
  BookHeart,
  PenSquare,
  Star,
  ShieldCheck,
  Clock3,
  Bookmark,
  Coffee,
  Moon,
  Sun,
  Archive,
  MessageCircleHeart,
  Newspaper,
  Gift,
  Wind,
} from "lucide-react";

export const metadata = {
  title: "Newsletter | Letters Never Sent",
  description:
    "Subscribe to the Letters Never Sent Newsletter and receive thoughtful letters, reflections, memories, poetry, and exclusive subscriber content directly in your inbox.",
};

const benefits = [
  {
    icon: Mail,
    title: "Exclusive Letters",
    description:
      "Receive unpublished letters and subscriber-only writing before it appears anywhere else.",
  },
  {
    icon: Feather,
    title: "Personal Reflections",
    description:
      "Thoughtful reflections, essays, and stories shared only with newsletter readers.",
  },
  {
    icon: BookOpen,
    title: "New Publications",
    description:
      "Be the first to know whenever new memories, poetry, letters, and articles are published.",
  },
  {
    icon: Heart,
    title: "Meaningful Writing",
    description:
      "Writing centered on love, healing, hope, longing, grief, growth, and human connection.",
  },
];

const features = [
  {
    icon: Star,
    title: "Early Access",
    text: "Read selected pieces before they are published publicly.",
  },
  {
    icon: Newspaper,
    title: "Monthly Digest",
    text: "A curated collection of the best writing from the month.",
  },
  {
    icon: Bookmark,
    title: "Reader Favorites",
    text: "Discover the most-loved stories and reflections.",
  },
  {
    icon: Gift,
    title: "Special Editions",
    text: "Occasional subscriber-exclusive collections and letters.",
  },
];

const reasons = [
  "Early access to new letters",
  "Subscriber-only reflections",
  "Exclusive poetry collections",
  "Personal essays and stories",
  "Monthly reading recommendations",
  "Announcements and updates",
  "Behind-the-scenes writing insights",
  "A slower and more meaningful reading experience",
  "Carefully curated content",
  "No unnecessary noise or distractions",
];

export default function NewsletterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300">
            <Sparkles size={15} />
            Join Thousands Of Thoughtful Readers
          </div>

          <div className="mb-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Mail size={60} />
            </div>
          </div>

          <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
            Newsletter
          </h1>

          <p className="mb-6 text-xl text-zinc-300 md:text-2xl">
            For Every Feeling Left Unspoken
          </p>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-500">
            Join readers from around the world and receive thoughtful letters,
            reflections, memories, poetry, essays, and exclusive subscriber
            content delivered directly to your inbox.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16">
            <div className="mb-6 flex justify-center">
              <Quote size={42} />
            </div>

            <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl">
              More Than A Newsletter
            </h2>

            <p className="text-center text-lg leading-relaxed text-zinc-400">
              This is not another inbox filled with noise. It is a place for
              meaningful words, thoughtful reflections, and stories that stay
              with you long after you finish reading. Each edition is crafted
              with care for readers who appreciate depth, honesty, and human
              connection.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16">
            <div className="mb-12 text-center">
              <Bell size={48} className="mx-auto mb-6" />

              <h2 className="mb-5 text-5xl font-bold">
                Subscribe Today
              </h2>

              <p className="mx-auto max-w-2xl text-zinc-500">
                Receive thoughtful writing, exclusive stories, and meaningful
                reflections directly in your inbox.
              </p>
            </div>

            <form className="mx-auto max-w-3xl space-y-8">
              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-5 outline-none transition focus:border-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-5 outline-none transition focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="reading-interests" className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                  Reading Interests
                </label>

                <select
                  id="reading-interests"
                  className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-5 outline-none transition focus:border-white"
                >
                  <option>Everything</option>
                  <option>Letters</option>
                  <option>Poetry</option>
                  <option>Reflections</option>
                  <option>Memories</option>
                  <option>Essays</option>
                  <option>Personal Stories</option>
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                <Send size={18} />
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              What You'll Receive
            </h2>

            <p className="text-zinc-500">
              More than updates. A collection of meaningful words.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
                >
                  <Icon size={36} className="mb-5" />

                  <h3 className="mb-3 text-2xl font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-500">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <Icon size={34} className="mb-5" />

                  <h3 className="mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-500">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Why Join?
            </h2>

            <p className="text-zinc-500">
              Become part of a community that values thoughtful storytelling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <CheckCircle size={20} className="shrink-0" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <Users size={36} className="mx-auto mb-4" />
              <h3 className="mb-2 text-3xl font-bold">Readers</h3>
              <p className="text-zinc-500">
                Thoughtful people from around the world.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <Globe size={36} className="mx-auto mb-4" />
              <h3 className="mb-2 text-3xl font-bold">Worldwide</h3>
              <p className="text-zinc-500">
                Stories that transcend borders and distance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <BookHeart size={36} className="mx-auto mb-4" />
              <h3 className="mb-2 text-3xl font-bold">Stories</h3>
              <p className="text-zinc-500">
                Letters, memories, poetry, and reflections.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <MessageCircleHeart
                size={36}
                className="mx-auto mb-4"
              />
              <h3 className="mb-2 text-3xl font-bold">Connection</h3>
              <p className="text-zinc-500">
                Writing that brings people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <Heart size={48} />
          </div>

          <blockquote className="text-3xl font-light leading-relaxed md:text-6xl">
            “Some letters are written for everyone
            <br />
            who has ever felt something deeply.”
          </blockquote>

          <p className="mt-10 text-lg text-zinc-500">
            — Letters Never Sent
          </p>
        </div>
      </section>

      {/* Final Reflection */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Coffee size={46} />
          </div>

          <h2 className="mb-8 text-5xl font-bold">
            A Slower Way To Read
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            In a world built around speed and distraction, the newsletter
            offers a quieter space. A place to pause, reflect, and reconnect
            with the stories and emotions that make us human.
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
            Explore More
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-500">
            Discover letters, emotions, memories, poetry, essays, and
            reflections from our growing collection.
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