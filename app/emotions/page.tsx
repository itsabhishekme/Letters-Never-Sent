import Link from "next/link";
import {
  Heart,
  Smile,
  CloudRain,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Sun,
  Moon,
  Flower2,
  Flame,
  Waves,
  Stars,
  Quote,
  BookHeart,
  Wind,
  Leaf,
  Compass,
  CircleDashed,
} from "lucide-react";

export const metadata = {
  title: "Emotions | Letters Never Sent",
  description:
    "Explore love, hope, longing, healing, joy, grief, forgiveness, gratitude, and the emotions that shape the human experience.",
};

const emotions = [
  {
    title: "Love",
    icon: Heart,
    description:
      "The force behind countless letters, memories, poems, and stories that continue to live long after they are written.",
    quote: "The emotion that stays even when words disappear.",
  },
  {
    title: "Hope",
    icon: Sparkles,
    description:
      "A quiet light that remains visible even during life's darkest and most uncertain seasons.",
    quote: "The belief that tomorrow can become better.",
  },
  {
    title: "Longing",
    icon: CloudRain,
    description:
      "The ache of distance, absence, memory, and the desire for something that remains out of reach.",
    quote: "Missing what once felt like home.",
  },
  {
    title: "Healing",
    icon: ShieldCheck,
    description:
      "The gradual process of rebuilding yourself after loss, heartbreak, disappointment, and change.",
    quote: "Growth hidden beneath recovery.",
  },
  {
    title: "Joy",
    icon: Smile,
    description:
      "The unexpected beauty found in ordinary moments, quiet victories, and meaningful connections.",
    quote: "Life's simplest form of gratitude.",
  },
  {
    title: "Forgiveness",
    icon: Flower2,
    description:
      "The courage to release resentment while carrying forward the lessons experience has taught.",
    quote: "Freedom disguised as compassion.",
  },
];

const deeperEmotions = [
  {
    title: "Grief",
    icon: Moon,
    text: "The shadow left behind when someone or something meaningful is gone.",
  },
  {
    title: "Wonder",
    icon: Stars,
    text: "The feeling that reminds us life is still full of mystery.",
  },
  {
    title: "Passion",
    icon: Flame,
    text: "The fire that drives creativity, purpose, and ambition.",
  },
  {
    title: "Peace",
    icon: Waves,
    text: "The calm that arrives after acceptance and understanding.",
  },
  {
    title: "Curiosity",
    icon: Compass,
    text: "The desire to explore, discover, and understand more deeply.",
  },
  {
    title: "Growth",
    icon: Leaf,
    text: "The transformation that occurs through experience and reflection.",
  },
];

const emotionCategories = [
  "Love",
  "Longing",
  "Hope",
  "Healing",
  "Forgiveness",
  "Joy",
  "Heartbreak",
  "Gratitude",
  "Friendship",
  "Belonging",
  "Nostalgia",
  "Loss",
  "Wonder",
  "Acceptance",
  "Courage",
  "Faith",
  "Growth",
  "Peace",
];

const reflections = [
  {
    title: "The Feelings We Never Express",
    description:
      "Some emotions stay hidden in journals, unfinished drafts, and conversations that never happened.",
  },
  {
    title: "The Weight of Memory",
    description:
      "A single memory can carry years of emotion and shape the stories we continue telling ourselves.",
  },
  {
    title: "The Journey Toward Healing",
    description:
      "Healing is rarely linear. It unfolds slowly through reflection, patience, and self-compassion.",
  },
];

export default function EmotionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300">
            <BookHeart size={15} />
            The Human Experience
          </div>

          <div className="mb-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Heart size={60} />
            </div>
          </div>

          <h1 className="mb-8 text-6xl font-bold tracking-tight md:text-8xl">
            Emotions
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Every letter begins with a feeling. Every memory carries an
            emotion. Every story leaves something behind. Emotions shape our
            relationships, influence our choices, and give meaning to our
            experiences.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16">
            <div className="mb-6 flex justify-center">
              <Quote size={42} />
            </div>

            <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl">
              The Language Of The Heart
            </h2>

            <p className="text-center text-lg leading-relaxed text-zinc-400">
              Emotions connect people across time, distance, cultures, and
              experiences. They shape the letters we write, the memories we
              preserve, the poems we create, and the stories we carry within
              ourselves. Through emotion, we understand not only others but
              also who we are becoming.
            </p>
          </div>
        </div>
      </section>

      {/* Main Emotion Grid */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Core Human Emotions
            </h2>

            <p className="text-zinc-500">
              The feelings that inspire our stories and define our journeys.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {emotions.map((emotion) => {
              const Icon = emotion.icon;

              return (
                <div
                  key={emotion.title}
                  className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Icon size={38} />
                  </div>

                  <h3 className="mb-4 text-3xl font-semibold">
                    {emotion.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-zinc-500">
                    {emotion.description}
                  </p>

                  <div className="border-t border-white/10 pt-5">
                    <p className="italic text-zinc-400">
                      "{emotion.quote}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reflection Banner */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              <CircleDashed size={14} />
              Reflection
            </span>

            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Some Feelings Never Leave
            </h2>

            <p className="text-lg leading-relaxed text-zinc-400">
              Certain emotions remain with us long after conversations end.
              They become part of our memories, influence our writing, and
              quietly shape the people we become. Sometimes the most meaningful
              feelings are the ones that never found the right words.
            </p>
          </div>
        </div>
      </section>

      {/* Deeper Emotions */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Beyond The Surface
            </h2>

            <p className="text-zinc-500">
              Emotions are layered, complex, and deeply human.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {deeperEmotions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <Icon size={36} className="mb-5" />

                  <h3 className="mb-3 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reflection Cards */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              Emotional Reflections
            </h2>

            <p className="text-zinc-500">
              Stories often begin with a feeling we cannot ignore.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reflections.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8"
              >
                <h3 className="mb-4 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotion Categories */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-14 text-center text-5xl font-bold">
            Explore By Emotion
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {emotionCategories.map((item) => (
              <div
                key={item}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <h3 className="text-lg font-medium transition group-hover:scale-105">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Reflection */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Wind size={48} />
          </div>

          <h2 className="mb-8 text-5xl font-bold">
            Every Story Begins With A Feeling
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Before every letter, every memory, every poem, and every
            reflection, there is an emotion. It may arrive quietly or all at
            once. It may stay for a moment or a lifetime. But it is emotion
            that transforms experiences into stories worth remembering.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Sun size={48} />
          </div>

          <h2 className="mb-6 text-5xl font-bold">
            Continue The Journey
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-500">
            Explore letters, memories, reflections, poetry, and stories shaped
            by the emotions that connect us all.
          </p>

          <Link
            href="/letters"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 text-lg transition-all duration-300 hover:bg-white hover:text-black"
          >
            Explore Letters
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}