"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Headline, Label, Reveal, Button } from "./Reveal";
import { CodeBlock, type Line } from "./CodeBlock";
import { siteConfig, skillsCommand, workbuddyPrompt } from "@/config/site";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} {...ext} className="text-ivory underline decoration-seafoam/60 underline-offset-4 transition-colors hover:text-seafoam">{children}</a>
);

const localLines: Line[] = [
  { t: "git clone https://github.com/zeethdaleel/darling-agent.git" },
  { t: "cd darling-agent" },
  { t: "npm ci" },
  { t: "npm test" },
  { t: "npm run expert:package" },
];

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <li className="rule grid grid-cols-[3rem_1fr] gap-4 py-6 md:grid-cols-[4rem_1fr]">
      <span className="label pt-1">Step {n}</span>
      <div className="min-w-0 text-[1.05rem] leading-relaxed text-ivory/90 [&_p+*]:mt-4">{children}</div>
    </li>
  );
}

export function Install() {
  const [local, setLocal] = useState(false);
  return (
    <section id="installation" className="rule section" style={{ background: "linear-gradient(180deg,#0B171A,#122B30 45%,#0B171A)" }}>
      <div className="wrap">
        <Label n="04">Installation</Label>
        <Headline text={"Get started with\nDarlingAgent."} className="display h-lg mt-10" />
        <Reveal className="mt-8"><p className="max-w-md whitespace-pre-line text-lg text-muted">{"Designed for WorkBuddy.\nAccessible to developers."}</p></Reveal>

        {/* OPTION 1 — WORKBUDDY */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-seafoam/40 bg-seafoam/10 px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-seafoam"><span className="blink h-1.5 w-1.5 rounded-full bg-seafoam" />Recommended experience</p>
            <p className="label mt-8">Option 1</p>
            <h3 className="display mt-3 text-5xl md:text-6xl">WorkBuddy</h3>
            <p className="mt-5 max-w-xs text-muted">Set DarlingAgent up as a custom event operations Expert, with WorkBuddy guiding the configuration.</p>
            <div className="mt-8 border-l border-seafoam/60 pl-5 text-[0.95rem] leading-relaxed text-muted">
              <p className="text-ivory">What to expect</p>
              <p className="mt-2">Sharing the repository URL does not install the agent by itself. WorkBuddy may need to configure the skill, a custom Expert, the local MCP server, and dependencies. Native one-click Expert installation has not been verified yet.</p>
            </div>
          </Reveal>
          <ol className="lg:col-span-8 [&>li:last-child]:border-b [&>li:last-child]:border-ivory/10">
            <Step n="01"><p>Open Tencent WorkBuddy.</p><p className="text-sm text-muted">It&apos;s a desktop app; download it from the official site if you don&apos;t have it yet.</p><div className="-ml-0.5 pt-2"><Button href={siteConfig.workbuddyUrl}>Open WorkBuddy ↗</Button></div></Step>
            <Step n="02"><p>Sign in to your WorkBuddy account.</p></Step>
            <Step n="03"><p>Start a conversation with WorkBuddy.</p></Step>
            <Step n="04"><p>Share the DarlingAgent GitHub repository:</p><p className="break-all font-mono text-sm"><A href={siteConfig.githubUrl}>{siteConfig.githubUrl}</A></p></Step>
            <Step n="05"><p>Ask WorkBuddy:</p><CodeBlock title="Prompt" prose={workbuddyPrompt} copyLabel="Copy Prompt" /></Step>
            <Step n="06"><p>Follow WorkBuddy&apos;s setup instructions and configure any required dependencies.</p><p className="text-sm text-muted">The repository&apos;s <A href={siteConfig.expertGuideUrl}>WorkBuddy Expert setup guide</A> describes what WorkBuddy will be working from.</p></Step>
            <Step n="07"><p>Open your configured DarlingAgent Expert and give it an event-planning task.</p></Step>
          </ol>
        </div>

        {/* OPTION 2 — DEV ENVIRONMENTS */}
        <div className="rule mt-24 grid gap-10 pt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="label">Option 2</p>
            <h3 className="display mt-3 text-4xl md:text-5xl">Use it in your development environment.</h3>
            <p className="mt-5 max-w-xs text-muted">DarlingAgent also provides reusable agent skills and MCP-based tools for compatible AI development environments.</p>
          </Reveal>
          <div className="space-y-8 lg:col-span-8">
            <ul className="grid grid-cols-2 gap-px bg-edge/60 sm:grid-cols-5" aria-label="Compatible environments">
              {["Cursor", "Claude Code", "Codex", "Windsurf", "OpenCode"].map((n) => (
                <li key={n} className="bg-midnight px-4 py-5 text-center text-[0.95rem] text-ivory/90 sm:text-left">{n}</li>
              ))}
            </ul>
            <p className="text-muted">Supported environments can install the published repository skill through the Skills CLI. This does not give them the complete WorkBuddy Expert experience.</p>
            <CodeBlock title="Skills CLI" lines={[{ t: skillsCommand }]} copyLabel="Copy Command" />
            <p className="border-l border-seafoam/60 pl-5 text-[0.95rem] leading-relaxed text-muted">Skill installation does not automatically install or configure the DarlingAgent MCP backend. See the repository documentation.</p>
            <Button href={siteConfig.githubUrl} variant="ghost">View repository ↗</Button>
          </div>
        </div>

        {/* LOCAL SETUP */}
        <div className="rule mt-24 pt-4">
          <button onClick={() => setLocal((v) => !v)} aria-expanded={local} aria-controls="local-setup" className="group flex min-h-[64px] w-full items-center justify-between gap-6 py-6 text-left">
            <span><span className="label block">Option 3</span><span className="display mt-2 block text-3xl md:text-4xl">Local setup — for developers</span></span>
            <ChevronDown aria-hidden className={`shrink-0 text-seafoam transition-transform duration-500 ${local ? "rotate-180" : ""}`} />
          </button>
          <div id="local-setup" className={`grid transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${local ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden">
              <div className="grid gap-10 pb-6 pt-4 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7"><CodeBlock title="Terminal" lines={localLines} copyLabel="Copy" /></div>
                <ul className="space-y-4 text-[0.95rem] leading-relaxed text-muted lg:col-span-5">
                  <li><span className="text-ivory">Requires Node.js 22+.</span> <code className="font-mono text-sm">npm ci</code> installs the project dependencies from the lockfile.</li>
                  <li><code className="font-mono text-sm">npm test</code> verifies the local implementation.</li>
                  <li><code className="font-mono text-sm">npm run expert:package</code> builds the WorkBuddy Expert package at <code className="font-mono text-sm">artifacts/darlingagent-expert</code>. Import it with WorkBuddy&apos;s supported Expert installation workflow.</li>
                  <li>If needed, configure the local MCP connector with the generated <code className="font-mono text-sm">.mcp.json</code>. The MCP server entry point is <code className="font-mono text-sm">dist/scripts/run-mcp.js</code>. Additional configuration is required to connect MCP tools to an AI assistant.</li>
                  <li>This is repository-based installation, not installation of a published npm package.</li>
                  <li><A href={siteConfig.installGuideUrl}>Read the Local MVP guide ↗</A></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
