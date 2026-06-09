"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Send,
  CheckCircle,
  Feather,
  Heart,
  BookOpen,
  Sparkles,
  ArrowRight,
  Stars,
  ShieldCheck,
  Users,
  Quote,
  Bell,
} from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const benefits = [
    {
      icon: Feather,
      title: "Exclusive Letters",
      description:
        "Receive unpublished letters and subscriber-only writing before anyone else.",
    },
    {
      icon: BookOpen,
      title: "Fresh Writing",
      description:
        "Discover new reflections, essays, memories, and poetry every month.",
    },
    {
      icon: Heart,
      title: "Meaningful Stories",
      description:
        "Writing focused on emotions, healing, growth, and human connection.",
    },
  ];

  const stats = [
    {
      number: "100+",
      label: "Letters",
    },
    {
      number: "50+",
      label: "Reflections",
    },
    {
      number: "∞",
      label: "Human Emotions",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-28 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

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
            <Bell size={16} />

            <span className="text-sm tracking-wider text-zinc-300">
              Literary Newsletter • Exclusive Writing
            </span>
          </div>

          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <Image
                  src="/logo.png"
                  alt="Letters Never Sent"
                  width={120}
                  height={120}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="mb-5 text-5xl font-bold tracking-tight md:text-7xl">
            Letters Never Sent
            <br />
            Newsletter
          </h2>

          <p className="mb-4 text-xl text-zinc-300 md:text-2xl">
            For Every Feeling Left Unspoken
          </p>

          <p className="mx-auto mb-14 max-w-4xl text-lg leading-relaxed text-zinc-500 md:text-xl">
            Join readers who receive thoughtful letters,
            reflections, essays, poetry, memories, and
            subscriber-exclusive writing delivered directly
            to their inbox.
          </p>

          {/* Subscribe Box */}
          <div className="mx-auto mb-20 max-w-4xl rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
            {!subscribed ? (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 md:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email address"
                    className="
                      flex-1
                      rounded-full
                      border
                      border-white/10
                      bg-black/50
                      px-6
                      py-5
                      text-white
                      outline-none
                      transition
                      focus:border-white
                    "
                  />

                  <button
                    type="submit"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-white
                      px-8
                      py-5
                      font-semibold
                      text-black
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    <Send size={18} />
                    Subscribe
                  </button>
                </form>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} />
                    No Spam
                  </div>

                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    Growing Community
                  </div>

                  <div className="flex items-center gap-2">
                    <Stars size={16} />
                    Exclusive Content
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-10">
                <CheckCircle
                  size={60}
                  className="text-green-400"
                />

                <h3 className="text-3xl font-bold">
                  Subscription Successful
                </h3>

                <p className="text-zinc-400">
                  Thank you for joining the newsletter.
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mb-24 grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >
                <h3 className="mb-3 text-5xl font-bold">
                  {stat.number}
                </h3>

                <p className="text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-10
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-white/20
                  "
                >
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-2xl border border-white/10 p-4">
                      <Icon size={34} />
                    </div>
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

          {/* Quote */}
          <div className="mt-24 rounded-[40px] border border-white/10 bg-white/[0.02] p-10 md:p-16">
            <Quote
              size={46}
              className="mx-auto mb-8 text-zinc-600"
            />

            <blockquote className="mx-auto max-w-4xl text-3xl font-light leading-relaxed md:text-5xl">
              “Some letters are written
              <br />
              not to be sent,
              <br />
              but to remind us
              that we felt something deeply.”
            </blockquote>

            <p className="mt-10 text-zinc-500">
              — Letters Never Sent
            </p>
          </div>

          {/* CTA */}
          <div className="mt-24">
            <Link
              href="/newsletter"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white
                px-8
                py-4
                font-medium
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              View Newsletter Page

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
