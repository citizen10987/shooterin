# Creator's Hub

App name: Shooter

Project Overview: Build a mobile-first Progressive Web App (PWA) called Shooter. It is a personal AI-powered content operating system for a single creator — a professional shooting sports coach and expert. The creator uses this app to capture ideas, plan content, research topics, write and review scripts, manage his content pipeline, and chat with an AI assistant. There is only one role: the Creator. There is no operator, no admin, no other user type. The entire UI is designed for him and him alone.

The design philosophy: it should feel like WhatsApp met a beautifully crafted indie Mac app. Simple enough for a middle-aged non-technical user. Powerful enough to run an entire content operation. The AI does all the complex work behind the scenes — the Creator just taps, speaks, and approves.

Navigation

5-tab bottom navigation bar (always visible):

#IconLabel1🏠Ghar2📋Plan3💡Ideas4📝Content5🤖Help

Labels must be in Hindi/Hinglish. Icons must be large (min 28px), always accompanied by their text label beneath them. The active tab should be highlighted with the blue accent color #0F7FFF.

Screen 1 — Ghar (Home)

This screen answers one question every time the creator opens the app: "Aaj mujhe kya karna hai?"

Layout:

Top: Large greeting text — "Namaskar, Rehman Sahab 🎯" — with today's date in Hindi beneath it (e.g., "Mangalwar, 9 September")

Below greeting: A muted subtitle — "Aapko sirf zaroori kaam dikh raha hai. Baaki system sambhalega."

"Aaj ke Kaam" section heading with a "Sab dekho →" tertiary link to Plan tab

2–4 task cards (see card spec below)

"Jaldi Karo" quick action section with two pill buttons side by side:

💡 Naya Idea Dena (primary black button)

🤖 Help se Baat Karo (secondary button)

Bottom: A small system status card with a yellow dot indicator and one line of muted status text

Task Card spec:

White background #FFFFFF, soft shadow (2px 4px 12px rgba(0,0,0,0.06)), border-radius 8px

Status badge at top (colored pill: yellow for REVIEW, blue for RESEARCHING, green for APPROVED, etc.)

Content title in bold Inter 18px

Sub-line in muted gray #626262 14px: task type · series name

"Kholo →" black pill button on the right

Screen 2 — Plan (Content Calendar)

The planning and scheduling hub for all content.

Layout:

Top: Month/week toggle (pill switcher)

Calendar view: a horizontal date strip showing days of the week, with small colored dots beneath dates that have content planned. Tapping a date shows that day's content list below

Content List (below calendar): Cards for each piece of content, showing title, series, status badge, and a "Kholo →" button

FAB (Floating Action Button): + Nayi Planning in the bottom-right corner (black pill button)

"Series" section below the content list: expandable cards showing each active series (e.g., "30 Days Beginner Shooting — Day 4 of 30") with a progress bar

Sub-section — Analytics (tab within Plan screen):

Accessible via a pill tab switcher at the top: "Calendar" | "Analytics"

Analytics view: simple manual-entry cards per published content piece

Each analytics card shows: content title, platform (YouTube/Reel/etc.), and editable fields for Views, Likes, Watch Time, Comments

A summary row at the top showing totals for the current week

Screen 3 — Ideas (+ Research)

The most-used screen. The creator captures a raw idea here and the AI does everything.

Layout:

Top section: Large "+ Naya Idea" primary black pill button spanning full width with a microphone icon — "💡 Type karo ya bolein"

Below it, a pill tab switcher: "Mere Ideas" | "Trends"

"Mere Ideas" tab (default): A vertical list of idea cards sorted by recency

"Trends" tab: An auto-refreshed feed of trending topics relevant to shooting sports content (each trend card has title, source tag, and a "Idea banao" button)

Idea Card (in list):

White surface card, soft shadow

Status badge (IDEA / PLANNED / RESEARCHING / etc.)

Title in bold 17px

Short AI-generated subtitle (the core lesson or angle)

Format tag pill (Reel / YouTube / Carousel)

Three quick-action buttons in a row: "Expand" · "Research" · "Plan mein daalo"

Idea Detail Screen (when a card is tapped): Opens as a full-screen bottom sheet or new screen:

Section: AI ka Expansion — shows suggested title, hook, 3 key points, target audience, suggested format, recommended CTA

Section: Research — a collapsible sub-section within the idea. Shows a "Research Karo" trigger button. After triggering, shows: evidence summary, sources (with links), flagged claims (what can and cannot be stated confidently), and a confidence level pill

Section: Father ki Story — a field showing any relevant verified personal story/experience to include

Section: Actions — large pill buttons: "Reel Banao" / "YouTube Topic" / "Series Mein Daalo" / "Script Banao"

Screen 4 — Content (Script Review + Masterclass)

The content production and review pipeline.

Layout top: Pill tab switcher — "Content" | "Masterclass"

"Content" tab:

Filter strip: Horizontally scrollable status filter pills — All · REVIEW · APPROVED · RECORDING · EDITING · PUBLISHED

