"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  useScroll,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "motion/react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const DURATION_REVEAL = 0.6; // --duration-reveal: 600ms
const DURATION_MACRO = 0.8; // --duration-macro: 800ms
const STAGGER_DELAY = 0.1; // --stagger-delay: 100ms

interface Artisan {
  name: string;
  specialty: string;
  location: string;
  image: string;
  alt: string;
  image2?: string;
  alt2?: string;
  imageOnLeft: boolean;
  bg: string;
  transitionType?: "diagonal-wipe" | "circle-iris" | "diamond-reveal";
}

const ARTISANS: Artisan[] = [
  {
    name: "Boucherie Labourde",
    specialty:
      "Viande artisanale, découpée à la main chaque matin. Pas de surgelé, pas d\u2019intermédiaire\u00a0\u2014 du billot à ton burger.",
    location: "PERPIGNAN",
    image: "/images/photos-references/contexte/labourde/labourde1.webp",
    alt: "Découpe de viande artisanale sur planche bois, gants noirs, Boucherie Labourde Perpignan",
    image2: "/images/photos-references/contexte/labourde/labourde2.png",
    alt2: "Mains d'artisan ficelant une pièce de viande, Boucherie Labourde Perpignan",
    imageOnLeft: true,
    bg: "var(--color-charbon)",
    transitionType: "diagonal-wipe",
  },
  {
    name: "Pains du Soleil",
    specialty:
      "Pain artisanal pétri et cuit à Perpignan. La mie est dense, la croûte tient le burger\u00a0\u2014 pas un pain industriel qui s\u2019effondre au premier jus.",
    location: "CABESTANY",
    image:
      "/images/photos-references/contexte/pains-du-soleil/2026-03-17-17-40-00-facade-cabestany-sublimee-v2.png",
    alt: "Facade boulangerie Les Pains du Soleil au coucher du soleil, Maitre Artisan Boulanger, Cabestany",
    image2: "/images/visuels/PHOTO-2026-03-20-11-35-31.jpg",
    alt2: "Assemblage burger au pain noir aux graines de sesame, mains gantees noires",
    imageOnLeft: false,
    bg: "var(--color-ebene)",
    transitionType: "circle-iris",
  },
  {
    name: "Myfitcheese",
    specialty:
      "Fromage hyperprotéiné, fabriqué pour ceux qui comptent leurs macros sans sacrifier le goût. Le seul fromage qui a sa place dans un cheat meal clean.",
    location: "PERPIGNAN",
    image:
      "/images/photos-references/contexte/myfitcheese/2026-03-20-18-30-00-myfitcheese-parmesan-sublime.png",
    alt: "Main gantee noire saupoudrant du parmesan rape hyperproteine dore sur ardoise, Myfitcheese Perpignan",
    image2: "/images/visuels/cheese.jpg",
    alt2: "Burger avec fromage artisanal fondu coulant sur steak, fond noir, food photography premium",
    imageOnLeft: true,
    bg: "var(--color-charbon)",
    transitionType: "diamond-reveal",
  },
];

/* ── Diagonal Wipe Image — clip-path driven by parent scroll ── */
function DiagonalWipeImage({
  image1,
  alt1,
  image2,
  alt2,
  scrollYProgress,
}: {
  image1: string;
  alt1: string;
  image2: string;
  alt2: string;
  scrollYProgress: MotionValue<number>;
}) {
  // Range [200, 0]: at scroll=0 the triangle overshoots (200%) covering the full
  // rectangle; as scroll progresses the diagonal sweeps from bottom-right to top-left
  const clipX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const clipY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const clipPath = useMotionTemplate`polygon(0 0, ${clipX}% 0, 0 ${clipY}%)`;

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        borderRadius: "var(--radius-large)",
        aspectRatio: "4 / 3.6",
      }}
    >
      {/* Image 2 — underneath, revealed by wipe */}
      <Image
        src={image2}
        alt={alt2}
        fill
        className="object-cover"
        style={{ objectPosition: "center 30%", zIndex: 0 }}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* Image 1 — on top, clipped away by scroll */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath, zIndex: 10, willChange: "clip-path" }}
      >
        <Image
          src={image1}
          alt={alt1}
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}

/* ── Circle Iris Image — clip-path circle() driven by parent scroll ── */
function CircleIrisImage({
  image1,
  alt1,
  image2,
  alt2,
  scrollYProgress,
}: {
  image1: string;
  alt1: string;
  image2: string;
  alt2: string;
  scrollYProgress: MotionValue<number>;
}) {
  const radius = useTransform(scrollYProgress, [0, 1], [75, 0]);
  const clipPath = useMotionTemplate`circle(${radius}% at 50% 50%)`;

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        borderRadius: "var(--radius-large)",
        aspectRatio: "4 / 3.6",
      }}
    >
      {/* Image 2 — underneath, burger prep revealed */}
      <Image
        src={image2}
        alt={alt2}
        fill
        className="object-cover"
        style={{ objectPosition: "center 35%", zIndex: 0 }}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* Image 1 — on top, facade clipped by shrinking circle */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath, zIndex: 10, willChange: "clip-path" }}
      >
        <Image
          src={image1}
          alt={alt1}
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}

