"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20 py-12 px-6">
      <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <h2 className="text-2xl font-bold uppercase tracking-wide">Audiophile</h2>

        {/* Navigation */}
        <nav className="flex gap-6 uppercase text-sm tracking-widest">
          <Link href="/home">Home</Link>
          <Link href="/category">Category</Link>
          <Link href="/product">Product</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-audiogray text-center md:text-right">
          &copy; 2025 Audiophile. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
