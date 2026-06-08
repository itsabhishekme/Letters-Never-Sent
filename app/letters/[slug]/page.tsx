import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

type Letter = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
};

const letters: Letter[] = [
  {
    slug: "the-letter-i-never-sent",
    title: "The Letter I Never Sent",
    excerpt:
      "Some words remain with us because they were never spoken.",
    category: "Love",
    readTime: "5 min read",
    date: "June 2026",
    author: "Vihaan",
    content: `
Dear You,

There are words I carried for years without ever finding the courage to say them.

Not because they lacked meaning.
Not because they were unimportant.

But because some emotions are easier to write than to speak.

I often wondered how life might have changed if I had sent this letter.

Would it have brought us closer?
Would it have changed anything?

Or would it simply have become another memory among many?

Over time I realized that some letters are not written to reach another person.

They are written to help us understand ourselves.

And perhaps that is enough.

— Vihaan
`,
  },
  {
    slug: "to-the-person-i-never-became",
    title: "To The Person I Never Became",
    excerpt:
      "A reflection on abandoned dreams and untaken paths.",
    category: "Reflection",
    readTime: "6 min read",
    date: "June 2026",
    author: "Vihaan",
    content: `
Dear Stranger,

Sometimes I think about the version of myself that took a different road.

The one who said yes when I said no.

The one who stayed when I chose to leave.

The one who chased dreams that I abandoned halfway.

I do not envy that version anymore.

Because every path carries its own burdens.

Every life contains its own unfinished stories.

And every choice leaves behind a thousand possibilities.

Today, I simply acknowledge your existence.

And I thank you for reminding me how far I have come.

— Vihaan
`,
  },
  {
    slug: "a-conversation-with-silence",
    title: "A Conversation With Silence",
    excerpt:
      "What silence teaches when words no longer help.",
    category: "Healing",
    readTime: "4 min read",
    date: "June 2026",
    author: "Vihaan",
    content: `
Silence is often misunderstood.

People assume silence means emptiness.

But silence can be full.

Full of memories.
Full of emotions.
Full of questions without answers.

There are moments when silence becomes the most honest conversation we can have.

It asks us to listen.

Not to the world.

But to ourselves.

And sometimes, that is where healing begins.

— Vihaan
`,
  },
];

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return letters.map((letter) => ({
    slug: letter.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const letter = letters.find((item) => item.slug === slug);

  if (!letter) {
    return {
      title: "Letter Not Found",
    };
  }

  return {
    title: letter.title,
    description: letter.excerpt,
  };
}

export default async function LetterPage({ params }: Props) {
  const { slug } = await params;

  const letter = letters.find((item) => item.slug === slug);

  if (!letter) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/letters"
            className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Letters
          </Link>

          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
              {letter.category}
            </span>
          </div>

          <h1 className="mb-8 text-4xl font-bold md:text-6xl">
            {letter.title}
          </h1>

          <p className="mb-8 text-xl text-zinc-500">
            {letter.excerpt}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <User size={16} />
              {letter.author}
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {letter.date}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} />
              {letter.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              {letter.content.split("\n").map((paragraph, index) => {
                if (!paragraph.trim()) return null;

                return (
                  <p
                    key={index}
                    className="mb-6 text-lg leading-relaxed text-zinc-300"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      {/* Related Letters */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">
            More Letters
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {letters
              .filter((item) => item.slug !== letter.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/letters/${item.slug}`}
                  className="rounded-3xl border border-white/10 p-6 transition hover:border-white/20"
                >
                  <div className="mb-3 text-sm text-zinc-500">
                    {item.category}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Letters Never Sent
          </h2>

          <p className="mb-8 text-zinc-500">
            For Every Feeling Left Unspoken
          </p>

          <Link
            href="/letters"
            className="inline-flex items-center rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            Browse All Letters
          </Link>
        </div>
      </section>
    </main>
  );
}