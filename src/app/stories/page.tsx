import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "Stories",
  description: "Stories from the studios, sets, and looms shaping Africa's next creative decade.",
};

const stories = [
  {
    slug: "atto-tetteh-accra-silhouette",
    title: "Atto Tetteh is Cutting Accra's Silhouette for the World",
    excerpt: "Inside the atelier where a Ghana-born tailor is quietly rewriting what African menswear means to London, Milan, and beyond.",
    category: "From the Studio",
    date: "12 April 2026",
    author: "Lerato Mokoena",
    readTime: "8 min read",
  },
  {
    slug: "nairobi-frames-east-african-cinema",
    title: "The Cinema Fund That's Changing East Africa's Film Economy",
    excerpt: "How IFFAC's Film Sub-Fund is bridging the gap between Nairobi's street stories and Sundance-track ambitions.",
    category: "From the Set",
    date: "28 March 2026",
    author: "Tunde Adeyemi",
    readTime: "6 min read",
  },
  {
    slug: "state-of-african-creative-capital",
    title: "The State of African Creative Capital: 2026 Outlook",
    excerpt: "A data-driven look at where patient capital is flowing, and the gaps that remain, across the continent's cultural economy.",
    category: "Research",
    date: "15 February 2026",
    author: "IFFAC Research Team",
    readTime: "12 min read",
  },
  {
    slug: "adire-atelier-yoruba-textile",
    title: "Yoruba Textile Heritage, Globally Positioned",
    excerpt: "Funmi Ade on building Adire Atelier into a brand that speaks Lagos and Paris fluently, at the same time.",
    category: "From the Studio",
    date: "5 January 2026",
    author: "Amara Diallo",
    readTime: "7 min read",
  },
  {
    slug: "kigali-sound-rwanda-music",
    title: "Rwanda's New-Wave Production Collective",
    excerpt: "Kigali Sound is proving that East African music production can reach global audiences without losing its roots.",
    category: "From the Studio",
    date: "20 December 2025",
    author: "Patrick Nzeyimana",
    readTime: "5 min read",
  },
  {
    slug: "dakar-design-continental-stage",
    title: "From Dakar to the World Stage: Design as a Continental Conversation",
    excerpt: "How a generation of Senegalese designers is reshaping what African contemporary design means internationally.",
    category: "Research",
    date: "3 November 2025",
    author: "Wanjiru Mwangi",
    readTime: "9 min read",
  },
];

const categories = ["All", "From the Studio", "From the Set", "Research"];

export default function StoriesPage() {
  const [lead, ...rest] = stories;

  return (
    <div className="bg-[#F4EFE6]">

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0B1B2B] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A24A] text-xs font-bold tracking-[0.2em] uppercase mb-6">Stories</p>
          <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-3xl">
            From the studios, sets, and looms.
          </h1>
        </div>
      </section>

      {/* Category tabs */}
      <div className="border-b border-[#A8A39A]/20 bg-[#F4EFE6] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              className={`shrink-0 px-4 py-4 text-xs font-bold tracking-[0.12em] uppercase border-b-2 transition-colors ${
                c === "All"
                  ? "border-[#C9A24A] text-[#0B1B2B]"
                  : "border-transparent text-[#A8A39A] hover:text-[#0B1B2B]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Lead story */}
      <section className="py-16 px-6 md:px-16 lg:px-24 border-b border-[#A8A39A]/20">
        <div className="max-w-7xl mx-auto">
          <Link href={`/stories/${lead.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image placeholder */}
            <div className="aspect-[16/10] bg-[#0B1B2B] flex items-center justify-center">
              <span className="font-display text-white/10 text-9xl font-medium select-none">
                {lead.title.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-[#B5651D] text-xs font-bold tracking-[0.15em] uppercase mb-4">
                {lead.category} · {lead.readTime}
              </p>
              <h2 className="font-display text-[#0B1B2B] text-3xl md:text-4xl font-medium leading-snug mb-4 group-hover:text-[#1F3A8A] transition-colors">
                {lead.title}
              </h2>
              <p className="text-[#4A4A4A] text-base leading-relaxed mb-6">{lead.excerpt}</p>
              <div className="flex items-center gap-3">
                <span className="text-[#A8A39A] text-sm">{lead.author}</span>
                <span className="text-[#A8A39A]">·</span>
                <span className="text-[#A8A39A] text-sm">{lead.date}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Story grid */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#A8A39A]/20">
          {rest.map((s) => (
            <Link
              key={s.slug}
              href={`/stories/${s.slug}`}
              className="group bg-[#F4EFE6] p-8 hover:bg-[#0B1B2B] transition-colors duration-300 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-[#A8A39A]/20 group-hover:bg-[#111111] mb-6 flex items-center justify-center transition-colors duration-300">
                <span className="font-display text-[#A8A39A]/30 group-hover:text-white/10 text-6xl font-medium transition-colors duration-300">
                  {s.title.charAt(0)}
                </span>
              </div>
              <p className="text-xs font-bold tracking-[0.12em] uppercase mb-3 transition-colors duration-300"
                style={{ color: s.category === "Research" ? "#1F3A8A" : "#B5651D" }}>
                {s.category} · {s.readTime}
              </p>
              <h3 className="font-display text-[#0B1B2B] group-hover:text-white text-xl font-medium leading-snug mb-3 flex-1 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-[#4A4A4A] group-hover:text-[#A8A39A] text-sm leading-relaxed line-clamp-2 mb-5 transition-colors duration-300">
                {s.excerpt}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[#A8A39A] text-xs">{s.author}</span>
                <span className="text-[#A8A39A] text-xs">·</span>
                <span className="text-[#A8A39A] text-xs">{s.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#0B1B2B]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C9A24A] text-xs font-bold tracking-[0.2em] uppercase mb-5">The IFFAC Journal</p>
          <h2 className="font-display text-white text-4xl font-medium mb-4">
            Never miss a story.
          </h2>
          <p className="text-[#A8A39A] text-base mb-10">
            One email a month, the best stories from Africa&apos;s creative economy.
          </p>
          <NewsletterForm dark />
        </div>
      </section>

    </div>
  );
}
