import Image from 'next/image'

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
      img: "/tiny_home.jpg",
    },
    {
      name: "Community Facilities",
      desc: "Clinics, classrooms, and multi-use facilities to support complete communities",
      img: "/community_facility.jpg",
    },
  ];

  return (
    <section id="products" className="bg-slate-50">
      <div className="container mx-auto py-16">
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

export default function Products() {
  const products = [
    { name: "57.6 m² (24×24 ft) Family Home", desc: "2 bedrooms · 1 bath · integrated living/kitchen · optimized for speed and comfort.", tag: "Core model" },
    { name: "Tiny Home (18–30 m²)", desc: "Rapid-deploy, compact units for workforce, emergency shelter, or starter homes.", tag: "Compact" },
    { name: "Community Facilities", desc: "Clinics, classrooms, and multi-use facilities to support complete neighborhoods.", tag: "Social impact" }
  ];
  return (
    <section id="products" className="bg-slate-50">
      <div className="container-xl py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Prefab products for real-world needs</h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          A modular catalog to match budgets and timelines—designed for scale, resilience, and livability.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="rounded-2xl border bg-white p-6 shadow-soft">
              <div className="aspect-[4/3] rounded-xl bg-slate-100 border" />
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-slate-700">{p.desc}</p>
              <div className="mt-3 inline-flex items-center text-xs rounded-full border px-2 py-1">{p.tag}</div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600">Note: imagery is illustrative; replace with Planterra/Supreme SIPs photos and drawings.</p>
      </div>
    </section>
  );
}
