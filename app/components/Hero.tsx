"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Software Engineer",
  "Web App Developer",
  "LLM Application Builder",
  "ISEYA lab",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (!isDeleting && displayed.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else if (isDeleting && displayed.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full blur-3xl animate-float opacity-30"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full blur-3xl animate-float2 opacity-30"
        style={{
          background: "radial-gradient(circle, #ec4899 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        }}
      />

      {/* Floating decorations */}
      <div className="absolute top-20 right-10 md:right-32 animate-float-delay">
        <div
          className="w-16 h-16 rounded-2xl rotate-12 opacity-60"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #ec4899)",
            boxShadow: "0 8px 32px rgba(124, 58, 237, 0.4)",
          }}
        />
      </div>
      <div className="absolute bottom-32 left-10 md:left-32 animate-float2-delay">
        <div
          className="w-12 h-12 rounded-xl -rotate-12 opacity-50"
          style={{
            background: "linear-gradient(135deg, #06b6d4, #6366f1)",
            boxShadow: "0 8px 32px rgba(6, 182, 212, 0.4)",
          }}
        />
      </div>
      <div className="absolute top-1/3 left-16 animate-float opacity-40 hidden md:block">
        <div
          className="w-8 h-8 rounded-full"
          style={{
            background: "linear-gradient(135deg, #f97316, #ec4899)",
          }}
        />
      </div>

      {/* Rotating rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border opacity-10 animate-spin-slow hidden md:block"
        style={{ borderColor: "rgba(124, 58, 237, 0.5)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border opacity-5 animate-spin-reverse hidden md:block"
        style={{ borderColor: "rgba(236, 72, 153, 0.5)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(124, 58, 237, 0.15)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            color: "#c4b5fd",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          Available for new projects
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none tracking-tight">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text">Shota</span>
        </h1>

        {/* Typewriter role */}
        <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold mb-6 h-12">
          <span className="gradient-text-cool">{displayed}</span>
          <span
            className="w-0.5 h-8 bg-purple-400"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              boxShadow: "0 8px 32px rgba(124, 58, 237, 0.4)",
            }}
          >
            View My Works ✨
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/30">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
