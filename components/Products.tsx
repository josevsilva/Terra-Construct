import Image from 'next/image';

export default function Products() {
  const products = [
    {
      name: "57.6 m² (24x24 ft) Family Home",
      desc: "2 bedrooms · 1 bath · integrated living/kitchen · optimized for SIP assembly",
      img: "/family_home_affordable.jpg",
    },
    {
      name: "Tiny Home (18–30 m²)",
      desc: "Rapid-deploy, compact units for workforce, emergency shelter, or tourism",
      img: "/tiny_home_outdoor.jpg",
    },
    {
      name: "Community Facilities",
      desc: "Clinics, classrooms, and multi-use facilities to support complete communities",
      img: "/community_facility.JPG",
    },
  ];

  return (
    <section id="products" className="bg-slate-50">
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Prefab products for real–world needs
        </h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          A modular catalog to match budgets and timelines—designed for scale, resilience, and livability.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border bg-white p-6 shadow-soft hover:shadow-lg transition"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden border">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-slate-700">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
