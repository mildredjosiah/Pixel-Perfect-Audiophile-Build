import Link from "next/link";

export default function CategoryPage() {
  const products = [
    {
      id: 1,
      name: "XX99 Mark II Headphones",
      image: "/images/xx99-mark-ii.png",
      price: "$2,999",
      link: "/product",
    },
    {
      id: 2,
      name: "XX99 Mark I Headphones",
      image: "/images/xx99-mark-i.png",
      price: "$1,750",
      link: "/product",
    },
    {
      id: 3,
      name: "XX59 Headphones",
      image: "/images/xx59.png",
      price: "$899",
      link: "/product",
    },
  ];

  return (
    <section className="mt-10">
      <h1 className="text-4xl font-bold mb-10 text-center md:text-left">
        Headphones
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg mb-6"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-audiogray mb-4">{product.price}</p>
            <Link
              href={product.link}
              className="bg-audiomain text-white uppercase py-3 px-6 text-sm tracking-widest hover:bg-audiomainlight transition"
            >
              See Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
