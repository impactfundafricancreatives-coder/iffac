import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { featuredStories } from "@/data/site";
import { ArrowRight } from "lucide-react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function FeaturedStories() {
  const [lead, ...rest] = featuredStories;

  return (
    <section className="section-gap bg-[#FAFAFA] border-t border-[#888888]/20" aria-labelledby="stories-heading">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow className="mb-4">Stories</Eyebrow>
            <h2 id="stories-heading" className="heading-2 text-[#1C1C1C]">
              From the studios, sets,<br />and looms.
            </h2>
          </div>
          <Link
            href="/journal"
            className="caption text-[#444444] hover:text-[#1F3A8A] transition-colors inline-flex items-center gap-2"
          >
            All stories <ArrowRight size={14} />
          </Link>
        </div>

        {/* Layout: large lead left, two smaller right */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-px bg-[#888888]/20">
          {/* Lead story */}
          <Link
            href={`/journal/${lead.slug}`}
            className="lg:col-span-4 group bg-[#FAFAFA] hover:bg-[#1C1C1C] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA6B0E]"
          >
            <div className="aspect-[16/9] bg-[#1C1C1C]/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-end p-0">
                <div className="w-full h-1/2 bg-gradient-to-t from-[#1C1C1C]/30 to-transparent" />
              </div>
            </div>
            <div className="p-8">
              <span className="eyebrow text-[#FFC200] group-hover:text-[#EA6B0E] transition-colors duration-300 block mb-3">
                {lead.category}
              </span>
              <h3 className="heading-3 text-[#1C1C1C] group-hover:text-white transition-colors duration-300 mb-3">
                {lead.title}
              </h3>
              <p className="body-md text-[#444444] group-hover:text-[#888888] transition-colors duration-300 line-clamp-3 mb-4">
                {lead.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <span className="caption text-[#888888]">{lead.author}</span>
                <span className="caption text-[#888888]">·</span>
                <time className="caption text-[#888888]" dateTime={lead.date}>
                  {formatDate(lead.date)}
                </time>
              </div>
            </div>
          </Link>

          {/* Secondary stories */}
          <div className="lg:col-span-3 flex flex-col">
            {rest.map((story) => (
              <Link
                key={story.slug}
                href={`/journal/${story.slug}`}
                className="group flex-1 bg-[#FAFAFA] hover:bg-[#1C1C1C] transition-colors duration-500 border-b border-[#888888]/20 last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA6B0E] flex flex-col"
              >
                <div className="aspect-video bg-[#1C1C1C]/10" />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="eyebrow text-[#FFC200] group-hover:text-[#EA6B0E] transition-colors duration-300 block mb-2">
                    {story.category}
                  </span>
                  <h3 className="heading-4 text-[#1C1C1C] group-hover:text-white transition-colors duration-300 mb-2 flex-1">
                    {story.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-3">
                    <time className="caption text-[#888888]" dateTime={story.date}>
                      {formatDate(story.date)}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
