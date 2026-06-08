import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  icon?: ReactNode;
  badge?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  icon,
  badge,
  className = "",
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`flex flex-col ${alignmentClasses[align]} ${className}`}
    >
      {/* Badge */}
      {badge && (
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
          <Sparkles size={12} />
          {badge}
        </span>
      )}

      {/* Icon */}
      {icon && (
        <div className="mb-5 rounded-full border border-white/10 bg-white/[0.02] p-4">
          {icon}
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          {subtitle}
        </p>
      )}

      {/* Main Title */}
      <h2
        className="
          mb-5
          text-4xl
          font-bold
          tracking-tight
          text-white
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className="
            max-w-3xl
            text-lg
            leading-relaxed
            text-zinc-500
            md:text-xl
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}