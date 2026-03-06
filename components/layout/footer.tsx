import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "La Promesse", href: "#promesse" },
  { label: "Nos Artisans", href: "#artisans" },
  { label: "L'Experience", href: "#experience" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
] as const;

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="w-full bg-charbon"
      style={{
        paddingTop: "var(--spacing-section-padding-mobile)",
        paddingBottom: "var(--spacing-gap)",
      }}
      role="contentinfo"
    >
      <div className="container-custom">
        {/* Desktop — 3 blocks (DENSITY 3) */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "var(--spacing-gap)",
          }}
        >
          {/* Block 1 — Logo + Tagline */}
          <div className="flex flex-col" style={{ gap: "var(--spacing-gap-tight)" }}>
            <Link
              href="/"
              className="transition-opacity hover:opacity-80"
              style={{
                transitionDuration: "var(--duration-normal)",
                transitionTimingFunction: "var(--easing-standard)",
              }}
            >
              <Image
                src="/logo/2025-09-14_15-27-20_UTC.svg"
                alt="Strict Food's"
                width={200}
                height={24}
              />
            </Link>
            <p
              className="text-sable"
              style={{
                fontSize: "var(--font-size-body)",
                lineHeight: "var(--line-height-relaxed)",
                maxWidth: "var(--max-width-text)",
              }}
            >
              Le cheat meal qui n&apos;en est pas un.
            </p>
            {/* Socials — grouped with logo */}
            <div
              className="flex items-center"
              style={{ gap: "var(--spacing-gap-tight)", marginTop: "var(--spacing-gap-tight)" }}
            >
              <a
                href="https://instagram.com/strictfood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sable transition-colors hover:text-or-braise"
                style={{
                  transitionDuration: "var(--duration-normal)",
                  transitionTimingFunction: "var(--easing-standard)",
                }}
                aria-label="Instagram StrictFood"
              >
                <Instagram size={24} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href="https://tiktok.com/@strictfood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sable transition-colors hover:text-or-braise"
                style={{
                  transitionDuration: "var(--duration-normal)",
                  transitionTimingFunction: "var(--easing-standard)",
                }}
                aria-label="TikTok StrictFood"
              >
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>

          {/* Block 2 — Navigation */}
          <div className="flex flex-col" style={{ gap: "var(--spacing-gap-tight)" }}>
            <h3
              className="text-ivoire"
              style={{
                fontSize: "var(--font-size-small)",
                fontWeight: "var(--font-weight-medium)",
                letterSpacing: "var(--letter-spacing-uppercase)",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col" style={{ gap: "0.5rem" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sable transition-colors hover:text-or-braise"
                    style={{
                      fontSize: "var(--font-size-body)",
                      transitionDuration: "var(--duration-normal)",
                      transitionTimingFunction: "var(--easing-standard)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 3 — Contact + Legal */}
          <div className="flex flex-col" style={{ gap: "var(--spacing-gap-tight)" }}>
            <h3
              className="text-ivoire"
              style={{
                fontSize: "var(--font-size-small)",
                fontWeight: "var(--font-weight-medium)",
                letterSpacing: "var(--letter-spacing-uppercase)",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              Contact
            </h3>
            <ul className="flex flex-col" style={{ gap: "0.5rem" }}>
              <li>
                <Link
                  href="tel:+33611745944"
                  className="inline-flex items-center gap-2 text-sable transition-colors hover:text-or-braise"
                  style={{
                    fontSize: "var(--font-size-body)",
                    transitionDuration: "var(--duration-normal)",
                    transitionTimingFunction: "var(--easing-standard)",
                  }}
                >
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                  06 11 74 59 44
                </Link>
              </li>
              <li
                className="inline-flex items-center gap-2 text-sable"
                style={{ fontSize: "var(--font-size-body)" }}
              >
                <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
                Perpignan
              </li>
            </ul>
            <Link
              href="/mentions-legales"
              className="text-pierre transition-colors hover:text-or-braise"
              style={{
                fontSize: "var(--font-size-small)",
                marginTop: "var(--spacing-gap-tight)",
                transitionDuration: "var(--duration-normal)",
                transitionTimingFunction: "var(--easing-standard)",
              }}
            >
              Mentions legales
            </Link>
          </div>
        </div>

        {/* Mobile layout — stacked */}
        <div className="flex flex-col lg:hidden" style={{ gap: "var(--spacing-breath)" }}>
          {/* Logo + Tagline */}
          <div
            className="flex flex-col items-center text-center"
            style={{ gap: "var(--spacing-gap-tight)" }}
          >
            <Link href="/">
              <Image
                src="/logo/2025-09-14_15-27-20_UTC.svg"
                alt="Strict Food's"
                width={180}
                height={21}
              />
            </Link>
            <p className="text-sable" style={{ fontSize: "var(--font-size-body)" }}>
              Le cheat meal qui n&apos;en est pas un.
            </p>
          </div>

          {/* Nav */}
          <ul
            className="flex flex-wrap justify-center"
            style={{ gap: "var(--spacing-gap-tight)" }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sable transition-colors hover:text-or-braise"
                  style={{
                    fontSize: "var(--font-size-body)",
                    transitionDuration: "var(--duration-normal)",
                    transitionTimingFunction: "var(--easing-standard)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex flex-col items-center" style={{ gap: "0.5rem" }}>
            <Link
              href="tel:+33611745944"
              className="inline-flex items-center gap-2 text-sable transition-colors hover:text-or-braise"
              style={{
                fontSize: "var(--font-size-body)",
                transitionDuration: "var(--duration-normal)",
                transitionTimingFunction: "var(--easing-standard)",
              }}
            >
              <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
              06 11 74 59 44
            </Link>
            <span
              className="inline-flex items-center gap-2 text-sable"
              style={{ fontSize: "var(--font-size-body)" }}
            >
              <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
              Perpignan
            </span>
          </div>

          {/* Socials */}
          <div className="flex justify-center" style={{ gap: "var(--spacing-gap-tight)" }}>
            <a
              href="https://instagram.com/strictfood"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sable transition-colors hover:text-or-braise"
              style={{
                transitionDuration: "var(--duration-normal)",
                transitionTimingFunction: "var(--easing-standard)",
              }}
              aria-label="Instagram StrictFood"
            >
              <Instagram size={24} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href="https://tiktok.com/@strictfood"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sable transition-colors hover:text-or-braise"
              style={{
                transitionDuration: "var(--duration-normal)",
                transitionTimingFunction: "var(--easing-standard)",
              }}
              aria-label="TikTok StrictFood"
            >
              <TikTokIcon size={24} />
            </a>
          </div>

          {/* Legal */}
          <Link
            href="/mentions-legales"
            className="text-center text-pierre transition-colors hover:text-or-braise"
            style={{
              fontSize: "var(--font-size-body)",
              transitionDuration: "var(--duration-normal)",
              transitionTimingFunction: "var(--easing-standard)",
            }}
          >
            Mentions legales
          </Link>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-border/50"
          style={{ marginTop: "var(--spacing-breath)", paddingTop: "var(--spacing-gap)" }}
        >
          <p
            className="text-center text-pierre"
            style={{
              fontSize: "var(--font-size-caption)",
              lineHeight: "var(--line-height-normal)",
            }}
          >
            &copy; 2026 StrictFood &mdash; RD FITNESS
          </p>
        </div>
      </div>
    </footer>
  );
}
