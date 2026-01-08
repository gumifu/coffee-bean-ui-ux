import type { Metadata } from "next";
import { Roboto, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const roboto = Roboto({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "Coffee Bean - Discover the World of Coffee",
  description:
    "Learn about coffee beans, their origins, and why people love coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${cormorantGaramond.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
