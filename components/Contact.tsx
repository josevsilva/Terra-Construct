
export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="container-xl py-16">
        <div className="rounded-2xl border bg-white p-8 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Let’s build resilient communities</h2>
              <p className="mt-3 text-slate-700">
                Planterra Construction · 1800 N Field St, Dallas, TX 75202
              </p>
              <p className="mt-2 text-slate-700">Email: info@planterraconstruction.com</p>
              <p className="text-slate-700">Phone: +1 (###) ###-####</p>
              <p className="mt-2 text-sm text-slate-500">Replace placeholders with your active contact details.</p>
            </div>
            <form className="space-y-4" action="mailto:info@planterraconstruction.com" method="post" encType="text/plain">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" name="name" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" name="email" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea className="mt-1 w-full rounded-xl border px-3 py-2" rows={4} name="message" placeholder="Tell us about your project" />
              </div>
              <button type="submit" className="rounded-xl bg-brand-600 text-white px-5 py-3 hover:bg-brand-700">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
