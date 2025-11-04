"use client";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    {
      name: "XX99 Mark II Headphones",
      image: "/images/xx99-mark-ii.png",
      description: "Upgrade your headphones with the next level sound.",
      link: "/product",
    },
    {
      name: "ZX9 Speaker",
      image: "/images/zx9-speaker.png",
      description: "Premium speaker with exceptional bass and clarity.",
      link: "/product",
    },
    {
      name: "YX1 Earphones",
      image: "/images/yx1-earphones.png",
      description: "High-fidelity earphones with compact design.",
      link: "/product",
    },
  ];

  return (
    <section className="mt-20 flex flex-col gap-20">
      {products.map((product, idx) => (
        <div
          key={product.name}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
            <p className="text-audiogray mb-6">{product.description}</p>
            <Link
              href={product.link}
              className="bg-audiomain text-white uppercase py-3 px-6 text-sm tracking-widest hover:bg-audiomainlight transition"
            >
              See Product
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
