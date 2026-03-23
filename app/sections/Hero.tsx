"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { HeroContent } from "../content/types";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number; r: number;
  vx: number; vy: number;
  alpha: number; teal: boolean;
}

// ─── HeroLogo ─────────────────────────────────────────────────────────────────
function HeroLogo() {
  return (
    <div className="hidden md:flex relative w-full h-full  items-center justify-center">
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-500/10 blur-3xl animate-pulse pointer-events-none" />
      <svg
        className="w-[min(280px,80%)] md:w-[min(400px,90%)] h-auto drop-shadow-2xl blur-md animate-[float_7s_ease-in-out_infinite]"
        viewBox="0 0 423 375"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M263.862 374.381C232.05 374.381 206.163 348.494 206.163 316.683V269.368C206.163 237.717 180.501 212.072 148.867 212.072H57.6987C25.8871 212.072 0 186.184 0 154.373V57.6987C0 25.8871 25.8871 0 57.6987 0H158.478C190.29 0 216.177 25.8871 216.177 57.6987V105.013C216.177 136.664 241.839 162.31 273.473 162.31H364.641C396.453 162.31 422.34 188.197 422.34 220.008V316.683C422.34 348.494 396.453 374.381 364.641 374.381H263.862Z"
          fill="#E1E5F2"
        />
        <path
          className="animate-[floatRect_7s_ease-in-out_infinite_1.2s]"
          d="M384.997 0.190674H291.43C270.758 0.190674 254 16.9487 254 37.6207V87.3987C254 108.071 270.758 124.829 291.43 124.829H384.997C405.669 124.829 422.427 108.071 422.427 87.3987V37.6207C422.427 16.9487 405.669 0.190674 384.997 0.190674Z"
          fill="#E1E5F2"
        />
      </svg>
    </div>
  );
}

// ─── Particles ────────────────────────────────────────────────────────────────
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;
    let animId: number;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const { width: W, height: H } = canvas;

    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      alpha: Math.random() * 0.45 + 0.1,
      teal: Math.random() > 0.75,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.teal
          ? `rgba(20,184,166,${p.alpha})`
          : `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}

// ─── Hero Page ────────────────────────────────────────────────────────────────
interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number) =>
    `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  const titleParts = content.title.split(content.titleHighlight);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes floatRect {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(6px) rotate(0.8deg); }
        }
      `}</style>

      <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden font-sans">
        <Particles />

        {/* Ambient gradient */}
        <div className="absolute top-1/4 left-4 size-120 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

        {/* ── HEADER ── */}
        <header
          className={`relative z-20 flex flex-col md:flex-row items-center justify-between px-6 py-4 md:px-12 md:py-5 ${fade(0)}`}
          style={{ transitionDelay: "0ms" }}
        >
          <a href="/" className="block w-40 shrink-0">
            <img src="/logos/logotipo_blanco.svg" alt="Sinergia" className="w-full" />
          </a>

          <div className="flex-1" />

          <Button className="hidden md:block" href={content.ctaHref}>
            {content.headerCtaText}
          </Button>
        </header>

        {/* ── HERO ── */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8  items-center max-w-300 mx-auto px-6 md:px-12 pt-6 mt-30 md:mt-0 md:pt-8 pb-12 min-h-[calc(100vh-72px)]">

          {/* LEFT */}
          <div className="flex flex-col gap-2 md:gap-3 text-center md:text-left items-center md:items-start">

            {/* Headline */}
            <h1
              className={`text-white font-bold leading-[1.08] tracking-[-0.03em] text-4xl md:text-5xl ${fade(200)}`}
              style={{ transitionDelay: "200ms" }}
            >
              {titleParts[0]}
              <span className="bg-linear-to-r from-white to-teal-400 bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>
              {titleParts[1]}
            </h1>

            {/* Subheadline */}
            <p
              className={`text-white/50 text-base md:text-lg leading-relaxed max-w-120 ${fade(340)}`}
              style={{ transitionDelay: "340ms" }}
            >
              {content.subtitle}
            </p>

            {/* CTA */}
            <div
              className={`flex flex-col gap-1.5 items-center md:items-start ${fade(460)}`}
              style={{ transitionDelay: "460ms" }}
            >
              <Button href={content.ctaHref}>
                {content.ctaText}
              </Button>
              <span className="text-teal-400 text-sm font-medium">
                {content.ctaSubtext}
              </span>
            </div>

            {/* Social proof */}
          </div>

          {/* RIGHT — hidden on mobile, shown on md+ */}
          <div
            className={`hidden md:block h-125 relative ${fade(280)}`}
            style={{ transitionDelay: "280ms" }}
          >
            <HeroLogo />
          </div>

          {/* Mobile logo — smaller, shown only on mobile below content */}
          <div className={`md:hidden h-65 relative ${fade(500)}`} style={{ transitionDelay: "500ms" }}>
            <HeroLogo />
          </div>
        </div>
      </div>
    </>
  );
}
