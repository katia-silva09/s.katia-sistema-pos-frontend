import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const ouffit = Outfit({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Sistema Pos Nica",
  description: "Sistema de Punto de Venta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ouffit.className }`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
