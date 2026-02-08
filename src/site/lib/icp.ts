import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'icp');

export interface ICPLandingPage {
  slug: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  painPoints: string[];
  ctaText: string;
  ctaUrl: string;
  content: string;
}

export function getAllICPs(): ICPLandingPage[] {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const icps = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        subtitle: data.subtitle || '',
        heroImage: data.heroImage,
        painPoints: data.painPoints || [],
        ctaText: data.ctaText || 'Join Waitlist',
        ctaUrl: data.ctaUrl || '#waitlist',
        content,
      };
    });

  return icps;
}

export function getICPBySlug(slug: string): ICPLandingPage | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      subtitle: data.subtitle || '',
      heroImage: data.heroImage,
      painPoints: data.painPoints || [],
      ctaText: data.ctaText || 'Join Waitlist',
      ctaUrl: data.ctaUrl || '#waitlist',
      content,
    };
  } catch {
    return null;
  }
}

export function getValidICPSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
