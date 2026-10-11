"use client";
import { motion, useReducedMotion } from "motion/react";
import { Check, ClipboardList, Calculator, FileText, LayoutList, ListChecks, Search, ShieldCheck } from "lucide-react";
import { Headline, Label } from "./Reveal";

const steps = [
  { Icon: Search, t: "Understanding event requirements" },
  { Icon: LayoutList, t: "Structuring the event" },
  { Icon: Calculator, t: "Preparing the budget" },
  { Icon: ListChecks, t: "Organizing tasks" },
  { Icon: FileText, t: "Generating proposal PDF" },
  { Icon: ClipboardList, t: "Preparing registration" },
  { Icon: ShieldCheck, t: "Verifying deliverables" },
];
const STEP = 0.8;

export function Demo() {
  const reduce = useReducedMotion();
  return (
    <section className="rule section bg-midnight">
      <div className="wrap">
        <Label n="06" dot>In action</Label>
        <Headline text={"See DarlingAgent\nin action."} className="display h-lg mt-10" />
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label">Instruction</p>
            <p className="display mt-5 text-3xl leading-[1.1] md:text-4xl">{"“Organize an AI networking event for 50 students at Taylor's University with an RM1,500 budget.”"}</p>
            <p className="label mt-8 flex items-center gap-3"><span className="h-px w-8 bg-seafoam/70" />Illustrative workflow</p>
            <p className="mt-3 max-w-xs text-sm text-muted">A representation of the kind of operations DarlingAgent coordinates — not a recording of a live run.</p>
          </div>
          <motion.div
            className="border border-edge bg-jade/40 lg:col-span-7"
            initial={reduce ? "show" : "hidden"} whileInView="show" viewport={{ once: true, margin: "-15% 0px" }}
          >
            <div className="label flex items-center justify-between border-b border-edge px-5 py-3.5 md:px-8">
              <span>DarlingAgent · Expert</span>
              <span className="flex items-center gap-2"><span className="blink h-1.5 w-1.5 rounded-full bg-seafoam" />Illustrative</span>
            </div>
            <ol className="px-5 py-2 md:px-8">
              {steps.map(({ Icon, t }, i) => (
                <motion.li
                  key={t} custom={i}
                  variants={{ hidden: { opacity: 0.3 }, show: (c: number) => ({ opacity: 1, transition: { delay: c * STEP, duration: 0.6 } }) }}
                  className={`grid grid-cols-[2.25rem_1fr_1.5rem] items-center gap-4 py-4 ${i ? "border-t border-ivory/10" : ""}`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-seafoam"><Icon size={16} aria-hidden /></span>
                  <span>
                    <span className="flex items-baseline gap-3"><span className="label">{String(i + 1).padStart(2, "0")}</span><span className="text-[1.02rem] text-ivory md:text-lg">{t}</span></span>
                    <span className="mt-2.5 block h-px w-full bg-ivory/10" aria-hidden>
                      <motion.span custom={i} variants={{ hidden: { scaleX: 0 }, show: (c: number) => ({ scaleX: 1, transition: { delay: c * STEP, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } }) }} className="block h-px origin-left bg-seafoam" />
                    </span>
                  </span>
                  <motion.span custom={i} variants={{ hidden: { opacity: 0, scale: 0.6 }, show: (c: number) => ({ opacity: 1, scale: 1, transition: { delay: c * STEP + 0.65 } }) }} className="text-seafoam"><Check size={18} aria-label="done" /></motion.span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
