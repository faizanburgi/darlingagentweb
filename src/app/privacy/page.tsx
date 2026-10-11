import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/config/site";
export const metadata = { title: "Privacy" };
export default function Privacy() {
  return (
    <PageShell label="Privacy" title="Privacy policy.">
      <p><strong>Draft template — have it reviewed before publishing.</strong></p>
      <h2>This website</h2>
      <p>This marketing site does not use accounts and sets no tracking cookies. It is independent from the DarlingAgent agent backend.</p>
      <h2>The agent</h2>
      <p>DarlingAgent runs inside your own tooling, such as Tencent WorkBuddy, and the data you give it is handled by those tools and any services you connect. Describe your data retention and third-party processors here.</p>
      <h2>Contact</h2>
      <p>Privacy questions: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </PageShell>
  );
}
