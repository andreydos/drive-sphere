import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drive Sphere",
  description: "For all who love driving",
  category: "website",
  generator: "Next.js",
  // metadataBase: new URL('/'),
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/*<link rel="manifest" href="/manifest.json" />*/}
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
