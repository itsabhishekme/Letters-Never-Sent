"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Feather,
  Calendar,
  Clock,
  Heart,
  ArrowRight,
  Sparkles,
  Quote,
  Stars,
  PenTool,
  BookOpen,
} from "lucide-react";

export interface PoetryCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  featured?: boolean;
}

export default function PoetryCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
  author = "Vihaan",
  featured = false,
}: PoetryCardProps) {
  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/20
        hover:bg-white/[0.04]
        ${
          featured
            ? "md:col-span-2 xl:col-span-2"
            : ""
        }
      `}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/[0.02] blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]" />
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute right-6 top-6 z-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-xl">
            <Stars size={12} />
            Featured Poem
          </div>
        </div>
      )}

      <div className="relative z-10 p-8 md:p-10">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-400">
              <PenTool size={12} />
              {category}
            </span>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2">
              <Image
                src="/logo.png"
                alt="Letters Never Sent"
                width={52}
                height={52}
                className="object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2
          className={`
            mb-5
            font-bold
            tracking-tight
            transition-colors
            duration-300
            group-hover:text-white
            ${
              featured
                ? "text-4xl md:text-5xl"
                : "text-2xl md:text-3xl"
            }
          `}
        >
          {title}
        </h2>

        {/* Excerpt */}
        <p
          className={`
            mb-8
            leading-relaxed
            text-zinc-500
            transition-colors
            duration-300
            group-hover:text-zinc-400
            ${
              featured
                ? "max-w-4xl text-lg"
                : "text-base"
            }
          `}
        >
          {excerpt}
        </p>

        {/* Featured Decorative Quote */}
        {featured && (
          <div className="mb-8">
            <Quote
              size={38}
              className="text-zinc-700"
            />
          </div>
        )}

        {/* Poetry Preview */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <Sparkles size={14} />

              <span className="text-xs uppercase tracking-[0.25em]">
                Poetry Preview
              </span>
            </div>
          </div>

          <div className="p-6">
            <blockquote className="text-lg italic leading-relaxed text-zinc-300">
              “Every poem begins as a feeling,
              searching for the right words.
              Every verse becomes a bridge
              between silence and expression.”
            </blockquote>
          </div>
        </div>

        {/* Meta Information */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-500">
            <Calendar size={14} />
            {date}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-500">
            <Clock size={14} />
            {readTime}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-500">
            <Heart size={14} />
            {author}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-500">
            <BookOpen size={14} />
            Poetry Collection
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Link
            href={`/poetry/${slug}`}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-3
              font-medium
              text-black
              transition-all
              duration-300
              hover:gap-4
            "
          >
            Read Poem

            <ArrowRight
              size={18}
              className="transition-transform duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3 text-zinc-600">
            <Image
              src="/logo.png"
              alt="Letters Never Sent"
              width={28}
              height={28}
              className="opacity-70"
            />

            <span className="text-sm">
              Letters Never Sent
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
