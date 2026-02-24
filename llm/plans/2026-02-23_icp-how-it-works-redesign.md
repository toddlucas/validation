# ICP "How It Works" Redesign

**Date:** 2026-02-23  
**Status:** Completed

## Goal

Replace the generic three-panel placeholder with a section that tells the product's real story: you give an instruction → the AI reads your SharePoint documents → live tracked changes appear → you approve each one.

---

## New Subtitle (all 6 ICP pages, frontmatter)

Replace the generic `subtitle:` in each MDX frontmatter with this line, adapted per ICP:

> *"Tell it what you need. It reads your documents, drafts the content, and shows you every change to approve."*

Per-ICP adaptations:

- Gov contractors: *"Tell it what to update. It reads across your RFP documents in SharePoint, makes the changes as tracked revisions, and shows you every edit to approve."*
- Grant writers: *"Tell it what to draft. It reads your research and past grants, synthesizes the content, and shows you every change to approve."*
- Consulting: *"Tell it which proposals to draw from. It reads your SharePoint documents, synthesizes the best content, and shows you every change to approve."*
- Academic researchers: *"Tell it what to check or draft. It reads across your dissertation chapters and research papers, synthesizes the content, and shows you every change to approve."*
- Franchise operators: *"Tell it what to update. It reads your SOP documents across all locations in SharePoint or OneDrive, makes the changes, and shows you every edit to approve."*
- Legal firms: *"Tell it what to coordinate. It reads across your filings and exhibits in SharePoint, makes the changes as tracked revisions, and shows you every edit to approve."*

---

## New "How It Works" Section Structure (all 6 files)

Replaces everything from `## How It Works` to the closing `---` separator.

### 1. Screenshot + caption (`sorcery-ready.png`)

```
<img src="/images/sorcery-ready.png" ... />
Caption: "Start with a request in plain language — no templates, no structured forms."
```

### 2. Bridging copy block — what the AI does while you wait

Core copy (same across all pages):

> While the AI works, it navigates your SharePoint or OneDrive, opens the Word documents it needs, and reads across your project to understand context, terminology, and what needs to change. You can see every file it opens before it touches anything.
>
> Point it at existing documents and it edits them. Point it at source material and it synthesizes something new. Either way, it's working with your actual `.docx` files.

**ICP-specific example instruction** (blockquote at top of section, one per page):

- Gov contractors: *"Ensure the capability description on page 3 of the technical approach matches the past performance section."*
- Grant writers: *"Draft a 2-page program narrative for this funder based on our last three successful applications."*
- Consulting: *"Update the executive summary to reflect the revised ROI figures in the detailed findings report."*
- Academic researchers: *"Check that the methodology in chapter 3 is consistent with chapters 1 and 5."*
- Franchise operators: *"Update the opening checklist in all 12 location manuals to reflect the new supplier requirements."*
- Legal firms: *"Find every reference to Exhibit 7 across all filings and confirm they match the current version."*

### 3. Screenshot + caption (`sorcery-edit.png`)

```
<img src="/images/sorcery-edit.png" ... />
Caption: "Changes stream in as live tracked revisions. Step through each one and approve what you want."
```

### 4. Review bullet points

- Step through changes one at a time with Prev / Next
- Accept or reject individually — or accept all at once
- Nothing is permanent until you've approved it

### 5. Callout block — SharePoint/Word fidelity

> **Your files stay in SharePoint. In Word format. Always.**  
> Sorcery connects to your existing SharePoint or OneDrive. Your `.docx` files don't move, convert, or get locked into a new system. Every change is written back as tracked revisions — fully compatible with your existing review process, version history, and co-authoring workflow.

*(Last sentence tailored per ICP: proposals workflow, advisor sharing, matter management, etc.)*

---

## Implementation Notes

### `Callout` component

Added to `mdx-components.tsx` as a named export and registered in `useMDXComponents`. Imported in `app/[icp]/page.tsx` and passed to `MDXRemote` via the `components` prop. Renders a `not-prose` styled box compatible with light and dark mode.

### Files changed

- `validation/src/site/mdx-components.tsx` — added `Callout` component
- `validation/src/site/app/[icp]/page.tsx` — pass `Callout` to `MDXRemote`
- `validation/src/site/content/icp/government-contractors.mdx`
- `validation/src/site/content/icp/grant-writers.mdx`
- `validation/src/site/content/icp/consulting-firms.mdx`
- `validation/src/site/content/icp/academic-researchers.mdx`
- `validation/src/site/content/icp/franchise-operators.mdx`
- `validation/src/site/content/icp/legal-firms.mdx`
