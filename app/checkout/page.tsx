"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // save dummy order
    localStorage.setItem(
      "latestOrder",
      JSON.stringify({
        id: "ORDER123",
        name: formData.name,
        email: formData.email,
        items: [{ name: "XX99 Mark II Headphones", qty: 1, price: "$2,999" }],
        total: "$2,999",
      })
    );

    window.location.href = "/confirmation";
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <button type="submit">Place Order</button>
      </form>
    </main>
  );
}
