"use client";

import { useRef, useEffect, useCallback } from "react";
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

/* ── Data Points ── */
const DATA_POINTS = [
  {
    value: 100,
    suffix: "+",
    label: "avis Google",
    accent: false,
  },
  {
    value: 5.0,
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

/* ── Avis Google — vrais avis, mis a jour manuellement depuis Google Business ── */
const REVIEWS = [
  {
    text: "Franchement enorme decouverte ! Je suis venu tester leurs burgers \"diete\" et c'est clairement une des meilleures.",
    author: "Arthur G.",
    rating: 5,
  },
  {
    text: "Franchement, super surprise !! C'etait hyper bon, plein de gout, et surtout pas gras du tout — tu manges clean mais sans sacrifier le plaisir, et ca fait...",
    author: "Yasmine I.",
    rating: 5,
  },
  {
    text: "Une tres bonne experience au sein de cette entreprise, un accueil chaleureux, un personnel tres sympathique, une ambiance agreable et pas d'attente excessive.",
    author: "Constance H.",
    rating: 5,
  },
  {
    text: "Enfin un endroit qui prouve que la nutrition d'aujourd'hui fait des miracles ! Des burgers sains, equilibres et ultra savoureux.",
    author: "Kevin L.",
    rating: 5,
  },
  {
    text: "Restaurant au top pour se faire plaisir et manger sainement, les gerants sont super agreables, je recommande a tout le monde.",
    author: "Abraham F.",
    rating: 5,
  },
  {
    text: "Enfin un fast food ou on ne regrette pas de se faire plaisir ! Les burgers sont excellents, faits avec des produits de qualite. Une alternative parfaite au fast...",
    author: "Yannis A.",
    rating: 5,
  },
  {
    text: "On est tombe sur ce resto par hasard. Accueil tres cool et tres bon burger !",
    author: "Anthony A.",
    rating: 5,
  },
  {
    text: "Un superbe accueil ! Tres arrangeant et surtout super bon ! Ca fait plaisir de voir un fast food de ce type a Perpignan ! Je reviendrai et je vous le recommande.",
    author: "Morgane M.",
    rating: 5,
  },
  {
    text: "Genial j'ai super bien mange j'ai adore ! Je recommande a 100%.",
    author: "Irvin M.",
    rating: 5,
  },
  {
    text: "Que dire... incroyable ! Je suis pourtant partisan des burgers fast-food et autres enseignes connues...",
    author: "Dorian L.",
    rating: 5,
  },
  {
    text: "Qualite au top, tres bon repas je recommande. Bonne ambiance au sein de l'equipe ! Grosse force a vous deux.",
    author: "Lilian S.",
    rating: 5,
  },
  {
    text: "Les gerants sont au top, tres bon accueil et de bon burgers wrap proteines sont excellent, bonne ambiance bon service, je vous le recommande, cuisine au top.",
    author: "Richard C.",
    rating: 5,
  },
  {
    text: "Cuisine au top, ambiance authentique. Dorian et Romain sont tres sympa, rien a ajouter, parfait.",
    author: "Sassanow V.",
    rating: 5,
  },
  {
    text: "Tres bon restaurant healthy et proteine, qualite des produits incroyables. Tres bon service. Je recommande fortement.",
    author: "Matteo L.",
    rating: 5,
  },
  {
    text: "Un service 5*. Merci a vous pour l'accueil et la nourriture delicieuse ! Je recommande vivement.",
    author: "Justine G.",
    rating: 5,
  },
  {
    text: "Les produits sont de qualites, le personnel est tres agreable. Super pour les sportifs qui veulent se faire plaisir sans faire trop d'exces. Je recommande.",
    author: "Lau'",
    rating: 5,
  },
  {
    text: "L'accueil est top, avec be bonne ambiance, le personnel est super agreable puis la decoration est super belle aussi, puis la nourriture j'en parle meme pas.",
    author: "Hugo S.",
    rating: 5,
  },
  {
    text: "Enfin un endroit ou tu peux manger des produits de qualites ! Merci pour l'accueil, je recommande cet etablissement !",
    author: "Benjamin",
    rating: 5,
  },
];

/* ── Google Maps URL ── */
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Strict+Food's/@42.7137524,2.8679285,17z/data=!4m8!3m7!1s0x12b06f5c45225b53:0x98bdcc96f1f0b5dd!8m2!3d42.7137524!4d2.8705034!9m1!1b1!16s%2Fg%2F11wh2bghg7";

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

/* ── Stars — rating stars inline ── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "var(--color-cuivre)" : "var(--color-cendre)"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/* ── ReviewCard ── */
function ReviewCard({
  text,
  author,
  rating,
}: {
  text: string;
  author: string;
  rating: number;
}) {
  return (
    <blockquote
      className="flex flex-col justify-between shrink-0"
      style={{
        width: "clamp(280px, 30vw, 360px)",
        background: "var(--color-fumee)",
        border: "1px solid var(--color-cendre)",
        borderRadius: "var(--radius-large)",
        padding: "var(--card-padding)",
      }}
    >
      <div>
        <Stars rating={rating} />
        <p
          className="mt-3"
          style={{
            fontSize: "var(--font-size-body)",
            lineHeight: "var(--line-height-relaxed)",
            color: "var(--color-sable)",
          }}
        >
          &ldquo;{text}&rdquo;
        </p>
      </div>
      <footer
        className="mt-4 flex items-center gap-2"
        style={{
          fontSize: "var(--font-size-small)",
          color: "var(--color-pierre)",
        }}
      >
        {/* Google "G" icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span>{author}</span>
      </footer>
    </blockquote>
  );
}

/* ── Marquee — defilement horizontal continu ── */
function ReviewMarquee({ reviews }: { reviews: typeof REVIEWS }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const animationRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const isPausedRef = useRef(false);

  const SPEED = 0.5; // px per frame

  const tick = useCallback(() => {
    if (!trackRef.current) return;
    if (!isPausedRef.current) {
      posRef.current -= SPEED;
      const halfWidth = trackRef.current.scrollWidth / 2;
      if (Math.abs(posRef.current) >= halfWidth) {
        posRef.current += halfWidth;
      }
      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
    animationRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    animationRef.current = requestAnimationFrame(tick);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [tick, prefersReducedMotion]);

  const pause = () => { isPausedRef.current = true; };
  const resume = () => { isPausedRef.current = false; };

  // Duplicate reviews for seamless loop
  const doubled = [...reviews, ...reviews];

  return (
    <div
      className="overflow-hidden"
      style={{ margin: "0 calc(-1 * var(--spacing-container))" }}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      role="region"
      aria-label="Avis clients en défilement"
    >
      <div
        ref={trackRef}
        className="flex gap-4 lg:gap-6 will-change-transform"
        style={{
          paddingInline: "var(--spacing-container)",
        }}
      >
        {doubled.map((review, i) => (
          <ReviewCard
            key={`${review.author}-${i}`}
            text={review.text}
            author={review.author}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
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
      </div>

      {/* ── Marquee avis — pleine largeur, depasse le container ── */}
      <motion.div
        variants={fadeUp}
        {...motionProps}
      >
        <ReviewMarquee reviews={REVIEWS} />
      </motion.div>

      {/* ── Lien Google Business ── */}
      <div className="container-custom">
        <motion.div
          className="text-center mt-10 lg:mt-14"
          variants={fadeUp}
          {...motionProps}
        >
          <a
            href={GOOGLE_MAPS_URL}
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
