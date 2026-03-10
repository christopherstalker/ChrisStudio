import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Manrope } from "next/font/google";

import "./globals.css";
import { IntroOverlay } from "@/components/intro/IntroOverlay";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium software design and development`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Premium software design and development`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Open Graph image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium software design and development`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f1e8",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          sans.variable,
          serif.variable,
          mono.variable,
          "selection:bg-accent/15 selection:text-ink",
        )}
      >
        {children}
        <IntroOverlay />
      </body>
    </html>
  );
}
