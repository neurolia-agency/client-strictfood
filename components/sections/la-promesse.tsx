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

/* ── STRICT Poulet — lentilles-loupes sur ingrédients ── */
const LENS_DIAMETER = 80;

const LENS_MACROS = [
  {
    label: "Protéines", value: "60.5", unit: "g",
    color: "var(--color-feuille)", rawColor: "92, 120, 88",
    bgPos: "85% 56%", bgSize: "1000%",
    position: { top: "52%", right: "10%" },
    textSide: "right" as const,
  },
  {
    label: "Glucides", value: "45.0", unit: "g",
    color: "var(--color-sable)", rawColor: "181, 170, 152",
    bgPos: "15% 79%", bgSize: "1000%",
    position: { bottom: "18%", right: "76%" },
    textSide: "left" as const,
  },
  {
    label: "Lipides", value: "19.4", unit: "g",
    color: "var(--color-pierre)", rawColor: "138, 128, 112",
    bgPos: "56% 72%", bgSize: "1000%",
    position: { top: "22%", right: "67%" },
    textSide: "left" as const,
  },
] as const;

const CALORIES = {
  label: "Calories", value: "598", unit: "kcal",
  color: "var(--color-cuivre)", rawColor: "196, 140, 56",
};

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
      return;
    }
    const controls = animate(count, 0, { duration: 0.8, ease: EASE });
    return () => controls.stop();
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

/* ── Badge nutritionnel — "L'Étiquette" label cousu ── */
function NutriBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center relative"
      style={{
        padding: "12px 20px 12px 16px",
        background: "color-mix(in oklch, var(--color-fumee) 60%, transparent)",
        borderLeft: "2px solid color-mix(in oklch, var(--color-cuivre) 60%, transparent)",
        borderBottom: "1px solid color-mix(in oklch, var(--color-cendre) 40%, transparent)",
        borderRight: "1px solid color-mix(in oklch, var(--color-cendre) 20%, transparent)",
        borderTop: "none",
      }}
    >
      {/* SVG torn edge — bord déchiré en haut */}
      <svg
        style={{
          position: "absolute",
          top: -3,
          left: 0,
          width: "100%",
          height: 4,
        }}
        preserveAspectRatio="none"
        viewBox="0 0 120 4"
        fill="color-mix(in oklch, var(--color-fumee) 60%, transparent)"
        aria-hidden="true"
      >
        <path d="M0 4 L0 2 L3 1.2 L7 2.8 L12 0.8 L18 2.4 L23 1 L28 3 L34 0.5 L40 2.6 L45 1.4 L51 2.9 L56 0.6 L62 2.2 L67 1.1 L73 3.1 L78 0.9 L84 2.5 L89 1.3 L95 2.7 L100 0.7 L106 2.3 L111 1.5 L117 2.8 L120 1.8 L120 4 Z" />
      </svg>

      {/* Ligne de couture */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 6,
          top: 4,
          bottom: 4,
          width: 1,
          background: "repeating-linear-gradient(to bottom, color-mix(in oklch, var(--color-cuivre) 25%, transparent) 0px, color-mix(in oklch, var(--color-cuivre) 25%, transparent) 3px, transparent 3px, transparent 6px)",
        }}
      />

      {/* Contenu texte — décalé pour dégager la couture */}
      <span style={{ paddingLeft: 8 }}>
        <span
          className="font-heading block uppercase"
          style={{
            fontSize: "1.17rem",
            fontWeight: 600,
            color: "var(--color-cuivre)",
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}
        >
          {children}
        </span>
      </span>
    </span>
  );
}

/* ── Caustiques — overlay CSS statique (remplace SVG animé pour perf) ── */
function CausticsOverlay({ rawColor }: { rawColor: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        background: `radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 60% 65%, rgba(${rawColor},0.08) 0%, transparent 55%)`,
        mixBlendMode: "screen",
        pointerEvents: "none",
      }}
    />
  );
}

