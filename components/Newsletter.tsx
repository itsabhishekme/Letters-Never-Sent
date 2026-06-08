"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Send,
  CheckCircle,
  Feather,
  Heart,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/[0.03] p-5">
              <Mail size={48} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            Letters Never Sent Newsletter
          </h2>

          <p className="mb-3 text-xl text-zinc-300">
            For Every Feeling Left Unspoken
          </p>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-zinc-500">
            Join readers who receive thoughtful letters,
            personal reflections, memories, poetry, and
            exclusive stories delivered directly to their inbox.
          </p>

          {/* Newsletter Form */}
          {!subscribed ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mb-16 flex max-w-2xl flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-full border border-white/10 bg-black px-6 py-4 outline-none transition focus:border-white"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-90"
              >
                <Send size={18} />
                Subscribe
              </button>
            </form>
          ) : (
            <div className="mx-auto mb-16 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 px-6 py-5">
              <CheckCircle size={22} />

              <span>
                Thank you for subscribing to the newsletter.
              </span>
            </div>
          )}

          {/* Benefits */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <Feather size={34} className="mx-auto mb-5" />

              <h3 className="mb-3 text-xl font-semibold">
                Exclusive Letters
              </h3>

              <p className="text-zinc-500">
                Receive unpublished letters and personal stories
                before they appear on the website.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <BookOpen size={34} className="mx-auto mb-5" />

              <h3 className="mb-3 text-xl font-semibold">
                New Writing
              </h3>

              <p className="text-zinc-500">
                Be the first to discover reflections,
                essays, memories, and poetry.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <Heart size={34} className="mx-auto mb-5" />

              <h3 className="mb-3 text-xl font-semibold">
                Meaningful Content
              </h3>

              <p className="text-zinc-500">
                Thoughtful writing focused on emotions,
                connection, growth, and storytelling.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-20">
            <Sparkles size={28} className="mx-auto mb-6 text-zinc-500" />

            <blockquote className="mx-auto max-w-4xl text-2xl font-light leading-relaxed md:text-4xl">
              “Some letters are written not to be sent,
              but to remind us that we felt something deeply.”
            </blockquote>

            <p className="mt-8 text-zinc-500">
              — Letters Never Sent
            </p>
          </div>

          {/* CTA */}
          <div className="mt-20">
            <Link
              href="/newsletter"
              className="inline-flex items-center rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
            >
              View Newsletter Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}