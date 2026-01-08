import Image from 'next/image';

export default function OilGas() {
  const products = [
    {
      name: "HDPE & Poly Pipe Systems",
      desc: "Placeholder description for HDPE pipe systems and infrastructure.",
      img: "/placeholder-hdpe.jpg",
    },
    {
      name: "Modular Workforce Housing",
      desc: "Placeholder description for modular workforce housing solutions.",
      img: "/placeholder-housing.jpg",
    },
    {
      name: "Industrial Infrastructure",
      desc: "Placeholder description for industrial construction and facilities.",
      img: "/placeholder-industrial.jpg",
    },
  ];

  const services = [
    {
      name: "HDPE & Poly Pipe Systems",
      desc: "Flowlines, water handling, and field distribution. Faster deployment, corrosion-resistant, cost-effective alternative to steel.",
      icon: "🔧"
    },
    {
      name: "Modular Workforce Housing",
      desc: "Rapid-deploy camps and permanent quarters for remote operations. Field-tested prefab expertise adapted for energy projects.",
      icon: "🏠"
    },
    {
      name: "Industrial & Civil Construction",
      desc: "Yards, facilities, and support infrastructure built to U.S. standards with Latin American operational execution.",
      icon: "🏗️"
    },
    {
      name: "Logistics & Field Support",
      desc: "Deployment coordination, site preparation, and turnkey delivery for challenging environments.",
      icon: "📦"
    },
  ];

  const markets = [
    {
      name: "Venezuela",
      highlight: "Onshore Reactivation",
      desc: "Experienced in legacy field infrastructure and positioned for post-sanctions resurgence. Deep understanding of local operational realities.",
    },
    {
      name: "Guyana",
      highlight: "Offshore Support",
      desc: "Shore-based facilities, workforce housing, and logistics infrastructure supporting one of the world's fastest-growing oil frontiers.",
    },
    {
      name: "Texas & U.S.",
      highlight: "Domestic Standards",
      desc: "Permian Basin, Eagle Ford, and Gulf Coast operations. Bringing Latin American cost efficiency to North American projects.",
    },
  ];

  const advantages = [
    "Dual expertise: affordable housing + energy infrastructure",
    "U.S. engineering standards, LATAM execution capabilities",
    "HDPE/Poly Pipe specialization—faster, lighter, proven",
    "Modular construction for speed and cost control",
    "Regional fluency: Venezuela, Guyana, Texas corridors",
    "Execution-focused: we build, we deploy, we deliver"
  ];

  return (
    <section id="oil-gas" className="bg-white">
      <div className="container mx-auto py-20 px-6">
        {/* Hero */}
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Energy Infrastructure—Built for the Americas
          </h1>
          <p className="mt-6 text-xl text-slate-700 leading-relaxed">
            Planterra Construction brings proven modular expertise to oil & gas operations across Texas, Venezuela, and Guyana. We deliver HDPE pipe systems, workforce housing, and industrial facilities with the speed and cost control energy projects demand.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            U.S. Standards. LATAM Execution. Field-Proven Results.
          </p>
        </div>

        {/* Products with Images */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Oil & Gas Infrastructure Solutions
          </h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Specialized products for energy operations—from pipelines to workforce facilities.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border bg-white p-6 shadow-soft hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">Image Placeholder</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-slate-700">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Core Services
          </h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Specialized capabilities at the intersection of construction, energy infrastructure, and rapid deployment.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border bg-slate-50 p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Markets */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Markets We Serve
          </h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Regional expertise spanning North and South America's most dynamic energy corridors.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {markets.map((market) => (
              <article
                key={market.name}
                className="rounded-2xl border bg-white p-6 shadow-soft hover:shadow-lg transition"
              >
                <div className="inline-block px-3 py-1 rounded-lg bg-brand-100 text-brand-700 text-sm font-medium mb-3">
                  {market.highlight}
                </div>
                <h3 className="text-2xl font-semibold">{market.name}</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">{market.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Why Planterra */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Why Planterra for Energy Projects
          </h2>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            We're not an oil company. We're construction and infrastructure specialists who understand what energy operators need: speed, reliability, cost control, and execution in challenging environments.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-700">{advantage}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-brand-600 px-6 py-3 text-white font-medium hover:bg-brand-700 transition shadow-soft"
            >
              Discuss Your Project
            </a>
            <a
              href="#products"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium hover:bg-slate-50 transition"
            >
              View Housing Solutions
            </a>
          </div>
        </div>

        {/* Positioning Statement */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-600 italic">
            "We build homes and we build energy infrastructure. Our dual expertise makes us uniquely positioned to support oil & gas operators who need modular solutions, HDPE systems, and workforce facilities delivered on time and on budget."
          </p>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            — Planterra Construction
          </p>
        </div>
      </div>
    </section>
  );
}
