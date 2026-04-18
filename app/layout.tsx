import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suleiman.dev"),
  title: {
    template: "%s | Suleiman Mejd",
    default: "Suleiman Mejd — Full-Stack Developer",
  },
  description:
    "Full-stack developer and CS student at Old Dominion University. I build web apps, mobile tools, and the occasional thing that probably shouldn't exist.",
  authors: [{ name: "Suleiman Mejd" }],
  keywords: ["Suleiman Mejd", "full-stack developer", "software engineer", "portfolio", "Next.js"],
  openGraph: {
    title: "Suleiman Mejd - Full-Stack Developer",
    description:
      "Full-stack developer and CS student at Old Dominion University. I build web apps, mobile tools, and the occasional thing that probably shouldn't exist.",
    url: "https://suleiman.dev",
    siteName: "Suleiman Mejd",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Suleiman Mejd - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Suleiman Mejd — Full-Stack Developer",
    description:
      "Full-stack developer and CS student at Old Dominion University. I build web apps, mobile tools, and the occasional thing that probably shouldn't exist.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${dmMono.variable} font-sans antialiased bg-canvas dark:bg-canvas-dark text-text-primary dark:text-text-dark-primary transition-colors duration-150`}
      >
        {children}
      </body>
    </html>
  );
}
