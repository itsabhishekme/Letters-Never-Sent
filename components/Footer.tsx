"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Feather,
  Mail,
  Heart,
  BookOpen,
  PenTool,
  Send,
  Sparkles,
  BookHeart,
  Quote,
  Globe,
  Bell,
  PenSquare,
  Brain,
  ChevronRight,
  ArrowRight,
  Bookmark,
  Coffee,
  ShieldCheck,
  MessageCircleHeart,
  Wind,
  Archive,
  Home,
  Star,
  PenLine,
  BookMarked,
  ScrollText,
  Layers,
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

const stats = [
  {
    icon: BookMarked,
    value: "100+",
    label: "Stories Published",
  },
  {
    icon: PenLine,
    value: "50+",
    label: "Poems Written",
  },
  {
    icon: Layers,
    value: "12",
    label: "Themes Explored",
  },
  {
    icon: Star,
    value: "∞",
    label: "Feelings Preserved",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[180px]" />
      </div>

      {/* Newsletter */}
      <section className="border-b border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl">
            <div className="p-10 md:p-20">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300">
                  <Sparkles size={14} />
                  Join The Newsletter
                </div>

                <div className="mb-8 flex justify-center">
                  <div className="rounded-full border border-white/10 bg-white/5 p-6">
                    <Send size={44} />
                  </div>
                </div>

                <h2 className="mb-6 text-5xl font-bold md:text-7xl">
                  For Every Feeling
                  <br />
                  Left Unspoken
                </h2>

                <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-zinc-400">
                  Receive letters, poetry, reflections, essays, memories,
                  and subscriber-exclusive writing directly in your inbox.
                </p>

                <form className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 rounded-full border border-white/10 bg-black/60 px-6 py-5 outline-none transition focus:border-white"
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

      {/* Stats */}
      <section className="border-b border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <Icon size={30} className="mb-4 text-zinc-300" />

                  <h3 className="mb-2 text-4xl font-bold">{item.value}</h3>

                  <p className="text-zinc-500">{item.label}</p>
                </div>
              );
            })}
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
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20"
                >
                  <Icon size={34} className="mb-5" />

                  <h3 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <div className="mb-10 flex items-center gap-5">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-2xl backdrop-blur-xl">
                  <Image
                    src="/logo.png"
                    alt="Letters Never Sent Logo"
                    width={72}
                    height={72}
                    className="h-16 w-16 object-contain"
                    priority
                  />
                </div>

                <div>
                  <h3 className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-4xl font-bold text-transparent">
                    Letters Never Sent
                  </h3>

                  <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
                    <Sparkles size={14} />
                    <span className="text-sm text-zinc-400">
                      For Every Feeling Left Unspoken
                    </span>
                  </div>
                </div>
              </div>

              <p className="mb-10 text-lg leading-relaxed text-zinc-400">
                A literary sanctuary dedicated to unsent letters,
                heartfelt reflections, poetry, memories, and stories
                that continue to exist beyond the moment they were written.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Globe size={20} />
                  </div>

                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      A Home For Readers Everywhere
                    </h4>

                    <p className="text-zinc-400">
                      Stories, reflections, poetry, and personal journeys
                      crafted for readers who believe in meaningful words.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-7">
              <div className="grid gap-10 md:grid-cols-2">
                {navigation.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                  >
                    <h3 className="mb-2 text-2xl font-bold">
                      {section.title}
                    </h3>

                    <p className="mb-8 text-zinc-500">
                      {section.description}
                    </p>

                    <div className="space-y-3">
                      {section.links.map((link) => {
                        const Icon = link.icon;

                        return (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition hover:border-white/10 hover:bg-white/[0.03]"
                          >
                            <div className="flex items-center gap-3">
                              <Icon size={18} />
                              <span>{link.label}</span>
                            </div>

                            <ChevronRight
                              size={16}
                              className="transition group-hover:translate-x-1"
                            />
                          </Link>
                        );
                      })}
                    </div>
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
            <Quote size={50} className="text-zinc-500" />
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

      {/* Explore */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
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

      {/* Copyright */}
      <section className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3 text-zinc-500">
              <Coffee size={16} />
              <p className="text-sm">
                © {new Date().getFullYear()} Letters Never Sent.
                All Rights Reserved.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>

              <Link href="/contact" className="hover:text-white">
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