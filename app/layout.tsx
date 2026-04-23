import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://www.onderpanjuruskudar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Önder Panjur Üsküdar | Panjur, Pimapen, Cam Balkon ve Sineklik Sistemleri",
  description:
    "Önder Panjur Üsküdar; İstanbul başta olmak üzere Kocaeli, Sakarya, Tekirdağ, Yalova ve Bursa çevresinde panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri hizmeti sunar.",
  keywords: [
    "Önder Panjur",
    "Önder Panjur Üsküdar",
    "panjur sistemleri",
    "pimapen sistemleri",
    "cam balkon sistemleri",
    "sineklik sistemleri",
    "duşakabin sistemleri",
    "küpeşte sistemleri",
    "çatı sistemleri",
    "Üsküdar panjur",
    "Üsküdar cam balkon",
    "Üsküdar sineklik",
    "İstanbul panjur",
    "Kocaeli panjur",
    "Sakarya cam balkon",
    "Tekirdağ sineklik",
    "Yalova pimapen",
    "Bursa panjur",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Önder Panjur" }],
  creator: "Önder Panjur",
  publisher: "Önder Panjur",
  category: "home improvement",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Önder Panjur",
    title: "Önder Panjur Üsküdar | Panjur, Pimapen, Cam Balkon ve Sineklik Sistemleri",
    description:
      "İstanbul, Kocaeli, Sakarya, Tekirdağ, Yalova ve Bursa çevresinde panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemleri için keşif, uygulama ve destek hizmetleri.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Önder Panjur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Önder Panjur Üsküdar",
    description:
      "İstanbul ve çevre illerde panjur, pimapen, cam balkon, sineklik, duşakabin, küpeşte ve çatı sistemlerinde profesyonel çözümler.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
