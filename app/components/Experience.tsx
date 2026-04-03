"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "2025 - 現在",
    role: "ソフトウェアエンジニア",
    company: "KDDIアジャイル開発センター",
    location: "Japan",
    description:
      "Webアプリケーション開発に携わるとともに、LLMを活用したネットワーク運用基盤の構築を推進。最先端のAI技術を実際のインフラ運用に応用するプロジェクトを担当しています。",
    tags: ["Web開発", "LLM", "ネットワーク運用", "AI"],
    color: "#7c3aed",
  },
  {
    period: "2025 - 現在",
    role: "個人事業主 / フリーランスエンジニア",
    company: "ISEYA lab",
    location: "Japan",
    description:
      "個人事業として副業・フリーランス案件を受け付けています。Webアプリケーション開発やLLMを活用したシステム構築など、幅広い案件に対応可能です。お気軽にご相談ください。",
    tags: ["副業", "Web開発", "LLM活用"],
    color: "#f97316",
  },
  {
    period: "2022 - 2025",
    role: "ソフトウェアエンジニア",
    company: "株式会社コラボスタイル",
    location: "Japan",
    description:
      "toB向けWebアプリケーションの開発を担当。企業向けプロダクトの設計・実装に携わり、ビジネス課題をテクノロジーで解決することに取り組みました。",
    tags: ["Web開発", "toB", "Webアプリ"],
    color: "#ec4899",
  },
];

export default function Experience() {
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
    <section id="experience" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500" />
            <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase">
              Experience
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Career Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #7c3aed 10%, #ec4899 50%, #06b6d4 90%, transparent 100%)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-0`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.15}s`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs z-10"
                  style={{
                    color: exp.color,
                    background: "#07070f",
                    transform: "translate(-50%, 24px)",
                    boxShadow: `0 0 20px ${exp.color}60`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: exp.color }}
                  />
                </div>

                {/* Period - desktop */}
                <div
                  className={`hidden md:flex w-1/2 items-start pt-6 ${
                    idx % 2 === 0 ? "justify-end pr-10" : "justify-start pl-10"
                  }`}
                >
                  <div className="text-right">
                    <span
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `${exp.color}20`,
                        color: exp.color,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    idx % 2 === 0 ? "md:pl-10" : "md:pr-10"
                  }`}
                >
                  <div
                    className="rounded-2xl p-6 card-hover"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${exp.color}30`,
                    }}
                  >
                    {/* Mobile period */}
                    <span
                      className="md:hidden inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3"
                      style={{
                        background: `${exp.color}20`,
                        color: exp.color,
                      }}
                    >
                      {exp.period}
                    </span>

                    <div className="flex items-start gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            background: `${exp.color}15`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