/* ── MacroLens — lentille-loupe fixe sur ingrédient ── */
function MacroLens({
  label,
  value,
  unit,
  color,
  rawColor,
  bgPos,
  bgSize,
  index,
  textSide = "right",
}: {
  label: string;
  value: string;
  unit: string;
  color: string;
  rawColor: string;
  bgPos: string;
  bgSize: string;
  index: number;
  textSide?: "left" | "right";
}) {
  return (
    <div>
      <div style={{ position: "relative", width: LENS_DIAMETER, height: LENS_DIAMETER }}>
        {/* LA LENTILLE */}
        <div
          style={{
            position: "relative",
            width: LENS_DIAMETER,
            height: LENS_DIAMETER,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: `0 0 18px 4px rgba(196, 140, 56, 0.35), 0 0 40px 8px rgba(196, 140, 56, 0.15), 0 4px 20px rgba(${rawColor}, 0.3), 0 2px 8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3)`,
            border: "1.5px solid rgba(196, 140, 56, 0.4)",
          }}
        >
          {/* Zoomed background — effet loupe */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              backgroundImage: "url(/images/photos-references/produits-source/burgers-black/strict-poulet/poulet-eclate.webp)",
              backgroundSize: bgSize,
              backgroundPosition: bgPos,
            }}
          />

          {/* Glass overlay */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background: "rgba(255, 255, 255, 0.06)",
            }}
          />

          {/* Specular highlight */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background: "linear-gradient(175deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 30%, transparent 55%)",
              pointerEvents: "none",
            }}
          />

          {/* Caustiques */}
          <CausticsOverlay rawColor={rawColor} />
        </div>

        {/* Trait de liaison — réticule labo */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            height: 1,
            width: 44,
            transformOrigin: textSide === "left" ? "right center" : "left center",
            background: `linear-gradient(${textSide === "left" ? "to left" : "to right"}, rgba(196, 140, 56, 0.5), rgba(196, 140, 56, 0.08))`,
            ...(textSide === "left"
              ? { right: "calc(100% + 4px)" }
              : { left: "calc(100% + 4px)" }),
          }}
        />
        {/* Point terminal */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(196, 140, 56, 0.6)",
            ...(textSide === "left"
              ? { right: "calc(100% + 46px)" }
              : { left: "calc(100% + 46px)" }),
          }}
        />

        {/* LES VALEURS — positionnées à gauche ou à droite */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            display: "inline-flex",
            flexDirection: "column",
            ...(textSide === "left"
              ? { right: "calc(100% + 52px)", alignItems: "flex-end" as const }
              : { left: "calc(100% + 52px)", alignItems: "flex-start" as const }),
          }}
        >
          <span
            className="font-body uppercase"
            style={{
              fontSize: "0.8rem",
              color: "#fff",
              fontWeight: 700,
              lineHeight: 1.2,
              alignSelf: "stretch",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {label.split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </span>
          <span
            className="font-heading font-bold block"
            style={{
              fontSize: "1.85rem",
              lineHeight: 1,
              color: "var(--color-grenat)",
              marginTop: 3,
            }}
          >
            {value}
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--color-grenat)",
                marginLeft: 3,
              }}
            >
              {unit}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── CalorieBadge — nombre brut, très gros, sans badge ── */
