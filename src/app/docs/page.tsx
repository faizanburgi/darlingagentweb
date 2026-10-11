import { PageShell } from "@/components/PageShell";
import { siteConfig, skillsCommand, features, statusLabel } from "@/config/site";
export const metadata = { title: "Documentation" };

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const toc: [string, string][] = [
  ["what", "What is DarlingAgent?"], ["why", "Why WorkBuddy?"], ["workbuddy", "How to install in WorkBuddy"],
  ["skills", "How to install agent skills"], ["npm", "Local npm setup"], ["mcp", "Configuring MCP tools"],
  ["supported", "Supported features"], ["integrations", "Required integrations"], ["troubleshooting", "Troubleshooting"], ["repo", "GitHub repository"],
];
const Pre = ({ children }: { children: React.ReactNode }) => (
  <pre className="overflow-x-auto border border-edge bg-jade/50 p-4 font-mono text-[0.82rem] leading-7 text-ivory"><code className="!bg-transparent !p-0 whitespace-pre-wrap [overflow-wrap:anywhere]">{children}</code></pre>
);

export default function Docs() {
  return (
    <PageShell label="Documentation" title="Start with a goal.">
      <nav aria-label="On this page" className="!mt-0 grid gap-x-8 gap-y-2 text-base sm:grid-cols-2">
        {toc.map(([id, t]) => <a key={id} href={`#${id}`} className="!no-underline hover:!text-seafoam">{t}</a>)}
      </nav>

      <h2 id="what">What is DarlingAgent?</h2>
      <p>{siteConfig.description}</p>
      <p>It is a WorkBuddy-led event operations project: WorkBuddy handles understanding and planning, and DarlingAgent supplies the event-operations skill and MCP tools. The repository describes itself as an implementation increment, not a finished autonomous product — see <a href={siteConfig.statusUrl} {...ext}>STATUS.md</a> for what is implemented, mocked, blocked, or missing.</p>

      <h2 id="why">Why WorkBuddy?</h2>
      <p><a href={siteConfig.workbuddyUrl} {...ext}>Tencent WorkBuddy</a> is a desktop AI agent workstation that plans and executes tasks. DarlingAgent is designed to run as an event operations Expert there, using agent skills, MCP tools and structured workflows. WorkBuddy is the primary interface and the recommended experience.</p>

      <h2 id="workbuddy">How to install in WorkBuddy</h2>
      <p>Open WorkBuddy, sign in, start a conversation, share the <a href={siteConfig.githubUrl} {...ext}>repository link</a>, and ask WorkBuddy to inspect it and help you install and configure DarlingAgent as a custom event operations Expert. The exact prompt is on the <a href="/#installation">installation section</a> with a copy button.</p>
      <p>Pasting the URL does not install the agent on its own. WorkBuddy may need to configure the skill, a custom Expert, the local MCP server and dependencies, and native one-click Expert installation has not been verified. Follow the repository&apos;s <a href={siteConfig.expertGuideUrl} {...ext}>WorkBuddy Expert setup guide</a>.</p>

      <h2 id="skills">How to install agent skills</h2>
      <p>For Cursor, Claude Code, Codex, Windsurf and OpenCode, install the published skill with the Skills CLI:</p>
      <Pre>{skillsCommand}</Pre>
      <p>Installing the skill does not install the MCP server or the WorkBuddy Expert, and it does not configure the MCP backend.</p>

      <h2 id="npm">Local npm setup</h2>
      <p>This is repository-based installation. DarlingAgent is not published as an npm package. Node.js 22+ is required.</p>
      <Pre>{`git clone https://github.com/zeethdaleel/darling-agent.git
cd darling-agent
npm ci
npm test
npm run expert:package`}</Pre>
      <p><code>npm ci</code> installs dependencies from the lockfile and <code>npm test</code> verifies the local implementation, and <code>npm run expert:package</code> builds the WorkBuddy Expert package at <code>artifacts/darlingagent-expert</code>.</p>

      <h2 id="mcp">Configuring MCP tools</h2>
      <p>DarlingAgent&apos;s MCP server provides persistent operations, deterministic checks and local documents. Its entry point is <code>dist/scripts/run-mcp.js</code>, and the Expert package includes a generated <code>.mcp.json</code> you can use to configure the local MCP connector. Connecting the tools to an AI assistant needs additional configuration; see the <a href={siteConfig.installGuideUrl} {...ext}>Local MVP guide</a>.</p>

      <h2 id="supported">Supported features</h2>
      <ul className="list-none space-y-4 p-0">
        {features.map((f) => (
          <li key={f.title} className="rule pt-4"><span className="text-ivory">{f.title}</span> <span className="label ml-2">{statusLabel[f.status]}</span><br /><span className="text-base">{f.text}</span></li>
        ))}
      </ul>

      <h2 id="integrations">Required integrations</h2>
      <p>The local workflow needs no cloud server. Publishing or sending anything externally — such as a Tally registration form — requires the matching service connection and your explicit approval, and live testing of those integrations is still pending.</p>
      <p>The repository still contains legacy Telegram and cloud functionality from an earlier direction. It is not part of the active local-first MVP described here.</p>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <ul className="list-disc space-y-3 pl-5">
        <li><span className="text-ivory">Install or tests fail</span> — check <code>node -v</code> is 22 or newer and use <code>npm ci</code>, not <code>npm install</code>.</li>
        <li><span className="text-ivory">Skill installed but no tools appear</span> — the Skills CLI installs only the skill. The MCP backend must be configured separately.</li>
        <li><span className="text-ivory">WorkBuddy can&apos;t import the Expert</span> — the native import path isn&apos;t verified. Use the setup guide and your client&apos;s custom expert and MCP settings.</li>
        <li><span className="text-ivory">An email or form action didn&apos;t run</span> — it needs a connected account and your approval first.</li>
      </ul>

      <h2 id="repo">GitHub repository</h2>
      <p>Source, issues and the latest documentation live at <a href={siteConfig.githubUrl} {...ext}>github.com/zeethdaleel/darling-agent</a>. Start with the <a href={siteConfig.installGuideUrl} {...ext}>Local MVP guide</a>, or report problems in the <a href={siteConfig.issuesUrl} {...ext}>issue tracker</a>.</p>
    </PageShell>
  );
}
