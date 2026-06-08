"use client";

import Link from "next/link";
import {
  Feather,
  Calendar,
  Clock,
  Heart,
  ArrowRight,
  Sparkles,
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
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/[0.02]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.03]
        ${
          featured
            ? "md:col-span-2 xl:col-span-2"
            : ""
        }
      `}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute right-5 top-5 z-20">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-widest text-zinc-300">
            Featured Poem
          </span>
        </div>
      )}

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-zinc-400">
            {category}
          </span>

          <Feather
            size={18}
            className="text-zinc-500 transition group-hover:text-zinc-300"
          />
        </div>

        {/* Title */}
        <h2
          className={`
            mb-4 font-bold tracking-tight
            ${
              featured
                ? "text-4xl"
                : "text-2xl"
            }
          `}
        >
          {title}
        </h2>

        {/* Excerpt */}
        <p
          className={`
            mb-8 leading-relaxed text-zinc-500
            ${
              featured
                ? "max-w-3xl text-lg"
                : ""
            }
          `}
        >
          {excerpt}
        </p>

        {/* Metadata */}
        <div className="mb-8 flex flex-wrap gap-5 text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <Heart size={14} />
            <span>{author}</span>
          </div>
        </div>

        {/* Quote Preview */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-black/40 p-5">
          <div className="mb-3 flex items-center gap-2 text-zinc-500">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-wider">
              Poetry Preview
            </span>
          </div>

          <p className="italic text-zinc-400">
            "Every poem begins as a feeling,
            searching for the right words."
          </p>
        </div>

        {/* CTA */}
        <Link
          href={`/poetry/${slug}`}
          className="inline-flex items-center gap-2 font-medium text-white transition-all group-hover:gap-3"
        >
          Read Poem

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}