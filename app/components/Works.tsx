"use client";

import { useEffect, useRef, useState } from "react";

const works = [
  {
    title: "スプラトゥーン3 クイズアプリ",
    description:
      "スプラトゥーン3に関するクイズに挑戦できるWebアプリ。ゲームが好きという趣味から個人開発でリリース。ブキ・ステージ・ルールなど幅広いカテゴリのクイズを収録。",
    tags: ["個人開発", "クイズ", "ゲーム"],
    color: "#f97316",
    emoji: "🦑",
    link: "https://www.splatoon3-quiz.com/",
    github: "https://github.com/TaroYamada1997",
    featured: true,
  },
];

export default function Works() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="works" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
              Works
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Selected Projects
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            これまでに制作したプロジェクトをご紹介します
          </p>
        </div>

        {/* Works grid */}
        <div className="flex justify-center mt-12">
        <div className="w-full max-w-sm">
          {works.map((work, idx) => (
            <div
              key={work.title}
              className="group rounded-2xl overflow-hidden card-hover cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid rgba(255,255,255,0.08)`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.08}s`,
              }}
            >
              {/* Card top accent */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${work.color}, ${work.color}44)`,
                }}
              />

              <div className="p-6">
                {/* Featured badge */}
                <div className="flex items-start justify-between mb-4">
                  {work.featured && (
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full"
                      style={{
                        background: `${work.color}20`,
                        color: work.color,
                        border: `1px solid ${work.color}40`,
                      }}
                    >
                      ★ Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {work.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {work.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: `${work.color}15`,
                        color: work.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200 hover:opacity-80"
                    style={{ background: work.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Site →
                  </a>
                  <a
                    href={work.github}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:opacity-80"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/TaroYamada1997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
