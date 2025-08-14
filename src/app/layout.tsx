import type { Metadata } from "next";
import { acornFont, gtPlanarFont } from "@/lib/fonts";
import "./globals.css";

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
        className={`${acornFont.variable} ${gtPlanarFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
