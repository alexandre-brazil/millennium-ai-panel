"use client";

import { BotGlobal } from "../../../components/Dashboard/GlobalBot";
import { Conversas } from "../../../components/Dashboard/Conversations";
import { Estatisticas } from "../../../components/Dashboard/Statistics";
import { SettingsAi } from "../../../components/Dashboard/Settings";
import { Templates } from "../../../components/Dashboard/Templates";
import { RealtimeLogMonitor } from "@/components/Dashboard/LogMonitor";

export default function DashboardPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto space-y-6">
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BotGlobal />
        <Conversas />
        <Estatisticas />
        <Templates />
        <SettingsAi />
        <RealtimeLogMonitor />
      </section>
    </main>
  );
}
