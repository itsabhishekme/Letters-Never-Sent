import Link from "next/link";
import {
  Send,
  Mail,
  FileText,
  Heart,
  Feather,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Submissions",
  description:
    "Submit your letters, memories, reflections, essays, and poetry to Letters Never Sent.",
};

export default function SubmissionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <Send size={52} />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Submissions
          </h1>

          <p className="mb-4 text-xl text-zinc-400">
            Share Your Story
          </p>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-500">
            Letters Never Sent welcomes writers, dreamers,
            storytellers, poets, and anyone carrying words
            that deserve a place to exist.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Every Story Matters
          </h2>

          <p className="text-lg leading-relaxed text-zinc-400">
            We believe every person carries experiences worth sharing.
            Whether it is a letter never sent, a memory never forgotten,
            a poem written in silence, or a reflection born from life,
            your voice deserves to be heard.
          </p>
        </div>
      </section>

      {/* Submission Categories */}
      <section className="border-y border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              What Can You Submit?
            </h2>

            <p className="text-zinc-500">
              We accept original and unpublished work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 p-8">
              <Mail size={34} className="mb-5" />

              <h3 className="mb-3 text-xl font-semibold">
                Letters
              </h3>

              <p className="text-zinc-500">
                Unsent letters, personal messages,
                open letters, and heartfelt words.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <Feather size={34} className="mb-5" />

              <h3 className="mb-3 text-xl font-semibold">
                Poetry
              </h3>

              <p className="text-zinc-500">
                Original poetry inspired by life,
                emotions, memory, and imagination.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <Heart size={34} className="mb-5" />

              <h3 className="mb-3 text-xl font-semibold">
                Memories
              </h3>

              <p className="text-zinc-500">
                Personal stories, nostalgic moments,
                and meaningful life experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <FileText size={34} className="mb-5" />

              <h3 className="mb-3 text-xl font-semibold">
                Reflections
              </h3>

              <p className="text-zinc-500">
                Essays, observations, and thoughtful
                reflections on life and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <h2 className="mb-10 text-center text-4xl font-bold">
              Submit Your Work
            </h2>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="submissionType" className="mb-2 block text-sm text-zinc-400">
                  Submission Type
                </label>

                <select
                  id="submissionType"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-white"
                >
                  <option>Letter</option>
                  <option>Poetry</option>
                  <option>Memory</option>
                  <option>Reflection</option>
                  <option>Essay</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="Title of your submission"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Your Story
                </label>

                <textarea
                  rows={12}
                  placeholder="Write your submission here..."
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-90"
              >
                <Send size={18} />
                Submit Story
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Submission Guidelines
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Original content only",
              "Must not be previously published",
              "Respectful and authentic writing",
              "No plagiarism or AI-generated submissions",
              "Clear and readable formatting",
              "You retain ownership of your work",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-5"
              >
                <CheckCircle size={20} />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AlertCircle size={40} className="mx-auto mb-6" />

          <h2 className="mb-6 text-4xl font-bold">
            Review Process
          </h2>

          <p className="text-lg leading-relaxed text-zinc-400">
            Every submission is carefully reviewed.
            Due to the volume of submissions, responses may take
            several days. Selected pieces may be featured on
            Letters Never Sent with proper author credit.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Explore Published Stories
          </h2>

          <p className="mb-10 text-zinc-500">
            Discover letters, reflections, poetry, and memories
            shared by writers and readers.
          </p>

          <Link
            href="/letters"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            Browse Letters
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}