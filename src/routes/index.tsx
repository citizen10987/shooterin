import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card, OpenLink, Pill, SectionHeading, StatusBadge } from "@/components/kit";
import { contents, hindiDate } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shooter — Aaj ke Kaam" },
      { name: "description", content: "Shooting coach ka personal content system — aaj ke kaam, ideas aur scripts ek jagah." },
      { property: "og:title", content: "Shooter — Aaj ke Kaam" },
      { property: "og:description", content: "Aapko sirf zaroori kaam dikhta hai. Baaki system sambhalta hai." },
    ],
  }),
  component: Ghar,
});

function Ghar() {
  const tasks = contents.filter((c) => ["REVIEW", "RESEARCHING", "APPROVED"].includes(c.status)).slice(0, 4);

  return (
    <AppShell>
      <div className="mb-7">
        <h1 className="page-title">Namaskar, Rehman Sahab 🎯</h1>
        <p className="mt-1 text-[15px] text-muted-foreground">{hindiDate}</p>
        <p className="mt-3 text-[14px] text-muted-foreground">
          Aapko sirf zaroori kaam dikh raha hai. Baaki system sambhalega.
        </p>
      </div>

      <section className="mb-7">
        <SectionHeading
          title="Aaj ke Kaam"
          action={
            <Link to="/plan" className="text-[14px] font-medium text-[#0F7FFF]">
              Sab dekho →
            </Link>
          }
        />
        <div className="flex flex-col gap-2.5">
          {tasks.map((t) => (
            <Card key={t.id}>
              <StatusBadge status={t.status} />
              <div className="mt-2 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[18px] font-bold leading-snug">{t.title}</p>
                  <p className="mt-1 text-[14px] text-muted-foreground">
                    {t.type} · {t.series}
                  </p>
                </div>
                <OpenLink to="/content/$id" params={{ id: t.id }} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-7">
        <SectionHeading title="Jaldi Karo" />
        <div className="flex gap-2.5">
          <Link to="/ideas" className="flex-1">
            <Pill className="w-full">💡 Naya Idea Dena</Pill>
          </Link>
          <Link to="/help" className="flex-1">
            <Pill variant="secondary" className="w-full">
              🤖 Help se Baat Karo
            </Pill>
          </Link>
        </div>
      </section>

      <Card className="mb-4 flex items-center gap-2.5">
        <span className="size-2.5 shrink-0 rounded-full" style={{ background: "#FEEA3D" }} />
        <p className="text-[14px] text-muted-foreground">
          1 script aapke review ka intezaar kar rahi hai · research chal rahi hai
        </p>
      </Card>
    </AppShell>
  );
}
