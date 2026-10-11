"use client";
import { useRef } from "react";
import { Symbol } from "./Symbol";

const nodes = [
  { id: "PLAN", x: 230, y: 130, note: "goal → sequence" },
  { id: "EXECUTE", x: 970, y: 130, note: "tools · actions" },
  { id: "COORDINATE", x: 230, y: 390, note: "people · vendors" },
  { id: "VERIFY", x: 970, y: 390, note: "checks · proof" },
];
const C = { x: 600, y: 260 };

export function Installation() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    ref.current!.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className="grain shift relative overflow-hidden rounded-[2px] border border-ivory/10"
      style={{ backgroundImage: "linear-gradient(135deg,#173d44 0%,#28636A 38%,#1d4a52 70%,#0B171A 100%)", ["--mx" as string]: "50%", ["--my" as string]: "50%" }}
    >
      <div className="drift absolute -left-[10%] top-[5%] h-[70%] w-[45%] rounded-full bg-ocean/40 blur-[90px]" />
      <div className="drift-b absolute -right-[8%] bottom-[-10%] h-[70%] w-[42%] rounded-full bg-midnight/70 blur-[80px]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity" style={{ background: "radial-gradient(420px circle at var(--mx) var(--my), rgba(168,216,204,.14), transparent 60%)" }} />
      <svg viewBox="0 0 1200 520" className="relative block h-auto w-full" role="img" aria-label="DarlingAgent at the center, connected to Plan, Execute, Coordinate and Verify">
        <defs>
          <pattern id="g" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0H0V60" fill="none" stroke="#F5F3ED" strokeOpacity=".09" /></pattern>
        </defs>
        <rect width="1200" height="520" fill="url(#g)" />
        <circle cx={C.x} cy={C.y} r="200" fill="none" stroke="#F5F3ED" strokeOpacity=".18" />
        <circle cx={C.x} cy={C.y} r="130" fill="none" stroke="#F5F3ED" strokeOpacity=".12" strokeDasharray="2 6" />
        {nodes.map((n, i) => {
          const d = `M${C.x} ${C.y} C ${(C.x + n.x) / 2} ${C.y}, ${(C.x + n.x) / 2} ${n.y}, ${n.x} ${n.y}`;
          return (
            <g key={n.id}>
              <path id={`p${i}`} d={d} fill="none" stroke="#F5F3ED" strokeOpacity=".35" />
              <path d={d} fill="none" stroke="#A8D8CC" strokeOpacity=".85" className="flow" style={{ animationDelay: `${i * -1.4}s` }} />
              <circle r="3.5" fill="#D6F0E8" className="sim" style={{ filter: "drop-shadow(0 0 6px #A8D8CC)" }}>
                <animateMotion dur={`${9 + i * 1.5}s`} repeatCount="indefinite" begin={`${i * 1.2}s`} keyPoints={i % 2 ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear"><mpath href={`#p${i}`} /></animateMotion>
              </circle>
              <circle cx={n.x} cy={n.y} r="7" fill="#0B171A" stroke="#F5F3ED" strokeOpacity=".8" />
              <circle cx={n.x} cy={n.y} r="2.5" fill="#A8D8CC" className="blink" style={{ filter: "drop-shadow(0 0 5px #A8D8CC)" }} />
              <text x={n.x + (n.x < 600 ? -22 : 22)} y={n.y - 4} textAnchor={n.x < 600 ? "end" : "start"} fill="#F5F3ED" className="nl" fontSize="15" letterSpacing="3" fontFamily="var(--font-geist-mono), monospace">{n.id}</text>
              <text x={n.x + (n.x < 600 ? -22 : 22)} y={n.y + 16} textAnchor={n.x < 600 ? "end" : "start"} fill="#F5F3ED" fillOpacity=".6" className="nn" fontSize="11" letterSpacing="2" fontFamily="var(--font-geist-mono), monospace">{n.note}</text>
            </g>
          );
        })}
        <circle cx={C.x} cy={C.y} r="52" fill="#0B171A" fillOpacity=".78" stroke="#F5F3ED" strokeOpacity=".35" />
        <text className="nn" x="40" y="490" fill="#F5F3ED" fillOpacity=".78" fontSize="11" letterSpacing="2" fontFamily="var(--font-geist-mono), monospace">FIG. 01 — ONE AGENT, FOUR OPERATIONS</text>
        <text className="nn" x="1160" y="490" textAnchor="end" fill="#F5F3ED" fillOpacity=".78" fontSize="11" letterSpacing="2" fontFamily="var(--font-geist-mono), monospace">STATUS: IN MOTION</text>
      </svg>
      <div className="pointer-events-none absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 text-ivory"><Symbol size={44} /></div>
    </div>
  );
}
