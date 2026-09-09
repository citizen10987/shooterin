export type Status =
  | "IDEA"
  | "PLANNED"
  | "RESEARCHING"
  | "SCRIPT_DRAFT"
  | "REVIEW"
  | "APPROVED"
  | "RECORDING"
  | "EDITING"
  | "PUBLISHED"
  | "BLOCKED"
  | "REJECTED";

export const statusStyle: Record<Status, { bg: string; fg: string; bold?: boolean; dot?: boolean }> = {
  IDEA: { bg: "#F5F5F5", fg: "#626262" },
  PLANNED: { bg: "#EEF4FF", fg: "#0F7FFF" },
  RESEARCHING: { bg: "#EEF4FF", fg: "#0F7FFF", dot: true },
  SCRIPT_DRAFT: { bg: "#FFF8E1", fg: "#926E00" },
  REVIEW: { bg: "#FEEA3D", fg: "#000000", bold: true },
  APPROVED: { bg: "#ECFDF3", fg: "#027A48" },
  RECORDING: { bg: "#FFF1F0", fg: "#B42318" },
  EDITING: { bg: "#FFF8E1", fg: "#926E00" },
  PUBLISHED: { bg: "#12B76A", fg: "#FFFFFF" },
  BLOCKED: { bg: "#FFF1F0", fg: "#D92D20" },
  REJECTED: { bg: "#FFF1F0", fg: "#D92D20" },
};

export type Idea = {
  id: string;
  title: string;
  angle: string;
  format: "Reel" | "YouTube" | "Carousel";
  status: Status;
  created: string;
  expansion: {
    title: string;
    hook: string;
    points: string[];
    audience: string;
    format: string;
    cta: string;
  };
  research?: {
    summary: string;
    sources: { label: string; url: string }[];
    safe: string[];
    unsafe: string[];
    confidence: "High" | "Medium" | "Low";
  };
  fatherStory?: string;
};

export const ideas: Idea[] = [
  {
    id: "i1",
    title: "Trigger squeeze ki sabse badi galti",
    angle: "Beginners trigger ko dabate hain, squeeze nahi karte — isse group phail jaata hai.",
    format: "Reel",
    status: "RESEARCHING",
    created: "Aaj",
    expansion: {
      title: "90% shooters yeh trigger galti karte hain",
      hook: "Aapka group phail raha hai? Problem barrel mein nahi, ungli mein hai.",
      points: [
        "Trigger par pehle pad ka istemal karein, joint ka nahi",
        "Squeeze steady rakhein — shot 'surprise' hona chahiye",
        "Dry fire se 10 minute roz practice karein",
      ],
      audience: "Naye shooters, 18–35, district level tak",
      format: "Reel — 45 second, vertical",
      cta: "Comment mein apna group size batayein",
    },
    research: {
      summary:
        "Trigger control ko ISSF coaching material aur NRA basic pistol course dono mein accuracy ka sabse bada single factor maana gaya hai.",
      sources: [
        { label: "ISSF Coaching Guidelines", url: "https://www.issf-sports.org" },
        { label: "NRA Basic Pistol Fundamentals", url: "https://www.nra.org" },
      ],
      safe: [
        "Trigger control accuracy ka mool factor hai",
        "Dry fire practice trigger control sudhaarta hai",
      ],
      unsafe: ["'90% shooters' waala exact number claim mat karein — yeh estimate hai"],
      confidence: "High",
    },
    fatherStory:
      "1998 mein Pitaji ne mujhe pehli baar .22 rifle di thi aur kaha tha — 'goli chhodo mat, jaane do'. Wahi baat aaj bhi sabse sahi hai.",
  },
  {
    id: "i2",
    title: "Sasti practice: ghar par dry fire setup",
    angle: "Bina range gaye, 300 rupaye mein ghar par practice kaise karein.",
    format: "YouTube",
    status: "IDEA",
    created: "Kal",
    expansion: {
      title: "Ghar par 300 rupaye ka practice setup",
      hook: "Range door hai? Ghar hi aapki range ban sakti hai.",
      points: ["Safe dry fire rules", "Target card banana", "Hafte ka practice plan"],
      audience: "Chhote shehron ke naye shooters",
      format: "YouTube — 8 minute",
      cta: "Setup ki photo comment mein bhejein",
    },
    fatherStory: "Pitaji ne aangan mein diya jala kar steady hold sikhaya tha.",
  },
  {
    id: "i3",
    title: "Breathing pattern jo score badhata hai",
    angle: "Respiratory pause ka sahi timing — shot release ki khidki.",
    format: "Carousel",
    status: "PLANNED",
    created: "2 din pehle",
    expansion: {
      title: "Saans rokna nahi, sahi jagah rukna",
      hook: "Score 8 par atka hai? Saans dekhiye.",
      points: ["Natural respiratory pause", "6–8 second window", "Pause ke baad reset"],
      audience: "Intermediate shooters",
      format: "Carousel — 6 slides",
      cta: "Save karein aur range par try karein",
    },
  },
];

export const trends = [
  { id: "t1", title: "Olympic trials selection process par charcha", source: "YouTube India" },
  { id: "t2", title: "Air pistol grip customisation reels viral", source: "Instagram" },
  { id: "t3", title: "Junior nationals ke naye rules", source: "News" },
  { id: "t4", title: "Budget air rifles under 30k comparison", source: "Search Trends" },
];

