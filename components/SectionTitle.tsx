import Image from "next/image";
import { ReactNode } from "react";
import {
  Sparkles,
  Stars,
  Quote,
} from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  icon?: ReactNode;
  badge?: string;
  className?: string;
  showLogo?: boolean;
  decorative?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  icon,
  badge,
  className = "",
  showLogo = true,
  decorative = true,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: {
      container: "items-start text-left",
      divider: "mr-auto",
    },
    center: {
      container: "items-center text-center",
      divider: "mx-auto",
    },
    right: {
      container: "items-end text-right",
      divider: "ml-auto",
    },
  };

  const currentAlignment =
    alignmentClasses[align];

  return (
    <div
      className={`
        relative
        flex
        flex-col
        ${currentAlignment.container}
        ${className}
      `}
    >
      {/* Decorative Background */}
      {decorative && (
        <>
          <div className="absolute left-1/2 top-0 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="absolute left-1/2 top-20 -z-10 h-60 w-60 -translate-x-1/2 rounded-full bg-white/[0.02] blur-[120px]" />
        </>
      )}

      {/* Badge */}
      {badge && (
        <div className="mb-6">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-2.5
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-zinc-300
              backdrop-blur-xl
            "
          >
            <Sparkles size={12} />
            {badge}
          </span>
        </div>
      )}

      {/* Logo */}
      {showLogo && (
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                p-4
                backdrop-blur-xl
              "
            >
              <Image
                src="/logo.png"
                alt="Letters Never Sent"
                width={72}
                height={72}
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Custom Icon */}
      {icon && (
        <div className="mb-6">
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-xl
            "
          >
            {icon}
          </div>
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <div className="mb-4">
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              uppercase
              tracking-[0.35em]
              text-zinc-500
            "
          >
            <Stars size={12} />
            {subtitle}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className="
          relative
          mb-6
          max-w-5xl
          text-5xl
          font-bold
          tracking-tight
          text-white
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
        "
      >
        {title}
      </h2>

      {/* Decorative Divider */}
      <div
        className={`
          mb-8
          h-px
          w-40
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          ${currentAlignment.divider}
        `}
      />

      {/* Description */}
      {description && (
        <p
          className="
            max-w-4xl
            text-lg
            leading-relaxed
            text-zinc-500
            md:text-xl
            lg:text-2xl
          "
        >
          {description}
        </p>
      )}

      {/* Decorative Quote */}
      {decorative && (
        <div className="mt-10">
          <Quote
            size={28}
            className="text-zinc-700"
          />
        </div>
      )}
    </div>
  );
}