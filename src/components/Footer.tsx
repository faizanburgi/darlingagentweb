import Link from "next/link";
import { Symbol } from "./Symbol";
import { siteConfig } from "@/config/site";

export function Footer() {
  const links: [string, string][] = [
    ["Platform", "/#platform"], ["Features", "/#features"], ["How It Works", "/#how"], ["Installation", "/#installation"],
    ["Documentation", siteConfig.docsUrl], ["GitHub", siteConfig.githubUrl], ["WorkBuddy", siteConfig.workbuddyUrl],
    ["Contact", "/contact"], ["Privacy", "/privacy"], ["Terms", "/terms"],
  ];
  return (
    <footer className="relative overflow-hidden bg-[#070f11]">
      <div className="wrap rule relative grid gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
        <div className="relative z-10">
          <p className="flex items-center gap-3 text-2xl font-light tracking-tight"><Symbol size={28} />DarlingAgent</p>
          <p className="mt-4 max-w-xs text-muted">{siteConfig.tagline}</p>
          <p className="label mt-10">© {new Date().getFullYear()} DarlingAgent</p>
        </div>
        <nav aria-label="Footer" className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-4 self-start">
          {links.map(([l, h]) => {
            const ext = h.startsWith("http");
            return ext ? (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="link-u w-fit text-ivory/80 hover:text-ivory">{l} ↗</a>
            ) : (
              <Link key={l} href={h} className="link-u w-fit text-ivory/80 hover:text-ivory">{l}</Link>
            );
          })}
        </nav>
        <Symbol size={420} className="pointer-events-none absolute -bottom-32 -right-24 text-seafoam opacity-[0.07]" />
      </div>
    </footer>
  );
}
