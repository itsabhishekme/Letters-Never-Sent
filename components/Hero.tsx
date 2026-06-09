"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Mail,
  PenTool,
  Sparkles,
  Stars,
  Quote,
  Send,
  MoveRight,
  ChevronDown,
  BookHeart,
  Brain,
  Moon,
  Wind,
  Globe,
  PenSquare,
  Archive,
  Coffee,
} from "lucide-react";

export default function Hero() {
  const stats = [
    {
      icon: <Mail size={32} />,
      value: "100+",
      label: "Letters & Stories",
      description: "Heartfelt words shared from around the world",
    },
    {
      icon: <BookOpen size={32} />,
      value: "50+",
      label: "Reflections & Essays",
      description: "Thoughtful writing and personal insights",
    },
    {
      icon: <Heart size={32} />,
      value: "Endless",
      label: "Human Emotions",
      description: "Love, longing, healing, and hope",
    },
  ];

  const categories = [
    {
      title: "Letters",
      description:
        "Unspoken words and unfinished conversations.",
      href: "/letters",
      icon: Mail,
    },
    {
      title: "Memories",
      description:
        "Stories preserved through time and remembrance.",
      href: "/memories",
      icon: Archive,
    },
    {
      title: "Poetry",
      description:
        "Feelings transformed into rhythm and verse.",
      href: "/poetry",
      icon: Heart,
    },
    {
      title: "Reflections",
      description:
        "Quiet thoughts discovered in moments of stillness.",
      href: "/reflections",
      icon: PenTool,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[220px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="mx-auto max-w-6xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-xl"
            >
              <Sparkles size={16} />

              <span className="text-sm tracking-wider text-zinc-300">
                Literary Journal • Personal Reflections • Poetry • Letters
              </span>
            </motion.div>

            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-14 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/10 blur-[80px]" />

                <div className="relative rounded-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">
                  <Image
                    src="/logo.png"
                    alt="Letters Never Sent"
                    width={180}
                    height={180}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                mb-8
                text-6xl
                font-bold
                tracking-tight
                md:text-8xl
                xl:text-[110px]
              "
            >
              Letters
              <br />
              Never Sent
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-8 text-xl font-light text-zinc-300 md:text-3xl"
            >
              For Every Feeling Left Unspoken
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="
                mx-auto
                mb-14
                max-w-4xl
                text-lg
                leading-relaxed
                text-zinc-500
                md:text-xl
              "
            >
              A literary sanctuary for unfinished conversations,
              unsent letters, forgotten memories, personal reflections,
              poetry, longing, healing, and the stories that continue
              to echo through time.
              <br />
              <br />
              Every page is dedicated to emotions that were felt deeply
              but never fully spoken.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-20 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <Link
                href="/letters"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                Explore Letters
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/submissions"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-lg transition hover:border-white/20"
              >
                Submit Your Story
                <Send size={18} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
                    group
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-white/20
                  "
                >
                  <div className="mb-5 flex justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mb-2 text-4xl font-bold">
                    {item.value}
                  </h3>

                  <p className="mb-3 text-lg text-white">
                    {item.label}
                  </p>

                  <p className="text-sm text-zinc-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="
                mx-auto
                mt-24
                max-w-5xl
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.02]
                p-10
                backdrop-blur-xl
              "
            >
              <Quote
                size={42}
                className="mx-auto mb-6 text-zinc-600"
              />

              <p className="text-2xl leading-relaxed text-zinc-300 md:text-4xl">
                Some letters are never sent because they were never
                meant to change someone else.
                <br />
                They were meant to change us.
              </p>

              <p className="mt-8 text-zinc-500">
                — Vihaan
              </p>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {categories.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
                  >
                    <Icon size={32} className="mb-5" />

                    <h3 className="mb-3 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mb-6 text-zinc-500">
                      {item.description}
                    </p>

                    <MoveRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                );
              })}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15, duration: 1 }}
              className="mt-24 grid gap-6 md:grid-cols-4"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <BookHeart size={28} className="mb-4" />
                <h4 className="mb-2 font-semibold">
                  Meaningful Writing
                </h4>
                <p className="text-sm text-zinc-500">
                  Writing that stays with you.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <Brain size={28} className="mb-4" />
                <h4 className="mb-2 font-semibold">
                  Deep Reflection
                </h4>
                <p className="text-sm text-zinc-500">
                  Thoughts shaped through experience.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <Moon size={28} className="mb-4" />
                <h4 className="mb-2 font-semibold">
                  Quiet Moments
                </h4>
                <p className="text-sm text-zinc-500">
                  Space for stillness and introspection.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <Globe size={28} className="mb-4" />
                <h4 className="mb-2 font-semibold">
                  Global Readers
                </h4>
                <p className="text-sm text-zinc-500">
                  Stories shared across borders.
                </p>
              </div>
            </motion.div>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 1 }}
              className="mt-24"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3">
                <Stars size={14} />

                <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                  Created By Vihaan
                </span>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-20 flex justify-center"
            >
              <ChevronDown
                size={30}
                className="text-zinc-600"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}