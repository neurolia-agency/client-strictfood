"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  animate,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

/* ── Data Points ── */
const DATA_POINTS = [
  {
    value: 74,
    suffix: "+",
    label: "avis Google",
    accent: false,
  },
  {
    value: 4.8,
    suffix: "",
    label: "note moyenne",
    accent: true,
    decimals: 1,
    star: true,
  },
  {
    value: 100,
    suffix: "%",
    label: "artisanal",
    accent: false,
  },
] as const;

/* ── Temoignages placeholder — structure prete pour contenu client ── */
const TESTIMONIALS = [
  {
    text: "Franchement, le meilleur burger que j'ai mange a Perpignan. Et en plus, zero culpabilite sur les macros.",
    author: "Avis Google",
    tag: "[CONTENU CLIENT REQUIS]",
  },
  {
    text: "Je suis coach sportif et je recommande StrictFood a tous mes clients. Le rapport proteines/gout est imbattable.",
    author: "Avis Google",
    tag: "[CONTENU CLIENT REQUIS]",
  },
  {
    text: "La cuisine ouverte, les ingredients frais, le pain artisanal... On sent que c'est fait avec soin.",
    author: "Avis Google",
    tag: "[CONTENU CLIENT REQUIS]",
  },
];

/* ── Counter — chiffre qui s'incremente au scroll ── */
function Counter({
  value,
  suffix,
  decimals = 0,
  accent,
  star,
  label,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  accent: boolean;
  star?: boolean;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const digitRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      count.set(value);
    } else {
      animate(count, value, { duration: 0.8, ease: EASE });
    }
  }, [isInView, count, value, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = count.on("change", (v) => {
      if (digitRef.current) {
        const num = decimals > 0 ? v.toFixed(decimals) : Math.round(v);
        digitRef.current.textContent = `${num}${suffix}`;
      }
    });
    return unsubscribe;
  }, [count, suffix, decimals]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="flex items-baseline gap-1">
        <span
          ref={digitRef}
          className="font-display font-bold"
          style={{
            fontSize: "var(--font-size-h1)",
            lineHeight: 1,
            letterSpacing: "var(--letter-spacing-display)",
            color: accent ? "var(--color-cuivre)" : "var(--color-creme)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          0{suffix}
        </span>
        {star && (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="var(--color-cuivre)"
            aria-hidden="true"
            style={{ marginBottom: "0.15em" }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
      </div>
      <span
        className="font-body block mt-3"
        style={{
          fontSize: "var(--font-size-small)",
          color: "var(--color-pierre)",
          letterSpacing: "var(--letter-spacing-wide)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── TestimonialCard ── */
function TestimonialCard({
  text,
  author,
}: {
  text: string;
  author: string;
}) {
  return (
    <blockquote
      className="flex flex-col justify-between h-full"
      style={{
        background: "var(--color-fumee)",
        border: "1px solid var(--color-cendre)",
        borderRadius: "var(--radius-large)",
        padding: "var(--card-padding)",
      }}
    >
      <p
        style={{
          fontSize: "var(--font-size-body)",
          lineHeight: "var(--line-height-relaxed)",
          color: "var(--color-sable)",
          fontStyle: "italic",
        }}
      >
        &ldquo;{text}&rdquo;
      </p>
      <footer
        className="mt-4"
        style={{
          fontSize: "var(--font-size-small)",
          color: "var(--color-pierre)",
        }}
      >
        — {author}
      </footer>
    </blockquote>
  );
}

/* ── Section Avis & Confiance ── */
export default function AvisConfiance() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
      };

  return (
    <section
      id="avis"
      className="section-padding"
      style={{ background: "var(--color-charbon)" }}
    >
      <div className="container-custom">
        {/* ── Titre ── */}
        <motion.h2
          className="text-center mb-16 lg:mb-20"
          variants={fadeUp}
          {...motionProps}
        >
          Ils en parlent mieux que nous.
        </motion.h2>

        {/* ── Triptyque Data Points ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 mx-auto"
          style={{
            gap: "clamp(2rem, 4vw, 4rem)",
            maxWidth: "48rem",
          }}
          variants={stagger}
          {...motionProps}
        >
          {DATA_POINTS.map((dp) => (
            <motion.div key={dp.label} variants={fadeUp}>
              <Counter
                value={dp.value}
                suffix={dp.suffix}
                decimals={"decimals" in dp ? dp.decimals : 0}
                accent={dp.accent}
                star={"star" in dp && dp.star === true}
                label={dp.label}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Separateur ── */}
        <motion.div
          className="mx-auto my-12 lg:my-16"
          style={{
            width: "clamp(3rem, 8vw, 6rem)",
            height: 1,
            background: "var(--color-cendre)",
            opacity: 0.5,
          }}
          variants={fadeUp}
          {...motionProps}
        />

        {/* ── Temoignages — grille 3 colonnes egales ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
          style={{ maxWidth: "56rem", margin: "0 auto" }}
          variants={staggerSlow}
          {...motionProps}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="h-full"
            >
              <TestimonialCard text={t.text} author={t.author} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Lien Google Business ── */}
        <motion.div
          className="text-center mt-10 lg:mt-14"
          variants={fadeUp}
          {...motionProps}
        >
          <a
            href="https://maps.app.goo.gl/strictfood"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group"
            style={{
              fontSize: "var(--font-size-small)",
              color: "var(--color-pierre)",
              letterSpacing: "var(--letter-spacing-wide)",
              textTransform: "uppercase",
              transition: "color var(--transition-hover)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-cuivre)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-pierre)")
            }
          >
            Voir tous les avis sur Google
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
