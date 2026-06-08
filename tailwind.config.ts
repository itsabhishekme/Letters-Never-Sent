import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./data/**/*.{js,ts}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",

      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",

        input: "hsl(var(--input))",

        ring: "hsl(var(--ring))",

        background: "hsl(var(--background))",

        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground:
            "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground:
            "hsl(var(--secondary-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground:
            "hsl(var(--destructive-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground:
            "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground:
            "hsl(var(--accent-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground:
            "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground:
            "hsl(var(--card-foreground))",
        },

        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif",
        ],

        serif: [
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],

        mono: [
          "JetBrains Mono",
          "monospace",
        ],
      },

      fontSize: {
        hero: [
          "5rem",
          {
            lineHeight: "1",
            fontWeight: "700",
          },
        ],

        display: [
          "4rem",
          {
            lineHeight: "1.1",
            fontWeight: "700",
          },
        ],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",

        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      boxShadow: {
        glow:
          "0 0 40px rgba(255,255,255,0.08)",

        soft:
          "0 10px 30px rgba(0,0,0,0.25)",

        card:
          "0 10px 25px rgba(255,255,255,0.04)",
      },

      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)",

        "card-gradient":
          "linear-gradient(to bottom right, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",

        "border-gradient":
          "linear-gradient(to right, rgba(255,255,255,0.15), transparent)",
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
          },

          to: {
            opacity: "1",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform:
              "translateY(20px)",
          },

          to: {
            opacity: "1",
            transform:
              "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform:
              "translateY(0px)",
          },

          "50%": {
            transform:
              "translateY(-10px)",
          },
        },

        pulseGlow: {
          "0%, 100%": {
            opacity: "0.5",
          },

          "50%": {
            opacity: "1",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition:
              "-1000px 0",
          },

          "100%": {
            backgroundPosition:
              "1000px 0",
          },
        },
      },

      animation: {
        fadeIn:
          "fadeIn 0.8s ease-in-out",

        fadeUp:
          "fadeUp 0.8s ease-out",

        float:
          "float 6s ease-in-out infinite",

        pulseGlow:
          "pulseGlow 3s ease-in-out infinite",

        shimmer:
          "shimmer 2.5s linear infinite",
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color:
              theme("colors.zinc.300"),

            maxWidth: "75ch",

            h1: {
              color:
                theme("colors.white"),
            },

            h2: {
              color:
                theme("colors.white"),
            },

            h3: {
              color:
                theme("colors.white"),
            },

            strong: {
              color:
                theme("colors.white"),
            },

            a: {
              color:
                theme("colors.white"),
              textDecoration:
                "none",
            },

            blockquote: {
              color:
                theme("colors.zinc.400"),
              borderLeftColor:
                theme("colors.zinc.700"),
            },

            code: {
              color:
                theme("colors.white"),
            },
          },
        },
      }),
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;