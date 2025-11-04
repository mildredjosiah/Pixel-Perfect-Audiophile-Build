import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/manrope"; // Import Manrope font
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Audiophile e-commerce build",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-manrope">
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="max-w-[1110px] mx-auto px-4">{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
