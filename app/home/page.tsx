export default function HomePage() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mt-10">
      {/* Text content */}
      <div className="max-w-md text-center md:text-left">
        <p className="text-sm uppercase tracking-widest text-audiomainlight mb-4">
          New Product
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          XX99 Mark II Headphones
        </h1>
        <p className="text-audiogray mb-6">
          Experience natural, lifelike audio and exceptional build quality for your daily listening.
        </p>
        <button className="bg-audiomain text-white uppercase py-3 px-6 text-sm tracking-widest hover:bg-audiomainlight transition">
          See Product
        </button>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src="/images/hero-headphones.png"
          alt="XX99 Mark II Headphones"
          className="w-full rounded-lg"
        />
      </div>
    </section>
  );
}
