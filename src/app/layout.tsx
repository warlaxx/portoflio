import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdallah Abdallaoui-maane | Developer Fullstack",
  description: "Portfolio of Abdallah Abdallaoui-maane",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0a192f]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
