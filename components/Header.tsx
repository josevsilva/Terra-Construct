
import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="container-xl flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-semibold shadow-soft">P</div>
          <span className="font-semibold tracking-tight">Planterra Construction</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#technology" className="hover:text-brand-700">Technology</Link>
          <Link href="#products" className="hover:text-brand-700">Products</Link>
          <Link href="#projects" className="hover:text-brand-700">Projects</Link>
          <Link href="#impact" className="hover:text-brand-700">Impact</Link>
          <Link href="#partners" className="hover:text-brand-700">Partners</Link>
          <Link href="/es" className="hover:text-brand-700">ES</Link>
          <Link href="#contact" className="inline-flex items-center rounded-xl border px-3 py-1.5 hover:bg-slate-50">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
