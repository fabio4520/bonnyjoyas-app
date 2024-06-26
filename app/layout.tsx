import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonny Joyas",
  description: "Generated by create next app",
  icons: {
    icon: '/images/logo.png'
  },
  keywords: ["joyeria en plata", "joyeria en oro", "joyeria piurana", "filigrana"]
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
