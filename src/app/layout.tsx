import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

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
    <html lang="en">
      <body className={`${inter.className} max-w-[1920px] mx-auto bg-navy`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
