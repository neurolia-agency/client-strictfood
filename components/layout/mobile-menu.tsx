"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface MobileMenuProps {
  items: readonly NavItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Scroll detection — toggle data-scrolled on the backdrop element
  useEffect(() => {
    const backdrop = document.querySelector(".header-backdrop");
    if (backdrop) {
      backdropRef.current = backdrop as HTMLDivElement;
    }

    const handleScroll = () => {
      if (backdropRef.current) {
        backdropRef.current.dataset.scrolled = window.scrollY > 10 ? "true" : "false";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="relative z-10 flex lg:hidden items-center justify-center text-creme transition-colors hover:text-or-braise"
        style={{
          width: "var(--button-min-height)",
          height: "var(--button-min-height)",
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--easing-standard)",
        }}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? (
          <X size={24} strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <Menu size={24} strokeWidth={1.5} aria-hidden="true" />
        )}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="mobile-nav-overlay fixed inset-0 z-40 lg:hidden"
          aria-hidden="true"
          onClick={close}
        />
      )}

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-charbon lg:hidden"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: `transform var(--duration-reveal) var(--easing-standard)`,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <ul className="flex flex-col items-center" style={{ gap: "var(--spacing-breath)" }}>
          {items.map((item, index) => (
            <li
              key={item.href}
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(24px)",
                transition: `opacity var(--duration-reveal) var(--easing-standard), transform var(--duration-reveal) var(--easing-standard)`,
                transitionDelay: isOpen
                  ? `calc(var(--stagger-base) + ${index} * var(--stagger-delay))`
                  : "0ms",
              }}
            >
              <Link
                href={item.href}
                className="block text-creme transition-colors hover:text-or-braise"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--font-size-h3)",
                  fontWeight: "var(--font-weight-semibold)",
                  transitionDuration: "var(--duration-normal)",
                  transitionTimingFunction: "var(--easing-standard)",
                }}
                onClick={close}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div
          style={{
            marginTop: "var(--spacing-breath)",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(24px)",
            transition: `opacity var(--duration-reveal) var(--easing-standard), transform var(--duration-reveal) var(--easing-standard)`,
            transitionDelay: isOpen
              ? `calc(var(--stagger-base) + ${items.length} * var(--stagger-delay))`
              : "0ms",
          }}
        >
          <Link
            href="tel:+33611745944"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground"
            style={{
              padding: "var(--button-padding-mobile)",
              borderRadius: "var(--radius-standard)",
              fontSize: "var(--font-size-body)",
              fontWeight: "var(--font-weight-semibold)",
              minHeight: "var(--button-min-height)",
            }}
            onClick={close}
            aria-label="Appeler pour commander"
          >
            <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
            Commander
          </Link>
        </div>
      </div>

      {/* Mobile FAB — persistent phone button */}
      <Link
        href="tel:+33611745944"
        className="fixed z-50 flex lg:hidden items-center justify-center bg-primary text-primary-foreground"
        style={{
          bottom: "var(--fab-offset)",
          right: "var(--fab-offset)",
          width: "var(--fab-size)",
          height: "var(--fab-size)",
          borderRadius: "var(--radius-pill)",
          boxShadow: "var(--shadow-glow)",
          display: isOpen ? "none" : undefined,
        }}
        aria-label="Appeler StrictFood"
      >
        <Phone size={24} strokeWidth={1.5} aria-hidden="true" />
      </Link>
    </>
  );
}
