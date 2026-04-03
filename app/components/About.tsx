"use client";

import { useEffect, useRef, useState } from "react";


export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ec4899 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent" />
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="text-white">Shota ISEYA</span>
              <br />
              <span className="gradient-text">Software</span>
              <br />
              <span className="text-white">Engineer</span>
            </h2>

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              <p>
                2022年より事業会社でtoB向けWebアプリケーションの開発を担当。現在はKDDIアジャイル開発センターでWebアプリケーション開発に加え、LLMを活用したネットワーク運用基盤の構築にも携わっています。
              </p>
              <p>
                AWS Community Buildersに選出。個人事業「ISEYA lab」として、副業・フリーランス案件も受け付けています。お気軽にご相談ください。
              </p>
              <p>
                趣味はゲームと野球観戦。オフの時間も全力で楽しんでいます⚾
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["TypeScript", "React", "Next.js", "Python", "LLM", "AWS"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(124, 58, 237, 0.15)",
                      border: "1px solid rgba(124, 58, 237, 0.3)",
                      color: "#c4b5fd",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right - Stats & Avatar */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
            }}
          >
            {/* Avatar placeholder */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                {/* Rotating ring */}
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #7c3aed, #ec4899, #f97316, #7c3aed)",
                    padding: "3px",
                  }}
                />
                <div
                  className="relative w-48 h-48 rounded-full flex items-center justify-center text-6xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #1e1b4b, #0c0a1e)",
                    border: "3px solid transparent",
                    backgroundClip: "padding-box",
                    zIndex: 1,
                  }}
                >
                  <div
                    className="w-48 h-48 rounded-full flex items-center justify-center text-6xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #0c0a1e)",
                    }}
                  >
                    🚀
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
