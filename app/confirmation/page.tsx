"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Order {
  id: string;
  name: string;
  email: string;
  items: { name: string; quantity: number; price: string }[];
  total: string;
}

export default function ConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Get order info from localStorage (or pass via router state)
    const stored = localStorage.getItem("latestOrder");
    if (stored) setOrder(JSON.parse(stored));
  }, []);

  if (!order) return <p className="text-center mt-20">Loading order...</p>;

  return (
    <section className="mt-10 max-w-lg mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Thank You for Your Order!</h1>
      <p className="text-audiogray mb-6">
        Your order <strong>#{order.id}</strong> has been successfully placed.
      </p>

      <div className="border border-gray-300 rounded p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {order.items.map((item, idx) => (
          <div key={idx} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>{item.price}</span>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{order.total}</span>
        </div>
      </div>

      <Link
        href="/"
        className="bg-audiomain text-white uppercase py-3 px-6 text-sm tracking-widest hover:bg-audiomainlight transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
