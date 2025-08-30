export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO
};

export const posts: Post[] = [
  {
    slug: "hello-next",
    title: "Hello Next.js",
    excerpt: "Why Next.js shines for production-grade React apps.",
    content:
      "Next.js provides file-based routing, API routes, Image optimization, and first-class support for SSR/SSG. This demo shows a minimal setup with dynamic routes and an API endpoint.",
    date: "2025-08-30"
  },
  {
    slug: "ssg-vs-ssr",
    title: "SSG vs SSR in a Nutshell",
    excerpt: "When to pre-render at build time vs on each request.",
    content:
      "Use SSG for content that doesn’t change per request (faster, cacheable). Use SSR when data must be fresh or personalized. Incremental Static Regeneration (ISR) gives you the best of both.",
    date: "2025-08-30"
  },
  {
    slug: "api-routes",
    title: "API Routes are Built In",
    excerpt: "No separate server needed for simple endpoints.",
    content:
      "Next.js API Routes let you colocate serverless functions with your UI. Great for small utilities like contact forms, webhooks, or this demo’s random-quote endpoint.",
    date: "2025-08-30"
  }
];

export function getAllPosts() {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find(p => p.slug === slug);
}

export function getAllSlugs() {
  return posts.map(p => p.slug);
}