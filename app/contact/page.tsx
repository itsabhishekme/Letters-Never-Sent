import Link from "next/link";
import {
  Mail,
  Send,
  MapPin,
  Clock3,
  MessageSquare,
  ArrowLeft,
  Sparkles,
  Globe,
  Users,
  PenTool,
  BookOpen,
  Headphones,
  HeartHandshake,
  ShieldCheck,
  ChevronRight,
  Quote,
  PhoneCall,
  Briefcase,
  Star,
} from "lucide-react";

export const metadata = {
  title: "Contact | Letters Never Sent",
  description:
    "Get in touch with Letters Never Sent. Share feedback, story submissions, collaborations, interviews, partnerships, and creative opportunities.",
};

const contactCards = [
  {
    icon: Mail,
    title: "General Inquiries",
    description:
      "Questions, suggestions, feedback, website issues, or anything you'd like to discuss.",
    value: "hello@lettersneversent.com",
  },
  {
    icon: PenTool,
    title: "Story Submissions",
    description:
      "Letters, essays, reflections, poetry, memories, and personal stories.",
    value: "submissions@lettersneversent.com",
  },
  {
    icon: Briefcase,
    title: "Partnerships",
    description:
      "Creative collaborations, publishing opportunities, interviews, and projects.",
    value: "partners@lettersneversent.com",
  },
  {
    icon: Headphones,
    title: "Media Requests",
    description:
      "Podcast appearances, guest articles, interviews, and speaking opportunities.",
    value: "media@lettersneversent.com",
  },
];

const supportItems = [
  {
    icon: Clock3,
    title: "Response Time",
    description:
      "Most inquiries receive a response within 24–72 business hours.",
  },
  {
    icon: Globe,
    title: "Worldwide Community",
    description:
      "Serving readers, writers, and storytellers across the world.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Your messages and submissions are handled with care and respect.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Centered",
    description:
      "Every message is reviewed thoughtfully rather than automatically.",
  },
];

const reasons = [
  "Share feedback about the publication",
  "Ask questions about story submissions",
  "Report technical issues or website concerns",
  "Discuss guest writing opportunities",
  "Explore literary collaborations",
  "Request interviews or media appearances",
  "Suggest new ideas and initiatives",
  "Connect with our editorial team",
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="relative border-b border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl">
            <Sparkles size={15} />
            We'd Love To Hear From You
          </div>

          <div className="mb-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Mail size={58} />
            </div>
          </div>

          <h1 className="mb-8 text-6xl font-bold tracking-tight md:text-8xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Every meaningful conversation begins with a message. Whether you
            wish to share a story, ask a question, offer feedback, discuss a
            collaboration, or simply say hello, we welcome your voice.
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
              Let's Start A Conversation
            </h2>

            <p className="text-center text-lg leading-relaxed text-zinc-400">
              Letters Never Sent exists because stories connect people.
              Questions inspire growth. Conversations create understanding.
              Whether your message is personal, professional, creative, or
              simply curious, we look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="border-y border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold">
              Get In Touch
            </h2>

            <p className="text-zinc-500">
              Choose the contact option that best matches your inquiry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[32px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mb-5 text-zinc-500">
                    {item.description}
                  </p>

                  <p className="break-all text-sm text-zinc-300">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
              <div className="mb-5 flex items-center gap-3">
                <MessageSquare size={26} />
                <h3 className="text-2xl font-semibold">
                  Why Contact Us?
                </h3>
              </div>

              <div className="space-y-4">
                {reasons.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight
                      size={18}
                      className="mt-1 shrink-0"
                    />

                    <p className="text-zinc-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
              <div className="mb-5 flex items-center gap-3">
                <MapPin size={26} />
                <h3 className="text-2xl font-semibold">
                  Our Community
                </h3>
              </div>

              <p className="leading-relaxed text-zinc-500">
                Letters Never Sent serves a global audience of readers,
                writers, dreamers, thinkers, poets, and storytellers. No
                matter where you are in the world, your voice is welcome here.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
              <div className="mb-5 flex items-center gap-3">
                <PhoneCall size={26} />
                <h3 className="text-2xl font-semibold">
                  Response Expectations
                </h3>
              </div>

              <p className="leading-relaxed text-zinc-500">
                We aim to respond thoughtfully rather than quickly. While most
                inquiries receive a reply within a few days, editorial and
                partnership discussions may require additional time.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 md:p-14">
              <div className="mb-10">
                <h2 className="mb-4 text-5xl font-bold">
                  Send A Message
                </h2>

                <p className="text-zinc-500">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none transition focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none transition focus:border-white"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="inquiry-type" className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                      Inquiry Type
                    </label>

                    <select id="inquiry-type" className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white">
                      <option>General Inquiry</option>
                      <option>Story Submission</option>
                      <option>Feedback</option>
                      <option>Collaboration</option>
                      <option>Interview Request</option>
                      <option>Partnership</option>
                      <option>Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Message subject"
                      className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                    Message
                  </label>

                  <textarea
                    rows={10}
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm uppercase tracking-wider text-zinc-400">
                    Additional Details
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Optional information..."
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-5 py-4 outline-none focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-5xl font-bold">
              What You Can Expect
            </h2>

            <p className="text-zinc-500">
              Every message matters to us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <Icon size={32} className="mb-5" />

                  <h3 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Users size={48} />
          </div>

          <h2 className="mb-8 text-5xl font-bold">
            Collaborations & Partnerships
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            We welcome literary collaborations, guest contributions,
            newsletters, interviews, podcast appearances, editorial
            partnerships, storytelling initiatives, and creative projects that
            align with the spirit of thoughtful writing and meaningful human
            connection.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <BookOpen size={46} />
          </div>

          <h2 className="mb-6 text-5xl font-bold">
            Continue Exploring
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-500">
            Discover letters, poetry, essays, reflections, and memories from
            our growing collection of stories.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 text-lg transition-all duration-300 hover:bg-white hover:text-black"
          >
            <ArrowLeft size={20} />
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
}