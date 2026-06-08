import Link from "next/link";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Letters Never Sent. Share your thoughts, feedback, stories, collaborations, and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-5">
              <Mail size={48} />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            Every meaningful conversation begins with a message.
            Whether you wish to share a story, ask a question, offer
            feedback, or discuss a collaboration, we would love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 p-8">
              <div className="mb-4">
                <Mail size={30} />
              </div>

              <h2 className="mb-3 text-2xl font-semibold">
                Email
              </h2>

              <p className="mb-4 text-zinc-500">
                For general inquiries, feedback, and communication.
              </p>

              <a
                href="mailto:hello@lettersneversent.com"
                className="text-zinc-300 hover:text-white"
              >
                hello@lettersneversent.com
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <div className="mb-4">
                <MessageSquare size={30} />
              </div>

              <h2 className="mb-3 text-2xl font-semibold">
                Story Submissions
              </h2>

              <p className="text-zinc-500">
                Share letters, reflections, poems, or memories for possible
                publication.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <div className="mb-4">
                <Clock size={30} />
              </div>

              <h2 className="mb-3 text-2xl font-semibold">
                Response Time
              </h2>

              <p className="text-zinc-500">
                We typically respond within 24–72 hours depending on inquiry
                volume.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <div className="mb-4">
                <MapPin size={30} />
              </div>

              <h2 className="mb-3 text-2xl font-semibold">
                Location
              </h2>

              <p className="text-zinc-500">
                Serving readers and writers from around the world.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
              <h2 className="mb-2 text-4xl font-bold">
                Send a Message
              </h2>

              <p className="mb-10 text-zinc-500">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Message Subject"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Message
                  </label>

                  <textarea
                    rows={8}
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-90"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Collaborations & Partnerships
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            We welcome opportunities for literary collaborations, guest
            writing, interviews, podcast appearances, creative projects,
            newsletters, and storytelling initiatives.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Continue Exploring
          </h2>

          <p className="mb-10 text-zinc-500">
            Discover letters, reflections, poetry, and memories from our
            growing collection.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}