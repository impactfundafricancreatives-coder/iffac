import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#0B1B2B] min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#C9A24A] text-xs font-bold tracking-[0.2em] uppercase mb-6">404</p>
      <h1 className="font-display text-white text-5xl md:text-6xl font-medium mb-5">
        Page not found.
      </h1>
      <p className="text-[#A8A39A] text-lg max-w-md mb-10">
        The page you're looking for doesn't exist yet, or has moved. Try one of the links below.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-[#C9A24A] text-[#0B1B2B] text-sm font-bold px-8 py-4 hover:bg-[#b8913e] transition-colors">
          Go home →
        </Link>
        <Link href="/apply" className="border border-white/40 text-white text-sm font-semibold px-8 py-4 hover:bg-white/10 transition-colors">
          Apply for funding
        </Link>
      </div>
    </div>
  );
}
