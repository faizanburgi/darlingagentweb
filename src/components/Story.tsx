"use client";
import { motion, useReducedMotion } from "motion/react";
import { Headline, Label, Reveal, Button } from "./Reveal";
import { siteConfig } from "@/config/site";

export function Problem() {
  return (
    <section className="rule section bg-midnight">
      <div className="wrap">
        <Label n="02">The shift</Label>
        <Headline text={"Big events.\nToo many moving parts."} className="display h-lg mt-10 max-w-[16ch]" />
        <Reveal className="mt-16 max-w-sm md:ml-auto md:mt-0 md:-translate-y-6">
          <p className="text-lg leading-relaxed text-muted">Budgets, registrations, vendors, deadlines, and team coordination shouldn&apos;t require a dozen disconnected tools.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Diagram() {
  const reduce = useReducedMotion();
  const nodes = [
    { t: "USER GOAL", s: "your objective" },
    { t: "WORKBUDDY", s: "desktop agent workstation" },
    { t: "DARLINGAGENT", s: "event operations Expert" },
    { t: "TOOLS & SKILLS", s: "agent skills · MCP tools" },
    { t: "VERIFIED OUTPUTS", s: "plans · budgets · PDFs" },
  ];
  const H = 62, G = 46;
  return (
    <svg viewBox={`0 0 420 ${nodes.length * H + (nodes.length - 1) * G + 20}`} className="mx-auto h-auto w-full max-w-md" role="img" aria-label="From user goal through WorkBuddy, DarlingAgent, tools and skills, to verified outputs">
      {nodes.map((n, i) => {
        const y = 10 + i * (H + G);
        const hot = i === 2;
        return (
          <g key={n.t}>
            {i < nodes.length - 1 && (
              <g>
                <motion.line x1="210" x2="210" y1={y + H} y2={y + H + G} stroke="#A8D8CC" strokeOpacity=".8"
                  initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 + i * 0.45 }} />
                <line x1="210" x2="210" y1={y + H} y2={y + H + G} stroke="#D6F0E8" strokeOpacity=".6" className="flow" />
              </g>
            )}
            <rect x="30" y={y} width="360" height={H} fill={hot ? "#122B30" : "none"} stroke="#F5F3ED" strokeOpacity={hot ? 0.5 : 0.22} />
            {hot && <rect x="37" y={y + 7} width={346} height={H - 14} fill="none" stroke="#A8D8CC" strokeOpacity=".35" strokeDasharray="2 5" />}
            <text x="52" y={y + 28} fill="#F5F3ED" fontSize="13" letterSpacing="3" fontFamily="var(--font-geist-mono), monospace">{n.t}</text>
            <text x="52" y={y + 47} fill="#A7B8B7" fontSize="12" fontFamily="var(--font-geist-mono), monospace">{n.s}</text>
            <circle cx="366" cy={y + H / 2} r="4" fill={hot || i === nodes.length - 1 ? "#A8D8CC" : "none"} stroke="#F5F3ED" strokeOpacity=".5" className={hot ? "blink" : ""} />
          </g>
        );
      })}
    </svg>
  );
}

export function Platform() {
  return (
    <section id="platform" className="rule section" style={{ background: "linear-gradient(180deg,#0B171A,#0f2327 60%,#0B171A)" }}>
      <div className="wrap grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <Label n="01">The platform</Label>
          <Headline text={"Built for WorkBuddy.\nMade for execution."} className="display h-lg mt-10 lg:whitespace-nowrap" />
          <Reveal className="mt-10">
            <p className="max-w-lg whitespace-pre-line text-lg leading-relaxed text-muted">{"DarlingAgent brings autonomous event operations into Tencent WorkBuddy.\n\nGive it an objective, and let it coordinate the planning, tools, and deliverables behind your next event."}</p>
            <div className="mt-8 flex flex-wrap gap-x-8"><Button href={siteConfig.workbuddyUrl} variant="ghost">Open WorkBuddy ↗</Button></div>
          </Reveal>
        </div>
        <Reveal delay={0.2}><Diagram /></Reveal>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Describe", d: "Tell DarlingAgent what you want to organize." },
  { n: "02", t: "Execute", d: "WorkBuddy coordinates the agent's tools, workflows, and event operations." },
  { n: "03", t: "Deliver", d: "Receive structured plans, budgets, documents, and verified results." },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  return (
    <section id="how" className="rule section bg-midnight">
      <div className="wrap">
        <Label n="03">How it works</Label>
        <Headline text={"One prompt.\nReal execution."} className="display h-lg mt-10" />
        <ol className="relative mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
          <motion.div aria-hidden className="absolute left-0 right-0 top-[0.6rem] hidden h-px origin-left bg-gradient-to-r from-seafoam via-teal/60 to-transparent md:block"
            initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 2.2, ease: [0.2, 0.7, 0.2, 1] }} />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.15} className="relative md:pt-10">
              <span className="absolute left-0 top-0 hidden h-[1.2rem] w-[1.2rem] items-center justify-center rounded-full bg-midnight md:flex"><span className="h-2 w-2 rounded-full bg-seafoam" /></span>
              <p className="label">{s.n}</p>
              <h3 className="display mt-4 text-5xl md:text-6xl">{s.t}</h3>
              <p className="mt-5 max-w-[26ch] text-muted">{s.d}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-16"><p className="label flex max-w-xl items-start gap-3 normal-case tracking-normal"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-seafoam/70" /><span className="text-[0.82rem] leading-relaxed">External actions may require connected services and your approval.</span></p></Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="rule relative overflow-hidden bg-[#070f11] section">
      <div className="pointer-events-none absolute -bottom-[45%] left-1/2 h-[70%] w-[90%] -translate-x-1/2 rounded-full bg-teal/40 blur-[130px]" />
      <div className="wrap relative pb-24 md:pb-40">
        <Headline text={"Less planning.\nMore happening."} className="display h-xl" />
        <Reveal className="mt-10"><p className="max-w-md text-lg text-muted">Bring autonomous event operations into your WorkBuddy workspace.</p></Reveal>
        <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2" delay={0.1}>
          <Button href={siteConfig.githubUrl}>Get DarlingAgent ↗</Button>
          <Button href={siteConfig.workbuddyUrl} variant="ghost">Explore WorkBuddy ↗</Button>
        </Reveal>
        <Reveal className="mt-8" delay={0.15}><p className="label">Best experienced in Tencent WorkBuddy.</p></Reveal>
      </div>
    </section>
  );
}