Content list: Vertical cards, same card style as Ghar tasks but with more detail

Each card shows: title, series, platform tag, status badge, and a "Kholo →" button

Content Detail Screen (script view):

Top: Content title + series name + status badge

Section: Script — full script in a readable card with large Inter text (18px minimum). The script is divided into sections: Hook · Body · CTA

Action bar (sticky at bottom): "Approve ✅" (primary black) · "Badlao Chahiye ✍️" (secondary) · "Reject ❌" (red outline)

Tapping "Badlao Chahiye" opens a text field to type correction instructions in Hindi/Hinglish, which the AI processes and regenerates

Version History: A collapsed section at the bottom showing previous script versions with timestamps

"Masterclass" tab:

A structured list of Masterclass modules (e.g., "Beginner Shooting Masterclass — Module 1: Basics")

Each module card shows: module title, number of lessons planned, number completed

Tapping a module → shows its lesson list with status badges and a "+ Nayi Lesson Daalo" button at the bottom

Each lesson links back to its source content piece(s)

Screen 5 — Help (AI Assistant)

A clean, conversational AI assistant. The creator can ask anything in Hindi, Hinglish, or English.

Layout:

WhatsApp-style chat UI

Creator's messages: right-aligned, black bubble #000000 with white text

AI responses: left-aligned, white surface card #FFFFFF with thin border, black text

The AI's name/avatar: a small "🤖 Shooter AI" label above each response

Bottom: A text input bar with a microphone button (voice input) and a send button

The input bar is always pinned to the bottom above the system keyboard

Loading state shows "Soch raha hoon..." as an animated typing indicator in the AI bubble

Suggested prompt chips (shown when chat is empty): Row of horizontally scrollable chips like:

"Aaj kya karna chahiye?"

"Ek idea suggest karo"

"Ye script theek karo"

"Research karo: [topic]"

Design System

App Name: Shooter

Font: Inter (load from Google Fonts). Use medium weight (500) for nearly all text. Bold (700) only for primary headings and task titles.

Colors:

TokenHexUsagePrimary / Ink#000000Primary buttons, headings, strong textSecondary#626262Muted text, borders, metadataInteractive Blue#0F7FFFActive tab indicator, links, tertiary actions, RESEARCHING statusBackground Canvas#F5F5F5App background — the main canvasSurface#FFFFFFCards, inputs, chat bubbles, modalsAccent Yellow#FEEA3DREVIEW status badge, highlights, notification dotsSuccess Green#12B76AAPPROVED / PUBLISHED status badgesError Red#D92D20REJECTED status, destructive actions

Status Badge Colors (pill-shaped labels):

StatusBackgroundTextIDEA#F5F5F5#626262PLANNED#EEF4FF#0F7FFFRESEARCHING#EEF4FF#0F7FFF (with animated dot)SCRIPT_DRAFT#FFF8E1#926E00REVIEW#FEEA3D#000000 (bold)APPROVED#ECFDF3#027A48RECORDING#FFF1F0#B42318PUBLISHED#12B76A#FFFFFFBLOCKED#FFF1F0#D92D20

Shapes:

Primary and secondary buttons: border-radius: 9999px (full pill)

Cards: border-radius: 8px

Inputs: border-radius: 8px

Status badge pills: border-radius: 9999px

Bottom sheet / modals: border-radius: 16px 16px 0 0 (top corners only)

Elevation / Shadows:

Cards: box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0,0,0,0.04) — thin outline + soft lift. NO glassmorphism, NO heavy blur.

Bottom nav: box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.08) — hairline top border only

FAB: box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16)

Spacing:

Component internal padding: 10px–18px

Between sections: 28px

Card padding: 12px 16px

List gap between cards: 10px

Bottom nav height: 64px with 8px top padding

Safe area inset at bottom for iPhone home indicator

Typography scale:

Display / Page title: 28px, weight 700, tracking -0.5px

Section heading: 18px, weight 700

Card title: 17px, weight 700

Body / Script text: 17px, weight 500, line-height 26px

Muted sub-text: 14px, weight 500, color #626262

Button label: 16px, weight 500

Status badge label: 12px, weight 600

Accessibility / Middle-aged user rules:

Minimum touch target: 48px × 48px

No hidden gestures (no swipe-to-delete as the only option)

All icons must have visible text labels beneath them in the nav

Every destructive action (Reject, Delete) must show a confirmation dialog

Loading states must show a Hindi message: "Abhi ho raha hai..."

Status must always be visible — the creator should never wonder what state something is in

Overall Vibe: This is NOT a corporate SaaS dashboard. It is a crafted personal tool that feels like it was made just for one person. Think: indie Mac app meets WhatsApp. Light mode. Editorial. Sharp black on off-white canvas. Blue and yellow used sparingly for moments of energy and attention. Every screen should feel calm, spacious, and instantly understandable.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://shooterin.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bc4eb16e-65c7-41d2-9a37-eb41bc04eb15).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
