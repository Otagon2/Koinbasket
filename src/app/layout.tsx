import type { Metadata } from "next";
import { Exo_2, Orbitron } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KoinBasket | Invest Smart. Build Wealth.",
  description: "Diversified crypto baskets like ETFs. Secure, automated, and easy. Start with just $10.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${exo2.variable} ${orbitron.variable} antialiased bg-brand-light text-slate-900 selection:bg-brand-lime selection:text-brand-dark`}
      >
        {children}
      </body>
    </html>
  );
}
