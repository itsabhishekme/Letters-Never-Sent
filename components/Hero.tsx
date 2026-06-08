"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Feather,
  Heart,
  Mail,
  PenTool,
  Sparkles,
  Stars,
  Quote,
  Clock3,
  Send,
  MoveRight,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const stats = [
    {
      icon: <Mail size={30} />,
      value: "100+",
      label: "Letters & Stories",
    },
    {
      icon: <BookOpen size={30} />,
      value: "50+",
      label: "Reflections & Essays",
    },
    {
      icon: <Heart size={30} />,
      value: "Endless",
      label: "Human Emotions",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[200px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Hero */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-6xl text-center">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-xl"
            >
              <Sparkles size={16} />

              <span className="text-sm tracking-wider text-zinc-300">
                Literary Journal • Personal Reflections • Poetry
              </span>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-12 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />

                <div className="relative rounded-full border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
                  <Feather size={84} />
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
              className="
                mb-8
                text-xl
                font-light
                text-zinc-300
                md:text-3xl
              "
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
              unsent letters, forgotten memories, personal
              reflections, poetry, longing, healing, and the
              stories that continue to echo through time.
              <br />
              <br />
              Every page is dedicated to emotions that were felt
              deeply but never fully spoken.
            </motion.p>

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

                  <p className="text-zinc-500">
                    {item.label}
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
                max-w-4xl
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.02]
                p-10
                backdrop-blur-xl
              "
            >
              <Quote
                size={40}
                className="mx-auto mb-6 text-zinc-600"
              />

              <p className="text-2xl leading-relaxed text-zinc-300 md:text-3xl">
                Some letters are never sent because
                they were never meant to change someone
                else.
                <br />
                They were meant to change us.
              </p>

              <p className="mt-8 text-zinc-500">
                — Vihaan
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-24 grid gap-6 md:grid-cols-4"
            >
              <Link
                href="/letters"
                className="group rounded-3xl border border-white/10 p-8 transition hover:border-white/20"
              >
                <Mail size={30} className="mb-5" />

                <h3 className="mb-3 text-xl font-semibold">
                  Letters
                </h3>

                <p className="mb-5 text-zinc-500">
                  Unspoken words and unfinished conversations.
                </p>

                <MoveRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/memories"
                className="group rounded-3xl border border-white/10 p-8 transition hover:border-white/20"
              >
                <BookOpen size={30} className="mb-5" />

                <h3 className="mb-3 text-xl font-semibold">
                  Memories
                </h3>

                <p className="mb-5 text-zinc-500">
                  Stories preserved by time.
                </p>

                <MoveRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/poetry"
                className="group rounded-3xl border border-white/10 p-8 transition hover:border-white/20"
              >
                <Heart size={30} className="mb-5" />

                <h3 className="mb-3 text-xl font-semibold">
                  Poetry
                </h3>

                <p className="mb-5 text-zinc-500">
                  Feelings transformed into verse.
                </p>

                <MoveRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/reflections"
                className="group rounded-3xl border border-white/10 p-8 transition hover:border-white/20"
              >
                <PenTool size={30} className="mb-5" />

                <h3 className="mb-3 text-xl font-semibold">
                  Reflections
                </h3>

                <p className="mb-5 text-zinc-500">
                  Quiet thoughts discovered in silence.
                </p>

                <MoveRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-24"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3">
                <Stars size={14} />

                <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                  Created By Vihaan
                </span>
              </div>
            </motion.div>

            {/* Scroll */}
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
                size={28}
                className="text-zinc-600"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}