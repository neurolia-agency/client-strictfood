"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  animate,
} from "motion/react";
import Image from "next/image";

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
    transition: { staggerChildren: 0.15 },
  },
};

const MACRO_CARDS = [
  { name: "STRICT Boeuf", kcal: 596, prot: 53 },
  { name: "STRICT MAX Poulet", kcal: 946, prot: 112 },
  { name: "Cookie protéiné", kcal: 273, prot: 26 },
] as const;

/* ── Zero Gauge — instrument de precision ── */
function ZeroGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const digitRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(100);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      count.set(0);
    } else {
      animate(count, 0, { duration: 0.8, ease: EASE });
    }
  }, [isInView, count, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = count.on("change", (v) => {
      if (digitRef.current) {
        digitRef.current.textContent = `${Math.round(Math.max(0, v))}%`;
      }
    });
    return unsubscribe;
  }, [count]);

  return (
    <div ref={ref} className="mt-2">
      <div className="flex items-baseline gap-3 sm:gap-4">
        {/* Le chiffre */}
        <motion.span
          ref={digitRef}
          aria-label="Zéro pourcent d'huile de cuisson"
          className="font-display font-bold text-cuivre block"
          style={{
            fontSize: "clamp(4rem, 8vw, 8rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            fontVariantNumeric: "tabular-nums",
          }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        >
          100%
        </motion.span>

        {/* L'unite — decalee, esthetique labo */}
        <motion.span
          className="block"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.7rem, 1.2vw, 0.875rem)",
            fontWeight: "var(--font-weight-light)",
            color: "var(--color-pierre)",
            textTransform: "uppercase",
            letterSpacing: "var(--letter-spacing-uppercase)",
            lineHeight: 1.3,
            paddingBottom: "0.5em",
          }}
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -8 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
        >
          huile de cuisson
        </motion.span>
      </div>

      {/* Ligne instrument — fine, partielle, asymetrique */}
      <motion.div
        style={{
          height: 1,
          background: "var(--color-cendre)",
          width: "70%",
          marginTop: "0.75rem",
        }}
        initial={prefersReducedMotion ? {} : { scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
      />
    </div>
  );
}

/* ── Badge nutritionnel ── */
function NutriBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full text-feuille uppercase"
      style={{
        fontSize: "var(--font-size-caption)",
        fontWeight: 500,
        padding: "4px 12px",
        letterSpacing: "var(--letter-spacing-uppercase)",
        background: "var(--color-feuille-pale)",
      }}
    >
      {children}
    </span>
  );
}

/* ── Mini-card macro ── */
function MacroCard({
  name,
  kcal,
  prot,
}: {
  name: string;
  kcal: number;
  prot: number;
}) {
  return (
    <motion.div
      className="bg-fumee border border-cendre/50 hover:border-cendre"
      style={{
        borderRadius: "var(--radius-large)",
        padding: "var(--card-padding)",
        transition: "border-color var(--transition-standard), transform var(--transition-standard)",
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      <p
        className="text-ivoire font-heading font-semibold"
        style={{ fontSize: "var(--font-size-small)" }}
      >
        {name}
      </p>
      <div className="flex gap-4 mt-2">
        <span className="text-cuivre font-bold text-lg">
          {kcal}
          <span className="text-pierre text-xs ml-0.5">kcal</span>
        </span>
        <span className="text-feuille font-bold text-lg">
          {prot}g
          <span className="text-pierre text-xs ml-0.5">prot</span>
        </span>
      </div>
    </motion.div>
  );
}

/* ── Section La Promesse ── */
export default function LaPromesse() {
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
      id="promesse"
      className="section-padding"
      style={{
        background: `
          radial-gradient(ellipse 100% 60% at 50% 0%, oklch(0.67 0.15 68 / 0.15) 0%, transparent 50%),
          var(--color-ebene)
        `,
      }}
    >
      <div className="container-custom">
        {/* ── Accroche centrée ── */}
        <motion.div
          className="text-center mx-auto"
          style={{ maxWidth: "var(--max-width-text)" }}
          variants={stagger}
          {...motionProps}
        >
          <motion.h2 variants={fadeUp}>
            Et si ton burger respectait ton corps&nbsp;?
          </motion.h2>
          <motion.p
            className="mt-4"
            style={{ fontSize: "var(--font-size-body-lg)" }}
            variants={fadeUp}
          >
            Tu connais la scène. Le burger qui te fait envie, et la petite voix
            qui te dit que tu vas le regretter. Chez StrictFood, on a décidé que
            cette voix avait tort.
          </motion.p>
        </motion.div>

        {/* ── Bloc 1 — Cuisson ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] items-center mt-20 lg:mt-28"
          style={{ gap: "var(--spacing-gap)" }}
          variants={stagger}
          {...motionProps}
        >
          {/* Texte */}
          <motion.div className="flex flex-col gap-5" variants={fadeUp}>
            <h3>
              Cuit à chaleur pulsée.
              <br />
              Pas une goutte d&apos;huile.
            </h3>
            <p style={{ fontSize: "var(--font-size-body-lg)" }}>
              Le vrai goût du fast-food. <br/>La légèreté d'une cuisson à l'air chaud.<br/>Zéro culpabilité.
            </p>
            <ZeroGauge />
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative aspect-[4/3] overflow-hidden order-first lg:order-last"
            style={{ borderRadius: "var(--radius-large)" }}
            variants={fadeUp}
          >
            <Image
              src="/contenu-instagram/2025-11-22_17-18-46_UTC_2.jpg"
              alt="Burger StrictFood cuit à chaleur pulsée, croustillant doré sans huile"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </motion.div>
        </motion.div>

        {/* ── Bloc 2 — Macros ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] items-center mt-20 lg:mt-28"
          style={{ gap: "var(--spacing-gap)" }}
          variants={stagger}
          {...motionProps}
        >
          {/* Image */}
          <motion.div
            className="relative aspect-[4/3] overflow-hidden"
            style={{ borderRadius: "var(--radius-large)" }}
            variants={fadeUp}
          >
            <Image
              src="/contenu-instagram/2025-11-20_17-34-35_UTC.jpg"
              alt="Wrap StrictFood avec valeurs nutritionnelles affichées"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </motion.div>

          {/* Texte */}
          <motion.div className="flex flex-col gap-5" variants={fadeUp}>
            <NutriBadge>Macros affichées</NutriBadge>
            <h3>Un burger que tu peux lire avant de manger.</h3>
            <p style={{ fontSize: "var(--font-size-body-lg)" }}>
              Quand tu connais les macros, plus besoin de choisir entre plaisir
              et discipline. Chaque produit StrictFood affiche ses valeurs
              nutritionnelles — pas de surprise, pas de culpabilité.
            </p>

            {/* Mini-cards macros — layout 2+1 asymétrique */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {MACRO_CARDS.map((card) => (
                <MacroCard key={card.name} {...card} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Phrase de fermeture ── */}
        <motion.p
          className="text-center text-cuivre font-heading font-bold mt-20 lg:mt-28"
          style={{ fontSize: "var(--font-size-h2)" }}
          variants={fadeUp}
          {...motionProps}
        >
          Le cheat meal qui n&apos;en est pas un.
        </motion.p>
      </div>
    </section>
  );
}
