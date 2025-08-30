import { getAllSlugs, getPostBySlug } from "../../../lib/posts"; // relative import
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  return (
    <article className="card">
      <h1>{post.title}</h1>
      <p><small>{new Date(post.date).toLocaleString()}</small></p>
      <p>{post.content}</p>
    </article>
  );
}
