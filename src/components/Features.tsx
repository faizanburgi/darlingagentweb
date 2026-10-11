"use client";
import { useState } from "react";
import { Headline, Label, Reveal } from "./Reveal";
import { features, statusLabel, siteConfig, type FeatureStatus } from "@/config/site";

const dot: Record<FeatureStatus, string> = {
  live: "bg-seafoam",
  config: "border border-seafoam bg-seafoam/25",
  dev: "border border-muted",
};
const Dot = ({ s }: { s: FeatureStatus }) => <span aria-hidden className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot[s]}`} />;

export function Features() {
  const [active, setActive] = useState(0);
  const [lead, ...rest] = features;
  return (
    <section id="features" className="rule section" style={{ background: "linear-gradient(180deg,#0B171A,#0f2327 50%,#0B171A)" }}>
      <div className="wrap">
        <Label n="05">The capabilities</Label>
        <Headline text={"Built to handle\nthe details."} className="display h-lg mt-10" />
        <Reveal className="mt-8 max-w-xl">
          <p className="text-[0.95rem] leading-relaxed text-muted">Statuses follow the repository&apos;s own capability ledger. <a href={siteConfig.statusUrl} target="_blank" rel="noopener noreferrer" className="text-ivory underline decoration-seafoam/60 underline-offset-4 hover:text-seafoam">Read STATUS.md ↗</a></p>
          <ul className="label mt-5 flex flex-wrap gap-x-6 gap-y-2" aria-label="Status legend">
            {(Object.keys(statusLabel) as FeatureStatus[]).map((k) => <li key={k} className="flex items-center gap-2"><Dot s={k} />{statusLabel[k]}</li>)}
          </ul>
        </Reveal>
        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label flex items-center gap-2">01 · <Dot s={lead.status} />{statusLabel[lead.status]}</p>
            <h3 className="display mt-6 text-5xl md:text-7xl">{lead.title}</h3>
            <p className="mt-6 max-w-sm text-lg text-muted">{lead.text}</p>
            <svg viewBox="0 0 320 120" className="mt-12 w-full max-w-sm" aria-hidden>
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <line x1="10" x2={310 - i * 40} y1={20 + i * 26} y2={20 + i * 26} stroke="#F5F3ED" strokeOpacity=".2" />
                  <circle cx={310 - i * 40} cy={20 + i * 26} r="4" fill={i === 0 ? "#A8D8CC" : "#0B171A"} stroke="#F5F3ED" strokeOpacity=".6" />
                </g>
              ))}
            </svg>
          </Reveal>
          <ul className="lg:col-span-7" onMouseLeave={() => setActive(-1)}>
            {rest.map((f, i) => {
              const on = active === i;
              return (
                <Reveal as="li" key={f.title} delay={i * 0.05}>
                  <button
                    onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                    className="rule group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 text-left transition-colors md:grid-cols-[3rem_1fr_auto]"
                    aria-expanded={on}
                  >
                    <span className="label">{String(i + 2).padStart(2, "0")}</span>
                    <span>
                      <span className={`block text-2xl font-light tracking-tight transition-all duration-500 md:text-3xl ${on ? "translate-x-2 text-ivory" : "text-ivory/70"}`}>{f.title}</span>
                      <span className={`grid transition-all duration-500 ${on ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <span className="overflow-hidden text-muted">{f.text}</span>
                      </span>
                    </span>
                    <span className="label flex max-w-[7rem] items-start gap-2 text-right leading-snug sm:max-w-none sm:items-center"><span className="mt-[0.35em] sm:mt-0"><Dot s={f.status} /></span>{statusLabel[f.status]}</span>
                  </button>
                </Reveal>
              );
            })}
            <li className="rule" aria-hidden />
          </ul>
        </div>
      </div>
    </section>
  );
}