function CalorieBadge() {
  return (
    <div style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}>
      <span
        className="font-heading"
        style={{
          fontSize: "5.5rem",
          lineHeight: 0.9,
          fontWeight: 900,
          color: "var(--color-cuivre)",
        }}
      >
        {CALORIES.value}
      </span>
      <span
        className="font-body uppercase"
        style={{
          fontSize: "0.85rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: "#fff",
        }}
      >
        {CALORIES.unit}
      </span>
    </div>
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
      className="relative z-10 section-padding overflow-x-hidden lg:overflow-visible"
      style={{
        background: `
          radial-gradient(ellipse 100% 60% at 50% 0%, oklch(0.67 0.15 68 / 0.15) 0%, transparent 50%),
          var(--color-ebene)
        `,
      }}
    >
      <div className="container-custom overflow-visible">
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
          className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] items-center mt-20 lg:mt-28"
          style={{ gap: "var(--spacing-gap)" }}
          variants={stagger}
          {...motionProps}
        >
          {/* Texte */}
          <motion.div className="relative z-10 flex flex-col gap-5 lg:pl-21" variants={fadeUp}>
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
            className="flex items-center justify-center order-first overflow-visible"
            variants={fadeUp}
          >
            <Image
              src="/images/visuels/website/section2.webp"
              alt="Burger StrictFood cuit à chaleur pulsée, steak juteux sans huile"
              width={800}
              height={800}
              className="object-contain w-full"
              style={{ transform: "scale(1.5)" }}
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </motion.div>
        </motion.div>

        {/* ── Bloc 2 — Macros ── */}
          <motion.div
            className="relative z-10 grid grid-cols-1 lg:grid-cols-[38fr_62fr] items-center mt-36 lg:mt-48 overflow-visible"
          style={{ gap: "var(--spacing-gap)" }}
          variants={stagger}
          {...motionProps}
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* 598 kcal — écriture verticale, déborde à gauche jusqu'au bord d'écran */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute hidden lg:flex items-center justify-center font-heading"
            style={{
              right: "60%",
              top: 0,
              bottom: 0,
              width: "45vw",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "clamp(10rem, 18vw, 20rem)",
              fontWeight: 900,
              color: "rgba(196, 140, 56, 0.06)",
              letterSpacing: "0.05em",
              lineHeight: 1,
              zIndex: 0,
              whiteSpace: "nowrap",
            }}
          >
            598 kcal
          </span>

          {/* Texte — left, titre mis en valeur */}
          <motion.div className="flex flex-col gap-6 lg:pr-8" variants={fadeUp}>
            <NutriBadge>Macros affichées</NutriBadge>
            <h2
              style={{
                fontSize: "var(--font-size-h2)",
                lineHeight: "var(--line-height-tight)",
                letterSpacing: "var(--letter-spacing-tight)",
              }}
            >
              Un burger que tu peux{" "}
              <span className="text-cuivre">lire</span>{" "}
              avant de manger.
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-body-lg)",
                maxWidth: "var(--max-width-text)",
              }}
            >
              Des ingrédients bruts, un équilibre parfait et des calories transparentes.<br/>Le vrai plaisir, les calculs en moins.
            </p>
          </motion.div>

          {/* Photo + floating macro tags — STRICT Poulet */}
          <motion.div
            className="relative lg:pl-8"
            variants={fadeUp}
          >
            <div
              className="relative overflow-visible flex items-center justify-center"
            >
              <Image
                src="/images/photos-references/produits-source/burgers-black/strict-poulet/poulet-eclate.webp"
                alt="STRICT Poulet StrictFood vue éclatée avec macros affichées"
                width={800}
                height={800}
                className="object-contain w-full"
                style={{ transform: "scale(1.01)" }}
                sizes="(max-width: 1024px) 100vw, 62vw"
              />

              {/* 3 lentilles-loupes — positionnées sur les ingrédients */}
              {LENS_MACROS.map((macro, i) => (
                <div
                  key={macro.label}
                  className="absolute hidden lg:block"
                  style={macro.position}
                >
                  <MacroLens {...macro} index={i} />
                </div>
              ))}

              {/* Calories — haut droite, hors du burger */}
              <div
                className="absolute hidden lg:block"
                style={{ top: "8%", right: "-18%" }}
              >
                <CalorieBadge />
              </div>


            </div>

            {/* Mobile — titre + lentilles en colonne + calories */}
            <p
              className="font-heading font-semibold text-ivoire mb-3 mt-2 lg:hidden"
              style={{ fontSize: "var(--font-size-small)", letterSpacing: "var(--letter-spacing-wide)" }}
            >
              STRICT Poulet
            </p>
            <div className="flex flex-col gap-4 lg:hidden">
              {LENS_MACROS.map((macro, i) => (
                <MacroLens key={macro.label} {...macro} textSide="right" index={i} />
              ))}
              <CalorieBadge />
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
