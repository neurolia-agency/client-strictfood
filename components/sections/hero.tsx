"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import Image from "next/image";
import { Phone } from "lucide-react";
import LiquidGlassLink from "@/components/ui/liquid-glass-link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-charbon">
      <div
        className="container-custom relative z-10 flex min-h-[100dvh] flex-col justify-center items-start"
        style={{
          paddingTop: "calc(var(--header-height) + 3rem)",
          paddingBottom: "var(--spacing-section-padding-mobile)",
          paddingLeft: "clamp(1rem, 3vw, 2.5rem)",
        }}
      >
        <motion.div
          className="flex flex-col max-w-[44rem]"
          style={{ gap: "var(--spacing-hero-gap)" }}
          variants={prefersReducedMotion ? undefined : stagger}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate="visible"
        >
          <motion.h1
            className="font-display text-balance font-bold tracking-[-0.04em] md:tracking-[-0.06em]"
            style={{ fontSize: "var(--font-size-display)" }}
            variants={prefersReducedMotion ? undefined : fadeUp}
          >
            Le{" "}
            <motion.span
              className="text-cuivre"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.35 }}
            >
              cheat meal
            </motion.span>{" "}
            qui n&apos;en est pas un
          </motion.h1>

          <motion.p
            className="max-w-text"
            style={{ fontSize: "var(--font-size-body-lg)" }}
            variants={prefersReducedMotion ? undefined : fadeUp}
          >
            Le vrai goût du fast-food, la graisse en moins.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row"
            variants={prefersReducedMotion ? undefined : fadeUp}
          >
            {/* CTA Primaire — Shimmer */}
            <a
              href="tel:+33611745944"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full sm:w-auto"
              style={{
                padding: "var(--button-padding-hero)",
                minHeight: "3.25rem",
                fontSize: "1.0625rem",
                fontWeight: 600,
                borderRadius: "var(--radius-pill)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              Commander
            </a>

            {/* CTA Secondaire — Liquid Glass */}
            <LiquidGlassLink
              href="#carte"
              className="w-full sm:w-auto"
              style={{
                padding: "var(--button-padding-hero)",
                minHeight: "3.25rem",
                fontSize: "1.0625rem",
              }}
            >
              Voir la carte
            </LiquidGlassLink>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Image background — full-bleed, pas d'overlay ── */}
      <motion.div
        className="absolute inset-0 -z-0"
        style={prefersReducedMotion ? undefined : { y: imageY }}
        variants={prefersReducedMotion ? undefined : imageReveal}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate="visible"
      >
        <Image
          src="/images/hero-v2.webp"
          alt="Burger StrictFood, pain brioche doré, viande grillée, ingrédients frais"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
