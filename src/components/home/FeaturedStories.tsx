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
    <section className="section-gap bg-[#F4EFE6] border-t border-[#A8A39A]/20" aria-labelledby="stories-heading">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow className="mb-4">Stories</Eyebrow>
            <h2 id="stories-heading" className="heading-2 text-[#0B1B2B]">
              From the studios, sets,<br />and looms.
            </h2>
          </div>
          <Link
            href="/journal"
            className="caption text-[#4A4A4A] hover:text-[#1F3A8A] transition-colors inline-flex items-center gap-2"
          >
            All stories <ArrowRight size={14} />
          </Link>
        </div>

        {/* Layout: large lead left, two smaller right */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-px bg-[#A8A39A]/20">
          {/* Lead story */}
          <Link
            href={`/journal/${lead.slug}`}
            className="lg:col-span-4 group bg-[#F4EFE6] hover:bg-[#0B1B2B] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24A]"
          >
            <div className="aspect-[16/9] bg-[#0B1B2B]/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-end p-0">
                <div className="w-full h-1/2 bg-gradient-to-t from-[#0B1B2B]/30 to-transparent" />
              </div>
            </div>
            <div className="p-8">
              <span className="eyebrow text-[#B5651D] group-hover:text-[#C9A24A] transition-colors duration-300 block mb-3">
                {lead.category}
              </span>
              <h3 className="heading-3 text-[#0B1B2B] group-hover:text-white transition-colors duration-300 mb-3">
                {lead.title}
              </h3>
              <p className="body-md text-[#4A4A4A] group-hover:text-[#A8A39A] transition-colors duration-300 line-clamp-3 mb-4">
                {lead.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <span className="caption text-[#A8A39A]">{lead.author}</span>
                <span className="caption text-[#A8A39A]">·</span>
                <time className="caption text-[#A8A39A]" dateTime={lead.date}>
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
                className="group flex-1 bg-[#F4EFE6] hover:bg-[#0B1B2B] transition-colors duration-500 border-b border-[#A8A39A]/20 last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24A] flex flex-col"
              >
                <div className="aspect-video bg-[#0B1B2B]/10" />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="eyebrow text-[#B5651D] group-hover:text-[#C9A24A] transition-colors duration-300 block mb-2">
                    {story.category}
                  </span>
                  <h3 className="heading-4 text-[#0B1B2B] group-hover:text-white transition-colors duration-300 mb-2 flex-1">
                    {story.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-3">
                    <time className="caption text-[#A8A39A]" dateTime={story.date}>
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
