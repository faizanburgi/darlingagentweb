"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Symbol } from "./Symbol";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/#platform", label: "Platform" },
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How It Works" },
  { href: "/#installation", label: "Installation" },
  { href: siteConfig.githubUrl, label: "GitHub" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="wrap flex items-center justify-between border-b border-ivory/10 py-5">
        <Link href="/" className="flex items-center gap-2.5 text-ivory" aria-label="DarlingAgent home">
          <Symbol size={24} />
          <span className="text-[1.02rem] font-medium tracking-tight">DarlingAgent</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:gap-10 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="link-u text-[0.9rem] text-ivory/80 hover:text-ivory">{l.label}</a>
          ))}
        </nav>
        <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="link-u hidden text-[0.9rem] text-ivory md:inline">Get DarlingAgent ↗</a>
        <button className="-mr-2 p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-full bg-midnight/95 backdrop-blur md:hidden"
          >
            <div className="wrap flex flex-col py-6">
              {[...links, { href: siteConfig.githubUrl, label: "Get DarlingAgent ↗" }].map((l) => (
                <a key={l.label} href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} onClick={() => setOpen(false)} className="rule py-5 text-2xl font-light tracking-tight">{l.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
