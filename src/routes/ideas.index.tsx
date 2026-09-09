import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mic } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, PageHeader, Pill, StatusBadge, TabSwitcher } from "@/components/kit";
import { ideas, trends } from "@/lib/data";

export const Route = createFileRoute("/ideas/")({
  head: () => ({
    meta: [
      { title: "Ideas — Shooter" },
      { name: "description", content: "Ideas capture karein, AI expand kare aur research laaye." },
      { property: "og:title", content: "Ideas — Shooter" },
      { property: "og:description", content: "Ideas capture karein, AI expand kare aur research laaye." },
    ],
  }),
  component: Ideas,
});

function Ideas() {
  const [tab, setTab] = useState<"mere" | "trends">("mere");
  const [composing, setComposing] = useState(false);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <AppShell>
      <PageHeader title="Ideas" subtitle="Bas idea dijiye — baaki AI karega" />

      {composing ? (
        <Card className="mb-5">
          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="Idea likhein... jaise: 'trigger squeeze ki galti'"
            className="w-full resize-none bg-transparent text-[17px] leading-[26px] outline-none"
          />
          <div className="mt-3 flex gap-2">
            <Pill
              className="flex-1"
              onClick={() => {
                setComposing(false);
                setText("");
              }}
            >
              Save karo
            </Pill>
            <Pill variant="secondary" onClick={() => setComposing(false)}>
              Cancel
            </Pill>
          </div>
        </Card>
      ) : (
        <Pill className="mb-5 w-full" onClick={() => setComposing(true)}>
          <Mic size={20} /> 💡 Type karo ya bolein
        </Pill>
      )}

      <div className="mb-5">
        <TabSwitcher
          value={tab}
          onChange={setTab}
          options={[
            { value: "mere", label: "Mere Ideas" },
            { value: "trends", label: "Trends" },
          ]}
        />
      </div>

      {tab === "mere" ? (
        <div className="flex flex-col gap-2.5 pb-4">
          {ideas.map((idea) => (
            <Card key={idea.id}>
              <div className="flex items-center justify-between gap-2">
                <StatusBadge status={idea.status} />
                <span className="text-[14px] text-muted-foreground">{idea.created}</span>
              </div>
              <Link to="/ideas/$id" params={{ id: idea.id }} className="mt-2 block">
                <p className="text-[17px] font-bold leading-snug">{idea.title}</p>
                <p className="mt-1 text-[14px] text-muted-foreground">{idea.angle}</p>
              </Link>
              <span className="mt-2.5 inline-block rounded-full bg-background px-3 py-1 text-[12px] font-semibold text-muted-foreground">
                {idea.format}
              </span>
              <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
                {["Expand", "Research", "Plan mein daalo"].map((a) => (
                  <Pill
                    key={a}
                    variant="secondary"
                    className="min-h-[44px] shrink-0 px-4 text-[14px]"
                    onClick={() => navigate({ to: "/ideas/$id", params: { id: idea.id } })}
                  >
                    {a}
                  </Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2.5 pb-4">
          {trends.map((t) => (
            <Card key={t.id}>
              <span className="rounded-full bg-[#EEF4FF] px-2.5 py-1 text-[12px] font-semibold text-[#0F7FFF]">
                {t.source}
              </span>
              <p className="mt-2 text-[17px] font-bold leading-snug">{t.title}</p>
              <Pill variant="secondary" className="mt-3 min-h-[44px] text-[14px]">
                Idea banao
              </Pill>
            </Card>
          ))}
        </div>
      )}
    </AppShell>
  );
}
