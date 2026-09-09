import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Mic, ArrowUp } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help — Shooter AI" },
      { name: "description", content: "Hindi, Hinglish ya English mein Shooter AI se baat karein." },
      { property: "og:title", content: "Help — Shooter AI" },
      { property: "og:description", content: "Hindi, Hinglish ya English mein Shooter AI se baat karein." },
    ],
  }),
  component: Help,
});

type Msg = { role: "user" | "ai"; text: string };

const chips = [
  "Aaj kya karna chahiye?",
  "Ek idea suggest karo",
  "Ye script theek karo",
  "Research karo: trigger control",
];

function reply(q: string) {
  if (q.toLowerCase().includes("aaj"))
    return "Aaj do kaam hain: 'Trigger squeeze' script aapke review mein hai, aur 'Ghar par dry fire setup' ki research chal rahi hai. Pehle script dekh lijiye — 5 minute ka kaam hai.";
  if (q.toLowerCase().includes("idea"))
    return "Ek idea: 'Sight picture perfect kaise banayein — 3 galtiyan'. Reel format mein 45 second, hook: 'Aapka aim theek hai, dekhne ka tareeka galat hai.' Ideas tab mein daal doon?";
  if (q.toLowerCase().includes("research"))
    return "Research shuru kar diya. ISSF aur NRA ke coaching material se evidence nikaal raha hoon — 2 minute mein Ideas tab mein summary, sources aur claims mil jaayenge.";
  return "Samajh gaya. Main ise Ideas mein note kar deta hoon aur expansion taiyaar karta hoon — aap review kar lijiyega.";
}

function Help() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, thinking]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMsgs((m) => [...m, { role: "ai", text: reply(q) }]);
    }, 1200);
  };

  return (
    <AppShell noPad>
      <div className="flex min-h-[calc(100dvh-140px)] flex-col px-4 pt-6">
        <h1 className="page-title mb-5">Help</h1>

        <div className="flex-1 space-y-3 pb-4">
          {msgs.length === 0 && !thinking && (
            <div className="card-surface p-4">
              <p className="text-[16px] leading-[26px]">
                🤖 Namaskar Rehman Sahab. Hindi, Hinglish ya English — jaise chahe poochhiye.
              </p>
            </div>
          )}

          {msgs.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="flex justify-end">
                <p className="max-w-[82%] rounded-2xl bg-black px-4 py-3 text-[17px] leading-[26px] text-white">
                  {m.text}
                </p>
              </div>
            ) : (
              <div key={i}>
                <p className="mb-1 text-[12px] font-semibold text-muted-foreground">🤖 Shooter AI</p>
                <p className="max-w-[88%] rounded-2xl bg-card px-4 py-3 text-[17px] leading-[26px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                  {m.text}
                </p>
              </div>
            ),
          )}

          {thinking && (
            <div>
              <p className="mb-1 text-[12px] font-semibold text-muted-foreground">🤖 Shooter AI</p>
              <p className="inline-flex items-center gap-2 rounded-2xl bg-card px-4 py-3 text-[16px] text-muted-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                <span className="size-2 animate-bounce rounded-full bg-[#0F7FFF]" />
                Soch raha hoon...
              </p>
            </div>
          )}
          <div ref={endRef} />
        </div>
      </div>

      <div className="fixed bottom-[calc(76px+env(safe-area-inset-bottom))] left-1/2 z-30 w-full max-w-[520px] -translate-x-1/2 bg-background px-4 pb-2 pt-2">
        {msgs.length === 0 && (
          <div className="no-scrollbar -mx-4 mb-2 flex gap-2 overflow-x-auto px-4">
            {chips.map((c) => (
              <button
                key={c}
                onClick={() => send(c)}
                className="card-surface min-h-[40px] shrink-0 rounded-full px-4 text-[14px]"
              >
                {c}
              </button>
            ))}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 rounded-2xl bg-card p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        >
          <button type="button" className="grid size-[48px] shrink-0 place-items-center rounded-full text-muted-foreground">
            <Mic size={22} />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Kuch bhi poochhiye..."
            className="min-h-[48px] flex-1 bg-transparent text-[17px] outline-none"
          />
          <button
            type="submit"
            className="grid size-[48px] shrink-0 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-40"
            disabled={!input.trim()}
          >
            <ArrowUp size={22} />
          </button>
        </form>
      </div>
    </AppShell>
  );
}