export type Content = {
  id: string;
  title: string;
  series: string;
  platform: string;
  status: Status;
  type: string;
  date: string;
  script: { hook: string; body: string[]; cta: string };
  versions: { label: string; time: string }[];
};

export const contents: Content[] = [
  {
    id: "c1",
    title: "Trigger squeeze ki sabse badi galti",
    series: "30 Days Beginner Shooting",
    platform: "Reel",
    status: "REVIEW",
    type: "Script review",
    date: "2026-09-09",
    script: {
      hook: "Aapka group phail raha hai? Problem barrel mein nahi — aapki ungli mein hai.",
      body: [
        "Trigger par ungli ka pehla pad rakhiye. Joint se dabaane par barrel side mein khisak jaata hai.",
        "Squeeze steady honi chahiye. Shot lagne ka pata aapko baad mein chale — yahi sahi trigger control hai.",
        "Roz 10 minute dry fire karein. Coin balance test se check karein ki barrel hil to nahi raha.",
      ],
      cta: "Apna group size comment mein likhiye — main personally reply karunga.",
    },
    versions: [
      { label: "Version 2 — hook chhota kiya", time: "Aaj 09:12" },
      { label: "Version 1 — pehla draft", time: "Kal 18:40" },
    ],
  },
  {
    id: "c2",
    title: "Ghar par dry fire setup",
    series: "30 Days Beginner Shooting",
    platform: "YouTube",
    status: "RESEARCHING",
    type: "Research",
    date: "2026-09-09",
    script: {
      hook: "Range door hai? Koi baat nahi.",
      body: ["Safety rules pehle.", "300 rupaye ka setup.", "Hafte ka plan."],
      cta: "Subscribe karein series ke liye.",
    },
    versions: [{ label: "Version 1 — outline", time: "Kal 11:05" }],
  },
  {
    id: "c3",
    title: "Breathing pattern jo score badhata hai",
    series: "Masterclass",
    platform: "Carousel",
    status: "APPROVED",
    type: "Recording ke liye taiyaar",
    date: "2026-09-10",
    script: {
      hook: "Saans rokna nahi — sahi jagah rukna.",
      body: ["Natural respiratory pause samjhein.", "6–8 second ki khidki.", "Pause ke baad reset."],
      cta: "Save karein.",
    },
    versions: [{ label: "Version 1", time: "7 Sept 16:20" }],
  },
  {
    id: "c4",
    title: "Grip pressure: kitna zor sahi hai",
    series: "30 Days Beginner Shooting",
    platform: "Reel",
    status: "RECORDING",
    type: "Shoot baaki",
    date: "2026-09-11",
    script: {
      hook: "Grip itni tight ki haath kaanp raha hai?",
      body: ["Handshake pressure rule.", "Support hand ka kaam.", "Test drill."],
      cta: "Try karke batayein.",
    },
    versions: [{ label: "Version 1", time: "6 Sept 10:00" }],
  },
  {
    id: "c5",
    title: "Pehla din: rifle uthana kaise seekhein",
    series: "30 Days Beginner Shooting",
    platform: "YouTube",
    status: "PUBLISHED",
    type: "Live",
    date: "2026-09-05",
    script: {
      hook: "Pehla din sabse important hai.",
      body: ["Safety.", "Stance.", "Pehla shot."],
      cta: "Series follow karein.",
    },
    versions: [{ label: "Final", time: "5 Sept 08:00" }],
  },
];

export const series = [
  { id: "s1", name: "30 Days Beginner Shooting", done: 4, total: 30 },
  { id: "s2", name: "Masterclass: Air Pistol", done: 2, total: 12 },
  { id: "s3", name: "Father ki Kahaniyan", done: 6, total: 10 },
];

export const analytics = [
  { id: "a1", title: "Pehla din: rifle uthana", platform: "YouTube", views: 12400, likes: 890, watch: "3:42", comments: 76 },
  { id: "a2", title: "Stance basics", platform: "Reel", views: 48200, likes: 3100, watch: "0:22", comments: 210 },
  { id: "a3", title: "Sight picture", platform: "Carousel", views: 8600, likes: 640, watch: "—", comments: 34 },
];

export const masterclass = [
  {
    id: "m1",
    title: "Beginner Shooting Masterclass — Module 1: Basics",
    lessons: [
      { id: "l1", title: "Safety aur range rules", status: "PUBLISHED" as Status, source: "c5" },
      { id: "l2", title: "Stance aur balance", status: "APPROVED" as Status, source: "c3" },
      { id: "l3", title: "Grip pressure", status: "RECORDING" as Status, source: "c4" },
    ],
  },
  {
    id: "m2",
    title: "Module 2: Aim aur Trigger",
    lessons: [
      { id: "l4", title: "Sight alignment", status: "SCRIPT_DRAFT" as Status, source: "c1" },
      { id: "l5", title: "Trigger control", status: "REVIEW" as Status, source: "c1" },
    ],
  },
  {
    id: "m3",
    title: "Module 3: Competition Mindset",
    lessons: [{ id: "l6", title: "Match se pehle routine", status: "IDEA" as Status, source: "c2" }],
  },
];

export const hindiDate = "Mangalwar, 9 September";
