import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NicorAI | AI & Digital Transformation Solutions for Smarter Business",
  description:
    "NicorAI helps organizations harness the power of AI and digital innovation to boost productivity, sustainability, and long-term growth.",
  icons: {
    icon: [
      { url: "/assets/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/images/favicons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "NicorAI",
    title: "NicorAI | AI & Digital Transformation Solutions for Smarter Business",
    description:
      "NicorAI helps organizations harness the power of AI and digital innovation to boost productivity, sustainability, and long-term growth.",
    images: ["/uploads/metadata/images/meta-og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/fonts/nb_international_pro_regular-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/NBInternationalBoldWebfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/NBInternationalLightWebfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/NBInternationalMonoWebfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/styles/main.css" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/assets/images/favicons/safari-pinned-tab.svg" color="#151f26" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <MobileMenu />
        {children}
        <Footer />
        <script src="/assets/scripts/app.js" defer />
      </body>
    </html>
  );
}
