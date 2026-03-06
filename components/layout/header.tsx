import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import MobileMenu from "./mobile-menu";

const NAV_ITEMS = [
  { label: "La Promesse", href: "#promesse" },
  { label: "Nos Artisans", href: "#artisans" },
  { label: "L'Experience", href: "#experience" },
  { label: "Avis", href: "#avis" },
] as const;

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      role="banner"
    >
      <div className="header-backdrop" data-scrolled="false" />
      <nav
        className="container-custom relative flex items-center justify-between"
        style={{ height: "var(--header-height)" }}
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 transition-opacity hover:opacity-80"
          style={{
            transitionDuration: "var(--duration-normal)",
            transitionTimingFunction: "var(--easing-standard)",
          }}
        >
          <Image
            src="/logo/2025-09-14_15-27-20_UTC.svg"
            alt="Strict Food's"
            width={180}
            height={21}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center" style={{ gap: "var(--spacing-gap)" }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-creme transition-colors hover:text-or-braise"
                style={{
                  fontSize: "var(--font-size-body)",
                  fontWeight: "var(--font-weight-regular)",
                  transitionDuration: "var(--duration-normal)",
                  transitionTimingFunction: "var(--easing-standard)",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="tel:+33611745944"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground transition-[filter] hover:brightness-110"
          style={{
            padding: "var(--button-padding)",
            borderRadius: "var(--radius-pill)",
            fontSize: "var(--font-size-body)",
            fontWeight: "var(--font-weight-semibold)",
            minHeight: "var(--button-min-height)",
            transitionDuration: "var(--duration-fast)",
            transitionTimingFunction: "ease",
          }}
          aria-label="Appeler pour commander"
        >
          <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
          Commander
        </Link>

        {/* Mobile Menu (Client Component) */}
        <MobileMenu items={NAV_ITEMS} />
      </nav>
    </header>
  );
}

export { NAV_ITEMS };
