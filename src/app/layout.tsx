import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './pages/header/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Poppins'" }} className={inter.className}>
        <Header />
        <div style={{ marginTop: '50px' }}>{/* Espacio entre el encabezado y el contenido */}</div>
        {children}
        </body>
    </html>
  );
}
