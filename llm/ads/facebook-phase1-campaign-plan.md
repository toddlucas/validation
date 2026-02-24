# Sorcery — Facebook/Meta Phase 1 Campaign Plan

## Why These Two ICPs First

### Grant Writers (Nonprofit Development Directors)
Facebook is where nonprofit professionals live. Development Directors and grant writers follow funding organizations, nonprofit networks, and sector news on Facebook — and Meta's targeting reflects this. Job title and employer-industry targeting is precise enough to reach them cost-effectively. The pain point is emotional and scroll-stopping: every grant is a 12–16 hour synthesis job across documents that all need to say the same thing.

### Franchise Operators (Multi-Unit Operators)
Franchise owners and multi-unit operators are highly active on Facebook for both personal and business purposes. Meta has strong behavioral data on small business owners and franchise interests. The SOP coordination pain is uniquely concrete — "update 12 location manuals" is a real, visualizable problem that hits immediately in a scroll feed. WTP ($300–600/mo) keeps the unit economics workable if CPL stays under $60.

### Why Not the Others (for Facebook Phase 1)
- **Government Contractors / Legal Firms**: High WTP but these professionals concentrate on LinkedIn. Facebook targeting is imprecise; you'll overpay to reach the wrong people.
- **Consulting Firms**: Real pain, but the audience is diffuse on Facebook.
- **Academic Researchers**: Easy to target (university, grad level), but $50–150/mo WTP means the <$60 CPL goal still works for phase 1 — but conversion to paid is riskier. Add as ICP 3 if budget allows.

---

## Format Recommendation: Start with Single Image Ads

For Phase 1 fake-door testing, **single image ads** are the right call:
- Fastest to produce — no video production required
- Easy to A/B test: swap one variable per variant
- Lower CPMs than video in many placements, especially in Feed
- Facebook still delivers strong conversion performance on static creative

**Add one Reels/vertical video variant per ICP** if resources allow. Facebook is pushing Reels hard and CPMs are often 30–40% lower. A simple screen recording or text-on-video clip can perform well — no professional production needed.

**Placements to use at launch:**
- Facebook Feed (primary)
- Instagram Feed (same creative works)
- Facebook Reels / Instagram Reels (if you produce vertical video)
- Turn off Audience Network for Phase 1 (low-quality traffic)

**Aspect ratio:** 1:1 square (1080×1080) for Feed. 9:16 vertical (1080×1920) if doing Reels.

---

## Campaign Structure

> **Andromeda note (updated Feb 2026):** Meta's Andromeda ad retrieval engine (rolled out late 2024) changed how ads are selected and delivered. It operates at individual-user precision rather than group-level audience segments. The practical consequence: splitting a $500 budget across 3 ad sets by audience type fragments learning and starves the algorithm — you'll accumulate ~2–3 conversions per ad set before spending out, and Andromeda needs 50+ conversions per ad set to exit the learning phase and perform reliably. The original 3-ad-set structure below has been replaced with a single Advantage+ consolidated ad set per campaign.

```
Campaign: Sorcery — Grant Writers [Phase 1]
  Objective: Leads (optimize for landing page signups via Meta Pixel)
  Budget: $500 total (full budget to one ad set)
  Campaign Budget Optimization: ON
  └── Ad Set 1: Advantage+ Audience (broad, US only)
      ├── Ad A: Pain Hook — Image Option 1 (overwhelm visual)
      ├── Ad B: Outcome Hook — Image Option 2 (before/after split)
      ├── Ad C: Specificity Hook — Image Option 3 (instruction card, static)
      └── Ad D: Specificity Hook — Image Option 3 (instruction card, Reels video)

Campaign: Sorcery — Franchise Operators [Phase 1]
  Objective: Leads (optimize for landing page signups via Meta Pixel)
  Budget: $500 total (full budget to one ad set)
  Campaign Budget Optimization: ON
  └── Ad Set 1: Advantage+ Audience (broad, US only)
      ├── Ad A: Pain Hook — Image Option 1 (map/locations visual)
      ├── Ad B: Stakes Hook — Image Option 2 (overwhelmed operator)
      ├── Ad C: Specificity Hook — Image Option 3 (instruction card, static)
      └── Ad D: Specificity Hook — Image Option 3 (instruction card, Reels video)
```

