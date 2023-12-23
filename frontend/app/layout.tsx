import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vigor Launchpad",
  description:
    "Vigor Launchpad: Assessment.",
  keywords: "test, dummy next mern",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <main className="">{children}</main>
      </body>
    </html>
  );
}
