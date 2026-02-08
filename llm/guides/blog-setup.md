# Blog Setup Guide

> **Status**: ✅ Implemented - Blog with dynamic routing ready

## Overview

The blog is set up using Next.js dynamic routes with MDX content files. This allows you to publish new blog posts by simply adding an `.mdx` file—no code changes needed.

## Architecture

### File Structure

```
website/src/site/
├── app/
│   └── blog/
│       ├── page.tsx              # Blog listing page
│       └── [slug]/
│           └── page.tsx          # Dynamic post renderer
├── content/
│   └── blog/
│       ├── README.md             # Content guidelines
│       └── example-post.mdx
└── lib/
    └── blog.ts                   # Blog utilities
```

### How It Works

1. **Content Files**: Blog posts are written in MDX format (Markdown with React components)
2. **Dynamic Routing**: The `[slug]` route automatically creates pages for each `.mdx` file
3. **Static Generation**: All blog pages are pre-rendered at build time for optimal performance
4. **Frontmatter**: Post metadata is stored in YAML frontmatter at the top of each file

## Publishing a New Post

1. Create a new file: `content/blog/your-post-slug.mdx`
2. Add frontmatter:

```mdx
---
title: "Your Post Title"
date: "2026-01-15"
excerpt: "Brief description for the listing page"
category: "Tutorial"
author: "Your Name"
---

# Your Post Title

Your content here...
```

3. Build and deploy:

```bash
npm run build
```

The post will automatically appear at `/blog/your-post-slug`

## Blog Listing Page

The blog listing page (`/blog`) features:
- **Featured Post**: Most recent post shown larger with primary badge
- **Post List**: Older posts shown below in chronological order
- **Hover States**: Smooth transitions when hovering over posts
- **Metadata**: Date and category badges for each post

## Blog Post Page

Individual blog posts include:
- **Header**: Title, category badge, date, and author
- **Typography**: Tailwind Typography plugin for beautiful content formatting
- **MDX Support**: Can include React components within Markdown
- **SEO**: Automatic metadata generation from frontmatter

## Technologies Used

- **Next.js 16**: App Router with dynamic routes
- **MDX**: Markdown with React components
- **gray-matter**: Frontmatter parsing
- **next-mdx-remote**: Server-side MDX rendering
- **@tailwindcss/typography**: Beautiful prose styling

## Key Features

✅ **File-based publishing** - Add a file, get a blog post  
✅ **Static generation** - Fast, SEO-friendly pages  
✅ **Automatic routing** - No route configuration needed  
✅ **Featured posts** - Most recent post highlighted  
✅ **Clean design** - Minimal, focused layout  
✅ **Type-safe** - Full TypeScript support  

## Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000/blog to see the blog.

## Example Posts

Two sample posts are included:
- `welcome-to-company-name.mdx` - Product announcement
- `building-in-public.mdx` - Company story

These can be edited or deleted as needed.

## Next Steps

- Add more blog posts to `content/blog/`
- Customize the prose styling in `globals.css`
- Add author pages if needed
- Add tags/categories for filtering
- Add RSS feed
- Add social sharing buttons

---

*Implemented: 2026-01-13*
