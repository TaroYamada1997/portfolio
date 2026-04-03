import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shota ISEYA | ISEYA lab",
  description:
    "ソフトウェアエンジニア Shota ISEYA のポートフォリオ。WebアプリケーションからLLMを活用したシステム構築まで。",
  openGraph: {
    title: "Shota ISEYA | ISEYA lab",
    description: "ソフトウェアエンジニア Shota ISEYA のポートフォリオ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
