"use client";

import { useEffect, useState } from "react";

interface LiquidGlassLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function LiquidGlassLink({
  children,
  className,
  style,
  ...props
}: LiquidGlassLinkProps) {
  const [isChromium, setIsChromium] = useState(false);

  useEffect(() => {
    setIsChromium(!!(window as any).chrome);
  }, []);

  return (
    <>
      {/* SVG filter — hidden, only used by Chromium */}
      {isChromium && (
        <svg
          aria-hidden="true"
          style={{ position: "absolute", width: 0, height: 0 }}
        >
          <defs>
            <filter
              id="liquid-glass-cta"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1.5"
                result="blur"
              />
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.015"
                numOctaves={2}
                seed={2}
                result="noise"
              />
              <feDisplacementMap
                in="blur"
                in2="noise"
                scale={6}
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feColorMatrix
                in="displaced"
                type="saturate"
                values="1.5"
              />
            </filter>
          </defs>
        </svg>
      )}

      <a
        className={`liquid-glass-link ${className ?? ""}`}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "var(--radius-pill)",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow:
            "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.25)",
          color: "var(--color-creme)",
          fontWeight: 500,
          textDecoration: "none",
          transition: `background var(--duration-normal) var(--easing-standard), border-color var(--duration-normal) var(--easing-standard), box-shadow var(--duration-normal) var(--easing-standard)`,
          ...style,
        }}
        {...props}
      >
        {/* Filter layer */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: isChromium
              ? "url(#liquid-glass-cta) brightness(1.15)"
              : "blur(4px) saturate(180%) brightness(1.15)",
            WebkitBackdropFilter: isChromium
              ? "url(#liquid-glass-cta) brightness(1.15)"
              : "blur(4px) saturate(180%) brightness(1.15)",
            borderRadius: "inherit",
          }}
        />

        {/* Specular highlight */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 35%, transparent 55%)",
            borderRadius: "inherit",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <span style={{ position: "relative", zIndex: 10 }}>{children}</span>
      </a>

      <style jsx>{`
        .liquid-glass-link:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22),
            0 4px 12px rgba(0, 0, 0, 0.3) !important;
        }
        .liquid-glass-link:focus-visible {
          outline: none;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 2px 8px rgba(0, 0, 0, 0.25),
            0 0 0 2px var(--color-cuivre) !important;
        }
      `}</style>
    </>
  );
}
