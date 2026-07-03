import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lettersneversent.com"),

  title: {
    default: "Letters Never Sent | For Every Feeling Left Unspoken",
    template: "%s | Letters Never Sent",
  },

  description:
    "Letters Never Sent is a literary sanctuary for unspoken emotions, unfinished conversations, untold stories, forgotten memories, reflections, poetry, and heartfelt letters that never found their destination.",

  applicationName: "Letters Never Sent",

  keywords: [
    "Letters Never Sent",
    "Unsent Letters",
    "Love Letters",
    "Letters",
    "Poetry",
    "Memories",
    "Reflections",
    "Personal Essays",
    "Creative Writing",
    "Literary Journal",
    "Storytelling",
    "Human Emotions",
    "Emotional Writing",
    "Vihaan",

    // Letters
    "Letters to My Future Self",
    "Letters to My Past Self",
    "Open Letters",
    "Heartfelt Letters",
    "Personal Letters",
    "Letters of Regret",
    "Letters of Forgiveness",
    "Letters of Gratitude",
    "Letters to Lost Love",
    "Letters to Family",
    "Letters to Friends",
    "Letters of Hope",
    "Anonymous Letters",
    "Goodbye Letters",
    "Healing Letters",
    "Letters of Closure",
    "Letters from the Heart",
    "Emotional Letters",
    "Letters About Life",
    "Letters That Were Never Delivered",

    // Love & Relationships
    "Unspoken Love",
    "First Love",
    "Lost Love",
    "One-Sided Love",
    "Heartbreak Stories",
    "Moving On",
    "Long Distance Love",
    "Soulmate Stories",
    "Second Chances",
    "Romantic Reflections",
    "Love Confessions",
    "Relationship Memories",
    "Love and Loss",
    "Love After Goodbye",
    "Healing After Heartbreak",

    // Poetry
    "Free Verse Poetry",
    "Modern Poetry",
    "Romantic Poetry",
    "Sad Poetry",
    "Poems About Love",
    "Poems About Life",
    "Emotional Poems",
    "Inspirational Poetry",
    "Short Poems",
    "Spoken Word Poetry",
    "Poetry Collection",
    "Poetic Reflections",
    "Contemporary Poetry",
    "Poetry Writing",
    "Literary Poetry",

    // Memories & Reflection
    "Childhood Memories",
    "Life Reflections",
    "Nostalgia",
    "Moments That Matter",
    "Remembering the Past",
    "Life Lessons",
    "Growing Up",
    "Personal Growth",
    "Emotional Healing",
    "Self Reflection",
    "Reflective Writing",
    "Life Experiences",
    "Meaningful Memories",
    "Moments of Change",
    "Looking Back",

    // Creative Writing
    "Creative Nonfiction",
    "Flash Fiction",
    "Short Stories",
    "Personal Narratives",
    "Memoir Writing",
    "Literary Fiction",
    "Character Studies",
    "Narrative Writing",
    "Expressive Writing",
    "Writing Inspiration",
    "Writing Community",
    "Story Collection",
    "Creative Expression",
    "Writing Prompts",
    "Original Stories",

    // Emotions
    "Human Connection",
    "Emotional Intelligence",
    "Vulnerability",
    "Loneliness",
    "Hope",
    "Grief",
    "Forgiveness",
    "Acceptance",
    "Self Discovery",
    "Inner Peace",
    "Healing Journey",
    "Mental Wellness",
    "Authentic Living",
    "Finding Closure",
    "Emotional Resilience",

    // Literature
    "Literary Magazine",
    "Literary Blog",
    "Contemporary Literature",
    "Classic Literature",
    "Book Lovers",
    "Writers Community",
    "Reading and Writing",
    "Art of Storytelling",
    "Narrative Art",
    "Thoughtful Writing",
    "Literary Essays",
    "Essay Collection",
    "Creative Journal",
    "Independent Writers",
    "Modern Literature",

    // Journal & Diary
    "Personal Journal",
    "Diary Entries",
    "Journal Writing",
    "Daily Reflections",
    "Mindful Journaling",
    "Life Journal",
    "Private Thoughts",
    "Inner Voice",
    "Written Memories",
    "Thought Journal",

    // Brand
    "Vihaan Writes",
    "Vihaan Journal",
    "Vihaan Stories",
    "Vihaan Poetry",
    "Vihaan Essays",
    "Vihaan Reflections",
    "Vihaan Letters",
    "Vihaan Creative Writing",
    "Vihaan Literary Journal",
    "Vihaan Blog"
  ],

  authors: [
    {
      name: "Vihaan",
      url: "https://lettersneversent.vercel.app/",
    },
  ],

  creator: "Vihaan",

  publisher: "Letters Never Sent",

  category: "Literature",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",

    url: "https://lettersneversent.com",

    siteName: "Letters Never Sent",

    title: "Letters Never Sent",

    description:
      "For Every Feeling Left Unspoken.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Letters Never Sent",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Letters Never Sent",

    description:
      "For Every Feeling Left Unspoken.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    shortcut: ["/favicon.ico"],

    apple: [
      {
        url: "/favicon.ico",
      },
    ],
  },

  alternates: {
    canonical: "https://lettersneversent.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body
        className="
          bg-black
          text-white
          antialiased
          overflow-x-hidden
          min-h-screen
          font-sans
          selection:bg-white
          selection:text-black
        "
      >
        {/* Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-black" />

          {/* Top Left Glow */}
          <div
            className="
              absolute
              -left-40
              -top-40
              h-[700px]
              w-[700px]
              rounded-full
              bg-white/[0.03]
              blur-[140px]
            "
          />

          {/* Bottom Right Glow */}
          <div
            className="
              absolute
              -bottom-40
              -right-40
              h-[700px]
              w-[700px]
              rounded-full
              bg-white/[0.03]
              blur-[140px]
            "
          />

          {/* Center Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[900px]
              w-[900px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.02]
              blur-[180px]
            "
          />

          {/* Grid Overlay */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
              [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />

          {/* Radial Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]
            "
          />
        </div>

        {/* Top Progress Line */}
        <div
          className="
            fixed
            top-0
            left-0
            right-0
            z-[100]
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
          "
        />

        {/* Layout */}
        <div className="relative flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Letters Never Sent",
              url: "https://lettersneversent.com",
              description:
                "For Every Feeling Left Unspoken",
              author: {
                "@type": "Person",
                name: "Vihaan",
              },
            }),
          }}
        />

        {/* Decorative Elements */}
        <div className="pointer-events-none fixed inset-0 -z-40">
          <div className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-white/30" />
          <div className="absolute left-[25%] top-[60%] h-1 w-1 rounded-full bg-white/20" />
          <div className="absolute left-[80%] top-[25%] h-1 w-1 rounded-full bg-white/20" />
          <div className="absolute left-[75%] top-[70%] h-1 w-1 rounded-full bg-white/30" />
          <div className="absolute left-[50%] top-[40%] h-1 w-1 rounded-full bg-white/20" />
        </div>
      </body>
    </html>
  );
}