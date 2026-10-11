/**
 * Central configuration. Override docs URL / support email via .env.local (see .env.example).
 * Feature statuses follow the repository's own capability ledger (docs/STATUS.md):
 *   "live"   = implemented in the repository and covered by local tests
 *   "config" = implemented but needs your accounts / keys / WorkBuddy setup; live verification pending
 *   "dev"    = planned or incomplete
 */
export type FeatureStatus = "live" | "config" | "dev";

const REPO = "https://github.com/zeethdaleel/darling-agent";

export const siteConfig = {
  name: "DarlingAgent",
  tagline: "Your Event. Our Execution.",
  description:
    "An autonomous AI agent that transforms event planning into real execution. From budgets and registrations to tasks and documents, DarlingAgent helps you get things done.",
  githubUrl: REPO,
  installGuideUrl: `${REPO}/blob/main/docs/LOCAL_MVP.md`,
  issuesUrl: `${REPO}/issues`,
  statusUrl: `${REPO}/blob/main/docs/STATUS.md`,
  expertGuideUrl: `${REPO}/blob/main/packages/darlingagent-expert/README.md`,
  workbuddyUrl: "https://www.workbuddy.ai/",
  docsUrl: process.env.NEXT_PUBLIC_DOCS_URL ?? "/docs",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@example.com",
  repoApi: "https://api.github.com/repos/zeethdaleel/darling-agent",
};

export const features: { title: string; text: string; status: FeatureStatus }[] = [
  { title: "Autonomous Event Planning", text: "WorkBuddy plans and selects tools through DarlingAgent. Live end-to-end execution in WorkBuddy is not yet verified.", status: "config" },
  { title: "Task Coordination", text: "Create, track, and transition event tasks through the local MCP tools.", status: "live" },
  { title: "Budget Management", text: "Itemized budgets with validation. Costs are illustrative estimates, not quotes.", status: "live" },
  { title: "Event Proposal PDFs", text: "Generates real proposal PDFs, covered by the repository's local tests.", status: "live" },
  { title: "Registration Workflows", text: "Drafts and creates Tally registration forms. Needs your Tally API key; live check pending.", status: "config" },
  { title: "Vendor Research", text: "Planned. Not yet a verified capability in the repository.", status: "dev" },
  { title: "Email Preparation", text: "Prepares unsent invitation drafts. Sending needs a connected service and your approval.", status: "config" },
  { title: "Persistent Event Records", text: "Events, tasks, and approvals are stored in a local SQLite database.", status: "live" },
];

export const statusLabel: Record<FeatureStatus, string> = {
  live: "Available",
  config: "Requires configuration",
  dev: "In development",
};

export const workbuddyPrompt = `Please inspect this GitHub repository and help me install and configure DarlingAgent as a custom event operations Expert.

Follow the repository's setup instructions, install the required skills and MCP tools, and help me verify that the agent works.`;

export const skillsCommand =
  "npx skills add zeethdaleel/darling-agent --skill campus-event-agent -a opencode -a codex -a claude-code -a cursor -a windsurf";
