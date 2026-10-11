import Link from "next/link";
import { Symbol } from "./Symbol";
import { Footer } from "./Footer";

export function PageShell({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="wrap flex items-center justify-between border-b border-ivory/10 py-5">
        <Link href="/" className="flex items-center gap-2.5"><Symbol size={24} /><span className="font-medium tracking-tight">DarlingAgent</span></Link>
        <Link href="/" className="link-u text-sm text-ivory/80">← Back home</Link>
      </header>
      <main id="main" className="wrap section !pb-24" style={{ minHeight: "70vh" }}>
        <p className="label">{label}</p>
        <h1 className="display h-lg mt-8 max-w-[16ch]">{title}</h1>
        <div className="mt-16 max-w-2xl space-y-6 text-lg leading-relaxed text-muted [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-light [&_h2]:tracking-tight [&_h2]:text-ivory [&_a]:text-ivory [&_a]:underline [&_a]:decoration-seafoam/60 [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-jade [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-ivory">{children}</div>
      </main>
      <Footer />
    </>
  );
}
