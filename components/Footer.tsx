
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="container-xl py-10 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} Planterra Construction. All rights reserved.</p>
          <p>1800 N Field St, Dallas, TX 75202 · Texas, USA</p>
        </div>
      </div>
    </footer>
  );
}
