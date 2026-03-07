"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Phone } from "lucide-react";

/* ─── Constants ─── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const PRODUCT_IMAGE = "/images/falafel.webp";

/* ─── Types ─── */
type Macros = {
  kcal: number | null;
  prot: number | null;
  gluc: number | null;
  lip: number | null;
};

type Product = {
  name: string;
  price: number;
  macros: Macros;
  highlight?: boolean;
  badge?: string;
  description?: string;
};

type Category = {
  id: string;
  label: string;
  tagline: string;
  products: Product[];
};

/* ─── Data ─── */
const categories: Category[] = [
  {
    id: "burgers",
    label: "Burgers",
    tagline: "Pain artisanal, viande locale, 0% huile de cuisson",
    products: [
      {
        name: "STRICT B\u0153uf",
        price: 12.99,
        macros: { kcal: 596, prot: 53, gluc: 45, lip: 21.5 },
        description: "Steak artisanal Labourde, pain Pains du Soleil, sauce maison",
      },
      {
        name: "STRICT Poulet",
        price: 11.99,
        macros: { kcal: 598, prot: 60.5, gluc: 45, lip: 19.4 },
        description: "Filet de poulet grille, pain artisanal, crudites fraiches",
      },
      {
        name: "STRICT V\u00e9g\u00e9 Falafel",
        price: 12.99,
        macros: { kcal: 850, prot: 35.5, gluc: 91.5, lip: 39.5 },
        badge: "VEGGIE",
        description: "Galette falafel maison, houmous, crudites, sauce tahini",
      },
      {
        name: "STRICT MAX B\u0153uf",
        price: 14.99,
        macros: { kcal: 942, prot: 97, gluc: 45, lip: 39 },
        highlight: true,
        badge: "DOUBLE STEAK",
        description: "Double steak artisanal Labourde, fromage Myfitcheese, sauce premium",
      },
      {
        name: "STRICT MAX Poulet",
        price: 15.99,
        macros: { kcal: 946, prot: 112, gluc: 45, lip: 34.8 },
        highlight: true,
        badge: "112G PROT",
        description: "Double filet de poulet, fromage hyperproteine, sauce speciale",
      },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    tagline: "La version legere, meme gout",
    products: [
      {
        name: "STRICT Wrap B\u0153uf",
        price: 9.99,
        macros: { kcal: 566, prot: 51, gluc: 39, lip: 20.5 },
        description: "Tortilla, steak artisanal, crudites, sauce signature",
      },
      {
        name: "STRICT Wrap Poulet",
        price: 8.99,
        macros: { kcal: 598, prot: 60.5, gluc: 39, lip: 20.4 },
        description: "Tortilla, filet de poulet grille, crudites, sauce legere",
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    tagline: "Cuits a l'air pulse, jamais frits",
    products: [
      {
        name: "Frites classiques",
        price: 2.99,
        macros: { kcal: 199, prot: 4, gluc: 38, lip: 4 },
        description: "Pommes de terre fraiches, cuisson air pulse",
      },
      {
        name: "Frites Patates Douces",
        price: 3.99,
        macros: { kcal: 211, prot: 3, gluc: 40, lip: 5 },
        description: "Patates douces fraiches, cuisson air pulse",
      },
      {
        name: "Tenders STRICT",
        price: 6.99,
        macros: { kcal: 250, prot: 25, gluc: 18, lip: 9 },
        highlight: true,
        badge: "25G PROT",
        description: "Aiguillettes panees maison, cuisson sans huile",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    tagline: "Gourmandise et proteines",
    products: [
      {
        name: "Cookie prot\u00e9in\u00e9",
        price: 3.99,
        macros: { kcal: 273, prot: 26, gluc: 27, lip: 9 },
        description: "Cookie fondant, whey, pepites de chocolat",
      },
      {
        name: "Overnight STRICT",
        price: 4.99,
        macros: { kcal: 470, prot: 52.9, gluc: 52.5, lip: 9.4 },
        highlight: true,
        badge: "53G PROT",
        description: "Flocons, whey, fruits frais, prepare la veille",
      },
      {
        name: "Tiramisu prot\u00e9in\u00e9",
        price: 3.5,
        macros: { kcal: 252, prot: 24, gluc: 14, lip: 8 },
        description: "Mascarpone allege, biscuit, cacao, whey",
      },
      {
        name: "Milkshake prot\u00e9in\u00e9",
        price: 3.0,
        macros: { kcal: 215, prot: 29, gluc: 12, lip: 6 },
        description: "Lait, whey, fruits de saison",
      },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    tagline: "Zero sucre, zero compromis",
    products: [
      {
        name: "Boisson Z\u00e9ro",
        price: 2.0,
        macros: { kcal: null, prot: null, gluc: null, lip: null },
        description: "Coca, Fanta, Sprite, Ice Tea — version zero",
      },
      {
        name: "Boisson \u00e9nergisante",
        price: 2.99,
        macros: { kcal: null, prot: null, gluc: null, lip: null },
        description: "Monster, Red Bull — zero sucre",
      },
    ],
  },
];

/* ─── Helpers ─── */
function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",").replace(/,00$/, "") + "\u00a0\u20ac";
}

function formatMacroValue(value: number): string {
  return Number.isInteger(value)
    ? value.toString()
    : value.toFixed(1).replace(".", ",");
}

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

/* ─── MacroPill ─── */
function MacroPill({
  label,
  value,
  variant = "default",
}: {
  label: string;
  value: number;
  variant?: "kcal" | "prot" | "default";
}) {
  const display = formatMacroValue(value);

  const styles = {
    kcal: "bg-[oklch(0.67_0.15_68_/_0.1)] text-cuivre",
    prot: "bg-[oklch(0.52_0.06_145_/_0.12)] text-feuille",
    default: "bg-[oklch(0.30_0.01_55_/_0.3)] text-sable",
  };

  return (
    <span
      className={`inline-flex items-baseline gap-1 rounded-[var(--radius-subtle)] px-2 py-1 ${styles[variant]}`}
    >
      <span
        className="font-semibold"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.8125rem",
        }}
      >
        {display}
      </span>
      <span
        className="text-pierre"
        style={{
          fontSize: "0.625rem",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </span>
    </span>
  );
}

/* ─── ProductCard ─── */
function ProductCard({ product }: { product: Product }) {
  const hasMacros = product.macros.kcal !== null;

  return (
    <motion.article
      variants={cardVariant}
      className={`group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        product.highlight
          ? "border-[oklch(0.67_0.15_68_/_0.25)]"
          : "border-[oklch(0.30_0.01_55_/_0.15)]"
      } hover:border-[oklch(0.67_0.15_68_/_0.35)] hover:shadow-[0_12px_40px_oklch(0.67_0.15_68_/_0.08)]`}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: "var(--radius-large)",
        backgroundColor: "var(--color-fumee)",
      }}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-3 top-3 z-10">
          <span
            className="inline-block bg-cuivre text-charbon"
            style={{
              padding: "0.25rem 0.75rem",
              borderRadius: "var(--radius-pill)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "0.6875rem",
              letterSpacing: "var(--letter-spacing-uppercase)",
            }}
          >
            {product.badge}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charbon">
        <Image
          src={PRODUCT_IMAGE}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Warm radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, oklch(0.67 0.15 68 / 0.06), transparent 70%)",
          }}
        />
        {/* Bottom gradient fade into card */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--color-fumee), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5 pt-3">
        {/* Name */}
        <h3
          className="text-ivoire"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--font-size-h5)",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>

        {/* Description */}
        {product.description && (
          <p
            className="text-pierre"
            style={{
              fontSize: "var(--font-size-small)",
              lineHeight: 1.4,
            }}
          >
            {product.description}
          </p>
        )}

        {/* Macros */}
        {hasMacros && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            <MacroPill
              label="kcal"
              value={product.macros.kcal!}
              variant="kcal"
            />
            <MacroPill
              label="prot"
              value={product.macros.prot!}
              variant="prot"
            />
            <MacroPill label="gluc" value={product.macros.gluc!} />
            <MacroPill label="lip" value={product.macros.lip!} />
          </div>
        )}

        {/* Price */}
        <div
          className="mt-auto flex items-center justify-between border-t pt-3"
          style={{ borderColor: "oklch(0.30 0.01 55 / 0.2)" }}
        >
          <span
            className="text-cuivre"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-h4)",
              fontWeight: 700,
            }}
          >
            {formatPrice(product.price)}
          </span>
          <span
            className="text-pierre"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.6875rem",
              letterSpacing: "var(--letter-spacing-uppercase)",
              textTransform: "uppercase",
            }}
          >
            {hasMacros ? `${product.macros.prot}g proteines` : ""}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Component ─── */