**Why one ad set instead of three:**
Under Andromeda, your creative is your targeting. The system reads each ad's message, tone, visuals, and copy angle — and uses that to find the right person, not your audience parameters. Running separate job title and interest ad sets is counterproductive: it fragments the learning budget, prevents the algorithm from finding users it would have discovered on its own, and splits your conversion signal across too many pools. One broad Advantage+ ad set with genuinely diverse creatives is the correct structure.

**Why 4 ads instead of 3:**
Andromeda rewards format diversity, not just copy diversity. Adding a Reels/vertical video version of the instruction card creative (Ad D) gives you a different format at near-zero marginal production cost — a screen recording or text-on-screen loop is enough — and gives Andromeda a fourth creative to match against different users and placements.

**Optional — audience seed signal:** If you have an existing email list or website visitor list, upload it as a Custom Audience seed *inside* the Advantage+ ad set. This gives Andromeda a starting signal without restricting delivery.

**Pixel setup:** Before launch, confirm your Meta Pixel is firing on the waitlist form submission as a `Lead` event (not just a page view). This is what the campaign optimizes toward. Server-side Conversions API (CAPI) setup is worth doing if possible — Andromeda learns faster with higher-quality, deduplicated signals.

---

## ICP 1: Grant Writers

### Audience Setup

**Single ad set — Advantage+ Audience (broad)**
- Advantage+ Audience: ON
- Location: United States
- Age: No restriction (let Andromeda optimize)
- Optional seed: Upload existing email list or website visitors as a Custom Audience to give the algorithm a starting signal. Do not use this as a restriction — use it as a seed only.
- Exclude: Anyone who already converted (add your waitlist signups list as an exclusion once you have 100+)

The job title and interest parameters listed in the original draft (Development Director, Grants Manager, grant writing, nonprofit management, etc.) are still valid as *reference* for evaluating whether your signups match the ICP — but don't use them as ad targeting constraints. Andromeda will find these people through the creative signal the ads themselves provide.

---

### Ad Variations

**Ad A — Pain Hook**

> **Primary Text:**
> Every grant application is the same 12-hour process.
>
> Find last year's application. Pull the research you cited. Check if the numbers still hold. Rewrite the narrative for this funder's priorities. Then make sure the budget, logic model, and evaluation plan all still say the same thing.
>
> Sorcery is an AI workspace for grant writers. You give it a plain-language instruction. It navigates your SharePoint or OneDrive, opens the Word documents it needs, synthesizes the content, and returns tracked revisions in your document — ready for your review.
>
> Every change visible. Every sentence editable. Nothing saved until you approve it.
>
> We're building our waitlist now. Join below.

> **Headline:** Your next grant in hours, not days
> **Description:** AI workspace for grant writers. Works in your existing SharePoint and OneDrive documents.
> **CTA Button:** Sign Up

---

**Ad B — Outcome Hook**

> **Primary Text:**
> What if your AI actually opened your past grant applications, read them, and wrote the new one from them?
>
> Not a chatbot you paste content into. Not a template filler. An AI that navigates your SharePoint or OneDrive, opens the Word documents it needs, and drafts content consistent with your past work — as tracked revisions you approve line by line.
>
> One instruction. Your program narrative, literature review, and budget justification drafted together, from your existing files.
>
> Sorcery is built for grant writers managing multi-document projects. Your .docx files stay in SharePoint — no migration, no new system to learn.
>
> Now taking waitlist signups.

> **Headline:** Grant writing that reads your past work
> **Description:** AI that works directly in your SharePoint documents. No copy-paste required.
> **CTA Button:** Learn More

---

**Ad C — Specificity/Example Hook**

> **Primary Text:**
> "Draft a 2-page program narrative for this funder based on our last three successful applications."
>
> That's a real instruction you'll give Sorcery.
>
> It opens each application in SharePoint, reads them, synthesizes the content for this funder's priorities, and returns tracked revisions in your Word document — ready to review.
>
> Every sentence editable. Every change approved individually. Your .docx files never leave SharePoint.
>
> Sorcery is for grant writers who manage 10–20+ documents per application. Currently building our waitlist.

