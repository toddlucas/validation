# Blog Posts

This directory contains all blog post content for the website.

## Creating a New Post

1. Create a new `.mdx` file in this directory (e.g., `my-post-title.mdx`)
2. Add frontmatter at the top with required fields
3. Write your content using Markdown/MDX

## Frontmatter Format

```mdx
---
title: "Your Post Title"
date: "2026-01-12"
excerpt: "A brief summary of your post (shown on the blog listing page)"
category: "Category Name"
author: "Author Name" (optional)
---

# Your content here...
```

## Required Fields

- **title**: The post title (shown as H1 and in metadata)
- **date**: Publication date in YYYY-MM-DD format (used for sorting)
- **excerpt**: Brief description (1-2 sentences)
- **category**: Post category (e.g., "Announcement", "Tutorial", "Company")

## Optional Fields

- **author**: Post author name

## File Naming

- Use lowercase with hyphens: `my-awesome-post.mdx`
- The filename becomes the URL slug: `/blog/my-awesome-post`
- Keep it concise but descriptive

## Content Guidelines

- Use standard Markdown syntax
- Add `#` for headings (H1 is reserved for the title)
- Code blocks with syntax highlighting are supported
- Keep posts focused and scannable
- The most recent post will be featured on the blog listing page
