import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/config/site";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <PageShell label="Contact" title="Talk to a person.">
      <p>Questions, feedback, or partnership ideas — email <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
      <p>Bugs and feature requests are welcome on <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>. For help with the platform itself, see <a href={siteConfig.workbuddyUrl} target="_blank" rel="noopener noreferrer">WorkBuddy</a>.</p>
    </PageShell>
  );
}
