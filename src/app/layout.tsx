import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { siteConfig } from "@/config/site";

const TITLE = "DarlingAgent — Autonomous AI Event Operations for WorkBuddy";
const DESC = "DarlingAgent is an autonomous AI event operations agent built for Tencent WorkBuddy. Plan events, manage tasks, prepare budgets, and generate real deliverables.";
export const metadata: Metadata = {
  title: { default: TITLE, template: "%s — DarlingAgent" },
  description: DESC,
  openGraph: { title: TITLE, description: DESC, type: "website", siteName: "DarlingAgent" },
  twitter: { card: "summary", title: TITLE, description: DESC },
};
export const viewport: Viewport = { themeColor: "#0B171A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ivory focus:px-4 focus:py-2 focus:text-midnight">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
