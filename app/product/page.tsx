"use client";
import { useState } from "react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <section className="mt-10 flex flex-col md:flex-row items-center gap-10">
      {/* Product Images */}
      <div className="flex-1">
        <img
          src="/images/xx99-mark-ii.png"
          alt="XX99 Mark II Headphones"
          className="w-full rounded-lg mb-6"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm uppercase tracking-widest text-audiomainlight mb-4">
          New Product
        </p>
        <h1 className="text-4xl font-bold mb-6">XX99 Mark II Headphones</h1>
        <p className="text-audiogray mb-6">
          Experience natural, lifelike audio and exceptional build quality.
        </p>
        <p className="text-2xl font-bold mb-6">$2,999</p>

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={decrease}
              className="px-4 py-2 text-lg font-bold"
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={increase}
              className="px-4 py-2 text-lg font-bold"
            >
              +
            </button>
          </div>
          <button className="bg-audiomain text-white uppercase py-3 px-6 text-sm tracking-widest hover:bg-audiomainlight transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
