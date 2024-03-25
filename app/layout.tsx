import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { KEYWORDS } from "@/data/seo";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonny Joyas",
  description: "Joyería en oro y plata",
  icons: {
    icon: '/images/logo.png'
  },
  keywords: KEYWORDS
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + " text-black"}>
        {children}
      </body>
    </html>
  );
}
