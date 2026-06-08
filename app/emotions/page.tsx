import Link from "next/link";
import {
  Heart,
  Smile,
  CloudRain,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Emotions",
  description:
    "Explore the emotions that shape our lives — love, hope, grief, healing, forgiveness, longing, and everything in between.",
};

const emotions = [
  {
    title: "Love",
    icon: Heart,
    description:
      "The emotion that inspires letters, memories, poetry, and countless untold stories.",
  },
  {
    title: "Hope",
    icon: Sparkles,
    description:
      "The quiet belief that tomorrow can be brighter than today.",
  },
  {
    title: "Longing",
    icon: CloudRain,
    description:
      "The ache of missing someone, somewhere, or something that once mattered.",
  },
  {
    title: "Healing",
    icon: ShieldCheck,
    description:
      "The journey of finding peace after heartbreak, loss, and uncertainty.",
  },
  {
    title: "Joy",
    icon: Smile,
    description:
      "The simple moments that remind us life is still beautiful.",
  },
  {
    title: "Forgiveness",
    icon: Heart,
    description:
      "Letting go of pain without forgetting the lessons it taught.",
  },
];

export default function EmotionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <Heart size={52} />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Emotions
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Every letter begins with a feeling.
            Every memory carries an emotion.
            Every story leaves something behind.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            The Language of the Heart
          </h2>

          <p className="text-lg leading-relaxed text-zinc-400">
            Emotions connect us across time, distance, and experience.
            They shape the letters we write, the memories we keep,
            and the stories we tell ourselves.
            <br />
            <br />
            This collection explores the emotions that define the human
            experience—from love and hope to grief and healing.
          </p>
        </div>
      </section>

      {/* Emotion Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {emotions.map((emotion) => {
              const Icon = emotion.icon;

              return (
                <div
                  key={emotion.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20"
                >
                  <div className="mb-5">
                    <Icon size={40} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {emotion.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-500">
                    {emotion.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Reflection */}
      <section className="border-y border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
            Reflection
          </span>

          <h2 className="mb-8 text-4xl font-bold">
            Some Feelings Never Leave
          </h2>

          <p className="text-lg leading-relaxed text-zinc-400">
            Certain emotions stay with us long after a conversation ends.
            They become part of our memories, our writing, and the stories
            we continue telling ourselves.
            <br />
            <br />
            Sometimes the most meaningful feelings are the ones that never
            found the right words.
          </p>
        </div>
      </section>

      {/* Emotion Categories */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Explore by Emotion
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Love",
              "Longing",
              "Hope",
              "Healing",
              "Forgiveness",
              "Gratitude",
              "Friendship",
              "Heartbreak",
              "Growth",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-6 text-center transition hover:border-white/20"
              >
                <h3 className="text-xl font-medium">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Continue the Journey
          </h2>

          <p className="mb-10 text-zinc-500">
            Discover letters, memories, poetry, and reflections inspired by
            the emotions that connect us all.
          </p>

          <Link
            href="/letters"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            Explore Letters
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}