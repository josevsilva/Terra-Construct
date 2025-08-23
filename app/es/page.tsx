
import Link from "next/link";
export default function PageES() {
  return (
    <main>
      <header className="border-b border-slate-200">
        <div className="container-xl flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-semibold shadow-soft">P</div>
            <span className="font-semibold tracking-tight">Planterra Construction</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-brand-700">EN</Link>
            <a href="#contacto" className="inline-flex items-center rounded-xl border px-3 py-1.5 hover:bg-slate-50">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container-xl py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Viviendas rápidas, resistentes y sostenibles—<span className="text-brand-700">construidas en semanas</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700">
              Planterra Construction es una empresa con base en Dallas, Texas, que entrega viviendas prefabricadas en América Latina usando paneles estructurales aislantes (SIPs).
              Empezamos remodelando casas en Dallas y hoy escalamos comunidades resilientes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#tecnologia" className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50">
                Ver la tecnología
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-600">
              Certificaciones: huracanes (Miami-Dade) · sismos (California) · eficiencia energética
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-slate-100 border shadow-soft overflow-hidden"></div>
            <p className="mt-3 text-sm text-slate-500">Imagen ilustrativa (reemplace por renders/fotos de proyectos).</p>
          </div>
        </div>
      </section>

      <section id="tecnologia" className="container-xl py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tecnología SIP para escalar comunidades</h2>
          <p className="mt-4 text-slate-700">
            Los SIPs combinan una piel estructural con un núcleo aislante para mayor resistencia, confort y velocidad.
            Ideales para vivienda social y programas de respuesta a desastres.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            ["Construcción rápida", "Cuadrillas especializadas ensamblan viviendas en semanas, no meses."],
            ["Resiliencia ante desastres", "Certificaciones para vientos extremos y sismos."],
            ["Eficiencia energética y de costos", "Aislamiento superior reduce demanda energética y costos."],
            ["Calidad y versatilidad", "Fabricación precisa para resultados consistentes y diseños flexibles."]
          ].map(([title, body]) => (
            <div key={title} className="p-6 rounded-2xl border bg-white shadow-soft">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-xl py-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Productos</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["Vivienda familiar 57.6 m² (24×24 ft)", "2 dormitorios · 1 baño · sala/cocina integradas."],
              ["Tiny Home (18–30 m²)", "Unidades compactas para emergencia o vivienda inicial."],
              ["Equipamiento comunitario", "Clínicas, aulas y espacios multiuso."]
            ].map(([name, desc]) => (
              <article key={name} className="rounded-2xl border bg-white p-6 shadow-soft">
                <div className="aspect-[4/3] rounded-xl bg-slate-100 border" />
                <h3 className="mt-4 text-lg font-semibold">{name}</h3>
                <p className="mt-2 text-slate-700">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">El Salvador · 100 Viviendas Sociales</h2>
            <ul className="mt-5 space-y-2 text-slate-700 list-disc list-inside">
              <li>Línea de tiempo: ~6 semanas desde preparación de sitio a utilidades</li>
              <li>Ahorro estimado vs. construcción tradicional: ~USD 1.5M (100 viviendas)</li>
              <li>Resiliencia: certificaciones de huracanes y sismos</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white shadow-soft p-4">
            <div className="aspect-[4/3] rounded-xl bg-slate-100 border" />
            <p className="mt-3 text-sm text-slate-600">Reemplace con planos o renders del master plan.</p>
          </div>
        </div>
      </section>

      <section id="socios" className="bg-slate-50">
        <div className="container-xl py-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Socios</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border bg-white shadow-soft">
              <h3 className="text-xl font-semibold">Socio industrial (EE. UU.)</h3>
              <p className="mt-2 text-slate-700">
                Planterra Construction trabaja con fabricantes de SIPs en EE. UU., como Supreme SIPs, para fabricación y ensamble.
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white shadow-soft">
              <h3 className="text-xl font-semibold">Contratista principal</h3>
              <p className="mt-2 text-slate-700">
                Planterra Construction es la entidad contratante para proyectos con gobiernos, multilaterales (Banco Mundial/IFC) y desarrolladores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white">
        <div className="container-xl py-16">
          <div className="rounded-2xl border bg-white p-8 shadow-soft">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Conversemos</h2>
                <p className="mt-3 text-slate-700">Planterra Construction · 1800 N Field St, Dallas, TX 75202</p>
                <p className="mt-2 text-slate-700">Email: info@planterraconstruction.com</p>
                <p className="text-slate-700">Tel.: +1 (###) ###-####</p>
              </div>
              <form className="space-y-4" action="mailto:info@planterraconstruction.com" method="post" encType="text/plain">
                <div>
                  <label className="block text-sm font-medium">Nombre</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" name="name" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" name="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Mensaje</label>
                  <textarea className="mt-1 w-full rounded-xl border px-3 py-2" rows={4} name="message" placeholder="Cuéntanos sobre tu proyecto" />
                </div>
                <button type="submit" className="rounded-xl bg-brand-600 text-white px-5 py-3 hover:bg-brand-700">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 mt-16">
        <div className="container-xl py-10 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {new Date().getFullYear()} Planterra Construction. Todos los derechos reservados.</p>
            <p>1800 N Field St, Dallas, TX 75202 · Texas, USA</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
