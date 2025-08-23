
export default function Tech() {
  const items = [
    { title: "Rapid construction", body: "Specialized crews assemble homes in weeks, not months, enabling fast community-scale delivery." },
    { title: "Disaster resilience", body: "SIP systems meet Miami-Dade wind standards and California seismic codes for safer housing." },
    { title: "Energy & cost efficiency", body: "High insulation reduces energy demand; simplified construction lowers labor and equipment costs." },
    { title: "Quality & versatility", body: "Precision-fabricated panels deliver durable envelopes, flexible layouts, and consistent results." }
  ];
  return (
    <section id="technology" className="container-xl py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">SIP Technology that scales communities</h2>
        <p className="mt-4 text-slate-700">
          Structural Insulated Panels (SIPs) combine a structural skin with an insulating core for superior strength,
          comfort and speed. Ideal for social housing and disaster-relief programs.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-6 rounded-2xl border bg-white shadow-soft">
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-slate-700">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
