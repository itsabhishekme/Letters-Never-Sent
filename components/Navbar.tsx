"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Feather,
  Mail,
  BookOpen,
  Heart,
  PenTool,
  User,
  Send,
} from "lucide-react";

const navigation = [
  {
    name: "Letters",
    href: "/letters",
    icon: Mail,
  },
  {
    name: "Emotions",
    href: "/emotions",
    icon: Heart,
  },
  {
    name: "Memories",
    href: "/memories",
    icon: BookOpen,
  },
  {
    name: "Reflections",
    href: "/reflections",
    icon: PenTool,
  },
  {
    name: "Poetry",
    href: "/poetry",
    icon: Feather,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 transition hover:opacity-90"
            >
              <div className="rounded-full border border-white/10 bg-white/[0.03] p-2.5">
                <Feather size={20} />
              </div>

              <div>
                <h1 className="text-lg font-bold">
                  Letters Never Sent
                </h1>

                <p className="text-xs text-zinc-500">
                  For Every Feeling Left Unspoken
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 lg:flex">
              <Link
                href="/about"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/newsletter"
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:border-white/30"
              >
                Newsletter
              </Link>

              <Link
                href="/submissions"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Submit Story
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="rounded-lg border border-white/10 p-2 lg:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black lg:hidden">
          <div className="h-full overflow-y-auto px-6 pt-24">
            {/* Mobile Navigation */}
            <nav className="space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className="flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition hover:border-white/20"
                  >
                    <Icon size={20} />

                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Secondary Links */}
            <div className="mt-10 space-y-3">
              <Link
                href="/about"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-5"
              >
                <User size={20} />
                About
              </Link>

              <Link
                href="/contact"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-5"
              >
                <Mail size={20} />
                Contact
              </Link>

              <Link
                href="/newsletter"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-5"
              >
                <Send size={20} />
                Newsletter
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/submissions"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-medium text-black"
              >
                Submit Your Story
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-16 border-t border-white/10 py-8 text-center">
              <p className="text-sm text-zinc-500">
                Letters Never Sent
              </p>

              <p className="mt-2 text-xs text-zinc-600">
                Created by — Vihaan
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}