import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suleiman Mejd | Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
  keywords: ["developer", "portfolio", "web development", "software engineer", "cybersecurity", "mcat mentor", "full stack developer", "python", "java", "javascript", "html", "css", "react", "next.js", "node.js", "express", "mongodb", "sql", "flask", "sqlalchemy", "plugin development", "minecraft", "encryption"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
