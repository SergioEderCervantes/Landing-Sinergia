"use client";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number; r: number;
  vx: number; vy: number;
  alpha: number; teal: boolean;
}

// ─── HeroLogo ─────────────────────────────────────────────────────────────────
function HeroLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-teal-500/10 blur-3xl animate-pulse pointer-events-none" />

      <svg
        className="w-[min(360px,90%)] h-auto drop-shadow-2xl animate-[float_7s_ease-in-out_infinite]"
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
export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number) =>
    `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

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
        @keyframes shimmer {
          0%   { left: -80%; }
          100% { left: 120%; }
        }
        .btn-cta::after {
          content: '';
          position: absolute;
          inset-block: 0; left: -80%;
          width: 55%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 3.2s ease-in-out infinite 2s;
        }
      `}</style>

      <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden font-sans">
        <Particles />

        {/* Ambient gradient */}
        <div className="absolute top-1/4 left-4 w-[480px] h-[480px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

        {/* ── HEADER ── */}
        <header
          className={`relative z-20 flex items-center justify-between px-12 py-5 ${fade(0)}`}
          style={{ transitionDelay: "0ms" }}
        >
          <a href="/" className="block w-40 shrink-0">
            <img src="/logos/logotipo_blanco.svg" alt="Sinergia" className="w-full" />
          </a>

          {/* Nav slot — uncomment links when ready */}
          <div className="flex-1" />

          <a
            href="/contacto"
            className="bg-white text-black text-sm font-bold px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
            Evalúa mi negocio
          </a>
        </header>

        {/* ── HERO ── */}
        <div className="relative z-10 grid grid-cols-2 gap-8 items-center max-w-[1200px] mx-auto px-6 pt-10 pb-12 min-h-[calc(100vh-80px)]">

          {/* LEFT */}
          <div className="flex flex-col gap-3">


            {/* Headline */}
            <h1
              className={`text-white font-bold leading-[1.08] tracking-[-0.03em] text-5xl ${fade(200)}`}
              style={{ transitionDelay: "200ms" }}
            >
              Consigue un flujo{" "}
              <span className="bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
                predecible
              </span>{" "}
              de citas calificadas, sin perseguir leads ni vivir pegado al celular.
            </h1>

            {/* Subheadline */}
            <p
              className={`text-white/50 text-lg leading-relaxed max-w-[480px] ${fade(340)}`}
              style={{ transitionDelay: "340ms" }}
            >
              Instalamos un sistema de ventas que atrae a tu cliente ideal,
              filtra a los curiosos y agenda automáticamente solo a quienes
              están listos para comprar.
            </p>

            {/* CTA */}
            <div
              className={`flex flex-col gap-1.5 items-start ${fade(460)}`}
              style={{ transitionDelay: "460ms" }}
            >
              <a
                href="/contacto"
                className="btn-cta relative overflow-hidden bg-white text-black font-bold text-base px-8 py-4 rounded-lg hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_8px_30px_rgba(20,184,166,0.22)] active:scale-[0.985] transition-all duration-200"
              >
                Iniciar Diagnóstico de Viabilidad
              </a>
              <span className="text-teal-400 text-sm font-medium">
                Solo toma 45 segundos
              </span>
            </div>

            {/* Social proof */}
            <div
              className={`flex items-center gap-3 ${fade(580)}`}
              style={{ transitionDelay: "580ms" }}
            >
              <div className="flex">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#0a0a0a]"
                    style={{
                      background: `hsl(${158 + i * 28}, 38%, ${38 + i * 9}%)`,
                      marginLeft: i > 0 ? "-7px" : "0",
                    }}
                  />
                ))}
              </div>
              <span className="text-white/40 text-sm">
                +127 negocios ya tienen su sistema activo
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`h-[500px] relative ${fade(280)}`}
            style={{ transitionDelay: "280ms" }}
          >
            <HeroLogo />
          </div>
        </div>
      </div>
    </>
  );
}
