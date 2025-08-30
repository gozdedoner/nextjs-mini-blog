import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Mini Blog – Next.js",
  description: "SSG + API + CSR demo built with Next.js 14 (App Router).",
  openGraph: {
    title: "Mini Blog – Next.js",
    description: "SSG + API + CSR demo",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <div className="footer">Built with Next.js • Deployed on Vercel</div>
      </body>
    </html>
  );
}