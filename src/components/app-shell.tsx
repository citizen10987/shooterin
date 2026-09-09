import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Home, CalendarDays, Lightbulb, FileText, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", label: "Ghar", Icon: Home },
  { to: "/plan", label: "Plan", Icon: CalendarDays },
  { to: "/ideas", label: "Ideas", Icon: Lightbulb },
  { to: "/content", label: "Content", Icon: FileText },
  { to: "/help", label: "Help", Icon: Bot },
];

export function AppShell({ children, noPad }: { children: ReactNode; noPad?: boolean }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[520px] flex-col bg-background">
      <main
        className={cn(
          "flex-1 pb-[calc(76px+env(safe-area-inset-bottom))]",
          !noPad && "px-4 pt-6",
        )}
      >
        {children}
      </main>

      <nav
        className="fixed bottom-0 left-1/2 z-40 w-full max-w-[520px] -translate-x-1/2 bg-card pb-[env(safe-area-inset-bottom)] pt-2"
        style={{ boxShadow: "0 -1px 0 rgba(0,0,0,0.08)" }}
      >
        <div className="flex h-[64px] items-start justify-around">
          {tabs.map(({ to, label, Icon }) => {
            const active = to === "/" ? path === "/" : path.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex min-h-[48px] min-w-[56px] flex-col items-center justify-start gap-1 pt-0.5",
                  active ? "text-[#0F7FFF]" : "text-muted-foreground",
                )}
              >
                <Icon size={28} strokeWidth={active ? 2.4 : 2} />
                <span className="text-[12px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
