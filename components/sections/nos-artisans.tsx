"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const DURATION_REVEAL = 0.6; // --duration-reveal: 600ms
const DURATION_MACRO = 0.8; // --duration-macro: 800ms
const STAGGER_DELAY = 0.1; // --stagger-delay: 100ms

const ARTISANS = [
  {
    name: "Boucherie Labourde",
    specialty:
      "Viande artisanale, d\u00e9coup\u00e9e \u00e0 la main chaque matin. Pas de surgel\u00e9, pas d\u2019interm\u00e9diaire\u00a0\u2014 du billot \u00e0 ton burger.",
    location: "PERPIGNAN",
    image: "/contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg",
    alt: "D\u00e9coupe de viande artisanale sur planche bois, gants noirs, Boucherie Labourde Perpignan",
    imageOnLeft: true,
    bg: "var(--color-charbon)",
  },
  {
    name: "Pains du Soleil",
    specialty:
      "Pain artisanal p\u00e9tri et cuit \u00e0 Perpignan. La mie est dense, la cro\u00fbte tient le burger\u00a0\u2014 pas un pain industriel qui s\u2019effondre au premier jus.",
    location: "PERPIGNAN",
    image: "/contenu-instagram/2025-10-14_09-12-16_UTC_7.jpg",
    alt: "Ajout d\u2019ingr\u00e9dients frais sur pain artisanal, Pains du Soleil Perpignan",
    imageOnLeft: false,
    bg: "var(--color-ebene)",
  },
  {
    name: "Myfitcheese",
    specialty:
      "Fromage hyperprot\u00e9in\u00e9, fabriqu\u00e9 pour ceux qui comptent leurs macros sans sacrifier le go\u00fbt. Le seul fromage qui a sa place dans un cheat meal clean.",
    location: "PERPIGNAN",
    image: "/contenu-instagram/2025-10-07_12-15-07_UTC_1.jpg",
    alt: "Pr\u00e9paration de fromage frais hyperprot\u00e9in\u00e9 \u00e0 la main, \u00e9clairage dramatique, Myfitcheese",
    imageOnLeft: true,
    bg: "var(--color-charbon)",
  },
] as const;

/* ── Panel artisan — sticky sur desktop, stack simple sur mobile ── */
function ArtisanPanel({
  artisan,
  index,
  isReducedMotion,
  title,
}: {
  artisan: (typeof ARTISANS)[number];
  index: number;
  isReducedMotion: boolean | null;
  title?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="lg:sticky lg:top-0 flex items-center"
      style={{
        zIndex: index + 1,
        background: artisan.bg,
        minHeight: "100dvh",
        boxShadow:
          index > 0
            ? "0 -8px 32px rgba(0, 0, 0, 0.6)"
            : undefined,
      }}
    >
      <div className="container-custom w-full py-16 lg:py-0">
        {title}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: "clamp(2rem, 4vw, 4rem)" }}
        >
          {/* Image */}
          <motion.div
            className={`relative overflow-hidden ${
              !artisan.imageOnLeft ? "lg:order-2" : ""
            }`}
            style={{
              borderRadius: "var(--radius-large)",
              aspectRatio: "4 / 3",
            }}
            initial={isReducedMotion ? {} : { opacity: 0, scale: 1.03 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: DURATION_MACRO, ease: EASE }}
          >
            <Image
              src={artisan.image}
              alt={artisan.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Texte */}
          <div
            className={`flex flex-col ${
              !artisan.imageOnLeft ? "lg:order-1" : ""
            }`}
            style={{ gap: "var(--spacing-gap-tight)" }}
          >
            {/* Badge localisation */}
            <motion.span
              className="inline-flex items-center w-fit uppercase"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-caption)",
                fontWeight: 500,
                letterSpacing: "var(--letter-spacing-uppercase)",
                padding: "0.375rem 0.875rem",
                borderRadius: "var(--radius-subtle)",
                background: "var(--color-grenat-pale)",
                color: "var(--color-sable)",
              }}
              initial={isReducedMotion ? {} : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION_REVEAL, ease: EASE, delay: STAGGER_DELAY }}
            >
              {artisan.location}
            </motion.span>

            {/* Nom artisan — Cuivre Braise */}
            <motion.h3
              className="text-cuivre"
              initial={isReducedMotion ? {} : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION_REVEAL, ease: EASE, delay: STAGGER_DELAY * 2 }}
            >
              {artisan.name}
            </motion.h3>

            {/* Specialite */}
            <motion.p
              style={{
                fontSize: "var(--font-size-body-lg)",
                maxWidth: "var(--max-width-text)",
              }}
              initial={isReducedMotion ? {} : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: DURATION_REVEAL, ease: EASE, delay: STAGGER_DELAY * 3 }}
            >
              {artisan.specialty}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section Nos Artisans ── */
export default function NosArtisans() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="artisans" style={{ background: "var(--color-charbon)" }}>
      {/* Sticky scroll stack — H2 intégré dans le premier panel */}
      <div>
        {ARTISANS.map((artisan, i) => (
          <ArtisanPanel
            key={artisan.name}
            artisan={artisan}
            index={i}
            isReducedMotion={prefersReducedMotion}
            title={
              i === 0 ? (
                <motion.h2
                  className="text-center mx-auto text-balance"
                  style={{
                    maxWidth: "var(--max-width-text)",
                    marginBottom: "var(--spacing-breath)",
                  }}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: DURATION_REVEAL, ease: EASE }}
                >
                  Derri&egrave;re chaque burger, des artisans que tu connais.
                </motion.h2>
              ) : undefined
            }
          />
        ))}
      </div>
    </section>
  );
}
