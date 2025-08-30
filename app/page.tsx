import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div>
      <h1>Mini Blog</h1>
      <p>Static site generation with dynamic routes. Click a post to view.</p>
      <div className="list">
        {posts.map(p => (
          <article key={p.slug} className="card">
            <h3><Link href={`/posts/${p.slug}`}>{p.title}</Link></h3>
            <p>{p.excerpt}</p>
            <small>{new Date(p.date).toLocaleDateString()}</small>
          </article>
        ))}
      </div>
    </div>
  );
}