> **Headline:** Draft from your last 3 grants. Instantly.
> **Description:** AI document workspace for nonprofit grant writers. Works in SharePoint and OneDrive.
> **CTA Button:** Sign Up

---

### Image/Creative Direction

**Option 1 — Overwhelm visual (recommended for Ad A)**
A nonprofit development director at a desk, multiple Word documents open on screen, printed pages spread out. The expression is focused but overwhelmed. Warm, realistic photography style. Overlay text: *"12 hours per application."* or *"Tell it what you need. It reads your documents."*

**Option 2 — Before/After split (for Ad B)**
Left side: A stack of printed grant applications, highlighted and annotated. Right side: A clean Word document with tracked changes active — green insertions, red strikethroughs — clearly organized. Minimal, clean design. Headline overlaid: *"Every change visible. Nothing permanent until you approve."*

**Option 3 — The instruction card (for Ad C)**
Clean, minimal design. A single instruction displayed in a command prompt or chat-style interface:
> *"Draft a 2-page program narrative based on our last three successful applications."*
Below it: a Word document with tracked changes appearing. Background is muted gray or white. This works especially well as a short Reels video (2–4 second loop of the text appearing then the document populating).

---

## ICP 2: Franchise Operators

### Audience Setup

**Single ad set — Advantage+ Audience (broad)**
- Advantage+ Audience: ON
- Location: United States
- Age: No restriction (let Andromeda optimize)
- Optional seed: Upload existing email list or website visitors as a Custom Audience to give the algorithm a starting signal. Do not use this as a restriction — use it as a seed only.
- Exclude: Anyone who already converted once you have a list to exclude

The job title and interest parameters in the original draft (Franchise Owner, Multi-Unit Franchisee, franchising interests, etc.) are still valid as *reference* for qualifying inbound signups — but don't use them as targeting constraints. The franchise-specific creative language in the ads ("12 location manuals," "franchisor compliance audit") acts as the targeting signal itself.

---

### Ad Variations

**Ad A — Pain Hook**

> **Primary Text:**
> Your franchisor just updated the supplier requirements. Again.
>
> Now you need to find that change in the opening checklist. The closing procedure. The manager handbook. The training manual. Across all 12 locations. Each one a separate Word document in SharePoint.
>
> Or you give Sorcery one instruction: *"Update the opening checklist in all 12 location manuals to reflect the new supplier requirements."*
>
> It opens each document, makes the changes as tracked revisions, and shows you every edit before anything is saved. Review once. Approve. Done.
>
> We're building a waitlist for franchise operators. Join below.

> **Headline:** Update 12 location manuals at once
> **Description:** AI workspace for franchise operators. Your SOPs, coordinated automatically in SharePoint.
> **CTA Button:** Sign Up

---

**Ad B — Stakes/Compliance Hook**

> **Primary Text:**
> Franchisor compliance audit coming up?
>
> Sorcery is an AI workspace for multi-unit franchise operators that keeps your SOPs consistent across all locations — in your existing Word documents in SharePoint or OneDrive.
>
> Tell it what changed. It finds every document that needs updating, makes the changes as tracked revisions, and shows you each edit to approve before saving. Every location in sync. Every change visible and reversible.
>
> What used to take 40 hours of manual updates now takes an afternoon of reviews.
>
> Now taking waitlist signups.

> **Headline:** Every location in sync. Every time.
> **Description:** Keep SOPs consistent across all locations. Works in your existing SharePoint files.
> **CTA Button:** Learn More

---

**Ad C — Specificity/Example Hook**

> **Primary Text:**
> "Update the opening checklist in all 12 location manuals to reflect the new supplier requirements."
>
> One instruction. Sorcery opens each Word document in your SharePoint, makes the change in every one, and returns tracked revisions so you can review exactly what changed — and where.
>
> You see every file it touches before anything is saved. Every edit is yours to approve or reject.
>
> What used to take 40 hours takes an afternoon.
>
> Built for multi-unit franchise operators. Join the waitlist.

