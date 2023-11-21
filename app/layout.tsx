import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "ZBD - The Future of Esports";
let description =
  "Step into the thrilling world of competitive gaming and empower yourself to leave a mark on the future of esports.";
let ogimage = "https://esports.zbd.gg/seo.png";
let sitename = "ZBD - The Future of Esports";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://esports.zbd.gg",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
