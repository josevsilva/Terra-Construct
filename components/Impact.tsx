
export default function Impact() {
  const bullets = [
    "Community investment fund allocation (e.g., clinics, green areas, recreation)",
    "Lower lifecycle energy use thanks to insulated envelopes",
    "Reduced waste via offsite fabrication and simplified assembly",
    "Job creation through specialized assembly crews and training"
  ];
  return (
    <section id="impact" className="bg-white">
      <div className="container-xl py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built for impact</h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          We pair proven building technology with social investment to deliver safe, efficient housing at scale.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {bullets.map((b) => (
            <div key={b} className="p-6 rounded-2xl border bg-white shadow-soft">{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
