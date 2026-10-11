import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/config/site";
export const metadata = { title: "Terms" };
export default function Terms() {
  return (
    <PageShell label="Terms" title="Terms of use.">
      <p><strong>Draft template — have it reviewed before publishing.</strong></p>
      <h2>Use of the service</h2>
      <p>DarlingAgent assists with planning and coordinating events. You remain responsible for decisions, approvals, and communications sent on your behalf.</p>
      <h2>Availability</h2>
      <p>Features marked Beta may change. The service is provided as is, without warranty.</p>
      <h2>Questions</h2>
      <p>Write to <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </PageShell>
  );
}
