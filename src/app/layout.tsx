import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";
import { TbHexagonLetterA } from "react-icons/tb";

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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
