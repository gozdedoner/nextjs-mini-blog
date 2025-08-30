import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Mini Blog</Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/quote">API Demo</Link>
        <a href="https://github.com/gozdedoner" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
  );
}