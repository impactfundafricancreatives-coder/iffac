import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-6">404</p>
      <h1 className="font-display text-white text-5xl md:text-6xl font-medium mb-5">
        Page not found.
      </h1>
      <p className="text-[#888888] text-lg max-w-md mb-10">
        The page you're looking for doesn't exist yet, or has moved. Try one of the links below.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-8 py-4 hover:bg-[#D45C00] transition-colors">
          Go home →
        </Link>
        <Link href="/apply" className="border border-white/40 text-white text-sm font-semibold px-8 py-4 hover:bg-white/10 transition-colors">
          Apply for funding
        </Link>
      </div>
    </div>
  );
}
