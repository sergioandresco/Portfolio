import type { Metadata } from "next";
import { acornFont, gtPlanarFont } from "@/lib/fonts";
import "./globals.css";

import NavbarHeader from "@/components/navbar-header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Sergio Cobos - Frontend Developer",
  description: "Portfolio and blog of Sergio Cobos, a passionate frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${acornFont.variable} 
          ${gtPlanarFont.className} 
          antialiased 
          py-[30px]  
          px-[34px] 
          sm:px-[120px]
          flex
          flex-col
          gap-[40px]
        `}
      >
        <NavbarHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
