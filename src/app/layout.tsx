import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import MouseSmoke from "@/components/MouseSmoke";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.code4mates.com"),
  title: "Code4MatesDev - Digital Innovation Leaders",
  description:
    "Code4MatesDev crafts groundbreaking digital solutions — custom web apps, enterprise SaaS, and stunning UI/UX design — that empower businesses to lead and innovate.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "web development",
    "software company",
    "SaaS development",
    "UI/UX design",
    "digital solutions",
    "Code4MatesDev",
  ],
  openGraph: {
    title: "Code4MatesDev - Digital Innovation Leaders",
    description:
      "Crafting groundbreaking digital solutions that empower businesses to lead, innovate, and succeed.",
    url: "/",
    siteName: "Code4MatesDev",
    type: "website",
    images: [
      {
        url: "/LOGONEW_WHITE.png",
        width: 1200,
        height: 630,
        alt: "Code4MatesDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code4MatesDev - Digital Innovation Leaders",
    description: "Crafting groundbreaking digital solutions.",
    images: ["/LOGONEW_WHITE.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link
          rel="icon"
          href="/favicon.png?v=3"
          type="image/png"
          sizes="64x64"
        />
        <link rel="shortcut icon" href="/favicon.png?v=3" />
        <link
          rel="apple-touch-icon"
          href="/favicon.png?v=3"
          sizes="270x270"
        />
      </head>
      <body>
        {children}
        <MouseSmoke />
        <CustomCursor />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
