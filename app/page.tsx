import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-6 sm:p-12">
      {/* Hero Banner */}
      <section className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-sm tracking-widest text-orange-500 uppercase">New Product</p>
          <h1 className="text-4xl md:text-5xl font-bold">XX99 Mark II Headphones</h1>
          <p className="text-gray-600">
            Experience natural, lifelike audio and exceptional build quality
            for the ultimate listening experience.
          </p>
          <a
            href="/headphones/xx99-mark-ii"
            className="mt-4 inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
          >
            See Product
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 relative w-full h-80 md:h-96">
          <Image
            src="/images/xx99-mark-ii.png"
            alt="XX99 Mark II Headphones"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>
    </main>
  );
}
