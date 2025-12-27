import type { MDXComponents } from 'mdx/types';

// File based routing.
// const components: MDXComponents = {};

// export function useMDXComponents(): MDXComponents {
//   return components;
// }

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
