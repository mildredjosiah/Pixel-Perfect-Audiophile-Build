"use client";
import Link from "next/link";

export default function CategoryCards() {
  const categories = [
    {
      name: "Headphones",
      image: "/images/category-headphones.png",
      link: "/category",
    },
    {
      name: "Earphones",
      image: "/images/category-earphones.png",
      link: "/category",
    },
      {
      name: "Speakers",
      image: "/images/category-speakers.png",
      link: "/category",
    },
  ];

  return (
    <section className="mt-20 flex flex-col md:flex-row gap-8 justify-between">
      {categories.map((cat) => (
        <div key={cat.name} className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
          <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-xl font-bold">{cat.name}</h2>
            <Link
              href={cat.link}
              className="mt-2 inline-block uppercase text-sm tracking-widest text-audiomain hover:text-audiomainlight"
            >
              Shop
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
