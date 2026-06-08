// app/about/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  Feather,
  Heart,
  Mail,
  PenTool,
  BookOpen,
  Sparkles,
  Quote,
  Stars,
  Clock3,
  MoveRight,
  PenSquare,
  Library,
  ScrollText,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Learn the story behind Letters Never Sent — a literary sanctuary dedicated to unspoken emotions, untold stories, memories, poetry, and reflections.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: <Mail size={34} />,
      title: "Unsent Letters",
      description:
        "Messages written from the heart that never reached their destination but still carry meaning.",
    },
    {
      icon: <Heart size={34} />,
      title: "Human Emotions",
      description:
        "Love, longing, hope, grief, healing, forgiveness, and every feeling in between.",
    },
    {
      icon: <PenTool size={34} />,
      title: "Reflections",
      description:
        "Thoughts discovered in quiet moments, long nights, and personal journeys.",
    },
    {
      icon: <BookOpen size={34} />,
      title: "Memories",
      description:
        "Stories preserved by time and remembered long after the moment has passed.",
    },
  ];

  const values = [
    {
      title: "Authenticity",
      description:
        "Every story begins with honesty. Real emotions create meaningful connections.",
    },
    {
      title: "Empathy",
      description:
        "The belief that stories help people feel understood and less alone.",
    },
    {
      title: "Reflection",
      description:
        "Thoughtful writing that encourages readers to look inward.",
    },
    {
      title: "Human Connection",
      description:
        "Finding common experiences through personal storytelling.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-white/[0.03] blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full bg-white/[0.03] blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />
      </div>

      {/* HERO */}
      <section className="relative border-b border-white/10 px-6 py-36">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-xl">
            <Sparkles size={16} />

            <span className="text-sm tracking-wider text-zinc-400">
              About The Project
            </span>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/[0.03] p-8">
              <Feather size={70} />
            </div>
          </div>

          <h1 className="mb-8 text-6xl font-bold tracking-tight md:text-8xl">
            About
            <br />
            Letters Never Sent
          </h1>

          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-zinc-400">
            Some feelings are never spoken.
            <br />
            Some stories are never shared.
            <br />
            Some letters are written only for the heart
            that carries them.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <div className="mb-5 flex justify-center">
              <Quote size={40} className="text-zinc-600" />
            </div>

            <h2 className="mb-8 text-5xl font-bold">
              The Story Behind
              <br />
              This Literary Journey
            </h2>

            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-400">
              Letters Never Sent was created as a quiet
              sanctuary for emotions that never found
              a destination.
              <br />
              <br />
              Every person carries words they never spoke,
              apologies they never delivered, love they
              never confessed, dreams they never pursued,
              and conversations that remained unfinished.
              <br />
              <br />
              Over time these moments become memories.
              Those memories become stories.
              And those stories continue to echo through
              our lives.
              <br />
              <br />
              This website exists to honor those echoes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-8
                  transition
                  hover:border-white/20
                "
              >
                <div className="mb-6">
                  {item.icon}
                </div>

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

      {/* MISSION */}
      <section className="border-y border-white/10 py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 p-5">
              <Stars size={40} />
            </div>
          </div>

          <h2 className="mb-8 text-5xl font-bold">
            Our Mission
          </h2>

          <p className="text-xl leading-relaxed text-zinc-400">
            To create a meaningful literary space where
            emotions can exist without judgment.
            <br />
            <br />
            A place where memories are preserved,
            stories are shared, and readers discover
            they are not alone in what they feel.
            <br />
            <br />
            Every letter, poem, reflection, and story
            exists to remind people that their emotions
            matter.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-5xl font-bold">
              Our Vision
            </h2>

            <p className="mx-auto max-w-4xl text-lg text-zinc-400">
              To become a timeless archive of human
              emotions and storytelling, preserving the
              words people carry within themselves but
              rarely share with the world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-10
                "
              >
                <h3 className="mb-5 text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-lg leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL FIND */}
      <section className="border-y border-white/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-5xl font-bold">
              What You'll Find Here
            </h2>

            <p className="text-zinc-500">
              A growing collection of emotional storytelling.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              icon={<ScrollText size={34} />}
              title="Letters"
              description="Words written but never delivered."
            />

            <FeatureCard
              icon={<PenSquare size={34} />}
              title="Poetry"
              description="Feelings transformed into verse."
            />

            <FeatureCard
              icon={<Library size={34} />}
              title="Reflections"
              description="Thoughtful essays and personal insights."
            />

            <FeatureCard
              icon={<Users size={34} />}
              title="Shared Humanity"
              description="Stories that connect people through emotion."
            />
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
            <Clock3 size={14} />
            Founder & Author
          </div>

          <h2 className="mb-8 text-6xl font-bold">
            — Vihaan
          </h2>

          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-zinc-400">
            Through books, letters, reflections, and
            stories, Vihaan explores the emotional
            landscapes that connect people across time,
            distance, and experience.
            <br />
            <br />
            Letters Never Sent is an extension of that
            journey — a place where every feeling matters,
            every memory has value, and every story
            deserves a voice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.02] p-12">
            <h2 className="mb-6 text-5xl font-bold">
              Begin The Journey
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-lg text-zinc-400">
              Explore letters, poetry, reflections,
              memories, and stories from a growing archive
              dedicated to the emotional experiences that
              shape our lives.
            </p>

            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/letters"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  font-medium
                  text-black
                "
              >
                Explore Letters
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/newsletter"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  px-8
                  py-4
                "
              >
                Join Newsletter
                <MoveRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
      <div className="mb-6">{icon}</div>

      <h3 className="mb-4 text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-zinc-500">
        {description}
      </p>
    </div>
  );
}