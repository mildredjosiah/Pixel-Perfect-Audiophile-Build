"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-6 bg-black text-white">
      <Link href="/home" className="text-2xl font-bold uppercase tracking-wide">
        Audiophile
      </Link>

      <nav className="hidden md:flex gap-8">
        <Link href="/home">Home</Link>
        <Link href="/category">Category</Link>
        <Link href="/product">Product</Link>
        <Link href="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}
