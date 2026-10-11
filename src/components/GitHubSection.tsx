import { Headline, Label, Reveal, Button } from "./Reveal";
import { siteConfig } from "@/config/site";

async function getStats() {
  try {
    const r = await fetch(siteConfig.repoApi, { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } });
    if (!r.ok) return null;
    const j = await r.json();
    return { stars: Number(j.stargazers_count) || 0, forks: Number(j.forks_count) || 0, pushed: String(j.pushed_at ?? "") };
  } catch {
    return null;
  }
}

const areas: [string, string, string][] = [
  ["skills/campus-event-agent", "Agent skill", "tree/main/skills/campus-event-agent"],
  ["mcp/", "MCP tools", "blob/main/mcp"],
  ["packages/darlingagent-expert", "WorkBuddy Expert package", "tree/main/packages/darlingagent-expert"],
  ["docs/", "Status, operations, deployment", "tree/main/docs"],
];

export async function GitHubSection() {
  const stats = await getStats();
  const items: [string, string][] = [];
  if (stats?.pushed) items.push(["Last updated", new Date(stats.pushed).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })]);
  if (stats && stats.stars > 0) items.push(["Stars", String(stats.stars)]);
  if (stats && stats.forks > 0) items.push(["Forks", String(stats.forks)]);
  return (
    <section className="rule section" style={{ background: "linear-gradient(180deg,#0B171A,#0f2327 55%,#0B171A)" }}>
      <div className="wrap grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Label n="07">Open source</Label>
          <Headline text={"Open source.\nBuilt to evolve."} className="display h-lg mt-10" />
          <Reveal className="mt-10">
            <p className="max-w-md text-lg leading-relaxed text-muted">Explore DarlingAgent&apos;s architecture, agent skills, MCP tools, and development progress on GitHub.</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2">
              <Button href={siteConfig.githubUrl}>Explore Repository ↗</Button>
              <Button href={siteConfig.installGuideUrl} variant="ghost">Installation Guide ↗</Button>
            </div>
          </Reveal>
          {items.length > 0 && (
            <Reveal className="mt-12"><dl className="flex flex-wrap gap-x-12 gap-y-4">
              {items.map(([k, v]) => (<div key={k}><dt className="label">{k}</dt><dd className="mt-1 text-xl font-light">{v}</dd></div>))}
            </dl></Reveal>
          )}
        </div>
        <Reveal className="lg:col-span-5 lg:pt-24" delay={0.15}>
          <p className="label mb-4">In the repository</p>
          <ul>
            {areas.map(([p, d, h]) => (
              <li key={p} className="rule">
                <a href={`${siteConfig.githubUrl}/${h}`} target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between gap-6 py-4">
                  <span className="break-all font-mono text-sm text-ivory transition-colors group-hover:text-seafoam">{p}</span>
                  <span className="shrink-0 text-right text-sm text-muted">{d}</span>
                </a>
              </li>
            ))}
            <li className="rule" aria-hidden />
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
