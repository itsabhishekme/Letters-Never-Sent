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

      {/* EXTENDED HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-40">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Badge */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 backdrop-blur-xl">
              <Sparkles size={16} />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
                About The Project
              </span>
            </div>
          </div>

          {/* Icon */}
          <div className="mb-12 flex justify-center">
            <div
              className="
          flex
          h-36
          w-36
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          shadow-2xl
        "
            >
              <Feather size={72} />
            </div>
          </div>

          {/* Heading */}
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="mb-10 text-6xl font-black leading-none tracking-tight md:text-8xl xl:text-9xl">
              About
              <br />
              <span className="text-white">
                Letters Never Sent
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              Some feelings are never spoken.
              <br />
              Some stories are never shared.
              <br />
              Some letters are written only for the heart
              that carries them.
            </p>

            <div className="mx-auto mb-16 h-px w-40 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Extended Intro */}
            <div className="mx-auto max-w-5xl">
              <p className="text-lg leading-relaxed text-zinc-500 md:text-xl">
                Letters Never Sent is a literary sanctuary
                dedicated to preserving the emotions,
                reflections, memories, and stories that often
                remain hidden beneath everyday life.
                <br />
                <br />
                Behind every person exists a collection of
                untold chapters—unfinished conversations,
                unspoken love, forgotten dreams, silent
                regrets, treasured memories, and moments that
                continue to live quietly within the heart.
                <br />
                <br />
                While time moves forward, these experiences
                rarely disappear. They become part of who we
                are. They shape our journeys, influence our
                choices, and leave lasting impressions on our
                lives.
                <br />
                <br />
                This project was created to honor those
                invisible stories and provide a meaningful
                place where words can finally find a home.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-24 grid gap-8 md:grid-cols-3">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center">
              <div className="mb-4 text-5xl font-black">
                Stories
              </div>

              <p className="leading-relaxed text-zinc-500">
                Personal narratives that preserve memories,
                emotions, lessons, and life experiences.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center">
              <div className="mb-4 text-5xl font-black">
                Letters
              </div>

              <p className="leading-relaxed text-zinc-500">
                Messages written for people, places, dreams,
                and moments that never received them.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center">
              <div className="mb-4 text-5xl font-black">
                Memories
              </div>

              <p className="leading-relaxed text-zinc-500">
                Reflections that preserve fragments of life
                before they fade into the distance.
              </p>
            </div>
          </div>

          {/* Bottom Quote Block */}
          <div className="mx-auto mt-24 max-w-5xl rounded-[40px] border border-white/10 bg-white/[0.03] p-12 md:p-20 text-center">
            <p className="mb-6 text-3xl font-bold leading-relaxed md:text-4xl">
              "Every untold story deserves to be remembered.
              Every unsent letter deserves a place to exist."
            </p>

            <p className="text-zinc-500">
              A home for reflections, emotions, memories,
              destiny, and the stories that continue to echo
              long after the moment has passed.
            </p>
          </div>
        </div>
      </section>

      {/* EXTENDED STORY SECTION */}
      <section className="relative overflow-hidden px-6 py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto mb-24 max-w-5xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full border border-white/10 bg-white/[0.04] p-5">
                <Quote size={42} className="text-zinc-500" />
              </div>
            </div>

            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Our Purpose
            </span>

            <h2 className="mb-8 text-5xl font-black leading-tight md:text-7xl">
              The Story Behind
              <br />
              This Literary Journey
            </h2>

            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Letters Never Sent was born from a simple truth:
              not every story reaches its destination.
              <br />
              <br />
              Across every generation, people carry emotions
              that remain hidden beneath the surface.
              There are words left unsaid, feelings left
              unexpressed, dreams left unfinished, and
              conversations that never happened.
              <br />
              <br />
              Some remain buried in journals.
              Some live quietly in memories.
              Some return unexpectedly through dreams,
              photographs, songs, and familiar places.
              <br />
              <br />
              Yet every one of those moments deserves a place
              to exist.
            </p>
          </div>

          {/* Main Story */}
          <div className="mb-24 grid gap-14 lg:grid-cols-2">
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-14">
              <h3 className="mb-8 text-4xl font-bold">
                Why This Space Exists
              </h3>

              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  In a world filled with noise, speed, and
                  constant distraction, many personal stories
                  never receive the attention they deserve.
                </p>

                <p>
                  We often move forward before fully processing
                  what we experienced. We leave relationships,
                  cities, friendships, dreams, and chapters of
                  life behind without ever finding closure.
                </p>

                <p>
                  Letters Never Sent was created to become a
                  quiet home for those unfinished chapters.
                  A place where memories can breathe,
                  reflections can be preserved, and emotions
                  can finally be expressed.
                </p>

                <p>
                  Here, every story matters—not because it is
                  famous, dramatic, or extraordinary—but
                  because it is real.
                </p>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-14">
              <h3 className="mb-8 text-4xl font-bold">
                What We Believe
              </h3>

              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  We believe that writing is more than words
                  on a page. It is a bridge between who we
                  were and who we are becoming.
                </p>

                <p>
                  Every reflection carries wisdom.
                  Every memory carries meaning.
                  Every personal story contains a lesson that
                  may resonate with someone else.
                </p>

                <p>
                  Through storytelling, we preserve emotions,
                  document experiences, and create connections
                  that transcend distance, time, and
                  circumstance.
                </p>

                <p>
                  This platform celebrates vulnerability,
                  authenticity, creativity, remembrance,
                  imagination, and human connection.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mb-24 rounded-[48px] border border-white/10 bg-white/[0.03] p-12 md:p-20 text-center">
            <h3 className="mb-8 text-5xl font-black">
              More Than A Collection Of Stories
            </h3>

            <p className="mx-auto max-w-5xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Letters Never Sent is a growing archive of
              human experiences.
              <br />
              <br />
              It is a place where reflections become
              literature, memories become narratives, and
              emotions become timeless records of personal
              journeys.
              <br />
              <br />
              Whether someone writes about love, loss,
              destiny, friendship, family, hope, healing,
              dreams, or transformation, every contribution
              becomes part of a larger story—the story of
              what it means to be human.
            </p>
          </div>

          {/* Pillars */}
          <div className="mb-24">
            <div className="mb-16 text-center">
              <h3 className="text-5xl font-bold">
                Our Core Pillars
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="
              group
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-white/20
              hover:bg-white/[0.05]
            "
                >
                  <div className="mb-8 transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="mb-5 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Message */}
          <div className="mx-auto max-w-5xl text-center">
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 md:p-20">
              <h3 className="mb-8 text-5xl font-black">
                Every Unsent Letter Has A Home
              </h3>

              <p className="text-lg leading-relaxed text-zinc-400 md:text-xl">
                Somewhere in the world, someone is carrying a
                memory they never shared.
                Someone is holding onto words they never
                spoke.
                Someone is preserving a story they fear might
                be forgotten.
                <br />
                <br />
                This space exists for them.
                <br />
                <br />
                And perhaps, it exists for you too.
              </p>
            </div>
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