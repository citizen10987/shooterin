import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, OpenLink, PageHeader, Pill, SectionHeading, StatusBadge, TabSwitcher } from "@/components/kit";
import { analytics, contents, series } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "Plan — Shooter" },
      { name: "description", content: "Content calendar, series progress aur analytics ek hi jagah." },
      { property: "og:title", content: "Plan — Shooter" },
      { property: "og:description", content: "Content calendar, series progress aur analytics ek hi jagah." },
    ],
  }),
  component: Plan,
});

const days = [
  { d: "Som", n: 7, date: "2026-09-07" },
  { d: "Mangal", n: 8, date: "2026-09-08" },
  { d: "Budh", n: 9, date: "2026-09-09" },
  { d: "Guru", n: 10, date: "2026-09-10" },
  { d: "Shukra", n: 11, date: "2026-09-11" },
  { d: "Shani", n: 12, date: "2026-09-12" },
  { d: "Ravi", n: 13, date: "2026-09-13" },
];

function Plan() {
  const [tab, setTab] = useState<"calendar" | "analytics">("calendar");
  const [range, setRange] = useState<"week" | "month">("week");
  const [selected, setSelected] = useState("2026-09-09");
  const [openSeries, setOpenSeries] = useState<string | null>("s1");
  const [stats, setStats] = useState(analytics);

  const dayItems = contents.filter((c) => c.date === selected);
  const totals = stats.reduce(
    (a, s) => ({ views: a.views + s.views, likes: a.likes + s.likes, comments: a.comments + s.comments }),
    { views: 0, likes: 0, comments: 0 },
  );

  return (
    <AppShell>
      <PageHeader title="Plan" subtitle="Aapka poora content schedule" />
      <div className="mb-5">
        <TabSwitcher
          value={tab}
          onChange={setTab}
          options={[
            { value: "calendar", label: "Calendar" },
            { value: "analytics", label: "Analytics" },
          ]}
        />
      </div>

      {tab === "calendar" ? (
        <>
          <div className="mb-4 w-[190px]">
            <TabSwitcher
              value={range}
              onChange={setRange}
              options={[
                { value: "week", label: "Hafta" },
                { value: "month", label: "Mahina" },
              ]}
            />
          </div>

          <div className="no-scrollbar mb-6 -mx-4 flex gap-2 overflow-x-auto px-4">
            {days.map((day) => {
              const has = contents.some((c) => c.date === day.date);
              const active = selected === day.date;
              return (
                <button
                  key={day.date}
                  onClick={() => setSelected(day.date)}
                  className={cn(
                    "flex min-h-[76px] w-[58px] shrink-0 flex-col items-center justify-center gap-1 rounded-lg",
                    active ? "bg-primary text-primary-foreground" : "card-surface",
                  )}
                >
                  <span className={cn("text-[12px]", active ? "opacity-80" : "text-muted-foreground")}>{day.d}</span>
                  <span className="text-[18px] font-bold">{day.n}</span>
                  <span
                    className="size-1.5 rounded-full"
                    style={{ background: has ? (active ? "#FEEA3D" : "#0F7FFF") : "transparent" }}
                  />
                </button>
              );
            })}
          </div>

          <section className="mb-7">
            <SectionHeading title="Is din ka content" />
            <div className="flex flex-col gap-2.5">
              {dayItems.length === 0 && (
                <Card>
                  <p className="text-[14px] text-muted-foreground">Is din koi content planned nahi hai.</p>
                </Card>
              )}
              {dayItems.map((c) => (
                <Card key={c.id}>
                  <StatusBadge status={c.status} />
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[17px] font-bold leading-snug">{c.title}</p>
                      <p className="mt-1 text-[14px] text-muted-foreground">
                        {c.platform} · {c.series}
                      </p>
                    </div>
                    <OpenLink to="/content/$id" params={{ id: c.id }} />
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-4">
            <SectionHeading title="Series" />
            <div className="flex flex-col gap-2.5">
              {series.map((s) => (
                <Card key={s.id}>
                  <button
                    className="flex w-full items-center justify-between gap-3 text-left"
                    onClick={() => setOpenSeries(openSeries === s.id ? null : s.id)}
                  >
                    <div>
                      <p className="text-[17px] font-bold">{s.name}</p>
                      <p className="mt-0.5 text-[14px] text-muted-foreground">
                        Day {s.done} of {s.total}
                      </p>
                    </div>
                    <span className="text-[18px] text-muted-foreground">{openSeries === s.id ? "−" : "+"}</span>
                  </button>
                  <div className="mt-3 h-2 w-full rounded-full bg-black/[0.07]">
                    <div
                      className="h-2 rounded-full bg-[#0F7FFF]"
                      style={{ width: `${(s.done / s.total) * 100}%` }}
                    />
                  </div>
                  {openSeries === s.id && (
                    <p className="mt-3 text-[14px] text-muted-foreground">
                      Agla episode: Day {s.done + 1}. Script AI taiyaar kar raha hai.
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </section>

          <button
            className="fixed bottom-[calc(84px+env(safe-area-inset-bottom))] right-[max(16px,calc(50%-244px))] z-40 inline-flex min-h-[52px] items-center rounded-full bg-primary px-5 text-[16px] font-medium text-primary-foreground"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.16)" }}
          >
            + Nayi Planning
          </button>
        </>
      ) : (
        <>
          <Card className="mb-4">
            <p className="text-[14px] text-muted-foreground">Is hafte ka total</p>
            <div className="mt-2 flex justify-between">
              {[
                ["Views", totals.views.toLocaleString("en-IN")],
                ["Likes", totals.likes.toLocaleString("en-IN")],
                ["Comments", totals.comments.toLocaleString("en-IN")],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[20px] font-bold">{v}</p>
                  <p className="text-[14px] text-muted-foreground">{k}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col gap-2.5 pb-4">
            {stats.map((s, i) => (
              <Card key={s.id}>
                <p className="text-[17px] font-bold">{s.title}</p>
                <p className="mt-0.5 text-[14px] text-muted-foreground">{s.platform}</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {(
                    [
                      ["Views", "views"],
                      ["Likes", "likes"],
                      ["Watch Time", "watch"],
                      ["Comments", "comments"],
                    ] as const
                  ).map(([label, key]) => (
                    <label key={key} className="block">
                      <span className="text-[14px] text-muted-foreground">{label}</span>
                      <input
                        className="mt-1 min-h-[48px] w-full rounded-lg bg-background px-3 text-[16px] outline-none focus:ring-2 focus:ring-[#0F7FFF]"
                        value={String(s[key])}
                        onChange={(e) => {
                          const v = e.target.value;
                          setStats((prev) =>
                            prev.map((row, idx) =>
                              idx === i
                                ? { ...row, [key]: key === "watch" ? v : Number(v.replace(/\D/g, "")) || 0 }
                                : row,
                            ),
                          );
                        }}
                      />
                    </label>
                  ))}
                </div>
              </Card>
            ))}
            <Pill variant="secondary" className="w-full">
              Save karo
            </Pill>
          </div>
        </>
      )}
    </AppShell>
  );
}
