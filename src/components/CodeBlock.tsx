"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export type Line = { t: string; kind?: "cmd" | "comment" };

async function copyText(t: string) {
  try {
    await navigator.clipboard.writeText(t);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = t;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function Cmd({ text }: { text: string }) {
  let first = true;
  return (
    <>
      {text.split(" ").map((tok, i) => {
        const isEnv = /^[A-Z_]+=/.test(tok);
        const cls = isEnv ? "text-seafoam" : first ? "text-ivory" : tok.startsWith("-") ? "text-mist" : "text-muted";
        if (!isEnv) first = false;
        return <span key={i} className={cls}>{i ? " " : ""}{tok}</span>;
      })}
    </>
  );
}

/** Terminal / prompt block with a working copy button. Pass `lines` for commands or `prose` for a prompt. */
export function CodeBlock({ title, lines, prose, copyLabel = "Copy" }: { title: string; lines?: Line[]; prose?: string; copyLabel?: string }) {
  const [state, setState] = useState<"idle" | "ok" | "fail">("idle");
  const payload = prose ?? lines!.filter((l) => l.kind !== "comment").map((l) => l.t).join("\n");
  const onCopy = async () => {
    setState((await copyText(payload)) ? "ok" : "fail");
    setTimeout(() => setState("idle"), 2200);
  };
  return (
    <div className="border border-edge bg-jade/50">
      <div className="flex items-center justify-between gap-4 border-b border-edge px-4 py-2.5">
        <span className="label flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-seafoam/70" />{title}</span>
        <button onClick={onCopy} className="flex min-h-[36px] items-center gap-2 rounded-full border border-edge px-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ivory transition-colors hover:border-seafoam/60 hover:text-seafoam active:scale-[.98]">
          {state === "ok" ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
          <span aria-live="polite">{state === "ok" ? "Copied" : state === "fail" ? "Copy failed — select manually" : copyLabel}</span>
        </button>
      </div>
      {prose ? (
        <p className="whitespace-pre-line p-5 text-[0.95rem] leading-relaxed text-ivory/90 select-all">{prose}</p>
      ) : (
        <pre className="overflow-x-auto p-5 font-mono text-[0.82rem] leading-7 md:text-sm">
          {lines!.map((l, i) => (
            <code key={i} className="block whitespace-pre-wrap [overflow-wrap:anywhere]">
              {l.kind === "comment" ? <span className="text-muted/70"># {l.t}</span> : (<><span className="select-none text-seafoam">$ </span><Cmd text={l.t} /></>)}
            </code>
          ))}
        </pre>
      )}
    </div>
  );
}
