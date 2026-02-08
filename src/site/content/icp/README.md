# ICP Landing Pages

This directory contains MDX files for ICP-specific landing pages.

## File Naming

Each file should be named with the URL slug you want to use:
- `real-estate-investors.mdx` → `/real-estate-investors`
- `ecommerce-brands.mdx` → `/ecommerce-brands`
- `franchise-operators.mdx` → `/franchise-operators`

## Frontmatter Structure

```yaml
---
title: "Main headline for the page"
subtitle: "Subheadline that appears below the title"
painPoints:
  - "Pain point 1"
  - "Pain point 2"
  - "Pain point 3"
ctaText: "Join the Waitlist"
ctaUrl: "#waitlist"
heroImage: "/images/hero-real-estate.jpg" # Optional
---
```

## Content Guidelines

1. **Keep it focused**: Each page should speak directly to one ICP
2. **Use their language**: Match the terminology they use
3. **Highlight pain points**: Lead with problems they recognize
4. **Show the solution**: Explain how Prise solves their specific problems
5. **Include social proof**: Mention waitlist numbers or testimonials
6. **Clear CTA**: Make it obvious how to sign up

## Publishing

To add a new ICP landing page:
1. Create a new `.mdx` file in this directory
2. Add the frontmatter with title, subtitle, pain points, and CTA
3. Write the content in Markdown
4. Build and deploy—the page will automatically be available at `/{filename}`

No code changes needed!
