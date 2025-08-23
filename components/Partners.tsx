
export default function Partners() {
  return (
    <section id="partners" className="bg-slate-50">
      <div className="container-xl py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Partners</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border bg-white shadow-soft">
            <h3 className="text-xl font-semibold">Industrial Partner (USA)</h3>
            <p className="mt-2 text-slate-700">
              Planterra Construction works with U.S.-based SIP manufacturers such as Supreme SIPs for panel fabrication and
              warehouse assembly. These partners supply technology and production capacity.
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-white shadow-soft">
            <h3 className="text-xl font-semibold">Prime Contractor</h3>
            <p className="mt-2 text-slate-700">
              Planterra Construction is the contracting entity for projects with governments, multilaterals (e.g., World Bank/IFC),
              and private developers in Latin America. All contracts, project management, and delivery are led by Planterra.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">Logos and trademarks are property of their respective owners and used with permission where applicable.</p>
      </div>
    </section>
  );
}
