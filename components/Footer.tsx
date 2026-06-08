import Link from "next/link";
import {
  Feather,
  Mail,
  Heart,
  BookOpen,
  PenTool,
  Send,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Letters", href: "/letters" },
      { label: "Emotions", href: "/emotions" },
      { label: "Memories", href: "/memories" },
      { label: "Reflections", href: "/reflections" },
      { label: "Poetry", href: "/poetry" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Newsletter", href: "/newsletter" },
      { label: "Submissions", href: "/submissions" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      {/* Newsletter Banner */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-14">
            <div className="mx-auto max-w-4xl text-center">
              <Send size={40} className="mx-auto mb-6" />

              <h2 className="mb-4 text-4xl font-bold">
                Join the Newsletter
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-zinc-400">
                Receive new letters, poetry, reflections, and memories
                directly in your inbox.
              </p>

              <form className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-white/10 bg-black px-6 py-4 outline-none transition focus:border-white"
                />

                <button
                  type="submit"
                  className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full border border-white/10 p-3">
                <Feather size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Letters Never Sent
                </h3>

                <p className="text-sm text-zinc-500">
                  For Every Feeling Left Unspoken
                </p>
              </div>
            </div>

            <p className="mb-8 max-w-xl leading-relaxed text-zinc-400">
              A literary home for unsent letters, personal reflections,
              poetry, memories, and stories that continue to live
              beyond the moment they were written.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/letters"
                className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-white/30"
              >
                Letters
              </Link>

              <Link
                href="/poetry"
                className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-white/30"
              >
                Poetry
              </Link>

              <Link
                href="/memories"
                className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-white/30"
              >
                Memories
              </Link>

              <Link
                href="/reflections"
                className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-white/30"
              >
                Reflections
              </Link>
            </div>
          </div>

          {/* Navigation */}
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="mb-5 text-lg font-semibold">
                {section.title}
              </h4>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-zinc-400 transition hover:text-white"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Links */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-4">
            <Link
              href="/letters"
              className="rounded-2xl border border-white/10 p-5 transition hover:border-white/20"
            >
              <Mail size={22} className="mb-3" />

              <h4 className="mb-2 font-semibold">
                Letters
              </h4>

              <p className="text-sm text-zinc-500">
                Messages that were never delivered.
              </p>
            </Link>

            <Link
              href="/poetry"
              className="rounded-2xl border border-white/10 p-5 transition hover:border-white/20"
            >
              <PenTool size={22} className="mb-3" />

              <h4 className="mb-2 font-semibold">
                Poetry
              </h4>

              <p className="text-sm text-zinc-500">
                Feelings expressed through verse.
              </p>
            </Link>

            <Link
              href="/memories"
              className="rounded-2xl border border-white/10 p-5 transition hover:border-white/20"
            >
              <BookOpen size={22} className="mb-3" />

              <h4 className="mb-2 font-semibold">
                Memories
              </h4>

              <p className="text-sm text-zinc-500">
                Stories preserved through time.
              </p>
            </Link>

            <Link
              href="/reflections"
              className="rounded-2xl border border-white/10 p-5 transition hover:border-white/20"
            >
              <Heart size={22} className="mb-3" />

              <h4 className="mb-2 font-semibold">
                Reflections
              </h4>

              <p className="text-sm text-zinc-500">
                Thoughts shaped by experience.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Letters Never Sent. All Rights Reserved.
            </p>

            <p className="text-sm text-zinc-600">
              Created by — Vihaan
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}