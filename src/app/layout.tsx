import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import BotanicalGrid from "@/components/BotanicalGrid";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#011a0f',
};

export const metadata: Metadata = {
  title: "The Loch Ness Botanical Society | I3AS Botanical Automation",
  description: "Harnessing decentralized power to enable greater access to botanical automation. Pure-bred Industrial Automation as a Service (I3AS) for the cannabis industry.",
  keywords: ["Loch Ness Botanical Society", "I3AS", "Cannabis Automation", "Aquaponics", "Perennial Waters Collection", "Web3 Botany", "Autonomous Grow"],
  openGraph: {
    title: "The Loch Ness Botanical Society | I3AS",
    description: "Bio-digital orchestration of sustainable grow operations.",
    url: "https://thelochnessbotanicalsociety.com",
    siteName: "The Loch Ness Botanical Society",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Loch Ness Botanical Society | I3AS",
    description: "Cultivate Innovation. Harvest Excellence. Bio-digital orchestration of sustainable grow operations.",
    creator: "@tlnbotanical",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen relative`}
        style={{ background: 'radial-gradient(circle at center, #011a0f 0%, #000 100%)' }}
      >
        <div className="relative z-10">
          {children}
        </div>
        <BotanicalGrid />
      </body>
    </html>
  );
}
