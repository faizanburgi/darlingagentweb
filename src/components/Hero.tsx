"use client";
import { motion, useReducedMotion } from "motion/react";
import { Nav } from "./Nav";
import { Headline, Button } from "./Reveal";
import { Installation } from "./Installation";
import { siteConfig } from "@/config/site";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (d: number) => ({ initial: reduce ? false : { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d, ease: [0.2, 0.7, 0.2, 1] as const } });
  return (
    <section id="top" className="grain shift relative overflow-hidden" style={{ backgroundImage: "linear-gradient(180deg,#28636A 0%,#173d44 28%,#122B30 62%,#0B171A 100%)" }}>
      <div className="drift pointer-events-none absolute -right-[10%] top-[-10%] h-[60vw] w-[60vw] rounded-full bg-ocean/30 blur-[120px]" />
      <Nav />
      <div className="wrap relative pb-24 pt-40 md:pt-52">
        <motion.p {...fade(0.1)} className="label mb-8 flex items-center gap-3 text-ivory/80"><span className="blink h-1.5 w-1.5 rounded-full bg-seafoam" />Built for Tencent WorkBuddy</motion.p>
        <Headline tag="h1" text={"Your Event.\nOur Execution."} className="display h-xl" delay={0.2} />
        <motion.p {...fade(0.8)} className="mt-10 max-w-md whitespace-pre-line text-lg leading-relaxed text-ivory/85">{"One goal. Intelligent planning.\nReal-world execution.\n\nMeet DarlingAgent, your autonomous AI event operations partner."}</motion.p>
        <motion.p {...fade(0.9)} className="label mt-6 flex items-center gap-3 text-ivory/80"><span className="h-px w-8 bg-seafoam/70" />Best experienced in WorkBuddy</motion.p>
        <motion.div {...fade(1)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2">
          <Button href={siteConfig.githubUrl}>Get DarlingAgent ↗</Button>
          <Button href={siteConfig.workbuddyUrl} variant="ghost">Open WorkBuddy ↗</Button>
        </motion.div>
        <motion.div {...fade(1.2)} className="mt-20 md:mt-28"><Installation /></motion.div>
      </div>
    </section>
  );
}
