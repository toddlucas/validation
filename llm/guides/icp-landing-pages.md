# ICP Landing Pages Setup

> **Status**: ✅ Implemented - Dynamic ICP landing pages ready

## Overview

ICP-specific landing pages are now set up using Next.js dynamic routes with MDX content files. You can publish new landing pages by simply adding an `.mdx` file—no code changes needed.

## Architecture

### File Structure

```
validation/src/site/
├── app/
│   ├── page.tsx                # Homepage
│   ├── blog/[slug]/page.tsx    # Blog posts
│   └── [icp]/
│       └── page.tsx            # ICP landing pages (NEW)
├── content/
│   ├── blog/                   # Blog content
│   └── icp/                    # ICP landing pages (NEW)
│       ├── README.md
│       ├── real-estate-investors.mdx
│       └── ecommerce-brands.mdx
└── lib/
    ├── blog.ts
    └── icp.ts                  # ICP utilities (NEW)
```

### How It Works

1. **Content Files**: Landing pages are written in MDX format (Markdown with React components)
2. **Dynamic Routing**: The `[icp]` route automatically creates pages for each `.mdx` file
3. **Static Generation**: All landing pages are pre-rendered at build time for optimal performance
4. **Frontmatter**: Page metadata is stored in YAML frontmatter at the top of each file

### Route Priority

Next.js matches routes in this order:
1. **Static routes** (e.g., `/about`, `/pricing`) - Highest priority
2. **Dynamic routes** (e.g., `/blog/[slug]`, `/[icp]`) - Lower priority

This means:
- `/about` → Will match `app/about/page.tsx` (if it exists)
- `/blog/welcome` → Will match `app/blog/[slug]/page.tsx`
- `/real-estate-investors` → Will match `app/[icp]/page.tsx`

**No conflicts!** Static pages always take precedence over dynamic routes.

## Publishing a New ICP Landing Page

1. Create a new file: `content/icp/your-icp-slug.mdx`
2. Add frontmatter:

```mdx
---
title: "Corporate Document Management for [Your ICP]"
subtitle: "One-line value proposition for this specific audience"
painPoints:
  - "Pain point 1 they'll recognize"
  - "Pain point 2 that resonates"
  - "Pain point 3 they've experienced"
  - "Pain point 4 (optional)"
  - "Pain point 5 (optional)"
ctaText: "Join the Waitlist"
ctaUrl: "#waitlist"
heroImage: "/images/hero-your-icp.jpg" # Optional
---

## Your Content Here

Write your landing page content in Markdown...

### How It Works

1. Step one
2. Step two
3. Step three

### What You Get

- Feature 1
- Feature 2
- Feature 3
```

3. Build and deploy:

```bash
npm run build
```

The page will automatically appear at `/your-icp-slug`

## Landing Page Structure

Each ICP landing page includes:

### 1. Hero Section
- **Title**: Main headline from frontmatter
- **Subtitle**: Supporting text
- **Primary CTA**: Button linking to waitlist/signup

### 2. Pain Points Card
- Displays 3-5 pain points from frontmatter
- Checkmark icons for visual appeal
- "Sound familiar?" heading

### 3. Content Section
- Full MDX content from the file
- Supports all Markdown features
- Can include React components
- Styled with Tailwind Typography

### 4. Bottom CTA
- Secondary call-to-action
- "Ready to get organized?" heading
- Reinforces the waitlist signup

## Example Landing Pages

Two sample pages are included:

### 1. Real Estate Investors (`/real-estate-investors`)
- Target: Small portfolio investors (2-5 properties)
- Pain points: Entity confusion, document tracking, compliance
- Price point: $49-99/month

### 2. E-commerce Brands (`/ecommerce-brands`)
- Target: Multi-brand operators (2-5 brands)
- Pain points: IP documentation, supplier contracts, exit readiness
- Price point: $99-199/month

## Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Main headline (H1) |
| `subtitle` | string | Yes | Supporting text below title |
| `painPoints` | array | No | List of 3-5 pain points |
| `ctaText` | string | No | Button text (default: "Join Waitlist") |
| `ctaUrl` | string | No | Button link (default: "#waitlist") |
| `heroImage` | string | No | Path to hero image |

## URL Segments for Phase 1 ICPs

Based on the validation plan, here are the recommended URLs:

### Phase 1 Priority (Start Here)
- `/real-estate-investors` ✅ Created
- `/ecommerce-brands` ✅ Created
- `/franchise-operators` (to create)
- `/family-business` (to create)
- `/saas-startups` (to create)

### Phase 2 Expansion
- `/real-estate-portfolio`
- `/commercial-real-estate`
- `/amazon-fba`
- `/shopify-brands`
- `/retail-franchise`
- `/multi-location`
- `/fractional-cfo`
- `/corporate-secretary`
- `/fintech-startup`
- `/healthtech-startup`
- `/ai-startup`
- `/healthcare-practice`
- `/cannabis-business`
- `/financial-services`
- `/preparing-exit`
- `/due-diligence-ready`

## Technologies Used

- **Next.js 16**: App Router with dynamic routes
- **MDX**: Markdown with React components
- **gray-matter**: Frontmatter parsing
- **next-mdx-remote**: Server-side MDX rendering
- **@tailwindcss/typography**: Beautiful prose styling
- **shadcn/ui**: Button, Card, and other UI components

## Key Features

✅ **File-based publishing** - Add a file, get a landing page  
✅ **Static generation** - Fast, SEO-friendly pages  
✅ **Automatic routing** - No route configuration needed  
✅ **ICP-specific content** - Customized messaging per audience  
✅ **Pain point highlighting** - Structured display of customer problems  
✅ **Dual CTAs** - Top and bottom conversion opportunities  
✅ **Type-safe** - Full TypeScript support  

## Development

```bash
# Run dev server
npm run dev

# Visit a landing page
# http://localhost:3000/real-estate-investors
# http://localhost:3000/ecommerce-brands

# Build for production
npm run build

# Start production server
npm start
```

## Next Steps

1. **Create remaining Phase 1 landing pages**:
   - `franchise-operators.mdx`
   - `family-business.mdx`
   - `saas-startups.mdx`

2. **Add waitlist functionality**:
   - Create waitlist signup form/component
   - Integrate with email service (Mailchimp/ConvertKit)
   - Set up Stripe for $5 prepayments
   - Add referral link generation

3. **Customize design**:
   - Add hero images for each ICP
   - Customize colors/styling per ICP if needed
   - Add social proof (waitlist numbers)
   - Add testimonials section

4. **Set up tracking**:
   - Google Analytics
   - Meta Pixel
   - UTM parameters for ad campaigns
   - Conversion tracking for signups/prepayments

5. **Launch Meta ads**:
   - Create ad campaigns per ICP
   - Link to specific landing pages
   - Track cost per lead and prepayment conversion

## Content Guidelines

When creating new ICP landing pages:

1. **Use their language**: Match the terminology your ICP uses
2. **Lead with pain**: Start with problems they recognize
3. **Be specific**: Avoid generic benefits, focus on their use case
4. **Show the path**: Clear explanation of how it works
5. **Include social proof**: Waitlist numbers, testimonials, etc.
6. **Strong CTA**: Make it obvious what to do next
7. **Address objections**: FAQ section for common concerns

## Comparison: Blog vs ICP Landing Pages

| Feature | Blog Posts | ICP Landing Pages |
|---------|-----------|-------------------|
| URL Pattern | `/blog/[slug]` | `/[icp]` |
| Content Location | `content/blog/` | `content/icp/` |
| Purpose | Education, updates | Conversion, validation |
| Structure | Article format | Sales page format |
| CTAs | Soft (newsletter) | Hard (waitlist/prepay) |
| Audience | General | Specific ICP |

---

**Implemented**: February 7, 2026  
**Status**: Ready for content creation  
**Next**: Create 3 more Phase 1 landing pages
