import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import MouseSmoke from "@/components/MouseSmoke";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Code4MatesDev — Digital Innovation Leaders",
  description:
    "Code4MatesDev crafts groundbreaking digital solutions — custom web apps, enterprise SaaS, and stunning UI/UX design — that empower businesses to lead and innovate.",
  keywords: [
    "web development",
    "software company",
    "SaaS development",
    "UI/UX design",
    "digital solutions",
    "Code4MatesDev",
  ],
  openGraph: {
    title: "Code4MatesDev — Digital Innovation Leaders",
    description:
      "Crafting groundbreaking digital solutions that empower businesses to lead, innovate, and succeed.",
    url: "https://www.code4mates.com",
    siteName: "Code4MatesDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code4MatesDev — Digital Innovation Leaders",
    description: "Crafting groundbreaking digital solutions.",
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
      </body>
    </html>
  );
}
