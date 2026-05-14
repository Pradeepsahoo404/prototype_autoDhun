import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navbar/Navbar";
import { siteConfig } from "@/config/site";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-barlow",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover"
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={barlow.variable} lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="min-w-0 max-w-[100vw] overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