> **Headline:** 40-hour SOP update. Now 1 afternoon.
> **Description:** AI document workspace for franchise operators. Works in SharePoint and OneDrive.
> **CTA Button:** Sign Up

---

### Image/Creative Direction

**Option 1 — The map (recommended for Ad A)**
An aerial view or illustrated map showing multiple franchise locations (storefronts or pins on a map). In the foreground or overlaid: a Word document with tracked changes visible. The visual contrast shows "all these locations, one document update." Text overlay: *"12 locations. One instruction."*

**Option 2 — The overwhelmed operator (for Ad B)**
A franchise operator at a desk, binders and printed SOPs stacked around them. The expression is stressed, focused. Realistic photography. Text overlay: *"Compliance audit coming up?"* or *"40 hours to update every location manual."*

**Option 3 — The instruction card (for Ad C)**
Same format as Grant Writers Ad C — clean card showing the plain-language instruction, then a Word document populating with tracked changes. Works as static or a short Reels loop.
> *"Update the opening checklist in all 12 location manuals."*
This is visually minimal and works well in feed where text-forward creative stands out.

---

## Budget Allocation

| Campaign | Budget | Daily (30 days) | Ad Sets | Creatives |
|---|---|---|---|---|
| Grant Writers | $500 | ~$17/day | 1 (Advantage+) | 4 |
| Franchise Operators | $500 | ~$17/day | 1 (Advantage+) | 4 |
| **Total** | **$1,000** | **~$34/day** | | |

**Campaign duration:** Run for a minimum of 7–10 days before making creative decisions. Andromeda needs time to exit the learning phase — ideally 50 conversion events per ad set, which you likely won't reach at $500 total per ICP. Treat early results as directional signal, not statistical certainty. Do not make structural changes (pausing ad sets, changing audiences) during the first 7 days — this resets learning.

**When to pause underperforming creatives:** After $75–100 spend per individual ad (not per campaign), if CTR is below 0.8% or CPC above $4.00, pause that creative. Shift the remaining budget to the top performer. Don't touch the ad set targeting — only swap creatives.

**Learning phase note:** With CBO on, Meta allocates budget dynamically. Let it run. The algorithm will direct spend toward whichever creative is converting best. Resist the urge to manually redistribute budget across creatives before day 7.

---

## Success Metrics & Decision Criteria

| Metric | Target | Action if missed |
|---|---|---|
| Landing page conversion rate | >5% | Review landing page — the problem is likely there, not the ad |
| Cost per signup | <$60 | Pause ad sets with CPL >$90 after $100 spend |
| CTR (link) | >1.0% | Swap creative — try a different hook or image |
| CPM | <$30 | If CPM is high, test broader audiences or Advantage+ |

**Phase 2 trigger:** If either ICP hits >5% conversion AND <$60 CPL with at least 10 signups, move to Phase 2 prepayment validation for that ICP.

---

## Pre-Launch Checklist

- [ ] Meta Pixel installed on landing page and firing `Lead` event on waitlist form submission
- [ ] Conversions API (CAPI) configured if possible — server-side tracking improves signal quality for Andromeda's learning phase; deduplicated events are higher quality than browser-only pixel data
- [ ] UTM parameters on all ad URLs: `?utm_source=facebook&utm_medium=paid&utm_campaign=phase1-[icp]&utm_content=[ad-variant]`
- [ ] Separate landing page variants per ICP (or at minimum, confirm the existing page works for both audiences)
- [ ] Business Manager account with ad account, pixel, and page connected
- [ ] Campaign Budget Optimization (CBO) enabled at campaign level
- [ ] Advantage+ Audience enabled on the ad set (not "Original Audience" / manual targeting)
- [ ] All 4 creatives loaded into the single ad set before launch — do not add creatives after the campaign is live if avoidable (resets learning)
- [ ] Ad images sized: 1080×1080 (Feed) and 1080×1920 (Reels/vertical for Ad D video)
- [ ] Confirm ad copy clears Facebook's 20% text rule (check image text ratio in Ads Manager before publishing)
- [ ] Retargeting audience created: anyone who visited the landing page but did not convert (for future use — separate retargeting campaign, not this one)
