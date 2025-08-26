import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-50 to-white">
      <div className="container-xl py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Fast, Strong, Sustainable Housing—<span className="text-brand-700">Built in Weeks</span>
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            Planterra Construction is a Dallas-based builder delivering prefabricated homes across Latin America using advanced Structural Insulated Panels (SIPs).
            We started remodeling homes in Dallas and now scale resilient communities abroad.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-brand-600 text-white px-5 py-3 shadow-soft hover:bg-brand-700">
              Talk to our team
            </a>
            <a href="#technology" className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50">
              See the technology
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-600">
            Miami-Dade hurricane-rated · California seismic-certified · Energy-efficient
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sip_Planterra_construction.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <p className="mt-3 text-sm text-slate-500">We specialize in prefabricated homes built with Structural Insulated Panels (SIPs), delivering high-quality housing at affordable prices. Our solutions adapt to any terrain, ensuring resilient communities everywhere.</p>
        </div>
      </div>
    </section>
  );
}
