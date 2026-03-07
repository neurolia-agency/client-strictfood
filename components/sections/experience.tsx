"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
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

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
      };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-padding"
      style={{ background: "var(--color-ebene)" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] items-center gap-12 lg:gap-16">
          {/* ── Texte — gauche desktop, dessous mobile ── */}
          <motion.div
            className="flex flex-col order-2 lg:order-1"
            style={{ gap: "var(--spacing-breath)" }}
            variants={stagger}
            {...motionProps}
          >
            <motion.h2 variants={fadeUp}>
              Viens voir par toi-même.
            </motion.h2>

            <motion.p
              style={{
                fontSize: "var(--font-size-body-lg)",
                maxWidth: "var(--max-width-text)",
              }}
              variants={fadeUp}
            >
              Quand tu passes la porte, tu vois tout&nbsp;: les ingrédients,
              la préparation, les gestes. Pas de mur, pas de rideau.
            </motion.p>

            <motion.p
              style={{
                fontSize: "var(--font-size-body)",
                maxWidth: "var(--max-width-text)",
              }}
              variants={fadeUp}
            >
              Chez StrictFood, la cuisine est ouverte. Tu vois ce qu&apos;on
              prépare, comment on le prépare, et avec quoi. Rien à cacher,
              tout à montrer.
            </motion.p>
          </motion.div>

          {/* ── Image — droite desktop, dessus mobile ── */}
          <motion.div
            className="relative order-1 lg:order-2 overflow-hidden"
            style={{ borderRadius: "var(--radius-large)" }}
            variants={fadeUp}
            {...motionProps}
          >
            <motion.div
              style={prefersReducedMotion ? undefined : { y: imageY }}
            >
              <Image
                src="/contenu-instagram/2025-10-03_15-57-14_UTC_6.jpg"
                alt="Fondateur StrictFood derrière la vitrine de la cuisine ouverte, mur végétal en arrière-plan"
                width={800}
                height={1000}
                className="object-cover w-full"
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "var(--radius-large)",
                }}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
