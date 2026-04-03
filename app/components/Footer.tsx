export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-2xl font-black shimmer-text">ISEYA lab.</p>

          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {year} Shota ISEYA. Built with Next.js & Tailwind CSS.
          </p>

          <div className="flex gap-4">
            {[
              { href: "https://x.com/m1_h74", label: "X" },
              { href: "https://github.com/TaroYamada1997", label: "GitHub" },
              { href: "https://zenn.dev/taroyamada5963", label: "Zenn" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium transition-colors duration-200 hover:text-purple-400"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
