"use client";
import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children, delay = 0, className = "", as = "div" }: { children: React.ReactNode; delay?: number; className?: string; as?: "div" | "h1" | "h2" | "p" | "li" }) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </M>
  );
}

/** Line-by-line headline reveal. Lines are split on \n. Triggered from the parent so clipped lines still animate. */
export function Headline({ text, className = "", tag = "h2", delay = 0 }: { text: string; className?: string; tag?: "h1" | "h2"; delay?: number }) {
  const reduce = useReducedMotion();
  const Tag = motion[tag];
  return (
    <Tag
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ delayChildren: delay, staggerChildren: 0.12 }}
    >
      {text.split("\n").map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: "105%" }, show: { y: 0 } }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Label({ n, children, dot }: { n: string; children: React.ReactNode; dot?: boolean }) {
  return (
    <p className="label flex items-center gap-3">
      {dot && <span className="blink h-1.5 w-1.5 rounded-full bg-seafoam" />}
      <span>[{n}]</span>
      <span>{children}</span>
    </p>
  );
}

export function Button({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "ghost" }) {
  const external = href.startsWith("http");
  const cls =
    variant === "solid"
      ? "group inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-[0.95rem] font-medium text-midnight transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px_rgba(168,216,204,.45)] active:scale-[.98]"
      : "link-u inline-flex items-center gap-2 py-3 text-[0.95rem] text-ivory/90";
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
