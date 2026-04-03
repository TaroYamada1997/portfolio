"use client";

import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    label: "X (Twitter)",
    handle: "@m1_h74",
    href: "https://x.com/m1_h74",
    color: "#1d9bf0",
    bgColor: "rgba(29, 155, 240, 0.1)",
    borderColor: "rgba(29, 155, 240, 0.3)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    description: "日々の開発知見やTipsをシェアしています",
  },
  {
    label: "GitHub",
    handle: "TaroYamada1997",
    href: "https://github.com/TaroYamada1997",
    color: "#e2e8f0",
    bgColor: "rgba(226, 232, 240, 0.05)",
    borderColor: "rgba(226, 232, 240, 0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    description: "OSSプロジェクトや個人開発のコードを公開しています",
  },
  {
    label: "Zenn",
    handle: "taroyamada5963",
    href: "https://zenn.dev/taroyamada5963",
    color: "#3ea8ff",
    bgColor: "rgba(62, 168, 255, 0.1)",
    borderColor: "rgba(62, 168, 255, 0.3)",
    icon: (
      <svg viewBox="0 0 88 88" className="w-6 h-6 fill-current">
        <path d="M0 0h24.7L68 88H43.3zm24.7 0H88L44 88z" />
      </svg>
    ),
    description: "技術記事やチュートリアルを定期的に投稿しています",
  },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputBase: React.CSSProperties = {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "12px",
    padding: "14px 16px",
    color: "white",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    ...inputBase,
    background: focused === name
      ? "rgba(124, 58, 237, 0.08)"
      : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === name ? "rgba(124, 58, 237, 0.5)" : "rgba(255,255,255,0.1)"}`,
    boxShadow: focused === name ? "0 0 20px rgba(124, 58, 237, 0.15)" : "none",
  });

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124, 58, 237, 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
              Contact
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            新規プロジェクト、コラボレーション、またはちょっとした相談でも、お気軽にご連絡ください。
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-start"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Left - Info */}
          <div className="space-y-8 min-w-0">
            {/* Email CTA */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(124, 58, 237, 0.08)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
              }}
            >
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                メールで直接連絡する
              </p>
              <a
                href="mailto:shota@iseya-lab.com"
                className="font-bold text-white hover:opacity-80 transition-opacity duration-200 flex items-center gap-2 group"
                style={{ fontSize: "clamp(0.85rem, 3.5vw, 1.25rem)" }}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: "rgba(124, 58, 237, 0.3)" }}
                >
                  ✉️
                </span>
                <span className="truncate">shota@iseya-lab.com</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 flex-shrink-0">
                  →
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p
                className="text-sm font-medium uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                SNS / Links
              </p>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: social.bgColor,
                    border: `1px solid ${social.borderColor}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ color: social.color, background: `${social.color}15` }}
                  >
                    {social.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-white">
                        {social.label}
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: social.color }}
                      >
                        {social.handle}
                      </span>
                    </div>
                    <p
                      className="text-xs mt-0.5 truncate"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {social.description}
                    </p>
                  </div>
                  <span
                    className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                    style={{ color: social.color }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact form */}
          <div
            className="rounded-2xl p-6 md:p-8 min-w-0"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  メッセージを送信しました！
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)" }}>
                  48時間以内にご返信します。お楽しみに！
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="taro@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    メッセージ
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="プロジェクトの概要やご相談内容をお聞かせください..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                    boxShadow: "0 8px 32px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  送信する ✨
                </button>
                <p
                  className="text-xs text-center"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  通常48時間以内にご返信します
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
