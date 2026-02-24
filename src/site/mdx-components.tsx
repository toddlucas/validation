import type { MDXComponents } from 'mdx/types';
import React from 'react';

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-8 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 p-6 text-base leading-relaxed">
      {children}
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
  };
}
