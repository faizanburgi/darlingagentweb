import { Hero } from "@/components/Hero";
import { Platform, Problem, HowItWorks, FinalCTA } from "@/components/Story";
import { Install } from "@/components/Install";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { GitHubSection } from "@/components/GitHubSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Platform />
      <Problem />
      <HowItWorks />
      <Install />
      <Features />
      <Demo />
      <GitHubSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
