"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Mail,
  BookOpen,
  Heart,
  PenTool,
  User,
  Send,
  Feather,
  Sparkles,
  ArrowRight,
  Home,
  BookHeart,
  Brain,
  Bell,
  PenSquare,
} from "lucide-react";

const navigation = [
  {
    name: "Letters",
    href: "/letters",
    icon: Mail,
    description: "Unsent words and heartfelt messages",
  },
  {
    name: "Emotions",
    href: "/emotions",
    icon: Heart,
    description: "Stories behind every feeling",
  },
  {
    name: "Memories",
    href: "/memories",
    icon: BookOpen,
    description: "Moments preserved through time",
  },
  {
    name: "Reflections",
    href: "/reflections",
    icon: Brain,
    description: "Thoughts, lessons, and observations",
  },
  {
    name: "Poetry",
    href: "/poetry",
    icon: PenTool,
    description: "Verses from the heart",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-4 transition duration-300 hover:opacity-90"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                <Image
                  src="/logo.png"
                  alt="Letters Never Sent Logo"
                  width={52}
                  height={52}
                  priority
                  className="rounded-xl object-contain"
                />
              </div>

              <div className="hidden sm:block">
                <h1 className="text-xl font-bold tracking-tight text-white">
                  Letters Never Sent
                </h1>

                <p className="text-xs tracking-wide text-zinc-500">
                  For Every Feeling Left Unspoken
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 xl:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-sm font-medium text-zinc-400 transition duration-300 hover:text-white"
                >
                  {item.name}

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 xl:flex">
              <Link
                href="/about"
                className="rounded-full border border-transparent px-4 py-2 text-sm text-zinc-400 transition hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-transparent px-4 py-2 text-sm text-zinc-400 transition hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/newsletter"
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Newsletter
              </Link>

              <Link
                href="/submissions"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                Submit Story
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-white/20 xl:hidden"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-300 xl:hidden ${
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 pb-10 pt-28">
          {/* Mobile Brand */}
          <div className="mb-10 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <Image
              src="/logo.png"
              alt="Letters Never Sent"
              width={55}
              height={55}
              className="rounded-xl"
            />

            <div>
              <h2 className="font-bold text-white">
                Letters Never Sent
              </h2>

              <p className="text-xs text-zinc-500">
                For Every Feeling Left Unspoken
              </p>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="mb-10">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Explore
            </h3>

            <nav className="space-y-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5"
              >
                <Home size={20} />
                Home
              </Link>

              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20"
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={20} />

                      <div>
                        <div>{item.name}</div>

                        <div className="text-xs text-zinc-500">
                          {item.description}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      size={16}
                      className="opacity-50 transition group-hover:translate-x-1"
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Community */}
          <div className="mb-10">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Community
            </h3>

            <div className="space-y-3">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5"
              >
                <User size={20} />
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5"
              >
                <Mail size={20} />
                Contact
              </Link>

              <Link
                href="/newsletter"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5"
              >
                <Bell size={20} />
                Newsletter
              </Link>

              <Link
                href="/submissions"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5"
              >
                <PenSquare size={20} />
                Submissions
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
              <BookHeart size={26} className="mb-3" />

              <h4 className="mb-2 font-semibold">
                Meaningful Stories
              </h4>

              <p className="text-sm text-zinc-500">
                Explore reflections, memories, and letters that stay
                with you long after reading.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
              <Sparkles size={26} className="mb-3" />

              <h4 className="mb-2 font-semibold">
                Thoughtful Writing
              </h4>

              <p className="text-sm text-zinc-500">
                Discover poetry and reflections centered around human
                emotion and connection.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/submissions"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 rounded-3xl bg-white px-6 py-5 text-lg font-semibold text-black transition hover:scale-[1.02]"
            >
              <Send size={18} />
              Submit Your Story
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-14 border-t border-white/10 pt-8 text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-xl"
              />
            </div>

            <p className="text-sm text-zinc-500">
              Letters Never Sent
            </p>

            <p className="mt-2 text-xs text-zinc-600">
              Created by — Vihaan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}