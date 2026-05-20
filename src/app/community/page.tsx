import type { Metadata } from "next";
import Link from "next/link";
import { CommunityForm } from "@/components/ui/CommunityForm";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the most ambitious creative network in Africa. Mentors, events, early access to open calls.",
};

const benefits = [
  { icon: "◈", title: "Peer network",     body: "Connect with IFFAC alumni, current cohort members, and applicants across 9+ African countries." },
  { icon: "◎", title: "Mentor access",    body: "Office hours and 1:1 introductions with IFFAC's global mentor network, operators, investors, creatives." },
  { icon: "◉", title: "Early access",     body: "Receive open call alerts before they go public, and invitations to exclusive community events." },
  { icon: "◐", title: "Monthly journal",  body: "The IFFAC Journal, stories, research, and the conversations shaping Africa's creative economy." },
];

const mentors = [
  { name: "Adaeze Okafor",   role: "Fashion Business Consultant",     expertise: ["Retail strategy", "Brand positioning"], country: "Nigeria" },
  { name: "Emmanuel Kwame",  role: "Film Producer & Distributor",     expertise: ["Film financing", "Festival strategy"],  country: "Ghana" },
  { name: "Naledi Dlamini",  role: "Impact Investment Director",      expertise: ["ESG frameworks", "DFI relations"],      country: "South Africa" },
  { name: "Moussa Traoré",   role: "Creative Economy Researcher",     expertise: ["Market analysis", "Policy advocacy"],   country: "Senegal" },
  { name: "Wanjiru Kamau",   role: "Digital Fashion Strategist",      expertise: ["E-commerce", "Brand storytelling"],     country: "Kenya" },
  { name: "Chidi Nwosu",     role: "Music Industry Executive",        expertise: ["Licensing", "Distribution strategy"],   country: "Nigeria" },
];

const events = [
  { date: "15 June 2026",  title: "Cohort 2026 Info Session",         type: "Online",    desc: "Open Q&A with IFFAC program officers, eligibility, timelines, and what we're looking for." },
  { date: "27 June 2026",  title: "Creative Capital Masterclass",     type: "Online",    desc: "Building investor-ready creative businesses, with Roberta Annan and the IFFAC Investment Committee." },
  { date: "14 July 2026",  title: "Lagos Community Meetup",           type: "In-person", desc: "Creative entrepreneurs, alumni, and partners in conversation, Lagos, venue TBC." },
  { date: "3 Oct 2026",    title: "IFFAC Annual Creative Summit",     type: "In-person", desc: "Pan-African convening of IFFAC portfolio, partners, investors, and creative ecosystem leaders." },
];

