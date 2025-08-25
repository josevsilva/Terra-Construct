import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="container-xl py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">El Salvador · 100 Social Homes</h2>
          <p className="mt-3 text-slate-700">
            A turnkey community plan for 100 families including green areas, a clinic, and multi-use courts.
            Built with SIPs for speed, safety, and long-term sustainability.
          </p>
          <ul className="mt-5 space-y-2 text-slate-700 list-disc list-inside">
            <li>Timeline: ~6 weeks from site prep to utilities</li>
            <li>Estimated savings vs. traditional build: ~$1.5M across 100 homes</li>
            <li>Disaster-ready: hurricane and seismic certifications</li>
          </ul>
        </div>
        <div className="rounded-2xl border bg-white shadow-soft p-4">
        <Image
            src="/El_salvador_project.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <p className="mt-3 text-sm text-slate-600">100 Prefab homes Masterplan in San Salvador.</p>
        </div>
      </div>
    </section>
  );
}
