import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "p2ktv | Paul",
    template: "%s | p2ktv",
  },
  description:
    "Building scalable & efficient backend systems with a passion for creator and management tools.",
  keywords: ["p2k", "p2ktv", "p2k.dev", "paul schaper"],
  authors: [{ name: "p2ktv" }],
  creator: "p2ktv",
  metadataBase: new URL("https://p2k.dev"),

  openGraph: {
    title: "p2ktv | Paul",
    description:
      "Building scalable & efficient backend systems with a passion for creator and management tools.",
    url: "https://p2k.dev",
    siteName: "p2ktv",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "p2ktv portfolio preview",
      },
    ],
    locale: "en-US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "p2ktv",
    description:
      "Building scalable & efficient backend systems with a passion for creator and management tools.",
    images: [""],
    creator: "@p2ktv",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "bg-neutral-950 text-neutral-200 antialiased",
          "max-w-2xl mx-auto px-6 py-12 leading-relaxed"
        )}
      >
        {children}
      </body>
    </html>
  );
}
