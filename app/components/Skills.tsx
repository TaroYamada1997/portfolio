"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#7c3aed",
    bgColor: "rgba(124, 58, 237, 0.1)",
    borderColor: "rgba(124, 58, 237, 0.3)",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#ec4899",
    bgColor: "rgba(236, 72, 153, 0.1)",
    borderColor: "rgba(236, 72, 153, 0.3)",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Go", level: 80 },
      { name: "Python", level: 78 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    category: "Infrastructure",
    icon: "☁️",
    color: "#06b6d4",
    bgColor: "rgba(6, 182, 212, 0.1)",
    borderColor: "rgba(6, 182, 212, 0.3)",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker / K8s", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 65 },
    ],
  },
  {
    category: "Design",
    icon: "✏️",
    color: "#f97316",
    bgColor: "rgba(249, 115, 22, 0.1)",
    borderColor: "rgba(249, 115, 22, 0.3)",
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Motion Design", level: 70 },
      { name: "Brand Design", level: 72 },
    ],
  },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Go",
  "Python", "PostgreSQL", "MongoDB", "Redis", "AWS", "GCP",
  "Docker", "Kubernetes", "Terraform", "GraphQL", "REST API", "WebSocket",
  "Figma", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Three.js", "Prisma",
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarVisible(true); },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
              Skills
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What I Can Do
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            フロントエンドからインフラまで、幅広いスタックでプロダクト開発に貢献できます
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" ref={barRef}>
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.category}
              className="rounded-2xl p-6 card-hover"
              style={{
                background: cat.bgColor,
                border: `1px solid ${cat.borderColor}`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${catIdx * 0.1}s`,
              }}
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-bold text-white mb-4">
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className="text-xs font-medium"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="h-full rounded-full skill-bar"
                        style={{
                          width: barVisible ? `${skill.level}%` : "0%",
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                          boxShadow: `0 0 8px ${cat.color}60`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="text-center">
          <p
            className="text-sm font-medium mb-6 uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Technologies & Tools
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "scale(1)" : "scale(0.8)",
                  transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + i * 0.03}s`,
                }}
                onMouseEnter={(e) => {
                  const colors = ["#7c3aed", "#ec4899", "#f97316", "#06b6d4", "#22c55e"];
                  const color = colors[i % colors.length];
                  e.currentTarget.style.background = `${color}20`;
                  e.currentTarget.style.borderColor = `${color}50`;
                  e.currentTarget.style.color = color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