export default function CommunityPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-20" style={{ background: "#0D1B2A" }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#C4581A] text-xs font-bold tracking-[0.2em] uppercase mb-6">Community</p>
          <h1 className="font-display font-medium leading-[1.05] tracking-tight max-w-3xl mb-8 text-white"
            style={{ fontSize: "clamp(3rem,6vw,6rem)" }}>
            Join the most ambitious creative network in Africa.
          </h1>
          <p className="text-[#C8C4BC] max-w-2xl mb-12" style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
            IFFAC is bigger than a fund, it&apos;s a movement. The Community gives you access
            to mentors, events, open calls, and a peer network of Africa&apos;s most driven
            creative entrepreneurs.
          </p>
          <a href="#join"
            className="inline-flex items-center bg-[#B8902A] text-[#0D1B2A] text-sm font-bold px-9 py-4 hover:bg-[#D4A843] transition-colors">
            Join the network →
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-[#0D1B2A]/10">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#C4581A] text-xs font-bold tracking-[0.2em] uppercase mb-12">What you get</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(13,27,42,0.1)" }}>
            {benefits.map((b) => (
              <div key={b.title} style={{ background: "#F5F0E8" }} className="p-8 flex flex-col gap-4">
                <span className="text-[#B8902A] text-3xl">{b.icon}</span>
                <p className="font-display text-[#0D1B2A] text-xl font-medium">{b.title}</p>
                <p className="text-[#0D1B2A]/60 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-[#0D1B2A]/10">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#C4581A] text-xs font-bold tracking-[0.2em] uppercase mb-12">Upcoming Events</p>
          <div className="flex flex-col gap-px" style={{ background: "rgba(13,27,42,0.1)" }}>
            {events.map((e) => (
              <div key={e.title} style={{ background: "#F5F0E8" }}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-6 p-8 items-start group hover:bg-[#EDE7DA] transition-colors">
                <div>
                  <p className="text-[#0D1B2A] text-sm font-bold">{e.date}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold tracking-widest uppercase border px-2 py-0.5"
                    style={{ borderColor: e.type === "Online" ? "#8A9BB0" : "#B8902A", color: e.type === "Online" ? "#8A9BB0" : "#B8902A" }}>
                    {e.type}
                  </span>
                </div>
                <div>
                  <p className="font-display text-[#0D1B2A] text-xl font-medium mb-2">{e.title}</p>
                  <p className="text-[#0D1B2A]/60 text-sm leading-relaxed">{e.desc}</p>
                </div>
                <button className="text-xs font-bold text-[#B8902A] hover:text-[#D4A843] transition-colors whitespace-nowrap self-center">
                  Register →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20" style={{ background: "#EDE7DA" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-[#C4581A] text-xs font-bold tracking-[0.2em] uppercase mb-5">Mentors Directory</p>
              <h2 className="font-display text-[#0D1B2A] font-medium" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
                The people in your corner.
              </h2>
            </div>
            <p className="text-[#C8C4BC] text-sm max-w-xs">
              Community members get access to 1:1 introductions with IFFAC mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(13,27,42,0.1)" }}>
            {mentors.map((m) => (
              <div key={m.name} style={{ background: "#EDE7DA" }}
                className="p-8 hover:bg-[#F5F0E8] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#0D1B2A] flex items-center justify-center mb-5">
                  <span className="font-display text-white text-lg font-medium">{m.name.charAt(0)}</span>
                </div>
                <p className="font-display text-[#0D1B2A] text-lg font-medium mb-1">{m.name}</p>
                <p className="text-[#C8C4BC] text-xs mb-4">{m.role} · {m.country}</p>
                <div className="flex flex-wrap gap-2">
                  {m.expertise.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold tracking-wide uppercase border border-[#0D1B2A]/20 px-2.5 py-1 text-[#0D1B2A]/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join form */}
      <section id="join" className="py-20 md:py-28 px-6 md:px-12 lg:px-20" style={{ background: "#0D1B2A" }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#B8902A] text-xs font-bold tracking-[0.2em] uppercase mb-6">Join the Community</p>
            <h2 className="font-display font-medium text-white leading-snug mb-6"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Not applying yet? You still belong here.
            </h2>
            <p className="text-[#C8C4BC] text-lg leading-relaxed mb-5">
              Community membership is free and open, it&apos;s not a funding application.
              Join to access mentors, events, and early open-call alerts.
            </p>
            <p className="text-[#C8C4BC] text-sm">
              Already in our portfolio?{" "}
              <Link href="/apply/portal" className="text-[#B8902A] hover:text-[#D4A843] underline underline-offset-2 transition-colors">
                Access the alumni portal →
              </Link>
            </p>
          </div>
          <CommunityForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-20" style={{ background: "#F5F0E8" }}>
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-4">
          <Link href="/apply" className="inline-flex items-center justify-center bg-[#0D1B2A] text-white text-sm font-bold px-8 py-4 hover:bg-[#162536] transition-colors">
            Apply for funding →
          </Link>
          <Link href="/stories" className="inline-flex items-center justify-center border border-[#0D1B2A] text-[#0D1B2A] text-sm font-semibold px-8 py-4 hover:bg-[#0D1B2A] hover:text-white transition-colors">
            Read the IFFAC Journal
          </Link>
        </div>
      </section>

    </div>
  );
}
