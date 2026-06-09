import Link from "next/link";
import {
  Feather,
  Mail,
  Heart,
  BookOpen,
  PenTool,
  Send,
  ArrowUpRight,
  Sparkles,
  BookHeart,
  Quote,
  Users,
  Globe,
  Bell,
  PenSquare,
  Brain,
  Moon,
  Stars,
  Compass,
  ChevronRight,
  ArrowRight,
  Bookmark,
  Coffee,
  ShieldCheck,
  MessageCircleHeart,
  Wind,
  Archive,
  Home,
} from "lucide-react";

const navigation = [
  {
    title: "Explore",
    description: "Discover stories, letters, and reflections.",
    links: [
      { label: "Home", href: "/", icon: Home },
      { label: "Letters", href: "/letters", icon: Mail },
      { label: "Emotions", href: "/emotions", icon: Heart },
      { label: "Memories", href: "/memories", icon: Archive },
      { label: "Reflections", href: "/reflections", icon: Brain },
      { label: "Poetry", href: "/poetry", icon: Feather },
    ],
  },
  {
    title: "Community",
    description: "Join the conversation.",
    links: [
      { label: "Newsletter", href: "/newsletter", icon: Bell },
      { label: "Submissions", href: "/submissions", icon: PenSquare },
      { label: "About", href: "/about", icon: BookHeart },
      { label: "Contact", href: "/contact", icon: MessageCircleHeart },
    ],
  },
];

const quickLinks = [
  {
    title: "Letters",
    description: "Messages that were never delivered.",
    href: "/letters",
    icon: Mail,
  },
  {
    title: "Poetry",
    description: "Feelings expressed through rhythm and verse.",
    href: "/poetry",
    icon: PenTool,
  },
  {
    title: "Memories",
    description: "Stories preserved through time.",
    href: "/memories",
    icon: BookOpen,
  },
  {
    title: "Reflections",
    description: "Thoughts shaped by experience.",
    href: "/reflections",
    icon: Brain,
  },
];

const highlights = [
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Readers and writers connected through stories and shared emotions.",
  },
  {
    icon: Heart,
    title: "Meaningful Writing",
    description:
      "Writing centered around connection, growth, healing, and humanity.",
  },
  {
    icon: Bookmark,
    title: "Curated Collections",
    description:
      "Letters, poetry, memories, and reflections gathered with care.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Publication",
    description:
      "A literary space dedicated to thoughtful storytelling.",
  },
];

const categories = [
  "Love",
  "Hope",
  "Longing",
  "Healing",
  "Growth",
  "Friendship",
  "Family",
  "Loss",
  "Dreams",
  "Purpose",
  "Memory",
  "Reflection",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      {/* Newsletter CTA */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03]">
            <div className="p-10 md:p-16">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300">
                  <Sparkles size={14} />
                  Join The Newsletter
                </div>

                <div className="mb-8 flex justify-center">
                  <div className="rounded-full border border-white/10 bg-white/5 p-5">
                    <Send size={42} />
                  </div>
                </div>

                <h2 className="mb-5 text-4xl font-bold md:text-6xl">
                  For Every Feeling Left Unspoken
                </h2>

                <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-zinc-400">
                  Receive thoughtful letters, poetry, reflections, essays,
                  memories, and subscriber-exclusive writing delivered directly
                  to your inbox.
                </p>

                <form className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 rounded-full border border-white/10 bg-black/70 px-6 py-5 outline-none transition focus:border-white"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-5 font-semibold text-black transition-all duration-300 hover:scale-105"
                  >
                    Subscribe
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-white/10 px-6 py-20">
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

      {/* Main Footer */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-full border border-white/10 bg-white/5 p-4">
                  <Feather size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    Letters Never Sent
                  </h3>

                  <p className="text-zinc-500">
                    For Every Feeling Left Unspoken
                  </p>
                </div>
              </div>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                A literary home for unsent letters, personal reflections,
                poetry, memories, and stories that continue to live beyond the
                moment they were written. A place where emotions find language
                and silence finds a voice.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-400"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-zinc-500">
                <Globe size={18} />
                <span>Stories, reflections, and poetry for readers everywhere.</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-7">
              <div className="grid gap-12 md:grid-cols-2">
                {navigation.map((section) => (
                  <div key={section.title}>
                    <h4 className="mb-2 text-2xl font-bold">
                      {section.title}
                    </h4>

                    <p className="mb-8 text-zinc-500">
                      {section.description}
                    </p>

                    <ul className="space-y-4">
                      {section.links.map((link) => {
                        const Icon = link.icon;

                        return (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 transition-all hover:border-white/10 hover:bg-white/[0.02]"
                            >
                              <div className="flex items-center gap-3">
                                <Icon size={18} />

                                <span className="text-zinc-300 transition group-hover:text-white">
                                  {link.label}
                                </span>
                              </div>

                              <ArrowUpRight
                                size={16}
                                className="opacity-0 transition group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <Quote size={46} className="text-zinc-500" />
          </div>

          <blockquote className="text-3xl font-light leading-relaxed md:text-6xl">
            “Some stories are never sent.
            <br />
            Yet they still find their way home.”
          </blockquote>

          <p className="mt-10 text-lg text-zinc-500">
            — Letters Never Sent
          </p>
        </div>
      </section>

      {/* Feature Links */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-5xl font-bold">
              Explore The Collection
            </h2>

            <p className="text-zinc-500">
              Begin your journey through stories, emotions, and reflections.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
                >
                  <Icon size={34} className="mb-5" />

                  <h3 className="mb-3 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-zinc-500">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
                    Explore
                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3 text-zinc-500">
              <Coffee size={16} />
              <p className="text-sm">
                © {new Date().getFullYear()} Letters Never Sent. All Rights
                Reserved.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-zinc-600">
              <Link href="/privacy" className="transition hover:text-zinc-400">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-zinc-400">
                Terms
              </Link>

              <Link href="/contact" className="transition hover:text-zinc-400">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Wind size={15} />
              <span>Created by — Vihaan</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}