export default function CarteMenu() {
  const [activeCategory, setActiveCategory] = useState("burgers");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  /* Scroll spy */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    const refs = sectionRefs.current;
    Object.values(refs).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Scroll active pill into view on mobile */
  useEffect(() => {
    const btn = navRef.current?.querySelector(
      `[data-cat="${activeCategory}"]`
    ) as HTMLElement | null;
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeCategory]);

  const scrollToCategory = useCallback((id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const headerH = 80; // 5rem
    const navH = navRef.current?.offsetHeight ?? 52;
    const y =
      el.getBoundingClientRect().top + window.scrollY - headerH - navH - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-charbon" style={{ paddingTop: "var(--header-height)" }}>
      {/* ── Hero ── */}
      <section
        className="container-custom"
        style={{ paddingBlock: "clamp(2.5rem, 5vw, 4.5rem)" }}
      >
        <motion.div
          className="flex flex-col gap-5"
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate="visible"
          variants={prefersReducedMotion ? undefined : stagger}
        >
          <motion.div variants={prefersReducedMotion ? undefined : fadeUp}>
            <p
              className="text-cuivre mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--font-size-small)",
                fontWeight: 600,
                letterSpacing: "var(--letter-spacing-uppercase)",
                textTransform: "uppercase",
              }}
            >
              StrictFood
            </p>
            <h1
              className="font-display text-ivoire"
              style={{
                fontSize: "var(--font-size-display)",
                letterSpacing: "var(--letter-spacing-display)",
              }}
            >
              La Carte
            </h1>
          </motion.div>

          <motion.p
            className="max-w-text text-sable"
            style={{ fontSize: "var(--font-size-body-lg)" }}
            variants={prefersReducedMotion ? undefined : fadeUp}
          >
            Chaque produit affiche ses macros. Pas de surprise, que du gout.
          </motion.p>

          {/* Menu deal banner */}
          <motion.div
            className="inline-flex items-center gap-3 self-start"
            variants={prefersReducedMotion ? undefined : fadeUp}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "var(--radius-pill)",
              border: "1px solid oklch(0.67 0.15 68 / 0.2)",
              backgroundColor: "oklch(0.67 0.15 68 / 0.06)",
            }}
          >
            <span
              className="bg-cuivre text-charbon"
              style={{
                padding: "0.125rem 0.625rem",
                borderRadius: "var(--radius-subtle)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "var(--font-size-small)",
                letterSpacing: "var(--letter-spacing-uppercase)",
              }}
            >
              MENU
            </span>
            <span
              className="text-ivoire"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: "var(--font-size-body)",
              }}
            >
              Frites & boisson{" "}
              <span className="text-cuivre font-bold">+3 &euro;</span>
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Category Nav (sticky) ── */}
      <div
        className="sticky z-30 backdrop-blur-md"
        style={{
          top: "var(--header-height)",
          backgroundColor: "oklch(0.14 0.008 60 / 0.92)",
          borderBottom: "1px solid oklch(0.30 0.01 55 / 0.15)",
        }}
      >
        <nav ref={navRef} className="container-custom">
          <div
            className="flex gap-1.5 overflow-x-auto py-3"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  data-cat={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className="shrink-0 transition-all duration-300"
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "var(--radius-pill)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "var(--font-size-small)",
                    letterSpacing: "var(--letter-spacing-wide)",
                    backgroundColor: isActive
                      ? "var(--color-cuivre)"
                      : "transparent",
                    color: isActive
                      ? "var(--color-charbon)"
                      : "var(--color-sable)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* ── Category Sections ── */}
      <div
        className="container-custom"
        style={{ paddingBlock: "var(--spacing-breath)" }}
      >
        <div
          className="flex flex-col"
          style={{ gap: "clamp(3rem, 5vw, 5rem)" }}
        >
          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              style={{ scrollMarginTop: "calc(var(--header-height) + 4rem)" }}
            >
              {/* Category header */}
              <motion.div
                className="mb-6 flex flex-col gap-2"
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={prefersReducedMotion ? undefined : fadeUp}
              >
                <h2
                  className="text-ivoire"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--font-size-h2)",
                    fontWeight: 700,
                  }}
                >
                  {category.label}
                </h2>
                <div
                  className="bg-cuivre"
                  style={{
                    width: "3rem",
                    height: "2px",
                    borderRadius: "var(--radius-pill)",
                    opacity: 0.6,
                  }}
                />
                <p
                  className="text-pierre"
                  style={{ fontSize: "var(--font-size-body)" }}
                >
                  {category.tagline}
                </p>
              </motion.div>

              {/* Products grid */}
              <motion.div
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={prefersReducedMotion ? undefined : stagger}
              >
                {category.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </motion.div>
            </section>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <section
        className="border-t"
        style={{
          borderColor: "oklch(0.30 0.01 55 / 0.15)",
          backgroundColor: "var(--color-ebene)",
        }}
      >
        <div
          className="container-custom flex flex-col items-center gap-5 text-center"
          style={{ paddingBlock: "clamp(3rem, 5vw, 5rem)" }}
        >
          <h2
            className="text-ivoire"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-h3)",
              fontWeight: 600,
            }}
          >
            Passe ta commande
          </h2>
          <p
            className="text-sable"
            style={{ fontSize: "var(--font-size-body)" }}
          >
            Appelle-nous directement, on prepare tout frais.
          </p>
          <a
            href="tel:+33611745944"
            className="btn-shimmer inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground"
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
            06 11 74 59 44
          </a>
        </div>
      </section>
    </div>
  );
}
