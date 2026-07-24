import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import FloatingAssistant from "../dashboard/FloatingAssistant";
import CommandHeader from "../command/CommandHeader";
import GlobalStatusBar from "../command/GlobalStatusBar";

type CommandLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function CommandLayout({
  title,
  subtitle,
  children,
}: CommandLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <div className="max-w-[1900px] mx-auto px-8 py-8">

          <CommandHeader />

          <GlobalStatusBar />

          <div className="mb-10">

            <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
              National Marine Pollution Command Center
            </p>

            <h2 className="text-5xl font-black mt-3">
              {title}
            </h2>

            <p className="text-slate-400 mt-4 max-w-3xl leading-8">
              {subtitle}
            </p>

          </div>

          {children}

        </div>

      </main>

      <FloatingAssistant />

    </div>
  );
}