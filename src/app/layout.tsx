import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import { ReactQueryProvider } from "@/components/providers/react-query-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Technopee",
  description: "Technopee is a platform that provides various tools and utilities to enhance your online experience. From speed testing to video downloading, we strive to offer solutions that simplify your digital life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </ReactQueryProvider>
    </html>
  );
}
