import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bijen Gurung's Portfolio",
  description:
    "Bijen Gurung - Full Stack Developer specializing in the Next.js. Explore my portfolio showcasing projects, skills, and experience in building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} max-w-[1920px] mx-auto bg-navy`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
