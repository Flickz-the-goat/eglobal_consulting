import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Endorphin Global - Performance-Based Healthcare Business Consulting",
  description:
    "Transform your healthcare practice with Endorphin Global's performance-based consulting. We only earn when you do. Boost revenue, reduce costs, and scale your practice with AI-powered solutions. HIPAA compliant with 150% average ROI increase.",
  keywords:
    "healthcare consulting, medical practice growth, performance-based consulting, healthcare business optimization, medical practice revenue, HIPAA compliant consulting, healthcare automation, medical practice scaling, healthcare business consulting, practice management",
  authors: [{ name: "Endorphin Global" }],
  creator: "Endorphin Global",
  publisher: "Endorphin Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://endorphinglobal.com",
    siteName: "Endorphin Global",
    title:
      "Endorphin Global - Performance-Based Healthcare Business Consulting",
    description:
      "Transform your healthcare practice with our performance-based consulting. We only earn when you do. Boost revenue, reduce costs, and scale your practice with AI-powered solutions.",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Endorphin Global Healthcare Consulting",
      },
    ],
  },

  alternates: {
    canonical: "https://endorphinglobal.com",
  },
  category: "healthcare consulting",
  classification: "business services",
  other: {
    "theme-color": "#bada55",
    "msapplication-TileColor": "#bada55",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="">{children}
                <SpeedInsights />
            </body>
    </html>
  );
}
