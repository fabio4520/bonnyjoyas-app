import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonny Joyas",
  description: "Generated by create next app",
  icons: {
    icon: '/images/logo.png'
  }
};

export default function LandingLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="h-lvh w-lvw bg-white text-md">
      <Navbar/>
      {children}
    </div>
  );
}