/* ── Diamond Reveal Image — clip-path polygon rhombus driven by parent scroll ── */
function DiamondRevealImage({
  image1,
  alt1,
  image2,
  alt2,
  scrollYProgress,
}: {
  image1: string;
  alt1: string;
  image2: string;
  alt2: string;
  scrollYProgress: MotionValue<number>;
}) {
  // Diamond size: 60 = overshoots all edges of a 4:3.6 container, 0 = collapsed to center
  const size = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const min = useTransform(size, (s) => 50 - s);
  const max = useTransform(size, (s) => 50 + s);
  const clipPath = useMotionTemplate`polygon(50% ${min}%, ${max}% 50%, 50% ${max}%, ${min}% 50%)`;

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        borderRadius: "var(--radius-large)",
        aspectRatio: "4 / 3.6",
      }}
    >
      {/* Image 2 — underneath, burger with melted cheese revealed */}
      <Image
        src={image2}
        alt={alt2}
        fill
        className="object-cover"
        style={{ objectPosition: "center 40%", zIndex: 0 }}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* Image 1 — on top, artisan cheese clipped by shrinking diamond */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath, zIndex: 10, willChange: "clip-path" }}
      >
        <Image
          src={image1}
          alt={alt1}
          fill
          className="object-cover"
          style={{ objectPosition: "center 45%" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}

/* ── Shared text block for artisan panels ── */
function ArtisanText({
  artisan,
  isReducedMotion,
  isInView,
}: {
  artisan: Artisan;
  isReducedMotion: boolean | null;
  isInView: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${!artisan.imageOnLeft ? "lg:order-1" : ""}`}
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
        transition={{
          duration: DURATION_REVEAL,
          ease: EASE,
          delay: STAGGER_DELAY,
        }}
      >
        {artisan.location}
      </motion.span>

      {/* Nom artisan — Cuivre Braise */}
      <motion.h3
        className="text-cuivre"
        initial={isReducedMotion ? {} : { opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: DURATION_REVEAL,
          ease: EASE,
          delay: STAGGER_DELAY * 2,
        }}
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
        transition={{
          duration: DURATION_REVEAL,
          ease: EASE,
          delay: STAGGER_DELAY * 3,
        }}
      >
        {artisan.specialty}
      </motion.p>
    </div>
  );
}

/* ── Panel artisan — sticky sur desktop, stack simple sur mobile ── */
function ArtisanPanel({
  artisan,
  index,
  isReducedMotion,
  title,
}: {
  artisan: Artisan;
  index: number;
  isReducedMotion: boolean | null;
  title?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const hasDualImage = !!(artisan.image2 && artisan.alt2);

  const { scrollYProgress } = useScroll(
    hasDualImage
      ? { target: scrollRef, offset: ["start start", "end end"] }
      : { offset: ["start start", "end end"] },
  );

  /* ── Dual-image panel: 200vh wrapper with sticky content ── */
  if (hasDualImage && !isReducedMotion) {
    return (
      <div
        ref={scrollRef}
        style={{
          height: "200vh",
          position: "relative",
          zIndex: index + 1,
          background: artisan.bg,
        }}
      >
        <div
          ref={ref}
          className="flex items-center"
          style={{
            position: "sticky",
            top: 0,
            minHeight: "100dvh",
            background: artisan.bg,
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
              <div className={!artisan.imageOnLeft ? "lg:order-2" : ""}>
                {artisan.transitionType === "circle-iris" ? (
                  <CircleIrisImage
                    image1={artisan.image}
                    alt1={artisan.alt}
                    image2={artisan.image2!}
                    alt2={artisan.alt2!}
                    scrollYProgress={scrollYProgress}
                  />
                ) : artisan.transitionType === "diamond-reveal" ? (
                  <DiamondRevealImage
                    image1={artisan.image}
                    alt1={artisan.alt}
                    image2={artisan.image2!}
                    alt2={artisan.alt2!}
                    scrollYProgress={scrollYProgress}
                  />
                ) : (
                  <DiagonalWipeImage
                    image1={artisan.image}
                    alt1={artisan.alt}
                    image2={artisan.image2!}
                    alt2={artisan.alt2!}
                    scrollYProgress={scrollYProgress}
                  />
                )}
              </div>
              <ArtisanText
                artisan={artisan}
                isReducedMotion={isReducedMotion}
                isInView={isInView}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Dual-image with reduced motion: show image 2 directly ── */
  if (hasDualImage && isReducedMotion) {
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
            <motion.div
              className={`relative overflow-hidden ${
                !artisan.imageOnLeft ? "lg:order-2" : ""
              }`}
              style={{
                borderRadius: "var(--radius-large)",
                aspectRatio: "4 / 3",
              }}
            >
              <Image
                src={artisan.image2!}
                alt={artisan.alt2!}
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <ArtisanText
              artisan={artisan}
              isReducedMotion={isReducedMotion}
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    );
  }

  /* ── Standard single-image panel ── */
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
              style={{ objectPosition: "center 30%" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <ArtisanText
            artisan={artisan}
            isReducedMotion={isReducedMotion}
            isInView={isInView}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Section Nos Artisans ── */
export default function NosArtisans() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="artisans" style={{ background: "var(--color-charbon)", scrollMarginTop: "var(--header-height)" }}>
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
