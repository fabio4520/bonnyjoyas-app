import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import Template from "./template";

export const metadata: Metadata = {
  title: "Bonny Joyas",
  description: "Generated by create next app",
  icons: {
    icon: '/images/logo.png'
  },
  keywords: ["joyeria en plata", "joyeria en oro", "joyeria piurana", "filigrana"]
};

export default function LandingLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full bg-white text-sm">
      <Navbar />
      <div className="container my-24 mx-auto md:px-6">
        <Template
          className="p-4 mt-24 md:mt-40 bg-white overflow-hidden"
        >
          {children}
        </Template>
      </div>
      <Footer/>
    </div>
  );
}